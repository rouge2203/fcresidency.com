import { useState } from "react";
import Beams from "../background/Beams";

interface ConsultationData {
  email: string;
  phone: string;
}

const PricingSection = () => {
  const [showConsultationDialog, setShowConsultationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [consultationData, setConsultationData] = useState<ConsultationData>({
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsultationInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setConsultationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Console log the consultation data
    console.log("Free Consultation Request:", consultationData);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConsultationDialog(false);
      setShowSuccessDialog(true);
      // Reset form
      setConsultationData({
        email: "",
        phone: "",
      });
    }, 1000);
  };

  const openConsultationDialog = () => {
    setShowConsultationDialog(true);
  };

  const closeDialogs = () => {
    setShowConsultationDialog(false);
    setShowSuccessDialog(false);
  };
  return (
    <div
      id="pricing"
      className="bg-black py-20 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full">
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={8}
          lightColor="#3b82f6"
          speed={1.5}
          noiseIntensity={1.2}
          scale={0.15}
          rotation={15}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
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
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold">
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
                <div className="text-5xl font-bold text-white mb-2">$2,500</div>
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
                    <span className="text-white font-medium">16-24 years</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
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
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
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
                <div className="text-5xl font-bold text-white mb-2">$8,500</div>
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
                  <span className="text-sm">Professional club integration</span>
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
                  <span className="text-sm">Continuous skill development</span>
                </div>
              </div>

              {/* Program Details */}
              <div className="border-t border-white/10 pt-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">3-12 months</span>
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
                    <span className="text-white font-medium">18-26 years</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
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
              <button
                onClick={openConsultationDialog}
                className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition duration-300"
              >
                Schedule Free Consultation
              </button>
              {/* <button className="border border-gray-400 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition duration-300">
                Download Program Guide
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Dialog */}
      {showConsultationDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md mx-4 w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Free Consultation
              </h3>
              <p className="text-gray-300">
                Provide your contact information and we'll reach out to discuss
                your soccer goals.
              </p>
            </div>

            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="consultation-email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="consultation-email"
                  name="email"
                  value={consultationData.email}
                  onChange={handleConsultationInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="consultation-phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="consultation-phone"
                  name="phone"
                  value={consultationData.phone}
                  onChange={handleConsultationInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeDialogs}
                  className="flex-1 bg-white/10 border border-white/20 text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/20 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Request Consultation"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Request Submitted!
              </h3>
              <p className="text-gray-300 mb-6">
                Thank you for your consultation request. We will be
                communicating with you within the next 24-48 hours to schedule
                your free consultation.
              </p>
              <button
                onClick={closeDialogs}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingSection;
