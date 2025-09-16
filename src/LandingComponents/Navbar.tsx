import { Link } from "react-scroll";

const tryoutsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fcpro_light.webp";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-[10000] px-6 py-4 bg-white/15 backdrop-blur-md border-b border-white/20"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <button onClick={scrollToTop} className="hover:cursor-pointer">
            <img
              src={tryoutsLogo}
              alt="Pro Soccer Tryouts"
              className="sm:h-12 h-8 w-auto opacity-90 filter drop-shadow-lg"
            />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8 z-10">
          <button
            onClick={scrollToTop}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Home
          </button>
          <Link
            to="pro-soccer-tryouts"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Tryouts
          </Link>
          <Link
            to="our-departments"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Programs
          </Link>
          <Link
            to="our-team"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Our Team
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4 z-10">
          <Link
            to="application-form"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-100 hover:text-white hover:cursor-pointer transition"
          >
            Apply
          </Link>
          <Link
            to="pro-soccer-tryouts"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition hover:cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
