import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaHistory,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaSearch,
  FaTrophy,
  FaFutbol,
} from "react-icons/fa";
import {
  GiSoccerBall,
  GiLaurelsTrophy,
  GiEgyptianTemple,
} from "react-icons/gi";
import { MdOutlineStadium, MdEmojiEvents } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { fullTimelineData, data } from "../data/playersData";
import CountUp from "react-countup";

// مكون لعرض قسم القوائم
const renderListSection = (title, icon, items) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center bg-[#C8102E] text-white p-3 rounded-lg">
        {icon}
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <ListItem key={i} content={item} />
        ))}
      </ul>
    </div>
  );
};

// مكون لعنصر القائمة الفردي
const ListItem = ({ content }) => (
  <motion.li
    className="flex items-start bg-gray-50 p-3 rounded-lg border-r-4 border-[#C8102E]"
    whileHover={{ x: 5 }}
  >
    <span className="inline-block w-3 h-3 bg-[#C8102E] rounded-full mt-1.5 ml-2"></span>
    <span className="text-gray-800">{content}</span>
  </motion.li>
);

// مكون رسالة عدم وجود نتائج
const NoResultsMessage = ({ onResetSearch }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-16 bg-white rounded-xl shadow-lg"
  >
    <div className="max-w-md mx-auto">
      <GiSoccerBall className="text-5xl text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl text-gray-600 mb-2">لا توجد نتائج مطابقة للبحث</h3>
      <p className="text-gray-500">حاول استخدام كلمات بحث مختلفة</p>
      <button
        onClick={onResetSearch}
        className="mt-4 px-6 py-2 bg-[#C8102E] text-white rounded-full hover:bg-[#e53e3e] transition-all"
      >
        عرض كل التاريخ
      </button>
    </div>
  </motion.div>
);

const TimelinePage = () => {
  const [activeDecade, setActiveDecade] = useState("1900s");
  const [expandedYear, setExpandedYear] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(fullTimelineData);
  const [activeTab, setActiveTab] = useState("events");

  useEffect(() => {
    const handleScroll = () => {
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredData(fullTimelineData);
      } else {
        const filtered = {};
        Object.keys(fullTimelineData).forEach((decade) => {
          filtered[decade] = fullTimelineData[decade].filter((yearData) => {
            return (
              yearData.year.toString().includes(searchTerm) ||
              yearData.championships.some((champ) =>
                champ.toLowerCase().includes(searchTerm.toLowerCase())
              ) ||
              yearData.coaches.some((coach) =>
                coach.toLowerCase().includes(searchTerm.toLowerCase())
              ) ||
              yearData.events.some((event) =>
                event.toLowerCase().includes(searchTerm.toLowerCase())
              ) ||
              yearData.players.some((player) =>
                player.toLowerCase().includes(searchTerm.toLowerCase())
              )
            );
          });
        });
        setFilteredData(filtered);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const renderContent = (yearData) => {
    switch (activeTab) {
      case "events":
        return (
          <div className="space-y-4">
            <div className="flex items-center bg-[#C8102E] text-white p-3 rounded-lg">
              <RiHistoryFill className="ml-2 text-xl" />
              <h4 className="text-lg font-bold">أحداث تاريخية</h4>
            </div>
            <ul className="space-y-3">
              {yearData.events.map((event, i) => (
                <motion.li
                  key={i}
                  className="flex items-start bg-gray-50 p-3 rounded-lg border-r-4 border-[#C8102E]"
                  whileHover={{ x: 5 }}
                >
                  <span className="inline-block w-3 h-3 bg-[#C8102E] rounded-full mt-1.5 ml-2"></span>
                  <span className="text-gray-800">{event}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-4">
            <div className="flex items-center bg-[#C8102E] text-white p-3 rounded-lg">
              <MdEmojiEvents className="ml-2 text-xl" />
              <h4 className="text-lg font-bold">إنجازات ملحمية</h4>
            </div>
            <ul className="space-y-3">
              {yearData.championships.map((champ, i) => (
                <motion.li
                  key={i}
                  className="flex items-start bg-gray-50 p-3 rounded-lg border-r-4 border-[#C8102E]"
                  whileHover={{ x: 5 }}
                >
                  <span className="inline-block w-3 h-3 bg-[#C8102E] rounded-full mt-1.5 ml-2"></span>
                  <span className="text-gray-800">{champ}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        );
      case "people":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center bg-[#C8102E] text-white p-3 rounded-lg">
                <FaUsers className="ml-2 text-xl" />
                <h4 className="text-lg font-bold">قادة الفريق</h4>
              </div>
              <ul className="space-y-3">
                {yearData.coaches.map((coach, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start bg-gray-50 p-3 rounded-lg border-r-4 border-[#C8102E]"
                    whileHover={{ x: 5 }}
                  >
                    <span className="inline-block w-3 h-3 bg-[#C8102E] rounded-full mt-1.5 ml-2"></span>
                    <span className="text-gray-800">{coach}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center bg-[#C8102E] text-white p-3 rounded-lg">
                <FaFutbol className="ml-2 text-xl" />
                <h4 className="text-lg font-bold">أساطير الملعب</h4>
              </div>
              <ul className="space-y-3">
                {yearData.players.map((player, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start bg-gray-50 p-3 rounded-lg border-r-4 border-[#C8102E]"
                    whileHover={{ x: 5 }}
                  >
                    <span className="inline-block w-3 h-3 bg-[#C8102E] rounded-full mt-1.5 ml-2"></span>
                    <span className="text-gray-800">{player}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "stats":
        return (
          <div className="space-y-4">
            <div className="flex items-center bg-[#C8102E] text-white p-3 rounded-lg">
              <FaShieldAlt className="ml-2 text-xl" />
              <h4 className="text-lg font-bold">سجلات قياسية</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-gradient-to-br from-[#C8102E] to-[#e53e3e] p-4 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <FaUsers className="ml-2" />
                  <p className="text-sm font-medium">عدد الأعضاء</p>
                </div>
                <p className="text-2xl font-bold">
                  <CountUp
                    end={yearData.stats.members}
                    duration={1}
                    separator=","
                  />
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#C8102E] to-[#e53e3e] p-4 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <GiSoccerBall className="ml-2" />
                  <p className="text-sm font-medium">عدد المباريات</p>
                </div>
                <p className="text-2xl font-bold">
                  <CountUp
                    end={yearData.stats.matches}
                    duration={1}
                    separator=","
                  />
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#C8102E] to-[#e53e3e] p-4 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <RiNumber1 className="ml-2" />
                  <p className="text-sm font-medium">عدد الأهداف</p>
                </div>
                <p className="text-2xl font-bold">
                  <CountUp
                    end={yearData.stats.goals}
                    duration={1}
                    separator=","
                  />
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#C8102E] to-[#e53e3e] p-4 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <FaTrophy className="ml-2" />
                  <p className="text-sm font-medium">معدل الأهداف</p>
                </div>
                <p className="text-2xl font-bold">
                  <CountUp
                    end={yearData.stats.goals / yearData.stats.matches}
                    decimals={2}
                    duration={1}
                  />
                </p>
              </motion.div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
      dir="rtl"
    >
      {/* المحتوى الرئيسي */}
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute -top-20 -left-20 opacity-10 z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <GiEgyptianTemple className="text-[#C8102E] text-9xl" />
          </motion.div>
          <motion.div
            className="absolute -bottom-20 -right-20 opacity-10 z-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            <GiLaurelsTrophy className="text-[#C8102E] text-9xl" />
          </motion.div>

          <div className="relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-[#C8102E] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8102E] to-[#a00c22]">
                أمجاد النادي الأهلي عبر التاريخ
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              منذ تأسيس الإمبراطورية عام 1907، قصة مجد لا تنتهي
            </motion.p>
          </div>
        </motion.div>

        {/* إحصائيات سريعة */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#C8102E] flex flex-col items-center"
            whileHover={{ y: -5 }}
          >
            <GiLaurelsTrophy className="text-4xl text-[#C8102E] mb-3" />
            <p className="text-gray-600 text-sm mb-1">البطولات الأفريقية</p>
            <p className="text-3xl font-bold text-[#C8102E]">
              <CountUp end={data.championshipsData[2].count + data.championshipsData[3].count + data.championshipsData[4].count + data.championshipsData[6].count + data.championshipsData[7].count + data.championshipsData[10].count + data.championshipsData[11].count} duration={2} />
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#C8102E] flex flex-col items-center"
            whileHover={{ y: -5 }}
          >
            <MdEmojiEvents className="text-4xl text-[#C8102E] mb-3" />
            <p className="text-gray-600 text-sm mb-1">البطولات المحلية</p>
            <p className="text-3xl font-bold text-[#C8102E]">
              <CountUp end={data.championshipsData[1].count + data.championshipsData[0].count + data.championshipsData[5].count  + data.championshipsData[8].count + data.championshipsData[9].count} duration={2} />
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#C8102E] flex flex-col items-center"
            whileHover={{ y: -5 }}
          >
            <FaUsers className="text-4xl text-[#C8102E] mb-3" />
            <p className="text-gray-600 text-sm mb-1">عدد الأعضاء</p>
            <p className="text-3xl font-bold text-[#C8102E]">
              <CountUp end={1500000} duration={2} separator="," />
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#C8102E] flex flex-col items-center"
            whileHover={{ y: -5 }}
          >
            <LiaBirthdayCakeSolid className="text-4xl text-[#C8102E] mb-3" />
            <p className="text-gray-600 text-sm mb-1">سنوات من المجد</p>
            <p className="text-3xl font-bold text-[#C8102E]">
              <CountUp end={new Date().getFullYear() - 1907} duration={2} />
            </p>
          </motion.div>
        </motion.div>

        {/* أزرار العقود */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <div className="flex overflow-x-auto pb-4 space-x-4 px-2">
            {Object.keys(filteredData).map((decade) => (
              <motion.button
                key={decade}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveDecade(decade);
                  setExpandedYear(null);
                }}
                className={`px-6 py-3 rounded-xl text-lg font-medium transition-all flex-shrink-0 flex items-center ${
                  activeDecade === decade
                    ? "bg-gradient-to-r from-[#C8102E] to-[#e53e3e] text-white shadow-xl"
                    : "bg-white text-gray-800 hover:bg-gray-50 shadow-md cursor-pointer"
                }`}
              >
                {decade}
                {activeDecade === decade && (
                  <FaStar className="text-yellow-300 mr-2 animate-pulse" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* الخط الزمني */}
        <div className="relative">
          {/* الخط الذهبي */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#C8102E] via-[#e53e3e] to-[#C8102E] transform -translate-x-1/2 shadow-xl rounded-full"></div>

          {/* الأحداث */}
          {filteredData[activeDecade]?.length > 0 ? (
            <div className="space-y-20">
              {filteredData[activeDecade].map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* نقطة على الخط */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute left-1/2 h-8 w-8 rounded-full bg-gradient-to-br from-[#C8102E] to-[#e53e3e] transform -translate-x-1/2 -translate-y-1 z-10 border-4 border-white shadow-2xl flex items-center justify-center"
                  >
                    <FaStar className="text-yellow-200 text-xs" />
                  </motion.div>

                  {/* بطاقة الحدث */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full max-w-md ${
                      index % 2 === 0 ? "ml-8" : "mr-8"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                        expandedYear === item.year
                          ? "ring-4 ring-[#C8102E] transform scale-[1.02]"
                          : "hover:shadow-2xl"
                      }`}
                      onClick={() => toggleYear(item.year)}
                    >
                      {/* عنوان البطاقة */}
                      <div
                        className={`p-6 flex justify-between items-center transition-all ${
                          expandedYear === item.year
                            ? "bg-gradient-to-r from-[#C8102E] to-[#e53e3e] text-white"
                            : "bg-white text-gray-800"
                        }`}
                      >
                        <div>
                          <h3 className="text-2xl font-bold">{item.year}</h3>
                          {item.championships.length > 0 && (
                            <p className="text-sm mt-1 flex items-center">
                              <GiLaurelsTrophy className="ml-1" />
                              {item.championships.slice(0, 2).join("، ")}
                              {item.championships.length > 2 && " + المزيد"}
                            </p>
                          )}
                        </div>
                        {expandedYear === item.year ? (
                          <FaChevronUp className="text-xl" />
                        ) : (
                          <FaChevronDown className="text-xl" />
                        )}
                      </div>

                      {/* محتوى البطاقة */}
                      <AnimatePresence>
                        {expandedYear === item.year && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 space-y-6">
                              {renderContent(item)}

                              {/* مكون قائمة منظمة */}
                              {renderListSection(
                                "قلاع المجد",
                                <MdOutlineStadium className="ml-2 text-xl" />,
                                item.stadiums
                              )}

                              {renderListSection(
                                "مدربون",
                                <MdOutlineStadium className="ml-2 text-xl" />,
                                item.coaches
                              )}

                              {renderListSection(
                                "لاعبون",
                                <MdOutlineStadium className="ml-2 text-xl" />,
                                item.players
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {filteredData[activeDecade]?.length === 0 && (
                        <NoResultsMessage
                          onResetSearch={() => setSearchTerm("")}
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-xl shadow-lg"
            >
              <div className="max-w-md mx-auto">
                <GiSoccerBall className="text-5xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-gray-600 mb-2">
                  لا توجد نتائج مطابقة للبحث
                </h3>
                <p className="text-gray-500">حاول استخدام كلمات بحث مختلفة</p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 px-6 py-2 bg-[#C8102E] text-white rounded-full hover:bg-[#e53e3e] transition-all"
                >
                  عرض كل التاريخ
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* خاتمة ملحمية */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 bg-gradient-to-r from-[#C8102E] to-[#e53e3e] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="p-8 md:p-12 text-white text-center">
            <GiEgyptianTemple className="text-6xl mx-auto mb-6 opacity-20" />
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              الأهلي.. أسطورة تتجدد
            </h3>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              ليس مجرد نادٍ رياضى، بل هو تاريخ مصر الحديث، هو الشغف الذى يجمع
              الملايين، هو القلعة الحمراء التى لا تقهر، هو حكاية مجد لا تنتهي.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white text-[#b89e14] bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-80">أفضل نادٍ أفريقيا</p>
                <p className="text-2xl font-bold">في القرن 20</p>
              </div>
              <div className="bg-white text-[#b89e14] bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-80">أكثر الأندية تتويجاً</p>
                <p className="text-2xl font-bold">عالمياً</p>
              </div>
              <div className="bg-white text-[#b89e14] bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-80">أعلى نسبة جماهير</p>
                <p className="text-2xl font-bold">في إفريقيا</p>
              </div>
              <div className="bg-white text-[#b89e14] bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-80">أكثر نادٍ مصري</p>
                <p className="text-2xl font-bold">تأثيراً</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelinePage;
