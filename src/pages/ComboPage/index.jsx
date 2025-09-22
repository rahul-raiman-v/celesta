import React from "react";
import { ComboPackCard } from "../../components";
import { useComboStore } from "../../store";

export default function ComboPage() {
  const packs = [
    {
      id: "superior",
      title: "Superior Pack",
      details: [
        "1-Technical",
        "1-Non-Technical",
        "Food Coupons",
        "Exclusive Kit",
        "Minimum 4 members",
        "Maximum 5 members",
      ],
      price: 400,
    },
    {
      id: "prime",
      title: "Prime Pack",
      details: [
        "1-Hackathon",
        "Food Coupons",
        "Exclusive Kit",
        "Minimum 4 members",
        "Maximum 5 members",
      ],
      price: 400,
      isPopular: true,
    },
    {
      id: "elite",
      title: "Elite Pack",
      details: [
        "2-Technical",
        "Food Coupons",
        "Exclusive Kit",
        "Minimum 4 members",
        "Maximum 5 members",
      ],
      price: 400,
    },
    {
      id: "classic",
      title: "Classic Pack",
      details: [
        "1-Technical",
        "1-Workshop",
        "Food Coupons",
        "Exclusive Kit",
        "Minimum 4 members",
        "Maximum 5 members",
      ],
      price: 400,
    },
  ];
  const resetFormData = useComboStore((state) => state.resetFormData);
  React.useEffect(() => {
    resetFormData();
  }, [resetFormData]);
  return (
    <div className="bg-gradient-blue  overflow-y-auto p-6 sm:p-10 h-[calc(100dvh-5.5rem)]">
      <p className="text-5xl text-center mb-8 font-bold text-blue-600">
        Student's Combo
      </p>
      <p className="mb-8 text-center text-2xl lg:w-1/2 mx-auto  font-semibold text-violet-600">
        Registration fee is ₹400 per participant and includes Lunch,
        Refreshments, and an Exclusive Kit.
      </p>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mb-8 ">
        {packs.map((pack) => {
          return <ComboPackCard key={pack.id} {...pack} />;
        })}
      </div>
    </div>
  );
}
