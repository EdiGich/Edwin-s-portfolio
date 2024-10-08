import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

//components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-1">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h2 mb-2">
              Hello, I am <br />
              <span className="text-accent">Edwin Gichira</span>
            </h1>
            <p className="max-w-[500px] mb-5 text-white/80">
              I am proficient in various programming languages and technologes.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
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
      <Stats />
    </section>
  );
};
export default Home;
