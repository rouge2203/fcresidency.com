import { Element } from "react-scroll";

const andreyImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/andrey_img.webp";
const joseImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/joseluis2.webp";

const OurTeam = () => {
  return (
    <Element name="our-team" className="element">
      <div
        id="our-team"
        className="bg-slate-900 py-20 relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Formal Background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl  md:text-6xl font-bold text-white mb-6">
              Meet Our Leaders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional footballers with experience in multiple leagues
              around the world and college placement experts. More than 20 years
              of combined experience in all soccer-related areas, dedicated to
              developing the next generation of talent.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Monica Malavassi - CEO */}
            <div className="relative group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Image Section */}
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={andreyImg}
                    alt="Monica Malavassi"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-slate-800 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      Operations Manager
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
                      5+ Years
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Andrey Rosales
                    </h3>
                    <p className="text-slate-300 font-semibold text-lg mb-4">
                      Operations Manager
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-slate-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md">
                        Player Development
                      </span>
                      <span className="bg-gray-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md">
                        College Placement
                      </span>
                      <span className="bg-zinc-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md">
                        International Relations
                      </span>
                    </div>

                    <p className="text-slate-200 text-sm leading-relaxed">
                      Andrey Rosales serves as the operations manager of FC Pro
                      Soccer Tryouts. With over 5 years of experience working
                      with academies, he has developed a strong ability to
                      recognize and nurture young talent. His career includes
                      collaborations with multiple colleges, where he has
                      successfully placed players in prestigious universities.
                      Dedicated to creating opportunities, Andrey combines his
                      organizational expertise with a passion for player
                      development to help athletes advance their careers.
                    </p>
                  </div>

                  <a
                    href="https://www.instagram.com/andreyrosalesb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 text-sm w-full group-hover:scale-105 shadow-lg text-center block"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* José Luis Rodriguez - Director de Operaciones */}
            <div className="relative group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Image Section */}
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={joseImg}
                    alt="José Luis Rodriguez"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-gray-800 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      C.E.O.
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
                      20+ Years
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      José Luis Rodriguez
                    </h3>
                    <p className="text-gray-300 font-semibold text-lg mb-4">
                      CEO & Founder
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md">
                        Professional Leagues
                      </span>
                      <span className="bg-slate-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md">
                        Youth Development
                      </span>
                      <span className="bg-zinc-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md">
                        Tactical Analysis
                      </span>
                    </div>

                    <p className="text-gray-200 text-sm leading-relaxed">
                      Licensed FIFA Agent, M.Sc. Industrial Engineer, and
                      graduate of Virginia Commonwealth University (VCU). Former
                      NCAA Division 1 player with over 20 years of professional
                      experience leading groups and mentoring individuals.
                      Expert in contract negotiation and talent identification.
                      Has worked with more than 100 clubs around the world and
                      represented multiple international players.
                    </p>
                  </div>

                  <a
                    href="https://www.instagram.com/joselrodfc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 text-sm w-full group-hover:scale-105 shadow-lg text-center block"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-white">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm font-medium">Years Combined</div>
              </div>
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-white">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm font-medium">Players Placed</div>
              </div>
              <div className="bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-white">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-sm font-medium">Countries</div>
              </div>
              <div className="bg-gradient-to-br from-stone-600 to-stone-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl text-white">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default OurTeam;
