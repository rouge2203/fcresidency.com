import { Carousel, Card } from "../aceternity/apple-cards-carousel";
// import GradientBlinds from "../background/GradientBlinds";
import { HeroVideoDialog } from "../components/HeroVideoDialog";
import { useRef, useEffect, useState } from "react";

// Professional player image URLs
const pro1 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro1.jpg";
const pro2 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro2.jpg";
const pro3 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro3.jpg";
const pro4 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro4.jpg";
const pro5 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro5.jpg";
const pro6 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro6.jpg";
const pro7 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro7.jpg";
const pro8 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro8.jpg";
const pro9 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro9.jpg";
const pro10 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro10.jpg";
const pro11 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro11.jpg";
const pro12 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro12.jpg";
const pro13 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro13.jpg";
const pro14 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/joseluis2.webp";
const pro15 =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/proplayers/pro15.webp";

// Team logo URLs
const antwerpLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/antwerp.png";
const betisLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/betis.png";
const bruggeLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/brugge.png";
const coloradoLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/colorado.png";
const columbusLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/columbus.png";
const cscLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/csc.png";
const gentLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/gent.png";
const kansasLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/kansas.png";
const kvmLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/kvm.png";
const ldaLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/lda.png";
const mityLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/mity.png";
const moldeLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/molde.png";
const nyLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/ny.png";
const psvLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/psv.png";
const redbullLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/redbull.png";
const ronsemborgLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/ronsemborg.png";
const royalLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/royal.png";
const sevillaLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/sevilla.png";
const stiftentLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/teams/stiftent.png";

const ProPlayers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsUserScrolling(true);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Resume auto-scroll after user stops scrolling for 3 seconds
      const timeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, 3000);

      setScrollTimeout(timeout);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);
  // Team logos data
  const teamLogos = [
    { src: antwerpLogo, alt: "Royal Antwerp FC" },
    { src: betisLogo, alt: "Real Betis" },
    { src: bruggeLogo, alt: "Club Brugge" },
    { src: coloradoLogo, alt: "Colorado Rapids" },
    { src: columbusLogo, alt: "Columbus Crew" },
    { src: cscLogo, alt: "CS Cartaginés" },
    { src: gentLogo, alt: "KAA Gent" },
    { src: kansasLogo, alt: "Sporting Kansas City" },
    { src: kvmLogo, alt: "KV Mechelen" },
    { src: ldaLogo, alt: "LD Alajuelense" },
    { src: mityLogo, alt: "FC Mity" },
    { src: moldeLogo, alt: "Molde FK" },
    { src: nyLogo, alt: "New York City FC" },
    { src: psvLogo, alt: "PSV Eindhoven" },
    { src: redbullLogo, alt: "Red Bull Salzburg" },
    { src: ronsemborgLogo, alt: "Ronsemborg" },
    { src: royalLogo, alt: "Royal FC" },
    { src: sevillaLogo, alt: "Sevilla FC" },
    { src: stiftentLogo, alt: "Stiftent Rotterdam" },
  ];

  // Professional player success stories data
  const playerCards = [
    {
      src: pro1,
      title: "Fricio Caicedo",
      category: "Ecuador's National Team",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            From Costa Rica to La Liga's reserve team - Marco's journey through
            Futbol Consultants opened doors to Spanish football.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                Discovered at FC Academy at age 16
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Developed through our professional program
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">
                Signed with Real Sociedad B in 2024
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro2,
      title: "Creichel Pérez",
      category: "L.D. Alajuelense",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Carlos made the leap from Segunda División to Major League Soccer
            through our extensive network of scouts and contacts.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Started at FC Moravia</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Showcased in MLS talent identification programs
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm">Currently playing in MLS</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro3,
      title: "Marcos Brown Kymani",
      category: "PSV Eindhoven - Netherlands",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Diego's technical skills caught the attention of Dutch scouts,
            leading to his development at one of Europe's top academies.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">
                Trained with our professional coaching staff
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                Participated in European showcase tournaments
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Signed with PSV Academy system</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro4,
      title: "Fernán Faerrón",
      category: "Costa Rica's National Team",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Diego's technical skills caught the attention of Dutch scouts,
            leading to his development at one of Europe's top academies.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">
                Trained with our professional coaching staff
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                Participated in European showcase tournaments
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Signed with PSV Academy system</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro12,
      title: "Andrea Pirlo",
      category: "Fifa's World Cup Legend",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Diego's technical skills caught the attention of Dutch scouts,
            leading to his development at one of Europe's top academies.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">
                Trained with our professional coaching staff
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                Participated in European showcase tournaments
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Signed with PSV Academy system</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro15,
      title: "Yurdi Hodelín, Elvis Casanova",
      category: "Cuban U20 National Team",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Yurdi and Elvis were discovered in Cuba through our network of
            scouts and contacts and developed through our professional program.
            They are now playing in the Cuban U20 National Team.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">Discovered in Cuba</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                Developed through our professional program
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">
                Playing in the Cuban U20 National Team
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro13,
      title: "Jimmy Marín",
      category: "KS Samara",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Alejandro returned to Costa Rica's top division as a proven
            professional, bringing experience from international training.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Alumni of our Academy program</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">International experience in Spain</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                First division regular in Costa Rica
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro5,
      title: "Pablo Sanz",
      category: "West Ham United Staff",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Javier's progression through our system led him to Belgian first
            division football, competing in European competitions.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm">
                Developed technical skills at FC Academy
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">
                European placement program participant
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">First team player at KAA Gent</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro6,
      title: "Nicolas Hagen",
      category: "Columbus Crew",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Fernando's journey to American professional soccer showcases the
            diverse opportunities available through our network.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Futbol Consultants tryout success story
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">USL Championship regular</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm">Pathway to MLS opportunities</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro14,
      title: "José Luis Rodriguez",
      category: "Professional Soccer Agent",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Jose Luis Rodriguez is a professional soccer agent with over 20
            years of experience in the industry. He has represented multiple
            international players and has worked with over 50 clubs around the
            world.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Over 20 years of experience in the industry
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                Represented multiple international players
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm">
                Worked with over 50 clubs around the world
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const additionalPlayers = [
    {
      src: pro7,
      title: "Ethan Barley",
      category: "Costa Rica's National Team",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Ricardo's defensive prowess and tactical understanding opened doors
            to Dutch professional football.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm">Specialized defensive training</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">European tactical development</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Professional contract in Netherlands
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro8,
      title: "Randy Ramírez",
      category: "Municipal Liberia",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Miguel's leadership qualities and midfield vision made him a key
            player in Costa Rica's top division.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">Captain at FC Moravia</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">National team considerations</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">First division standout performer</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro9,
      title: "Gerardo Castillo",
      category: "A.D. San Carlos",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Andrés's attacking flair and speed caught the attention of MLS
            scouts, earning him a development contract.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm">
                Futbol Consultants offensive specialist
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">MLS academy graduate pathway</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">Professional development league</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro10,
      title: "Fronny Caicedo",
      category: "Club Royal Antwerb - Belgium",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            José Pablo's versatility and professional attitude earned him a spot
            at one of Costa Rica's most prestigious clubs.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">Multi-position capability</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">CONCACAF experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Championship contender</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      src: pro11,
      title: "Alberth Elis",
      category: "F.C. Girondins de Bordeaux",
      content: (
        <div className="bg-white p-8 text-gray-800 rounded-2xl">
          <p className="text-lg font-medium mb-4">
            Gabriel's goalkeeper talents and mental strength led him to American
            professional soccer opportunities.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Specialized goalkeeper training</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm">American professional debut</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">USL League One starter</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Combine all players for the carousel
  const allPlayers = [...playerCards, ...additionalPlayers];

  const cards = allPlayers.map((player, index) => (
    <Card key={index} card={player} index={index} />
  ));

  return (
    <div
      className="bg-slate-900 py-20 relative overflow-hidden min-h-screen"
      id="pro-players"
    >
      {/* GradientBlinds Background */}
      {/* <div className="absolute inset-0 w-full h-full">
        <GradientBlinds
          gradientColors={["#0f172a", "#1e293b", "#334155", "#475569"]}
          angle={45}
          noise={0.1}
          blindCount={12}
          blindMinWidth={80}
          mouseDampening={0.2}
          mirrorGradient={false}
          spotlightRadius={0.3}
          spotlightSoftness={2}
          spotlightOpacity={0.4}
          distortAmount={0.02}
          shineDirection="right"
          mixBlendMode="overlay"
          className="opacity-40"
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how players who developed through Futbol Consultants have
            achieved their dreams, signing with professional teams across
            Europe, North America, and Central America.
          </p>
        </div>

        {/* Teams We've Worked With - Scrolling Brands */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Teams We've Worked With
            </h3>
            <p className="text-gray-400 text-lg mb-4">
              Our players have joined professional clubs worldwide
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="hidden sm:inline">←</span>
              <span>Scroll horizontally or hover to pause auto-scroll</span>
              <span className="hidden sm:inline">→</span>
            </div>
          </div>

          {/* Horizontally scrollable logo container */}
          <div
            ref={scrollContainerRef}
            className="logo-marquee-container relative overflow-x-auto pb-4 group"
          >
            {/* Scroll indicators */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs">←</span>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs">→</span>
              </div>
            </div>

            <div
              className={`flex space-x-12 items-center min-w-max px-6 transition-all duration-300 ${
                isUserScrolling ? "" : "animate-scroll"
              }`}
            >
              {/* First set of logos */}
              {teamLogos.map((team, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={team.src}
                    alt={team.alt}
                    className="max-h-20 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {teamLogos.map((team, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={team.src}
                    alt={team.alt}
                    className="max-h-20 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Third set for extra smooth scrolling */}
              {teamLogos.map((team, index) => (
                <div
                  key={`triple-${index}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={team.src}
                    alt={team.alt}
                    className="max-h-20 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Player Stories Videos */}
        <div className="mb-20 max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Player Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400 text-center">
                American Soccer Dreams
              </h4>
              <HeroVideoDialog
                animationStyle="from-left"
                videoSrc="https://www.youtube.com/embed/JmvYQ7fdWzI"
                thumbnailSrc={pro1}
                thumbnailAlt="Player Success Story - European Journey"
                className="rounded-2xl overflow-hidden"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400 text-center">
                From Academy to Europe
              </h4>
              <HeroVideoDialog
                animationStyle="from-right"
                videoSrc="https://www.youtube.com/embed/loHp5yrFkxg"
                thumbnailSrc={pro2}
                thumbnailAlt="Player Success Story - MLS Journey"
                className="rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* Professional Players Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
            Player we've work with
          </h3>
          <div className="relative">
            <Carousel items={cards} />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-300">
                Professional Contracts
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-blue-400">15</div>
              <div className="text-sm text-gray-300">Countries Represented</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-blue-400">8</div>
              <div className="text-sm text-gray-300">MLS Players</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[140px]">
              <div className="text-2xl font-bold text-blue-400">12</div>
              <div className="text-sm text-gray-300">European Leagues</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Start Your Professional Journey
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our proven pathway to professional soccer. Our comprehensive
              development program, extensive scouting network, and international
              connections create opportunities for dedicated players.
            </p>
            <button
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById("application-form");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Apply for Tryouts →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProPlayers;
