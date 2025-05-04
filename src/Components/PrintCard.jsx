import React from "react";

function PrintCard({ image, title, price, badge }) {
  return (
    <div className="text-center space-y-2 font-nunito">
      <div className="relative">
        <img src={image} alt={title} className="w-full rounded shadow" />
        {badge && (
          <div className="absolute top-2 right-2 bg-white text-xs font-bold px-2 py-1 border border-black">
            {badge}
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
      <div className="text-sm text-red-600 font-medium">£{price}</div>
    </div>
  );
}

export default PrintCard;
