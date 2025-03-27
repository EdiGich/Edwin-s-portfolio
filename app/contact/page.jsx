"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254)751 478159",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "edwingichira801@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Mvita, Mombasa",
  },
];

const Contact = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [finalSubject, setFinalSubject] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubjectChange = (reason) => {
    setSelectedReason(reason);
    if (reason === "custom") {
      setFinalSubject(customReason);
    } else {
      setFinalSubject(customReason);
    }
  };

  useEffect(() => {
    setFinalSubject(
      selectedReason === "custom" ? customReason : selectedReason
    );
  }, [selectedReason, customReason]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z ]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\+?[0-9]*$/.test(value)) {
      setPhone(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const subject = selectedReason === "custom" ? customReason : selectedReason;
    const formData = { name, email, phone, message, subject: finalSubject };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setSelectedReason("");
        setCustomReason("");
        setMessage("");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#3a3a3b] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                "I'm excited to hear from you and work together to create
                something amazing."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-[#525b5c] text-gray-800"
                  value={name}
                  onChange={handleNameChange}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full p-3 border ${
                    emailError ? "border-red-500" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 bg-[#525b5c] text-gray-800`}
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <Input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-[#525b5c] text-gray-800"
                value={phone}
                onChange={handlePhoneChange}
              />
              <div className="p-4 bg-[#525b5c] rounded-lg">
                <label className="text-white/80 mb-2 block">
                  Select or define Subject
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Web Development", "Flutter App Development"].map(
                    (service) => (
                      <button
                        key={service}
                        className={`px-4 py-2 rounded-lg border border-gray-500 bg-transparent text-white/80 hover:bg-gray-600 transition-all ${
                          selectedReason === service ? "underline" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubjectChange(service);
                          setCustomReason("");
                        }}
                      >
                        {service}
                      </button>
                    )
                  )}
                  <button
                    className={`px-4 py-2 rounded-lg border border-gray-500 bg-transparent text-white/80 flex items-center gap-2 hover:bg-gray-600 transition-all ${
                      selectedReason === "custom" ? "underline" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubjectChange("custom");
                    }}
                  >
                    Other <FaChevronDown className="text-sm" />
                  </button>
                </div>
                {selectedReason === "custom" && (
                  <input
                    type="text"
                    placeholder="Enter your subject..."
                    className="w-full mt-3 p-3 border border-gray-400 rounded-lg bg-[#dbeff1] text-gray-700 focus:ring-2 focus:ring-blue-500"
                    value={customReason}
                    onChange={(e) => {
                      setCustomReason(e.target.value);
                      setFinalSubject(e.target.value); //Updates the final sebject in real time
                    }}
                  />
                )}
              </div>
              <Textarea
                className="h-[200px] bg-[#525b5c] text-gray-800 border-gray-700 focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {" "}
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* info*/}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
