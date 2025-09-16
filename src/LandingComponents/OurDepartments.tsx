import { Element } from "react-scroll";

const academyLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fc_academy.png";
const tryoutsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fcpro_dark.webp";
const collegeLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fc_college.png";
const consultantsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/consultants_logo.png";
const professionalLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fc_professional_logo.png";

const kidsImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/kids.JPG";
const geraImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/gera.jpg";
const alejandroImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/alejandro_gutierrez.jpg";
const alpizarImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/alpizar.JPG";
const jimmyImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/jimmy_marin.jpg";

const OurDepartments = () => {
  return (
    <Element name="our-departments" className="element">
      <div
        id="our-departments"
        className="bg-gradient-to-r from-blue-900 via-slate-900 to-black py-20 relative overflow-hidden min-h-screen flex items-center"
      >
        {/* GradientBlinds Background */}
        {/* <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/15 to-transparent opacity-40"></div>
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
      </div> */}

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Departments
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your journey starts here. Choose your path from our specialized
              programs designed to develop talent at every level, from youth
              academy to professional leagues.
            </p>
          </div>

          {/* Bento Grid Container */}
          <div className="space-y-8">
            {/* Starting Points - Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
              {/* Large Academy Card */}
              <div className="lg:col-span-8 relative group">
                <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
                  {/* Full Background Image */}
                  <img
                    src={kidsImg}
                    alt="Academy Program"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/70"></div>

                  {/* Logo in Top Left Corner */}
                  <div className="absolute top-6 left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>
                      <div className="relative bg-white/30 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 hover:bg-white/40 transition-all duration-300">
                        <img
                          src={academyLogo}
                          alt="FC Academy"
                          className="h-12 w-auto filter drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Starting Point Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 text-blue-300 text-xs font-bold px-4 py-2 rounded-full">
                      STARTING POINT
                    </span>
                  </div>

                  {/* Main Content in Bottom */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                        Academy
                      </h3>
                      <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-4 drop-shadow">
                        Youth Development · Ages 6-18 · Foundation building with
                        professional coaching staff focused on technical skills,
                        tactical understanding, and character development.
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-white/70">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span>Youth Focus</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          <span>Technical Skills</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span>Character Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tryouts Card */}
              <div className="lg:col-span-4 relative group">
                <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
                  {/* Full Background Image */}
                  <img
                    src={geraImg}
                    alt="Tryouts Program"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/80"></div>

                  {/* Logo in Top Center */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-xl"></div>
                      <div className="relative bg-white/30 backdrop-blur-2xl border border-white/20 rounded-xl p-3 hover:bg-white/40 transition-all duration-300">
                        <img
                          src={tryoutsLogo}
                          alt="Tryouts"
                          className="h-8 w-auto filter drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                      <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                        Tryouts
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-4 drop-shadow">
                        Talent Assessment program where players showcase their
                        skills in professional environments.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-white/70">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                          <span>Performance Evaluation</span>
                        </div>
                        <div className="flex items-center text-xs text-white/70">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                          <span>Professional Environment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Flow Indicator */}
            <div className="text-center py-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
              <p className="text-white/80 text-sm font-medium bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 inline-block">
                Choose Your Destination
              </p>
            </div>

            {/* Destination Divisions - Bento Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
              {/* College Card */}
              <div className="lg:col-span-4 relative group">
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
                  {/* Full Background Image */}
                  <img
                    src={alejandroImg}
                    alt="College Program"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/80"></div>

                  {/* Logo in Top Right */}
                  <div className="absolute top-4 right-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-xl"></div>
                      <div className="relative bg-white/30 backdrop-blur-2xl border border-white/20 rounded-xl p-3 hover:bg-white/40 transition-all duration-300">
                        <img
                          src={collegeLogo}
                          alt="FC College"
                          className="h-8 w-auto filter drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                        College
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-3 drop-shadow">
                        University Placement program connecting talented players
                        with college opportunities.
                      </p>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md">
                        University Path
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Card - Large */}
              <div className="lg:col-span-5 relative group">
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
                  {/* Full Background Image */}
                  <img
                    src={jimmyImg}
                    alt="Professional Program"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/70"></div>

                  {/* Logo in Top Left */}
                  <div className="absolute top-6 left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl"></div>
                      <div className="relative bg-white/30 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 hover:bg-white/40 transition-all duration-300">
                        <img
                          src={professionalLogo}
                          alt="FC Professional"
                          className="h-10 w-auto filter drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Elite Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-400/30 text-yellow-300 text-xs font-bold px-4 py-2 rounded-full">
                      ELITE LEAGUES
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                        Professional
                      </h3>
                      <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-4 drop-shadow">
                        Elite pathway to professional leagues worldwide. Direct
                        access to first and second division teams.
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-white/70">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span>Elite Level</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span>Global Opportunities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FC Desamparados Card */}
              <div className="lg:col-span-3 relative group">
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-700">
                  {/* Full Background Image */}
                  <img
                    src={alpizarImg}
                    alt="FC Desamparados"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/80"></div>

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 text-center">
                      {/* Team Logo above title */}
                      <div className="mb-4">
                        <div className="relative inline-block">
                          <div className="absolute inset-0  rounded-xl"></div>
                          <div className="relative rounded-xl p-1 hover:bg-white/40 transition-all duration-300">
                            <img
                              src={consultantsLogo}
                              alt="FC Desamparados"
                              className="h-20 w-auto mx-auto filter drop-shadow-lg"
                            />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">
                        FC Desamparados
                      </h3>
                      <p className="text-white/90 text-xs leading-relaxed mb-3 drop-shadow">
                        Second Division team - our base professional club where
                        players develop.
                      </p>
                      <span className="bg-red-500/20 text-red-300 text-xs px-3 py-1 rounded-full">
                        Champions 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Text */}
            <div className="text-center mt-16">
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-white text-lg font-medium">
                  "Every journey begins with a single step. Start in our Academy
                  or prove yourself in Tryouts, then advance to your ideal
                  destination based on your skills and goals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default OurDepartments;
