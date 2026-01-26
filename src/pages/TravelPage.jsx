import React from "react";
import { useParams } from "react-router-dom";

import EastSikkim from "../components/travel/EastSikkim";
import WestSikkim from "../components/travel/WestSikkim";
import NorthSikkim from "../components/travel/NorthSikkim";
import SouthSikkim from "../components/travel/SouthSikkim";

const TravelPage = () => {
  const { districtId } = useParams();

  if (districtId === "east") return <EastSikkim />;
  if (districtId === "west") return <WestSikkim />;
  if (districtId === "north") return <NorthSikkim />;
  if (districtId === "south") return <SouthSikkim />;
};

export default TravelPage;
