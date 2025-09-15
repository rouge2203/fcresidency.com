const tryoutsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fcpro_logo.webp";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-white/15 backdrop-blur-md border-b border-white/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src={tryoutsLogo}
            alt="Pro Soccer Tryouts"
            className="sm:h-10 h-8 w-auto filter drop-shadow-lg"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8 z-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("pro-soccer-tryouts")}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Tryouts
          </button>
          <button
            onClick={() => scrollToSection("our-departments")}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection("our-team")}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Our Team
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-200 hover:text-white hover:cursor-pointer transition"
          >
            Pricing
          </button>
        </div>

        <div className="flex items-center space-x-4 z-10">
          <button
            onClick={() => scrollToSection("application-form")}
            className="text-gray-100 hover:text-white hover:cursor-pointer transition"
          >
            Apply
          </button>
          <button
            onClick={() => scrollToSection("pro-soccer-tryouts")}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition hover:cursor-pointer "
          >
            Learn More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
