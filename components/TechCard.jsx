import React from "react";
import Image from "next/image";

export default function TechCard({ type, src, alt, width, height, styles }) {
  return (
    <div className="group flex flex-col items-center justify-center text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gradient-to-br from-gray-100/30 to-gray-100/10 dark:from-gray-800/30 dark:to-gray-800/10 hover:shadow-lg hover:backdrop-blur-sm">
      {/* Image container with subtle glow on hover */}
      <div className={`relative ${styles} rounded-lg p-3 ${width || "w-24"} ${height || "h-24"} transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-xl`}>
        <Image src={src} alt={alt} fill sizes="100%" className="object-contain" />
      </div>
      {/* Text with gradient color that appears on hover */}
      <p className="pt-3 text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-500">
        {type}
      </p>
    </div>
  );
}
