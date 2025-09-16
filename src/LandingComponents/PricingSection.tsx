// import Beams from "../background/Beams";
import Silk from "../background/Silk";
import { Element } from "react-scroll";

const PricingSection = () => {
  return (
    <Element name="pricing" className="element">
      <div
        id="pricing"
        className="bg-black py-20 relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Silk Background */}
        <div className="absolute inset-0 w-full h-full opacity-25">
          <Silk
            speed={4}
            scale={0.9}
            noiseIntensity={1.6}
            rotation={1.69}
            color="#005BB6"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block  px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                💰 INVESTMENT PACKAGES
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Choose Your Path to
              <span className="block text-blue-400">Professional Soccer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Select the program that best fits your goals and commitment level.
              Both paths offer world-class training and professional
              opportunities.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pro Soccer Tryouts */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                    🌟 MOST POPULAR
                  </span>
                </div>

                {/* Header */}
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Pro Soccer Tryouts
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Intensive 10-day experience in Costa Rica
                  </p>
                  <div className="text-gray-300 text-sm">from</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    $2,500
                  </div>
                  <div className="text-gray-300 text-sm">per participant</div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">10 days in Costa Rica</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Professional coaching staff</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Academy & pro team tryouts</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">All meals & accommodation</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Training equipment provided</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Airport transfers included</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Cultural activities</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">
                      Professional exposure opportunities
                    </span>
                  </div>
                </div>

                {/* Program Details */}
                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white font-medium">10 days</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400">Location</span>
                      <span className="text-white font-medium">Costa Rica</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400">Group Size</span>
                      <span className="text-white font-medium">
                        Max 20 players
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400">Age Range</span>
                      <span className="text-white font-medium">
                        16-24 years
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const element = document.getElementById("application-form");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Apply for a Spot
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  ⚡ Quick start to professional exposure
                </p>
              </div>
            </div>

            {/* FC Residency */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Premium Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                    👑 PREMIUM PROGRAM
                  </span>
                </div>

                {/* Header */}
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    FC Residency
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Long-term development program in Costa Rica
                  </p>
                  <div className="text-gray-300 text-sm">from</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    $4,500
                  </div>
                  <div className="text-gray-300 text-sm">per month</div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">
                      3-12 month residential program
                    </span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Daily professional training</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">
                      Live with professional players
                    </span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Full board accommodation</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">Spanish language immersion</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">
                      Professional club integration
                    </span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">
                      Agent representation & scouting
                    </span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">
                      Continuous skill development
                    </span>
                  </div>
                </div>

                {/* Program Details */}
                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white font-medium">
                        3-12 months
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400">Location</span>
                      <span className="text-white font-medium">Costa Rica</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400">Group Size</span>
                      <span className="text-white font-medium">
                        Max 8 players
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400">Age Range</span>
                      <span className="text-white font-medium">
                        18-26 years
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const element = document.getElementById("application-form");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Apply for a Spot
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  🚀 Complete professional development journey
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Still Not Sure Which Program is Right for You?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Schedule a free consultation with our team to discuss your goals
                and find the perfect path to professional soccer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@fcprossocertryouts.com?subject=Free Consultation Request&body=Hi, I would like to schedule a free consultation to discuss my soccer goals and find the right program for me."
                  className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition duration-300 text-center"
                >
                  📧 Email Us for Consultation
                </a>
                <a
                  href="tel:+50687050594"
                  className="bg-green-500/20 border border-green-500/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-500/30 transition duration-300 text-center"
                >
                  📞 Call Us: +506 87050594
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default PricingSection;
