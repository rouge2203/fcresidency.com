import yordin from "../assets/yordin.jpg";

const ProSoccerTryouts = () => {
  return (
    <div
      id="pro-soccer-tryouts"
      className="bg-slate-900 py-20 relative overflow-hidden min-h-screen"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={yordin}
          alt="Pro Soccer Tryouts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="w-full">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                🌍 COSTA RICA EXPERIENCE
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              <span className="block">PRO SOCCER</span>
              <span className="block text-blue-400">TRYOUTS</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Exclusive 10-day soccer experience in Costa Rica. Train, compete,
              and showcase your skills with academy and professional teams in a
              true football environment.
            </p>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">⚽</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Professional Training
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Daily sessions with qualified coaches using professional-level
                  methods to develop technical, tactical, and physical skills.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-400 font-bold">🏟</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Pro Footballer Life
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Experience the day-to-day routine of a professional player
                  with warm-ups, drills, tactical sessions, and video analysis.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-400 font-bold">🏝</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    All-Inclusive Package
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Accommodation, meals, transportation, and training equipment
                  all provided for your 10-day Costa Rica experience.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-yellow-400 font-bold">🌄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Cultural Immersion
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Discover Costa Rica's authentic culture and lifestyle beyond
                  the pitch with guided local experiences.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition duration-300 flex items-center justify-center group">
                <span>Learn More About Tryouts</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
              <button className="border border-gray-400 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition duration-300">
                View Pricing Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSoccerTryouts;
