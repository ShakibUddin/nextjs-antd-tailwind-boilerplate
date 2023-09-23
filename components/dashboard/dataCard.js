import Link from "next/link";
import React from "react";

const DataCard = ({ title, total, icon, bgColor, style }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center p-4 w-64 h-48 rounded-md shadow-md 
        ${bgColor} ${style}`}
    >
      {icon}
      <p className="text-4xl font-bold text-center text-white">{total}</p>
      <p className="text-sm font-bold text-center text-white">{title}</p>
      <Link href={""} className="text-white text-sm mt-4 hover:text-white">
        See More
      </Link>
    </div>
  );
};

export default DataCard;
