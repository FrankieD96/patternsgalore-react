import React from "react";
import PrintCard from "../Components/PrintCard";

function Prints() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
      <PrintCard
        image="public/images/SCAN_ONLY_Oil_Spill-.jpg" 
        title="Print 1"
        price={50}
        badge="NEW"
      />
      <PrintCard
        image="public/images/SCAN_ONLY_Oil_Spill-.jpg"
        title="Print 2"
        price={25}
        badge="50% OFF"
      />
    </div>
  );
}

export default Prints;