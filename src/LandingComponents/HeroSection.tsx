interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Pro Soccer Tryouts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                ELITE SOCCER DEVELOPMENT
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              <span className="block">BECOME A PRO</span>
              <span className="block text-blue-400">PLAYER</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Join elite soccer tryouts and take your game to the next level.
              Training sessions with international players, professional
              coaches, and your path to success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition duration-200 flex items-center justify-center">
                <span>Apply for Tryouts</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button className="border border-gray-600 text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-lg transition duration-200">
                Meet Our Players
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex space-x-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <div className="text-2xl font-bold text-blue-400">300+</div>
            <div className="text-sm text-gray-300">Players Signed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <div className="text-2xl font-bold text-blue-400">20+</div>
            <div className="text-sm text-gray-300">Pro Leagues</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <div className="text-2xl font-bold text-blue-400">92%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
