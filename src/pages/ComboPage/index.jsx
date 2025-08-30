import React from "react";
import { ComboPackCard,ComboModal } from "../../components";

export default function ComboPage() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="bg-gradient-blue h-[calc(100vh-7rem)] overflow-y-auto p-6 sm:p-10 ">
            <ComboPackCard onOpen={setIsOpen}/>
        {isOpen && (
            <ComboModal onClose={setIsOpen}/>
        )}
        </div>
    );
}
