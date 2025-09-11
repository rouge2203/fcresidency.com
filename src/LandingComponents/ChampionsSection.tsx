const besoCopaImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/beso_copa.JPG";
const consultantsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/consultants_logo.png";
const player1 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player1.JPG";
const player2 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player2.JPG";
const player3 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player3.JPG";
const player4 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player4.JPG";
const player5 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player5.JPG";
const player6 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player6.jpg";
import LightRays from "../background/LightRays";
import Silk from "../background/Silk";

const ChampionsSection = () => {
  return (
    <div className="bg-slate-900 py-20 relative overflow-hidden">
      {/* Silk Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Silk
          speed={3}
          scale={1.2}
          color="#1e293b"
          noiseIntensity={0.8}
          rotation={0.2}
        />
      </div>

      {/* Light Rays Background */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="right"
          raysColor="#fbbf24"
          raysSpeed={1.0}
          lightSpread={1.5}
          rayLength={1.8}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.05}
          distortion={0.03}
          fadeDistance={0.9}
          saturation={0.8}
          className="opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                CHAMPIONS
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>

            {/* Team Introduction with Logo */}
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={consultantsLogo}
                alt="Futbol Consultants Desamparados"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Futbol Consultants
                </h3>
                <h4 className="text-xl font-semibold text-blue-400">
                  Desamparados
                </h4>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              Costa Rica's second division champions 2025
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Our professional team has achieved the ultimate goal -
              championship glory. This historic victory represents years of
              dedication, exceptional talent development, and the culmination of
              our commitment to excellence in Costa Rican football.
            </p>

            <div className="flex space-x-4">
              <button className="relative overflow-hidden bg-gradient-to-r from-yellow-500/80 via-yellow-400/90 to-yellow-500/80 backdrop-blur-xl border border-yellow-400/30 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center group hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10">Championship Story</span>
                <svg
                  className="w-5 h-5 ml-2 relative z-10 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10">Watch Highlights</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={besoCopaImg}
                alt="Championship Trophy Celebration"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900/20"></div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-yellow-400/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-black/20 backdrop-blur-2xl border border-yellow-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-yellow-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 backdrop-blur border border-yellow-400/40 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                1st
              </div>
              <div className="text-sm text-gray-300 font-medium">
                Division Place
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-400/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-black/20 backdrop-blur-2xl border border-green-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-green-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-green-600/20 backdrop-blur border border-green-400/40 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
                28
              </div>
              <div className="text-sm text-gray-300 font-medium">Games Won</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-black/20 backdrop-blur-2xl border border-blue-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-blue-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 backdrop-blur border border-blue-400/40 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2M7 4h10M9 9h6m-6 4h6m-6 4h6"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                89
              </div>
              <div className="text-sm text-gray-300 font-medium">
                Goals Scored
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-400/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-black/20 backdrop-blur-2xl border border-red-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-red-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/30 to-red-600/20 backdrop-blur border border-red-400/40 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent mb-2">
                12
              </div>
              <div className="text-sm text-gray-300 font-medium">
                Clean Sheets
              </div>
            </div>
          </div>
        </div>

        {/* Player Gallery */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              PLAYER GALLERY
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: player1,
                name: "YURDI HODELIN",
                position: "Goalkeeper",
                link: "https://www.transfermarkt.es/yurdi-hodelin/profil/spieler/1240595",
              },
              {
                img: player2,
                name: "ANDY REYES",
                position: "Forward",
                link: "https://www.transfermarkt.es/andy-reyes/profil/spieler/378518",
              },
              {
                img: player3,
                name: "DARIO DELGADO",
                position: "Defender",
                link: "https://www.transfermarkt.es/dario-delgado/profil/spieler/113867",
              },
              {
                img: player4,
                name: "RAUL LOPEZ",
                position: "FORWARD",
                link: "https://www.transfermarkt.es/raul-lopez/profil/spieler/1080621",
              },
              {
                img: player5,
                name: "RANDY RAMIREZ",
                position: "Midfielder",
                link: "https://www.transfermarkt.es/randy-ramirez/profil/spieler/1275823",
              },
              {
                img: player6,
                name: "ALVIN BENNETT",
                position: "Defender",
                link: "https://www.transfermarkt.es/alvin-bennett/profil/spieler/235332",
              },
            ].map((player, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={player.img}
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-lg mb-2">
                      {player.name}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      {player.position}
                    </p>
                    <a
                      href={player.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group-hover:scale-110"
                    >
                      <span>View on Transfermarkt</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsSection;
