"use client";

import { useEffect, useRef, useCallback } from "react";
import Script from "next/script";

// ─── TouchTexture ───────────────────────────────────────────────────────────
class TouchTexture {
  constructor(THREE) {
    this.THREE = THREE;
    this.size = 64;
    this.width = this.height = this.size;
    this.maxAge = 64;
    this.radius = 0.25 * this.size;
    this.trail = [];
    this.last = null;
    this.initTexture();
  }

  initTexture() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.texture = new this.THREE.Texture(this.canvas);
  }

  update() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const pt = this.trail[i];
      const f = pt.force / this.maxAge * (1 - pt.age / this.maxAge);
      pt.x += pt.vx * f;
      pt.y += pt.vy * f;
      pt.age++;
      if (pt.age > this.maxAge) { this.trail.splice(i, 1); continue; }
      this._drawPoint(pt);
    }
    this.texture.needsUpdate = true;
  }

  addTouch(point) {
    let vx = 0, vy = 0, force = 0;
    if (this.last) {
      const dx = point.x - this.last.x;
      const dy = point.y - this.last.y;
      if (dx === 0 && dy === 0) return;
      const d = Math.sqrt(dx * dx + dy * dy);
      vx = dx / d; vy = dy / d;
      force = Math.min((dx * dx + dy * dy) * 20000, 2.0);
    }
    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }

  _drawPoint(pt) {
    const pos = { x: pt.x * this.width, y: (1 - pt.y) * this.height };
    let intensity = pt.age < this.maxAge * 0.3
      ? Math.sin((pt.age / (this.maxAge * 0.3)) * (Math.PI / 2))
      : -(1 - (pt.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) * ((1 - (pt.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) - 2);
    intensity *= pt.force;
    const r = this.radius;
    const color = `${((pt.vx + 1) / 2) * 255},${((pt.vy + 1) / 2) * 255},${intensity * 255}`;
    const offset = this.size * 5;
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = r;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, r, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

// ─── Fragment Shader ─────────────────────────────────────────────────────────
const fragmentShader = `
  precision mediump float;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform sampler2D uTouchTexture;

  // 6 gradient orb colours — portfolio palette
  uniform vec3  uColor1; // neon green
  uniform vec3  uColor2; // dark green
  uniform vec3  uColor3; // teal
  uniform vec3  uColor4; // deep emerald
  uniform vec3  uColor5; // soft lime
  uniform vec3  uColor6; // near-black teal
  uniform vec3  uBase;   // sky base
  uniform float uSpeed;
  uniform float uIntensity;
  uniform float uGrainIntensity;

  varying vec2 vUv;

  float grain(vec2 uv, float t) {
    return fract(sin(dot(uv * uResolution * 0.5 + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
  }

  vec3 getGradient(vec2 uv, float t) {
    float s = uSpeed;
    float R = 0.55; // orb influence radius

    vec2 c1  = vec2(0.5 + sin(t*s*0.40)*0.42, 0.5 + cos(t*s*0.50)*0.42);
    vec2 c2  = vec2(0.5 + cos(t*s*0.60)*0.48, 0.5 + sin(t*s*0.45)*0.48);
    vec2 c3  = vec2(0.5 + sin(t*s*0.35)*0.44, 0.5 + cos(t*s*0.55)*0.44);
    vec2 c4  = vec2(0.5 + cos(t*s*0.50)*0.38, 0.5 + sin(t*s*0.42)*0.38);
    vec2 c5  = vec2(0.5 + sin(t*s*0.68)*0.32, 0.5 + cos(t*s*0.60)*0.32);
    vec2 c6  = vec2(0.5 + cos(t*s*0.44)*0.50, 0.5 + sin(t*s*0.66)*0.50);

    float i1 = 1.0 - smoothstep(0.0, R, length(uv - c1));
    float i2 = 1.0 - smoothstep(0.0, R, length(uv - c2));
    float i3 = 1.0 - smoothstep(0.0, R, length(uv - c3));
    float i4 = 1.0 - smoothstep(0.0, R, length(uv - c4));
    float i5 = 1.0 - smoothstep(0.0, R, length(uv - c5));
    float i6 = 1.0 - smoothstep(0.0, R, length(uv - c6));

    vec3 col  = uBase;
    col += uColor1 * i1 * (0.55 + 0.45 * sin(t*s));
    col += uColor2 * i2 * (0.55 + 0.45 * cos(t*s*1.2));
    col += uColor3 * i3 * (0.55 + 0.45 * sin(t*s*0.8));
    col += uColor4 * i4 * (0.55 + 0.45 * cos(t*s*1.3));
    col += uColor5 * i5 * (0.55 + 0.45 * sin(t*s*1.1));
    col += uColor6 * i6 * (0.55 + 0.45 * cos(t*s*0.9));

    col = clamp(col, 0.0, 1.0) * uIntensity;
    // saturation boost
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(lum), col, 1.4);
    col = pow(col, vec3(0.92));

    float br = length(col);
    col = mix(uBase, col, max(br * 1.2, 0.12));
    br = length(col);
    if (br > 1.0) col *= 1.0 / br;
    return col;
  }

  void main() {
    vec2 uv = vUv;

    // Touch distortion
    vec4 touch = texture2D(uTouchTexture, uv);
    float vx = -(touch.r * 2.0 - 1.0);
    float vy = -(touch.g * 2.0 - 1.0);
    float intensity = touch.b;
    uv.x += vx * 0.6 * intensity;
    uv.y += vy * 0.6 * intensity;

    // Ripple from touch
    vec2 centre = vec2(0.5);
    float dist = length(uv - centre);
    float ripple = sin(dist * 18.0 - uTime * 3.0) * 0.035 * intensity;
    uv += vec2(ripple);

    vec3 color = getGradient(uv, uTime);

    // film grain
    color += grain(uv, uTime) * uGrainIntensity;

    // subtle hue shimmer
    float ts = uTime * 0.4;
    color.r += sin(ts)        * 0.018;
    color.g += cos(ts * 1.3)  * 0.018;
    color.b += sin(ts * 1.15) * 0.018;

    color = clamp(color, 0.0, 1.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// ─── React Component ──────────────────────────────────────────────────────────
const LiquidGradient = () => {
  const wrapperRef   = useRef(null);
  const containerRef = useRef(null);
  const cleanupRef   = useRef(null);

  const initThree = useCallback(() => {
    if (!window.THREE || !containerRef.current || !wrapperRef.current) return;
    if (cleanupRef.current) cleanupRef.current();

    const THREE     = window.THREE;
    const wrapper   = wrapperRef.current;
    const container = containerRef.current;
    const W = wrapper.clientWidth;
    const H = wrapper.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    Object.assign(renderer.domElement.style, { display: "block", width: "100%", height: "100%" });
    container.appendChild(renderer.domElement);

    // Scene / Camera (perspective, like the reference)
    const scene  = new THREE.Scene();
    scene.background = new THREE.Color(0x050e08);
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 10000);
    camera.position.z = 50;

    // View-filling plane
    const fovRad   = (camera.fov * Math.PI) / 180;
    const vh       = Math.abs(camera.position.z * Math.tan(fovRad / 2) * 2);
    const vw       = vh * (W / H);
    const geometry = new THREE.PlaneGeometry(vw, vh, 1, 1);

    // Touch texture
    const touch = new TouchTexture(THREE);

    // Material
    const uniforms = {
      uTime:         { value: 0 },
      uResolution:   { value: new THREE.Vector2(W, H) },
      uTouchTexture: { value: touch.texture },
      uSpeed:        { value: 0.9 },
      uIntensity:    { value: 1.6 },
      uGrainIntensity: { value: 0.06 },
      // Portfolio palette
      uBase:   { value: new THREE.Vector3(0.02, 0.06, 0.03) }, // near-black green
      uColor1: { value: new THREE.Vector3(0.0,  1.0,  0.6)  }, // neon green  #00ff99
      uColor2: { value: new THREE.Vector3(0.11, 0.17, 0.13) }, // dark green  #1c2c22
      uColor3: { value: new THREE.Vector3(0.0,  0.82, 0.73) }, // teal        #00d1ba
      uColor4: { value: new THREE.Vector3(0.0,  0.26, 0.22) }, // deep emerald #004238
      uColor5: { value: new THREE.Vector3(0.35, 0.95, 0.55) }, // lime        #59f38c
      uColor6: { value: new THREE.Vector3(0.0,  0.12, 0.10) }, // shadow teal
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    const clock = new THREE.Clock();
    let rafId;
    const tick = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      touch.update();
      uniforms.uTime.value += delta;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Mouse → touch texture
    const onMouseMove = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      touch.addTouch({
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height,
      });
    };

    // Resize
    const onResize = () => {
      if (!wrapperRef.current) return;
      const nW = wrapperRef.current.clientWidth;
      const nH = wrapperRef.current.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
      uniforms.uResolution.value.set(nW, nH);
    };

    window.addEventListener("resize",    onResize);
    window.addEventListener("mousemove", onMouseMove);

    cleanupRef.current = () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize",    onResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (window.THREE) initThree();
    return () => { if (cleanupRef.current) cleanupRef.current(); };
  }, [initThree]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={initThree}
      />
      {/* Full-bleed breakout */}
      <div
        ref={wrapperRef}
        className="flex-1 relative overflow-hidden"
        style={{
          marginLeft:  "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          width:       "100vw",
        }}
      >
        <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      </div>
    </>
  );
};

export default LiquidGradient;
