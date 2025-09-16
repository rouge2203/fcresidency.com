import { useState } from "react";
import Silk from "../background/Silk";
const landingImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/landing-img.JPG";
const yordin =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/yordin.webp";
const yordin_trofeo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/yordin_trofeo.JPG";
const entrenamientoAbrazo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/entrenamiento_abrazo.JPG";
const player1 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player1.JPG";
const player2 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/player2.JPG";
const pro1 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro1.jpg";
const pro2 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro2.jpg";
// import Beams from "../background/Beams";

const ProgramDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const dailySchedule = [
    {
      time: "6:30 AM",
      activity: "Wake Up & Nutrition",
      description:
        "Start your day with a nutritious breakfast designed by sports nutritionists",
      icon: "🌅",
    },
    {
      time: "7:30 AM",
      activity: "Morning Warm-up",
      description:
        "Dynamic stretching and activation exercises with professional trainers",
      icon: "🤸‍♂️",
    },
    {
      time: "8:30 AM",
      activity: "Technical Training",
      description:
        "Ball control, first touch, passing accuracy, and shooting technique",
      icon: "⚽",
    },
    {
      time: "10:30 AM",
      activity: "Recovery & Hydration",
      description:
        "Proper hydration break with sports drinks and energy snacks",
      icon: "💧",
    },
    {
      time: "11:00 AM",
      activity: "Tactical Sessions",
      description:
        "Formation play, set pieces, game strategy with video analysis",
      icon: "📋",
    },
    {
      time: "12:30 PM",
      activity: "Lunch & Rest",
      description:
        "Balanced meal followed by recovery time in comfortable facilities",
      icon: "🍽️",
    },
    {
      time: "2:00 PM",
      activity: "Physical Conditioning",
      description:
        "Strength, agility, and endurance training in modern gym facilities",
      icon: "💪",
    },
    {
      time: "3:30 PM",
      activity: "Scrimmage Games",
      description: "Match simulation with academy and professional players",
      icon: "🏟️",
    },
    {
      time: "5:00 PM",
      activity: "Cool Down & Recovery",
      description:
        "Stretching, massage therapy, and injury prevention protocols",
      icon: "🧘‍♂️",
    },
    {
      time: "6:30 PM",
      activity: "Dinner & Social Time",
      description: "Community dining with fellow players and cultural exchange",
      icon: "🤝",
    },
    {
      time: "8:00 PM",
      activity: "Video Analysis",
      description: "Review training footage and receive personalized feedback",
      icon: "📹",
    },
    {
      time: "9:30 PM",
      activity: "Free Time & Rest",
      description:
        "Personal time for reflection, communication with family, or leisure",
      icon: "😌",
    },
  ];

  const facilities = [
    {
      title: "FIFA-Standard Training Pitches",
      description:
        "Multiple professional-grade natural grass fields with drainage systems and lighting for evening sessions",
      image: landingImg,
      features: [
        "Natural grass surfaces",
        "Professional lighting",
        "Video recording equipment",
        "Medical stations",
      ],
    },
    {
      title: "Modern Gymnasium",
      description:
        "Fully equipped fitness center with latest strength and conditioning equipment used by professional players",
      image: entrenamientoAbrazo,
      features: [
        "Cardio equipment",
        "Free weights",
        "Recovery pools",
        "Physiotherapy room",
      ],
    },
    {
      title: "Comfortable Accommodation",
      description:
        "Player residence with modern amenities, private rooms, and communal areas for team bonding",
      image: player1,
      features: [
        "Private bedrooms",
        "Shared living spaces",
        "Study areas",
        "Gaming/recreation room",
      ],
    },
    {
      title: "Nutrition Center",
      description:
        "Professional kitchen with sports nutritionists preparing meals tailored for athlete performance",
      image: player2,
      features: [
        "Sports nutrition experts",
        "Customized meal plans",
        "Hydration stations",
        "Supplement guidance",
      ],
    },
  ];

  const programHighlights = [
    {
      title: "Professional Exposure",
      description:
        "Train alongside current professional players and experience the daily routine of elite athletes in Costa Rica's top leagues.",
      icon: "🌟",
      details: [
        "Train with Liga FPD professionals",
        "Attend professional match days",
        "Meet club directors and scouts",
        "Network with industry professionals",
      ],
    },
    {
      title: "Elite Coaching Staff",
      description:
        "Learn from UEFA and CONMEBOL certified coaches with experience in international football and player development.",
      icon: "👨‍🏫",
      details: [
        "UEFA A & B licensed coaches",
        "Former professional players",
        "Sports psychology specialists",
        "Tactical analysis experts",
      ],
    },
    {
      title: "Comprehensive Assessment",
      description:
        "Receive detailed technical, tactical, physical, and mental evaluations with personalized development reports.",
      icon: "📊",
      details: [
        "Technical skills assessment",
        "Physical fitness testing",
        "Tactical understanding evaluation",
        "Mental resilience coaching",
      ],
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience authentic Costa Rican culture while improving your Spanish and understanding Latin American football philosophy.",
      icon: "🌎",
      details: [
        "Spanish language practice",
        "Local community visits",
        "Traditional cuisine experiences",
        "Cultural excursions",
      ],
    },
  ];

  const successStories = [
    {
      name: "Yordin Alvarez",
      achievement: "Signed with Professional Club",
      quote:
        "The 10-day program changed my perspective on professional football. The level of training and exposure to real professional environments was incredible.",
      image: yordin_trofeo,
      club: "Liga FPD Club",
    },
    {
      name: "Marco Rodriguez",
      achievement: "Academy Contract",
      quote:
        "I learned more in those 10 days than in years of regular training. The coaching quality and facilities are world-class.",
      image: pro1,
      club: "Youth Academy",
    },
    {
      name: "Diego Martinez",
      achievement: "Scholarship Opportunity",
      quote:
        "The program opened doors I never knew existed. Now I'm on track for a college scholarship in the United States.",
      image: pro2,
      club: "US College Soccer",
    },
  ];

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full opacity-65">
        <Silk
          speed={4}
          scale={0.9}
          noiseIntensity={1.6}
          rotation={1.69}
          color="#005BB6"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20" id="program-details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                🚀 PROGRAM DEEP DIVE
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Inside the
              <span className="block text-blue-400">Pro Soccer Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover what makes our 10-day Pro Soccer Tryouts program the most
              comprehensive and transformative soccer experience in Costa Rica.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center sm:mb-0 -mb-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 max-w-4xl mx-auto">
            {[
              { id: "overview", label: "Program Overview", icon: "🎯" },
              { id: "schedule", label: "Daily Schedule", icon: "⏰" },
              { id: "facilities", label: "Facilities", icon: "🏟️" },
              { id: "success", label: "Success Stories", icon: "🏆" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Program Overview Tab */}
      {activeTab === "overview" && (
        <div className="relative z-10 ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  More Than Just Training
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Our Pro Soccer Tryouts program is designed to immerse you
                  completely in the world of professional football. From the
                  moment you arrive in Costa Rica, you'll live, train, and think
                  like a professional player.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Professional Environment
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Train in the same facilities used by professional teams
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Real Tryout Opportunities
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Showcase your skills to actual professional clubs and
                        academies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-400">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Complete Immersion
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Live the lifestyle of a professional footballer for 10
                        days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 relative overflow-hidden">
                  <img
                    src={yordin}
                    alt="Professional Training"
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <div className="absolute top-12 right-12 bg-blue-600/90 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">10</div>
                    <div className="text-sm text-blue-200">Days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Highlights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {highlight.description}
                  </p>
                  <ul className="space-y-2">
                    {highlight.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 text-xs flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Daily Schedule Tab */}
      {activeTab === "schedule" && (
        <div className="relative z-10 ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                A Day in the Life of a Pro Tryout Player
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Experience the structured, professional daily routine that
                shapes elite footballers. Every moment is designed to maximize
                your development and showcase your potential.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {dailySchedule.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-blue-400 font-bold text-sm">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {item.activity}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule Summary */}
            <div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    6+
                  </div>
                  <div className="text-white font-semibold">
                    Training Hours Daily
                  </div>
                  <div className="text-gray-400 text-sm">
                    Intensive skill development
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    3
                  </div>
                  <div className="text-white font-semibold">
                    Nutritious Meals
                  </div>
                  <div className="text-gray-400 text-sm">
                    Sports nutrition optimized
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    2
                  </div>
                  <div className="text-white font-semibold">
                    Recovery Sessions
                  </div>
                  <div className="text-gray-400 text-sm">
                    Injury prevention focus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Facilities Tab */}
      {activeTab === "facilities" && (
        <div className="relative z-10 ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                World-Class Training Facilities
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Train in professional-grade facilities that rival those used by
                international teams. Every detail is designed to optimize your
                performance and development.
              </p>
            </div>

            <div className="space-y-16">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                      <h4 className="text-3xl font-bold text-white mb-4">
                        {facility.title}
                      </h4>
                      <p className="text-gray-300 text-lg mb-6">
                        {facility.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Success Stories Tab */}
      {activeTab === "success" && (
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Real Players, Real Success
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Meet some of the talented players who have transformed their
                careers through our program. Their journeys prove that with the
                right opportunity, dreams become reality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative inline-block mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {story.name}
                  </h4>
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-full px-3 py-1 text-blue-400 text-sm mb-4 inline-block">
                    {story.achievement}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-4">
                    "{story.quote}"
                  </p>
                  <div className="text-gray-400 text-xs">{story.club}</div>
                </div>
              ))}
            </div>

            {/* Success Statistics */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-white text-center mb-8">
                Program Success Rate
              </h4>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    85%
                  </div>
                  <div className="text-white font-semibold">
                    Player Satisfaction
                  </div>
                  <div className="text-gray-400 text-sm">
                    Would recommend to others
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    60%
                  </div>
                  <div className="text-white font-semibold">
                    Continued Opportunities
                  </div>
                  <div className="text-gray-400 text-sm">
                    Received follow-up offers
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    25%
                  </div>
                  <div className="text-white font-semibold">
                    Professional Contracts
                  </div>
                  <div className="text-gray-400 text-sm">
                    Signed with clubs/academies
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    40%
                  </div>
                  <div className="text-white font-semibold">
                    Scholarship Opportunities
                  </div>
                  <div className="text-gray-400 text-sm">
                    College or academy scholarships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Live Like a Pro?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Join the next group of aspiring professional players and
              experience the most comprehensive soccer development program in
              Costa Rica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  const element = document.getElementById("application-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start Your Journey Today
              </button>
              <button
                className="border border-gray-400 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition duration-300"
                onClick={() => {
                  const element = document.getElementById("pricing");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Pricing
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Next Program: All year round
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Limited to 20 Players
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Early Bird Pricing Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
