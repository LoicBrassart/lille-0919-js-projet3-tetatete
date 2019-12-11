import React from "react";
import DonationCard from "./components/DonationCard";
import "./App.scss";

function App() {
  return (
    <div className="App center">
      <DonationCard />
      <DonationCard />
      <DonationCard />
      <DonationCard />
    </div>
  );
}

export default App;
