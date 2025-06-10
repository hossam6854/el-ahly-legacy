"use client";
import { motion } from "framer-motion";

const tabs = [
  { id: "all", name: "الكل", icon: "📅" },
  { id: "league", name: "الدوري المصري", icon: "🏆" },
  { id: "africa", name: "دوري الأبطال", icon: "🌍" },
  { id: "cup", name: "كأس مصر", icon: "🥇" },
  { id: "super", name: "السوبر", icon: "⚡" },
  { id: "friendly", name: "ودية", icon: "🤝" },
  { id: "clubworldcup", name: "كأس العالم للأندية", icon: "🏆" },
];

const FilterTabs = ({ active, setActive }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full duration-300 text-base font-semibold border 
              ${
                isActive
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/30 border-red-700"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 cursor-pointer"
              }`}
            aria-label={`تصفية حسب ${tab.name}`}
          >
            <span
              className="text-xl"
              aria-hidden="true"
            >
              {tab.icon}
            </span>
            <span>{tab.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
