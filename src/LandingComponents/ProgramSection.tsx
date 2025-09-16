const teamImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/hector_epico.JPG";
const divisionsImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/entrenamiento_abrazo.JPG";
const futbolConsultantsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/futbol_consultants_logo.png";

const fcproLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fcpro_dark.webp";

const ProgramSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <img
                src={fcproLogo}
                alt="FC Professional"
                className="h-20 mx-auto filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get to Know Our Program
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We are professional soccer agents looking for young talents to come
            for a couple of weeks to Costa Rica and tryout in our base
            professional team Futbol Consultants. From there, depending on their
            skills, we try to position you in a professional environment.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Large Professional Team Card */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
              {/* Full Background Image */}
              <img
                src={teamImg}
                alt="Our Professional Team"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/70"></div>

              {/* Logo in Top Right Corner */}
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>
                  <div className="relative bg-white/30 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 hover:bg-white/40 transition-all duration-300">
                    <img
                      src={futbolConsultantsLogo}
                      alt="FC Professional"
                      className="h-10 w-auto filter drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Tags in Top Left */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <span className="bg-white/20 backdrop-blur-xl border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full w-fit">
                  PROFESSIONAL
                </span>
                <span className="bg-black/30 backdrop-blur-xl border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full w-fit">
                  Elite Training
                </span>
              </div>

              {/* Main Content in Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                    Our Professional Team
                  </h3>
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-4 drop-shadow">
                    Train alongside experienced professionals who have competed
                    at the highest levels. Our dedicated coaching staff provides
                    personalized guidance and mentorship throughout your
                    journey.
                  </p>
                  <button
                    className="bg-white/90 backdrop-blur-xl text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-white transition-all duration-300 text-sm group-hover:scale-105 shadow-lg"
                    onClick={() => {
                      const element = document.getElementById("championship");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divisions Cards - Stacked on the Right */}
          <div className="lg:col-span-5 space-y-6">
            {/* Our Divisions Card */}
            <div className="relative group">
              <div className="relative h-[400px] lg:h-[290px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
                {/* Full Background Image */}
                <img
                  src={divisionsImg}
                  alt="Our Divisions"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/80"></div>

                {/* Logo in Top Left Corner */}
                <div className="absolute top-4 left-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-xl"></div>
                    <div className="relative bg-white/30 backdrop-blur-2xl border border-white/20 rounded-xl p-3 hover:bg-white/40 transition-all duration-300">
                      <img
                        src={futbolConsultantsLogo}
                        alt="FC Divisions"
                        className="h-6 w-auto filter drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Badge in Top Right */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-xl text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                    All Ages
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                      Our Divisions
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md">
                        College
                      </span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md">
                        Professional
                      </span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md">
                        FC Residency
                      </span>
                    </div>
                    <p className="text-white/90 text-xs leading-relaxed mb-3 drop-shadow">
                      Comprehensive pathways for every level of player
                      development.
                    </p>
                    <button
                      className="bg-white/90 backdrop-blur-xl text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-white transition-all duration-300 text-xs group-hover:scale-105 shadow-lg"
                      onClick={() => {
                        const element =
                          document.getElementById("pro-soccer-tryouts");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Explore Paths →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Program Info Card */}
            <div className="relative group">
              <div className="relative h-[300px] lg:h-[290px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                </div>

                {/* Logo in Top Right */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-xl"></div>
                    <div className="relative bg-white/20 backdrop-blur-2xl border border-white/20 rounded-xl p-3 hover:bg-white/30 transition-all duration-300">
                      <img
                        src={futbolConsultantsLogo}
                        alt="FC Program"
                        className="h-8 w-auto filter drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-center">
                  <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="mb-4">
                      <span className="bg-blue-500/20 backdrop-blur text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full">
                        Global Network
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                      🇨Costa Rica Base
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 drop-shadow">
                      Strategic location in Costa Rica provides the perfect
                      environment for talent development with access to
                      professional leagues and international opportunities.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-white/70">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span>20+ Years Experience</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>Global Connections</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
