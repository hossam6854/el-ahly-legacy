// pages/MatchDetailsPage.js
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFutbol, FaExchangeAlt, FaVideo, FaArrowLeft } from "react-icons/fa";
import { GiWhistle } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { TbCards } from "react-icons/tb";
import { IoMdStats } from "react-icons/io";
import { BsCalendarDate, BsClock } from "react-icons/bs";
import { MdStadium, MdPeople } from "react-icons/md";

const MatchDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [matches, setMatches] = useState(null);
  const [activeTab, setActiveTab] = useState("events");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة جلب البيانات
    setTimeout(() => {
      const storedMatches =
        JSON.parse(localStorage.getItem("ahlyMatches")) || [];
      setMatches(storedMatches);
      setIsLoading(false);
    }, 800);
  }, []);

  const match = useMemo(
    () => matches?.find((m) => String(m.id) === String(id)),
    [matches, id]
  );

  const renderEventIcon = (type) => {
    switch (type) {
      case "goal":
        return <IoIosFootball className="text-green-400" />;
      case "yellowCard":
        return <TbCards className="text-yellow-400" />;
      case "redCard":
        return <TbCards className="text-red-500" />;
      case "substitution":
        return <FaExchangeAlt className="text-blue-400" />;
      case "penalty":
        return <FaFutbol className="text-purple-400" />;
      default:
        return <GiWhistle className="text-gray-400" />;
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="text-4xl text-red-600"
        >
          <FaFutbol />
        </motion.div>
      </div>
    );

  if (!match)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold mb-2">لم يتم العثور على المباراة</h2>
        <p className="text-gray-400 mb-6">
          المباراة المطلوبة غير متوفرة أو قد تمت إزالتها
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full flex items-center gap-2 transition-all"
        >
          <FaArrowLeft /> العودة للخلف
        </button>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      dir="rtl"
    >
      {/* Header with competition info */}
      <div className="bg-black bg-opacity-50 py-4 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-all"
          >
            <FaArrowLeft className="text-lg" />
          </button>

          <div className="flex items-center gap-3">
            <img
              src={match.competition.logo}
              alt={match.competition.name}
              className="h-10"
            />
            <div className="text-center">
              <h3 className="font-bold">{match.competition.name}</h3>
              {match.competition.stage && (
                <span className="text-xs bg-red-600 px-2 py-1 rounded-full">
                  {match.competition.stage}
                </span>
              )}
            </div>
          </div>

          <div className="text-sm flex items-center gap-1 text-gray-400">
            <BsCalendarDate /> {match.date}
          </div>
        </div>
      </div>

      {/* Match Score Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-6 bg-gradient-to-r from-blue-900/30 to-red-900/30"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          {/* Team A */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 rounded-full p-3 mb-3 border-2 border-gray-700"
            >
              <img
                src={match.teamA.logo}
                alt={match.teamA.name}
                className="h-16"
              />
            </motion.div>
            <h3 className="text-xl font-bold text-center">
              {match.teamA.name}
            </h3>
          </div>

          {/* Score */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 my-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-5xl font-extrabold bg-gray-800 rounded-lg px-6 py-3"
              >
                {match.teamA.goals}
              </motion.div>
              <div className="text-2xl font-bold">-</div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-extrabold bg-gray-800 rounded-lg px-6 py-3"
              >
                {match.teamB.goals}
              </motion.div>
            </div>

            <div className="flex justify-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <BsClock /> {match.time}
              </div>
              <div className="flex items-center gap-1">
                <MdStadium /> {match.stadium}
              </div>
            </div>

            {match.status === "مكتمل" && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block mt-3 px-3 py-1 bg-green-600 rounded-full text-xs font-bold"
              >
                انتهت المباراة
              </motion.div>
            )}
          </div>

          {/* Team B */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 rounded-full p-3 mb-3 border-2 border-gray-700"
            >
              <img
                src={match.teamB.logo}
                alt={match.teamB.name}
                className="h-16"
              />
            </motion.div>
            <h3 className="text-xl font-bold text-center">
              {match.teamB.name}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Match Info Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab("events")}
            className={`px-4 py-2 font-medium ${
              activeTab === "events"
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-400"
            }`}
          >
            الأحداث
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`px-4 py-2 font-medium ${
              activeTab === "stats"
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-400"
            }`}
          >
            الإحصائيات
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`px-4 py-2 font-medium ${
              activeTab === "info"
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-400"
            }`}
          >
            معلومات المباراة
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <AnimatePresence mode="wait">
          {activeTab === "events" && (
            <motion.div
              key="events"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold flex items-center gap-2">
                <IoMdStats /> أحداث المباراة
              </h2>

              {match.events?.length ? (
                <div className="space-y-4">
                  {match.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-start gap-4 p-4 rounded-lg ${
                        index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50"
                      }`}
                    >
                      <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                        {renderEventIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{event.type}</div>
                        <div className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                          <span className="bg-gray-700 px-2 py-1 rounded">
                            {event.minute}'
                          </span>
                          {event.type === "substitution" ? (
                            <>
                              <span className="text-green-500 px-2 py-1 rounded">
                                {event.playerIn}
                              </span>
                              <span className="text-red-500 px-2 py-1 rounded">
                                {event.playerOut}
                              </span>
                            </>
                          ) : (
                            <span>{event.player}</span>
                          )}
                        </div>
                      </div>
                      {event.team === "teamA" ? (
                        <img
                          src={match.teamA.logo}
                          alt={match.teamA.name}
                          className="h-6"
                        />
                      ) : (
                        <img
                          src={match.teamB.logo}
                          alt={match.teamB.name}
                          className="h-6"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-500">
                  لا توجد أحداث مسجلة لهذه المباراة
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "stats" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold flex items-center gap-2">
                <IoMdStats /> إحصائيات المباراة
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Possession */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    الاستحواذ
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right flex-1">
                      <div className="text-lg font-bold">
                        {match.teamA.possession}%
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full mt-1">
                        <div
                          className="h-full bg-red-600 rounded-full"
                          style={{ width: `${match.teamA.possession}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-left flex-1">
                      <div className="text-lg font-bold">
                        {match.teamB.possession}%
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full mt-1">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${match.teamB.possession}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shots */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    التسديدات
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">
                        {match.teamA.shots}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        ({match.teamA.shotsOnTarget} على المرمى)
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">
                        {match.teamB.shots}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        ({match.teamB.shotsOnTarget} على المرمى)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corners */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    الركنيات
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-red-500">
                      {match.teamA.corners}
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-2xl font-bold text-blue-500">
                      {match.teamB.corners}
                    </div>
                  </div>
                </div>

                {/* Fouls */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    الأخطاء
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-red-500">
                      {match.teamA.fouls || 0}
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-2xl font-bold text-blue-500">
                      {match.teamB.fouls || 0}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    التسلل
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500">
                      {match.teamA.offsides || 0}
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-xl font-bold text-blue-500">
                      {match.teamB.offsides || 0}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    بطاقات صفراء
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-yellow-500">
                      {match.teamA.yellowCards || 0}
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-xl font-bold text-yellow-500">
                      {match.teamB.yellowCards || 0}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    بطاقات حمراء
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500">
                      {match.teamA.redCards || 0}
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-xl font-bold text-red-500">
                      {match.teamB.redCards || 0}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-sm text-gray-400 mb-3">
                    تمريرات ناجحة
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500">
                      {match.teamA.passes || 0}
                    </div>
                    <div className="text-gray-400 text-xs">vs</div>
                    <div className="text-xl font-bold text-blue-500">
                      {match.teamB.passes || 0}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "info" && (
            <motion.div
              key="info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold flex items-center gap-2">
                <IoMdStats /> معلومات المباراة
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold border-b border-gray-700 pb-2 mb-4">
                    تفاصيل المباراة
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MdStadium className="text-gray-400 text-xl" />
                      <div>
                        <div className="text-sm text-gray-400">الملعب</div>
                        <div className="font-medium">{match.stadium}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <GiWhistle className="text-gray-400 text-xl" />
                      <div>
                        <div className="text-sm text-gray-400">الحكم</div>
                        <div className="font-medium">
                          {match.referee || "غير معروف"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MdPeople className="text-gray-400 text-xl" />
                      <div>
                        <div className="text-sm text-gray-400">الحضور</div>
                        <div className="font-medium">
                          {match.attendance || "غير معروف"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold border-b border-gray-700 pb-2 mb-4">
                    تقرير المباراة
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {match.report || "لا يوجد تقرير متاح حاليًا لهذه المباراة."}
                  </p>
                </div>
              </div>

              {match.highlights && (
                <div className="mt-6 text-center">
                  <a
                    href={match.highlights}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full transition-all"
                  >
                    <FaVideo /> مشاهدة ملخص المباراة
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MatchDetailsPage;
