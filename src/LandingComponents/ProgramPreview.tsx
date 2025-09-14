const ProgramPreview = () => {
  const scrollToTryouts = () => {
    const tryoutsSection = document.getElementById("pro-soccer-tryouts");
    if (tryoutsSection) {
      tryoutsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-black py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse animation-delay-300"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse animation-delay-500"></div>
              </div>
              <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase ml-4">
                Program Overview
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Two Paths to
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose between our intensive short-term tryout experience or our
            comprehensive long-term development program in Costa Rica's premier
            soccer ecosystem.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Pro Soccer Tryouts Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Pro Soccer Tryouts
                  </h3>
                  <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide">
                    10-Day Intensive Experience
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Fast-track your soccer career with our exclusive 10-day program
                in Costa Rica. Train with professional coaches, experience
                pro-level facilities, and showcase your skills to academy and
                professional team scouts.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-sm">
                    Professional training sessions
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-sm">Academy & pro team tryouts</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-sm">All-inclusive accommodation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-sm">Cultural immersion experience</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                {/*  */}
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              </div>
            </div>
          </div>

          {/* FC Residency Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    FC Residency
                  </h3>
                  <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
                    3-12 Month Development
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Immerse yourself completely in professional soccer life. Live
                alongside professional players, train daily with top-tier
                coaching staff, and develop your skills through our
                comprehensive long-term program.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-sm">Daily professional training</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-sm">
                    Live with professional players
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-sm">Spanish language immersion</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-sm">
                    Agent representation & scouting
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                {/* <div className="text-white">
                  <span className="text-3xl font-bold">$8,500</span>
                  <span className="text-gray-400 text-sm ml-2 block">
                    per month
                  </span>
                </div> */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                  Premium
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-500"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Begin Your
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Professional Journey?
                </span>
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive details of our Pro Soccer Tryouts
              experience and take the decisive step towards professional soccer
              excellence in Costa Rica.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={scrollToTryouts}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center group"
              >
                <span className="text-lg">Explore Pro Soccer Tryouts</span>
                <svg
                  className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300"
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
              <button
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("pricing");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="text-lg">Compare All Programs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPreview;
