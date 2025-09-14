const tryoutsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fcpro_logo.webp";
import GradientBlinds from "../background/GradientBlinds";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-white/25 backdrop-blur-md border-b border-white/20">
      {/* GradientBlinds Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent opacity-40"></div>
        <GradientBlinds
          gradientColors={[
            "#1e293b",
            "#334155",
            "#475569",
            "#60a5fa",
            "#3b82f6",
          ]}
          angle={60}
          noise={0.08}
          blindCount={14}
          blindMinWidth={90}
          mouseDampening={0.25}
          mirrorGradient={false}
          spotlightRadius={0.4}
          spotlightSoftness={1.8}
          spotlightOpacity={0.3}
          distortAmount={0.03}
          shineDirection="right"
          mixBlendMode="overlay"
          className="opacity-50"
        />
      </div>

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

        <div className="flex items-center space-x-4 z-10">
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
