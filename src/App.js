import React from "react";
import OrganizationPage from "./pages/OrganizationPage/OrganizationPage";
import Navbar from "./components/nav/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <OrganizationPage />
    </div>
  );
}

export default App;