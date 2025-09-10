import tryoutsLogo from "../assets/tryouts_logo.png";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src={tryoutsLogo}
            alt="Pro Soccer Tryouts"
            className="h-10 w-auto filter drop-shadow-lg"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("pro-soccer-tryouts")}
            className="text-gray-300 hover:text-white transition"
          >
            Tryouts
          </button>
          <button
            onClick={() => scrollToSection("our-departments")}
            className="text-gray-300 hover:text-white transition"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection("our-team")}
            className="text-gray-300 hover:text-white transition"
          >
            Our Team
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-300 hover:text-white transition"
          >
            Pricing
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("application-form")}
            className="text-gray-300 hover:text-white transition"
          >
            Apply
          </button>
          <button
            onClick={() => scrollToSection("pro-soccer-tryouts")}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
