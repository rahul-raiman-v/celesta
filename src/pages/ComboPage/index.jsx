import React from "react";
import { ComboPackCard } from "../../components";
import { useComboStore } from "../../store";

export default function ComboPage() {
  const packs = [
    {
      id: "superior",
      title: "Superior Pack",
      details: ["1-Day General Access", "Access to All Events", "Food Coupons"],
      price: 400,
    },
    {
      id: "prime",
      title: "Prime Pack",
      details: ["1-Day General Access", "Access to All Events", "Food Coupons"],
      price: 400,
      isPopular: true,
    },
    {
      id: "elite",
      title: "Elite Pack",
      details: ["1-Day General Access", "Access to All Events", "Food Coupons"],
      price: 400,
    },
    {
      id: "classic",
      title: "Classic Pack",
      details: ["1-Day General Access", "Access to All Events", "Food Coupons"],
      price: 400,
    },
  ];
  const resetFormData = useComboStore((state) => state.resetFormData);
  React.useEffect(() => {
    resetFormData();
  }, [resetFormData]);
  return (
    <div className="bg-gradient-blue  overflow-y-auto p-6 sm:p-10 ">
      <div className="flex flex-wrap justify-center gap-6 mb-8 ">
        {packs.map((pack) => {
          return <ComboPackCard key={pack.id} onOpen={()=> window.open('https://forms.gle/2AF6GNofg4bmajTS8')} {...pack} />;
        })}
      </div>
    </div>
  );
}
