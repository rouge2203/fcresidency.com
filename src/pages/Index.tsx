import { useEffect } from "react";

const landingImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/landing-img.webp";
const yordinImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/yordin.webp";
import HeroSection from "../LandingComponents/HeroSection";
import ProgramSection from "../LandingComponents/ProgramSection";
import ProgramPreview from "../LandingComponents/ProgramPreview";
import OurTeam from "../LandingComponents/OurTeam";
import OurDepartments from "../LandingComponents/OurDepartments";
import ChampionsSection from "../LandingComponents/ChampionsSection";
import ProPlayers from "../LandingComponents/ProPlayers";
import ProSoccerTryouts from "../LandingComponents/ProSoccerTryouts";
import ProgramDetails from "../LandingComponents/ProgramDetails";
import PricingSection from "../LandingComponents/PricingSection";
import ApplicationForm from "../LandingComponents/ApplicationForm";
import Footer from "../LandingComponents/Footer";

const Index = () => {
  // Preload critical background image and optimize connection
  useEffect(() => {
    // Preconnect to CDN for faster image loading
    const preconnectLink = document.createElement("link");
    preconnectLink.rel = "preconnect";
    preconnectLink.href =
      "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com";
    document.head.appendChild(preconnectLink);

    // Preload the critical background images
    const preloadHeroLink = document.createElement("link");
    preloadHeroLink.rel = "preload";
    preloadHeroLink.as = "image";
    preloadHeroLink.href = landingImg;
    preloadHeroLink.fetchPriority = "high";
    document.head.appendChild(preloadHeroLink);

    const preloadYordinLink = document.createElement("link");
    preloadYordinLink.rel = "preload";
    preloadYordinLink.as = "image";
    preloadYordinLink.href = yordinImg;
    preloadYordinLink.fetchPriority = "high";
    document.head.appendChild(preloadYordinLink);

    return () => {
      // Cleanup on unmount
      if (document.head.contains(preloadHeroLink)) {
        document.head.removeChild(preloadHeroLink);
      }
      if (document.head.contains(preloadYordinLink)) {
        document.head.removeChild(preloadYordinLink);
      }
      if (document.head.contains(preconnectLink)) {
        document.head.removeChild(preconnectLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white w-full">
      {/* Navbar is now rendered globally in App.tsx */}

      {/* Hero Section */}
      <div
        className="relative h-[100vh] overflow-hidden bg-slate-900"
        style={{ marginTop: "-84px", paddingTop: "84px" }}
      >
        <HeroSection backgroundImage={landingImg} />
      </div>

      <ProgramPreview />
      <ProgramSection />
      <OurDepartments />
      <ChampionsSection />
      <ProPlayers />
      <OurTeam />
      <ProSoccerTryouts />
      <ProgramDetails />
      <PricingSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
