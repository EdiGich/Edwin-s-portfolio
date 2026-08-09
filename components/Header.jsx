import Link from 'next/link';
import { Button } from './ui/button';

//components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-8 xl:pt-4 xl:pb-0 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/" aria-label="Edwin Gichira — Home">
          <p className="text-4xl font-semibold">
            Edwin<span className="text-accent">.</span>
          </p>
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button asChild>
            <Link href="/contact">Hire me</Link>
          </Button>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
