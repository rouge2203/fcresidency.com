import { useState } from "react";
import { Element } from "react-scroll";

interface FormData {
  name: string;
  country: string;
  email: string;
  phone: string;
  age: string;
  currentTeam: string;
  youtubeLink: string;
  program: string;
}

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    country: "",
    email: "",
    phone: "",
    age: "",
    currentTeam: "",
    youtubeLink: "",
    program: "",
  });

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for API according to expected format
      const apiData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        age: formData.age,
        team: formData.currentTeam,
        highlighta: formData.youtubeLink || "", // Optional field
        program: formData.program,
      };

      console.log("Submitting application:", apiData);

      const response = await fetch(
        "https://api.lobsterlabs.net/api/fcprosoccertryouts/submit-application",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiData),
        }
      );

      const result = await response.json();

      if (result.success) {
        // Track successful form submission for Google Ads
        if (
          typeof window !== "undefined" &&
          (window as any).gtag_report_conversion
        ) {
          (window as any).gtag_report_conversion();
        }

        setShowSuccessDialog(true);
        // Reset form on success
        setFormData({
          name: "",
          country: "",
          email: "",
          phone: "",
          age: "",
          currentTeam: "",
          youtubeLink: "",
          program: "",
        });
      } else {
        // Handle API error
        alert(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        "There was an error submitting your application. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <Element name="application-form" className="element">
      <div className="bg-slate-900 py-20 relative overflow-hidden min-h-screen">
        {/* Silk Background */}
        {/* <div className="absolute inset-0 w-full h-full opacity-30">
        <Silk
          speed={3}
          scale={1.2}
          color="#1e293b"
          noiseIntensity={0.8}
          rotation={0.2}
        />
      </div> */}

        {/* Light Rays Background */}
        {/* <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="left"
          raysColor="#3b82f6"
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
      </div> */}

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/40 rounded-full backdrop-blur-xl">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-sm font-semibold tracking-wide uppercase">
                  Get Started
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-white">Begin Your</span>{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text">
                Professional Journey
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to FC Residency — Let's get started with your application
            </p>
          </div>

          {/* Main Card */}
          <div className="relative group" id="application-form">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 min-h-[600px]">
                {/* Left Side - Dark section with gradient */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex flex-col justify-between">
                  {/* Gradient effect at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-600/80 via-blue-500/40 to-transparent"></div>
                  {/* Additional top gradient */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-600/20 via-blue-500/10 to-transparent"></div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                      Transform your soccer dreams into professional reality.
                    </h3>
                  </div>

                  {/* Stats at bottom */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center text-white/90 hover:text-white transition-colors group/stat">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500/30 to-emerald-600/20 backdrop-blur border border-green-400/40 rounded-lg flex items-center justify-center mr-3 group-hover/stat:rotate-12 transition-transform">
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        500+ Athletes Trained
                      </span>
                    </div>
                    <div className="flex items-center text-white/90 hover:text-white transition-colors group/stat">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-600/20 backdrop-blur border border-purple-400/40 rounded-lg flex items-center justify-center mr-3 group-hover/stat:rotate-12 transition-transform">
                        <svg
                          className="w-4 h-4 text-purple-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        15+ Countries Represented
                      </span>
                    </div>
                    <div className="flex items-center text-white/90 hover:text-white transition-colors group/stat">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 backdrop-blur border border-cyan-400/40 rounded-lg flex items-center justify-center mr-3 group-hover/stat:rotate-12 transition-transform">
                        <svg
                          className="w-4 h-4 text-cyan-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        98% Success Rate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/50 to-blue-100/30 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100/50 to-pink-100/30 rounded-full blur-2xl"></div>

                  <div className="mb-8 relative z-10">
                    <div className="relative group mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">
                      <span className="text-slate-900">Get Started</span>
                    </h4>
                    <p className="text-gray-600">
                      Welcome to FC Residency — Let's get started
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 relative z-10"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your country"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Age *
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="16"
                        max="30"
                        className="w-full px-3 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="Your age"
                      />
                    </div>

                    {/* Current Team/School */}
                    <div>
                      <label
                        htmlFor="currentTeam"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Current Team/School/College *
                      </label>
                      <input
                        type="text"
                        id="currentTeam"
                        name="currentTeam"
                        value={formData.currentTeam}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your current team, school, or college"
                      />
                    </div>

                    {/* YouTube Link */}
                    <div>
                      <label
                        htmlFor="youtubeLink"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        YouTube Highlights (Optional)
                      </label>
                      <input
                        type="url"
                        id="youtubeLink"
                        name="youtubeLink"
                        value={formData.youtubeLink}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                        placeholder="https://youtube.com/watch?v=... (optional)"
                      />
                      <p className="text-gray-500 text-xs mt-1">
                        Share a video showcasing your soccer skills (highly
                        recommended but optional)
                      </p>
                    </div>

                    {/* Program Selection */}
                    <div>
                      <label
                        htmlFor="program"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Program Interest *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                        className="w-full text-black px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 hover:border-blue-400"
                      >
                        <option value="">Select a program</option>
                        <option value="pro-soccer-tryouts">
                          Pro Soccer Tryouts
                        </option>
                        <option value="fc-residency">FC Residency</option>
                        <option value="consultation">
                          Need consultation to decide
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6 shadow-lg hover:shadow-xl transform hover:scale-[1.02] relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center relative z-10">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                          Submitting application...
                        </span>
                      ) : (
                        <span className="relative z-10">
                          Submit Application
                        </span>
                      )}
                    </button>

                    <div className="text-center mt-4">
                      <p className="text-gray-600 text-sm">
                        By submitting this application, you agree to our
                        evaluation process. Only selected candidates will be
                        contacted for the next steps.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Dialog */}
        {showSuccessDialog && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md mx-4">
                <div className="text-center">
                  <div className="relative group/icon mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-lg group-hover/icon:blur-xl transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-600/20 backdrop-blur border border-green-400/40 rounded-full flex items-center justify-center mx-auto">
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
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                      Application Submitted!
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your application. We will check your
                    application and contact you as soon as possible.
                  </p>
                  <button
                    onClick={closeDialog}
                    className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 hover:from-green-700 hover:via-emerald-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 group/btn shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                    <span className="relative z-10">Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default ApplicationForm;
