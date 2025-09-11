const landingImg =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/landing-img.JPG";
import Navbar from "../LandingComponents/Navbar";
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
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[100vh] overflow-hidden">
        <Navbar />
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
