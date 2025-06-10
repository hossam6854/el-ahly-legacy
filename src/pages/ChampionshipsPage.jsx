import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFilter,
  FaTrophy,
  FaMedal,
  FaStar,
  FaGlobeAfrica,
  FaCalendarAlt,
  FaVideo,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
  FaShieldAlt,
  FaCrown,
  FaTshirt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { MdStadium } from "react-icons/md";
import { GiSoccerBall, GiLaurelsTrophy, GiChampions, GiTrophyCup, GiAbstract045  } from "react-icons/gi";

import { data } from "../data/playersData";

const ChampionshipsPage = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [count, setCount] = useState(0);
  const [selectedChampionship, setSelectedChampionship] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [activeTab, setActiveTab] = useState("years");
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const videoRef = useRef(null);

  // فلترة البطولات حسب النوع
  const filteredChampionships =
    activeFilter === "الكل"
      ? data.championshipsData
      : data.championshipsData.filter((champ) => champ.type === activeFilter);

  // تأثير العد المتدرج
  useEffect(() => {
    const targetCount = filteredChampionships.reduce(
      (sum, champ) => sum + champ.count,
      0
    );
    const duration = 2000;
    const startTime = Date.now();

    const animateCount = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const currentCount = Math.floor(progress * targetCount);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    animateCount();
  }, [activeFilter]);

  const handleYearSelect = (yearData) => {
    setSelectedYear(yearData);
    setActiveTab("details");
    setVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === selectedChampionship.wins.length - 1 ? 0 : prev + 1
    );
    setVideoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedChampionship.wins.length - 1 : prev - 1
    );
    setVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900" dir="rtl">
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 py-20">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C8102E] to-[#a00c22] mb-6">
            متحف بطولات النادي الأهلي
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="text-[#C8102E] font-bold">إرث من الذهب</span>{" "}
            وملحمة انتصارات لا تُنسى عبر التاريخ
          </p>

          <div className="mt-8 h-1 w-32 bg-[#C8102E] mx-auto rounded-full" />
        </div>

        {/* عدد البطولات */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 text-center border border-gray-200">
          <div className="text-6xl md:text-7xl font-bold text-[#C8102E] mb-4">
            {count}+
          </div>

          <div className="text-xl md:text-2xl text-gray-700 mb-2">
             بطولة محلية وقارية
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-base">
              <FaTrophy className="text-[#C8102E]" />
              <span>
                {data.championshipsData[1].count + data.championshipsData[0].count + data.championshipsData[5].count  + data.championshipsData[8].count + data.championshipsData[9].count} محلية 
              </span>
            </div>
            <div className="flex items-center gap-2 text-base">
              <FaGlobeAfrica className="text-[#C8102E]" />

              <span>
                {data.championshipsData[2].count + data.championshipsData[3].count + data.championshipsData[4].count + data.championshipsData[6].count + data.championshipsData[7].count + data.championshipsData[10].count + data.championshipsData[11].count} قارية
              </span>

            </div>
          </div>
        </div>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveFilter("الكل")}
            className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
              activeFilter === "الكل"
                ? "bg-[#C8102E] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            <FaFilter />
            <span className="text-lg">الكل</span>
          </button>

          <button
            onClick={() => setActiveFilter("دوري")}
            className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
              activeFilter === "دوري"
                ? "bg-[#C8102E] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            <GiSoccerBall />
            <span className="text-lg">الدوري</span>
          </button>

          <button
            onClick={() => setActiveFilter("كأس")}
            className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
              activeFilter === "كأس"
                ? "bg-[#C8102E] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            <FaMedal />
            <span className="text-lg">الكأس</span>
          </button>

          <button
            onClick={() => setActiveFilter("أفريقيا")}
            className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
              activeFilter === "أفريقيا"
                ? "bg-[#C8102E] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            <FaGlobeAfrica />
            <span className="text-lg">أفريقيا</span>
          </button>

          <button
            onClick={() => setActiveFilter("سوبر")}
            className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
              activeFilter === "سوبر"
                ? "bg-[#C8102E] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            <GiLaurelsTrophy />
            <span className="text-lg">السوبر</span>
          </button>
          <button
            onClick={() => setActiveFilter("عربية")}
            className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
              activeFilter === "عربية"
                ? "bg-[#C8102E] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            <GiTrophyCup />
            <span className="text-lg">عربية</span>
          </button>
        </div>

        {/* بطولات النادي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredChampionships.map((championship) => (
            <motion.div
              key={championship.id}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden"
              onClick={() => {
                setSelectedChampionship(championship);
                setSelectedYear(championship.wins[0]);
                setActiveTab("years");
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={championship.image}
                  alt={championship.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">
                    {championship.title}
                  </h3>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1 text-[#C8102E]">
                      <FaTrophy />
                      <span className="font-medium">
                        {championship.count} بطولة
                      </span>
                    </div>

                    {championship.stats.mostTitles && (
                      <div className="bg-[#C8102E] text-xs px-2 py-1 rounded-full">
                        الأكثر تتويجاً
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-[#C8102E] text-white text-sm px-3 py-1 rounded-full shadow-md">
                  {championship.type}
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 text-sm line-clamp-2">
                  {championship.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* قسم إحصاءات إضافية */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-20">
          <h2 className="text-2xl font-bold text-center mb-10 text-[#C8102E] flex items-center justify-center gap-3">
            <GiChampions className="text-3xl" /> سجل الأهلي القياسي
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C8102E] p-3 rounded-full text-white">
                  <FaHistory className="text-xl" />
                </div>
                <h3 className="text-lg font-bold">أرقام تاريخية</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E]">•</span>
                  <span>أكثر نادٍ مصري حصولاً على بطولات رسمية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E]">•</span>
                  <span>ثاني أكثر نادٍ في العالم في عدد البطولات القارية</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C8102E] p-3 rounded-full text-white">
                  <FaShieldAlt className="text-xl" />
                </div>
                <h3 className="text-lg font-bold">إنجازات فريدة</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E]">•</span>
                  <span>
                    أول نادٍ أفريقي يصل لنهائي كأس العالم للأندية (2006)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E]">•</span>
                  <span>
                    أكثر نادٍ أفريقي مشاركة في كأس العالم للأندية (9 مرات)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C8102E] p-3 rounded-full text-white">
                  <FaUsers className="text-xl" />
                </div>
                <h3 className="text-lg font-bold">أرقام جماهيرية</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E]">•</span>
                  <span>أكثر نادٍ مصري جماهيرية حسب استطلاعات الرأي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E]">•</span>
                  <span>
                    أكبر حضور جماهيري في مباراة أفريقية (120,000 متفرج)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* تفاصيل البطولة - مودال */}
      <AnimatePresence>
        {selectedChampionship && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedChampionship(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
             

              {/* عنوان البطولة */}
              <div className="bg-[#C8102E] p-6 sticky top-0 z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
  <div>
    <h3 className="text-2xl md:text-3xl font-bold text-white">
      {selectedChampionship.title}
    </h3>
    <div className="flex flex-wrap items-center gap-4 mt-2 text-white/90">
      <div className="flex items-center gap-2">
        <FaTrophy className="text-yellow-300" />
        <span>{selectedChampionship.count} بطولة</span>
      </div>
      <div className="flex items-center gap-2">
        <FaCalendarAlt />
        <span>
          آخر فوز: {selectedChampionship.wins[0].year}
        </span>
      </div>
    </div>
  </div>

  <div className="flex gap-3">
    <button
      onClick={() => setActiveTab("years")}
      className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
        activeTab === "years"
          ? "bg-white text-[#C8102E]"
          : "bg-[#C8102E]/90 text-white hover:bg-[#C8102E]"
      }`}
    >
      <FaCalendarAlt /> سنوات التتويج
    </button>
    <button
      onClick={() => setActiveTab("details")}
      className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
        activeTab === "details"
          ? "bg-white text-[#C8102E]"
          : "bg-[#C8102E]/90 text-white hover:bg-[#C8102E]"
      }`}
    >
      <FaChartLine /> التفاصيل
    </button>
  </div>
  <button
    onClick={() => setSelectedChampionship(null)}
    className="absolute top-4 left-4 bg-[#C8102E] text-white w-10 h-10 rounded-full flex items-center justify-center z-50 hover:bg-[#a00c22] transition shadow-md"
  >
    <FaTimes />
  </button>
</div>
</div>

              {/* محتوى البطولة */}
              <div className="p-6">
                {activeTab === "years" ? (
                  <>
                    {/* وصف البطولة */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {selectedChampionship.description}
                      </p>
                    </div>

                    {/* سنوات الفوز */}
                    <h4 className="text-xl font-bold text-[#C8102E] mb-6 flex items-center gap-3">
                      <FaCalendarAlt />
                      <span>سنوات التتويج</span>
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
                      {selectedChampionship.wins.map((win) => (
                        <motion.div
                          key={win.year}
                          whileHover={{ scale: 1.03 }}
                          className={`rounded-xl p-4 text-center cursor-pointer transition-all ${
                            selectedYear?.year === win.year
                              ? "bg-[#C8102E] text-white shadow-md"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                          onClick={() => handleYearSelect(win)}
                        >
                          <div className="text-2xl font-bold mb-1">
                            {win.year}
                          </div>
                          <div className="text-xs opacity-80">
                            اضغط للتفاصيل
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* إحصائيات البطولة */}
                    <h4 className="text-xl font-bold text-[#C8102E] mb-6 flex items-center gap-3">
                      <FaChartLine />
                      <span>إحصائيات البطولة</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {selectedChampionship.stats.mostTitles && (
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                          <div className="flex items-center gap-3 text-[#C8102E] mb-2">
                            <FaCrown />
                            <h5 className="font-bold">الأكثر تتويجاً</h5>
                          </div>
                          <p className="text-gray-700 text-sm">
                            النادي الأهلي هو الأكثر تتويجاً بهذه البطولة عبر
                            التاريخ
                          </p>
                        </div>
                      )}

                      {selectedChampionship.stats.longestWinningStreak && (
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                          <div className="flex items-center gap-3 text-[#C8102E] mb-2">
                            <FaChartLine />
                            <h5 className="font-bold">أطول سلسلة انتصارات</h5>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {selectedChampionship.stats.longestWinningStreak}
                          </p>
                        </div>
                      )}
                      {selectedChampionship.stats.biggestWin && (
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                          <div className="flex items-center gap-3 text-[#C8102E] mb-2">
                            <FaChartLine />
                            <h5 className="font-bold">أكبر فوز</h5>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {selectedChampionship.stats.biggestWin}
                          </p>
                        </div>
                      )}
                      {selectedChampionship.stats.mostSuccessfulCoach && (
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                          <div className="flex items-center gap-3 text-[#C8102E] mb-2">
                            <FaChartLine />
                            <h5 className="font-bold">أكبر فوز</h5>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {selectedChampionship.stats.mostSuccessfulCoach}
                          </p>
                        </div>
                      )}
                      {selectedChampionship.stats.mostTitlesAsCaptain && (
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                          <div className="flex items-center gap-3 text-[#C8102E] mb-2">
                            <FaChartLine />
                            <h5 className="font-bold">أكبر فوز</h5>
                          </div>
                          <p className="text-gray-700 text-sm">
                            {selectedChampionship.stats.mostTitlesAsCaptain}
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  selectedYear && (
                    <div>
                      {/* تفاصيل سنة التتويج */}
                      <div className="flex flex-col lg:flex-row gap-8 mb-12">
                        <div className="lg:w-2/3">
                          <h4 className="text-2xl font-bold mb-6 text-[#C8102E]">
                            بطولة {selectedChampionship.title}{" "}
                            {selectedYear.year}
                          </h4>

                          {/* شريط التمرير للسنوات */}
                          <div className="relative mb-8">
                            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide">
                              {selectedChampionship.wins.map((win) => (
                                <button
                                  key={win.year}
                                  onClick={() => {
                                    setSelectedYear(win);
                                    setVideoPlaying(false);
                                  }}
                                  className={`flex-shrink-0 px-4 py-2 rounded-full ${
                                    selectedYear.year === win.year
                                      ? "bg-[#C8102E] text-white"
                                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                  }`}
                                >
                                  {win.year}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* معلومات المباراة النهائية */}
                          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
                            <h5 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#C8102E]">
                              <FaTrophy /> معلومات النهائي
                            </h5>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="bg-[#C8102E]/20 p-2 rounded-lg">
                                    <FaTshirt className="text-[#C8102E]" />
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">
                                      القائد
                                    </div>
                                    <div className="font-medium">
                                      {selectedYear.captain}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                  <div className="bg-[#C8102E]/20 p-2 rounded-lg">
                                    <FaUsers className="text-[#C8102E]" />
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">
                                      المدرب
                                    </div>
                                    <div className="font-medium">
                                      {selectedYear.coach}
                                    </div>
                                  </div>
                                </div>

                                {selectedYear.stadium && (
                                    <div className="flex items-center gap-3 mb-4">
                                      <div className="bg-[#C8102E]/20 p-2 rounded-lg">
                                        <MdStadium className="text-[#C8102E]" />
                                      </div>
                                      <div>
                                        <div className="text-sm text-gray-500">
                                          الملعب
                                        </div>
                                        <div className="font-medium">
                                          {selectedYear.stadium}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                              </div>

                              <div>
                                {selectedYear.finalScore && (
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-[#C8102E]/20 p-2 rounded-lg">
                                      <GiSoccerBall className="text-[#C8102E] text-xl" />
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">
                                        النتيجة النهائية
                                      </div>
                                      <div className="font-medium">
                                        {selectedYear.finalScore}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {selectedYear.scorers && (
                                    <div className="flex items-center gap-3 mb-4">
                                      <div className="bg-[#C8102E]/20 p-2 rounded-lg">
                                        <FaStar className="text-[#C8102E]" />
                                      </div>
                                      <div>
                                        <div className="text-sm text-gray-500">
                                          هدافو المباراة
                                        </div>
                                        <div className="font-medium">
                                          {selectedYear.scorers.join(", ")}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {selectedYear.topScorer && (
                                    <div className="flex items-center gap-3 mb-4">
                                      <div className="bg-[#C8102E]/20 p-2 rounded-lg">
                                        <FaStar className="text-[#C8102E]" />
                                      </div>
                                      <div>
                                        <div className="text-sm text-gray-500">
                                          هداف الاهلي
                                        </div>
                                        <div className="font-medium">
                                          {selectedYear.topScorer}
                                        </div>
                                      </div>
                                    </div>
                                  )}


                                  {selectedYear.opponent && (
                                    <div className="flex items-center gap-3 mb-4">
                                      <div className="bg-[#C8102E]/20 p-2 rounded-lg">
                                        <GiAbstract045 className="text-[#C8102E]" />
                                      </div>
                                      <div>
                                        <div className="text-sm text-gray-500">
                                          مواجهة
                                        </div>
                                        <div className="font-medium">
                                          {selectedYear.opponent}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  
                              </div>
                            </div>
                          </div>

                          {/* مباريات بارزة */}
                          {selectedYear.notableMatches && (
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                              <h5 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#C8102E]">
                                <GiSoccerBall /> مباريات بارزة في البطولة
                              </h5>
                              <ul className="space-y-3 text-gray-700">
                                {selectedYear.notableMatches.map(
                                  (match, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center gap-2"
                                    >
                                      <span className="text-[#C8102E]">•</span>
                                      <span>{match}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* عرض الفيديو والصور */}
                        <div className="lg:w-1/3">
                          <div className="sticky top-4">
                            <div className="relative rounded-xl overflow-hidden shadow-md mb-4">
                              {videoPlaying ? (
                                <video
                                  ref={videoRef}
                                  src={selectedYear.matchHighlights}
                                  controls
                                  autoPlay
                                  className="w-full h-full aspect-video bg-black"
                                />
                              ) : (
                                <div className="relative">
                                  <img
                                    src={selectedYear.image}
                                    alt={`${selectedChampionship.title} ${selectedYear.year}`}
                                    className="w-full h-full aspect-video object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <button
                                      onClick={handleVideoPlay}
                                      className="bg-[#C8102E] text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-[#a00c22] transition shadow-md"
                                    >
                                      <FaVideo className="text-xl" />
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="relative rounded-xl overflow-hidden shadow-md">
                              <div className="relative h-48">
                                <img
                                  src={selectedChampionship.image}
                                  alt={selectedChampionship.title}
                                  className="w-full h-full object-contain bg-white p-4"
                                />
                              </div>
                              <div className="bg-gray-100 p-4 text-center">
                                <div className="text-sm text-gray-500">
                                  كأس البطولة
                                </div>
                                <div className="font-medium">
                                  {selectedChampionship.title}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* معرض الصور */}
                      <div className="mb-12">
                        <h4 className="text-xl font-bold mb-6 text-[#C8102E] flex items-center gap-3">
                          <FaVideo /> معرض البطولة
                        </h4>

                        <div className="relative">
                          <div className="overflow-hidden rounded-xl border border-gray-200">
                            <motion.div
                              className="flex"
                              animate={{ x: `-${currentSlide * 100}%` }}
                              transition={{ duration: 0.5 }}
                            >
                              {selectedChampionship.wins.map((win) => (
                                <div
                                  key={win.year}
                                  className="w-full flex-shrink-0"
                                >
                                  <div className="aspect-video bg-black relative">
                                    <img
                                      src={win.image}
                                      alt={`${selectedChampionship.title} ${win.year}`}
                                      className="w-full h-full object-cover opacity-90"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <button
                                        onClick={() => {
                                          setSelectedYear(win);
                                          setVideoPlaying(true);
                                        }}
                                        className="bg-[#C8102E] text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#a00c22] transition shadow-md"
                                      >
                                        <FaVideo />
                                      </button>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                                      <div className="text-lg font-bold">
                                        {selectedChampionship.title} {win.year}
                                      </div>
                                      <div className="text-xs">
                                        اضغط لمشاهدة اللقطات
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          </div>

                          <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#C8102E] text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-[#a00c22] transition shadow-md"
                          >
                            <FaChevronLeft />
                          </button>

                          <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#C8102E] text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-[#a00c22] transition shadow-md"
                          >
                            <FaChevronRight />
                          </button>

                          <div className="flex justify-center mt-4 gap-2">
                            {selectedChampionship.wins.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition ${
                                  currentSlide === index
                                    ? "bg-[#C8102E] w-4"
                                    : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
  );
};

export default ChampionshipsPage;
