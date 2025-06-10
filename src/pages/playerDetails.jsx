import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { teamData } from "../data/playersData";
import {
  FaUserTie,
  FaTrophy,
  FaFutbol,
  FaChartLine,
  FaTshirt,
  FaInfoCircle,
  FaFlag,
  FaBirthdayCake,
  FaWeight,
  FaRulerVertical,
  FaCalendarAlt,
  FaHistory,
  FaShieldAlt,
  FaStar,
  FaMedal,
  FaRunning,
  FaStopwatch,
  FaArrowLeft,
} from "react-icons/fa";

const PlayerDetails = () => {
  const { id } = useParams();

  // Helper function to find player
  const findPlayer = () => {
    if (teamData.coach.id === parseInt(id)) return teamData.coach;

    const positions = [
      ...teamData.players,
    ];

    return positions.find((player) => player.id === parseInt(id)) || null;
  };

  const player = findPlayer();

  if (!player) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center text-white p-10 border-2 border-red-600 rounded-lg bg-gray-800/80 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            Player Not Found
          </h2>
          <p className="text-gray-300">
            No player or coach found with this ID in Al Ahly records
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <PlayerHeader player={player} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12" dir="rtl">         
           <div className="lg:col-span-2 space-y-8">
            <PlayerStats player={player} />
            <PlayerBio player={player} />
            {player.details.achievements && (
              <PlayerAchievements achievements={player.details.achievements} />
            )}
          </div>
          <div className="lg:col-span-1 order-first">
            <PlayerProfileCard player={player} />
            <PlayerAttributes player={player} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Sub-components
const PlayerHeader = ({ player }) => (
  <div className="text-center mb-12 relative" dir="rtl">
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      <h1
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700"
        dir="rtl"
      >
        {player.name}
      </h1>
      <p className="mt-3 text-lg text-gray-300 font-medium" >
        {player.isCoach ? "مدرب - الأهلي" : `${player.positions.join(' و ')} - الأهلي`}
      </p>
      {player.isCaptain && (
        <div className="mt-3 flex justify-center">
          <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
            <FaShieldAlt className="mr-2" /> كابتن الفريق
          </span>
        </div>
      )}
    </motion.div>
    
    {/* زر العودة مع تعديلات الموضع */}
    <button
      className="absolute top-0 left-0 flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer"
      onClick={() => window.history.back()}
    >
      <FaArrowLeft className="ml-2" />
      <span>العودة للتشكيله</span>
    </button>
    
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
  </div>
);

const PlayerProfileCard = ({ player }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden"
    dir="rtl"
  >
    <div className="relative group p-6 flex flex-col items-center" dir="rtl">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

      {/* Player image */}
      <div className="relative z-10">
        <div className="relative w-48 h-48 rounded-full border-4 border-red-600 overflow-hidden shadow-lg">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {!player.isCoach && (
          <div className="absolute -bottom-3 -right-3 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-20">
            {player.number}
          </div>
        )}
      </div>

      {/* Basic info */}
      <div className="mt-6 text-center space-y-2">
        <h3 className="text-xl font-semibold">{player.name}</h3>
        <div className="flex items-center justify-center text-gray-300">
          <span>{player.nationality}</span>
        </div>
        {!player.isCoach && (
          <div className="flex items-center justify-center text-gray-300">
            <span>العمر: {player.age}</span>
          </div>
        )}
      </div>

      {/* Special badge for important players */}
      {player.isLegend && (
        <div className="mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-4 py-1 rounded-full text-xs font-bold flex items-center">
          <FaStar className="mr-1" /> اسطورة
        </div>
      )}
    </div>

    {/* Additional details */}
    <div className="border-t border-gray-700 p-4">
      {!player.isCoach && (
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-red-500 font-bold">الطول</div>
            <div className="text-white">{player.details.height}</div>
          </div>
          <div>
            <div className="text-red-500 font-bold">الوزن</div>
            <div className="text-white">{player.details.weight}</div>
          </div>
          <div className="col-span-2">
            <div className="text-red-500 font-bold">العقد حتى</div>
            <div className="text-white">{player.details.contractUntil}</div>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

const PlayerAttributes = ({ player }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mt-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-6"
    dir="rtl"
  >
    <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
      <FaStar className="mr-2" /> المميزات الأساسية
    </h3>

    {player.isCoach ? (
      <div className="space-y-4">
        <AttributeBar label="الكفاءة الاستراتيجية" value={90} />
        <AttributeBar label="إدارة الفريق" value={85} />
        <AttributeBar label="التدريب" value={88} />
        <AttributeBar label="الخبرة" value={95} />
      </div>
    ) : (
      <div className="space-y-4">
        {player.position === "حارس" && (
          <>
            <AttributeBar label="السرعة" value={player.attributes.reflexes} />
            <AttributeBar label="التعامل" value={player.attributes.handling} />
            <AttributeBar
              label="الوضعية"
              value={player.attributes.positioning}
            />
            <AttributeBar label="الدفاع" value={player.attributes.defending} />
            <AttributeBar label="البدنية" value={player.attributes.physical} />
          </>
        )}
        {["دفاع", "وسط", "هجوم"].includes(player.position) && (
          <>
            <AttributeBar label="السرعة" value={player.attributes.pace} />
            <AttributeBar label="الشوط" value={player.attributes.shooting} />
            <AttributeBar label="التمرير" value={player.attributes.passing} />
            <AttributeBar
              label="الإرتداء"
              value={player.attributes.dribbling}
            />
            <AttributeBar label="الدفاع" value={player.attributes.defending} />
            <AttributeBar label="البدنية" value={player.attributes.physical} />
          </>
        )}
      </div>
    )}
  </motion.div>
);

const AttributeBar = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const PlayerStats = ({ player }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-6"
    dir="rtl"
  >
    <h3 className="text-xl font-bold mb-6 flex items-center text-red-500">
      الاحصائيات <FaChartLine className="mr-2" />
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {player.isCoach ? (
        <>
          <StatCard
            icon={<FaUserTie className="text-2xl text-red-500" />}
            title="السنوات"
            value={player.since}
          />
          <StatCard
            icon={<FaTrophy className="text-2xl text-red-500" />}
            title="البطولات"
            value={player.trophies}
          />
          <StatCard
            icon={<FaMedal className="text-2xl text-red-500" />}
            title="النسبة"
            value={`${Number(player.winRate).toFixed(2)}%`}
          />
          <StatCard
            icon={<FaHistory className="text-2xl text-red-500" />}
            title="الماتشات"
            value={player.matchesCoached}
          />
        </>
      ) : (
        <>
          <StatCard
            icon={<FaFutbol className="text-2xl text-red-500" />}
            title="الماتشات"
            value={player.stats.matches || "--"}
          />
          <StatCard
            icon={<FaRunning className="text-2xl text-red-500" />}
            title="الاهداف"
            value={player.stats.goals || "--"}
          />
          <StatCard
            icon={<FaTshirt className="text-2xl text-red-500" />}
            title="الإساتيس"
            value={player.stats.assists || "--"}
          />
          {player.stats.cleanSheets ? (
            <StatCard
              icon={<FaShieldAlt className="text-2xl text-red-500" />}
              title="نظافة الشباك"
              value={player.stats.cleanSheets}
            />
          ) : (
            <StatCard
              icon={<FaStopwatch className="text-2xl text-red-500" />}
              title="الدقايق"
              value={player.stats.minutesPlayed || "--"}
            />
          )}
        </>
      )}
    </div>
  </motion.div>
);

const StatCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 flex flex-col items-center text-center"
  >
    <div className="mb-2">{icon}</div>
    <div className="text-sm text-gray-400 mb-1">{title}</div>
    <div className="text-xl font-bold">{value}</div>
  </motion.div>
);

const PlayerBio = ({ player }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-6"
    dir="rtl"
  >
    <h3 className="text-xl font-bold mb-6 flex items-center text-red-500">
      {player.isCoach ? "الدرب" : "اللاعب"}
      <FaInfoCircle className="mr-2" />
    </h3>

    <div className="space-y-5">
      {Object.entries(player.details).map(([label, value]) => {
        if (label === "achievements") return null;

        return (
          <div
            key={label}
            className="flex flex-col sm:flex-row justify-between py-3 border-b border-gray-700"
          >
            <div className="flex items-center text-gray-400 font-medium mb-2 sm:mb-0">
              <span className="ml-2">{convertLabel(label)}</span>
              {getDetailIcon(label)}
            </div>
            <div className="text-white text-right sm:text-left">
              {Array.isArray(value) ? (
                <div className="flex flex-wrap gap-2 justify-end sm:justify-start">
                  {value.map((item, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                value
              )}
            </div>
          </div>
        );
      })}
    </div>
  </motion.div>
);

const PlayerAchievements = ({ achievements }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-6"
    dir="rtl"
  >
    <h3 className="text-xl font-bold mb-6 flex items-center text-red-500">
      الجوائز <FaTrophy className="mr-2" />
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement, i) => (
        <div key={i} className="flex items-start">
          <span className="text-gray-300">{achievement}</span>

          <div className="bg-red-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
            <FaMedal className="text-white text-xs" />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// Helper functions
const getDetailIcon = (label) => {
  const icons = {
    birthDate: <FaBirthdayCake />,
    height: <FaRulerVertical />,
    weight: <FaWeight />,
    contractUntil: <FaCalendarAlt />,
    previousTeams: <FaHistory />,
    experience: <FaUserTie />,
    nationality: <FaFlag />,
    strengths: <FaMedal />,
  };
  return icons[label] || <FaInfoCircle />;
};

const convertLabel = (label) => {
  const map = {
    birthDate: "تاريخ الميلاد",
    height: "الطول",
    weight: "الوزن",
    contractUntil: "العقد حتى",
    previousTeams: "الفرق السابقة",
    experience: "الخبرة",
    nationality: "الجنسية",
    strengths: "القوية",
  };
  return map[label] || label;
};

export default PlayerDetails;
