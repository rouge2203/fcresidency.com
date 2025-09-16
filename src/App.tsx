import AppRouter from "./Router";
import Navbar from "./LandingComponents/Navbar";

function App() {
  return (
    <>
      {/* Global fixed navbar */}
      <Navbar />
      {/* Routed pages below */}
      <AppRouter />
    </>
  );
}

export default App;
