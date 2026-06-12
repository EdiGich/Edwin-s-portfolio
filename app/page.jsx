import { Button } from '@/components/ui/button';
import Link from 'next/link';

//components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Frameworks from '@/components/Frameworks';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full">
        <div className="flex flex-col xl:flex-row items-center my-8 justify-between xl:pt-0 xl:pb-1">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h2 mb-2">
              Building AI-powered <br />digital solutions
            </h1>
            <h2 className="text-accent text-3xl xl:text-4xl font-semibold mb-4">
              Edwin Gichira
            </h2>
            <p className="max-w-[500px] mb-5 text-white/80">
              I specialize in bridging the gap between innovative technology and business efficiency, crafting high-performance web and mobile solutions tailored for growth.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="/work">View My Work</Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-black hover:text-green-400 hover:border-green-400 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-2 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Frameworks />
      </div>
      <Stats />
    </section>
  );
};
export default Home;
