import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaTrophy,
  FaFutbol,
  FaChartLine,
  FaQuoteLeft,
  FaTimes,
  FaPlay,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ReactPlayer from "react-player";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import elkatebImage from "../assets/legents/images/elkateb1.jpg";
import elkatebImage2 from "../assets/legents/images/elkateb2.jpg";
import elkatebImage3 from "../assets/legents/images/elkateb3.jpeg";
import elkatebImage4 from "../assets/legents/images/elkateb4.png";

import elkatebVideo from "../assets/legents/videos/elkatebvid1.mp4";
import elkatebVideo2 from "../assets/legents/videos/elkatebvid2.mp4";

// بيانات الأساطير
const legendsData = [
  {
    id: 1,
    name: "محمود الخطيب",
    position: "مهاجم",
    era: "1970s-1980s",
    image: elkatebImage4,
    bgImage: elkatebImage,
    stats: {
      matches: 199,
      goals: 108,
      trophies: 12,
    },
    seasonStats: [
      { season: "1975-1976", matches: 25, goals: 15, trophies: 1 },
      { season: "1976-1977", matches: 28, goals: 18, trophies: 2 },
      { season: "1977-1978", matches: 30, goals: 22, trophies: 1 },
      { season: "1978-1979", matches: 27, goals: 20, trophies: 3 },
      { season: "1979-1980", matches: 26, goals: 17, trophies: 2 },
      { season: "1980-1981", matches: 23, goals: 16, trophies: 3 },
    ],
    rareImages: [elkatebImage, elkatebImage2, elkatebImage3, elkatebImage4],
    videos: [
      {
        title: "أهداف الخطيب الخالدة",
        image: elkatebImage,
        video: elkatebVideo,
        date: "1978-05-12",
        match: "الأهلي vs الزمالك",
        opponent: "الزمالك",
      },
      {
        title: "مقابلة نادرة",
        image: elkatebImage2,
        video: elkatebVideo2,
        date: "1982-11-03",
        match: "بعد بطولة أفريقيا",
        opponent: "",
      },
    ],
    testimonials: [
      {
        text: "الخطيب كان ساحر الملعب، لا يمكن التغلب عليه",
        author: "حسن شحاتة",
      },
      { text: "أعظم مهاجم في تاريخ الكرة المصرية", author: "محمود الجوهري" },
      {
        text: "قدرته على التسجيل في المهمات الصعبة كانت أسطورية",
        author: "علي أبو جريشة",
      },
    ],
    timeline: [
      { year: "1971", event: "الانضمام لفريق الناشئين" },
      { year: "1974", event: "الظهور الأول مع الفريق الأول" },
      { year: "1976", event: "أفضل هداف في الدوري المصري" },
      { year: "1980", event: "قائد الفريق" },
      { year: "1983", event: "اعتزال اللعب" },
    ],
  },
  {
    id: 2,
    name: "محمد أبو تريكة",
    position: "وسط مهاجم",
    
    era: "2000s-2010s",
    image: "/abou-trika.jpg",
    bgImage: "/trika-bg.jpg",
    stats: {
      matches: 251,
      goals: 78,
      trophies: 18,
    },
    seasonStats: [
      { season: "2003-2004", matches: 32, goals: 8, trophies: 2 },
      { season: "2004-2005", matches: 35, goals: 12, trophies: 3 },
      { season: "2005-2006", matches: 38, goals: 15, trophies: 4 },
      { season: "2006-2007", matches: 40, goals: 14, trophies: 3 },
      { season: "2007-2008", matches: 36, goals: 11, trophies: 2 },
      { season: "2008-2009", matches: 34, goals: 10, trophies: 4 },
    ],
    rareImages: [
      "/trika-rare1.jpg",
      "/trika-rare2.jpg",
      "/trika-rare3.jpg",
      "/trika-rare4.jpg",
    ],
    videos: [
      {
        title: "أجمل أهداف أبو تريكة",
        url: "/trika-goals.mp4",
        date: "2006-11-25",
        match: "الأهلي vs الزمالك",
        opponent: "الزمالك",
      },
      {
        title: "لحظة تتويجه بكأس أفريقيا",
        url: "/trika-africa.mp4",
        date: "2008-11-16",
        match: "نهائي دوري أبطال أفريقيا",
        opponent: "الترجي التونسي",
      },
    ],
    testimonials: [
      {
        text: "المايسترو الذي قاد الأهلي لأعظم انتصاراته",
        author: "مانويل جوزيه",
      },
      { text: "قلب الفريق وروحه في أصعب اللحظات", author: "وائل جمعة" },
      { text: "عبقري الكرة الذي أذهل أفريقيا والعالم", author: "محمد بركات" },
    ],
    timeline: [
      { year: "2003", event: "الانضمام للأهلي من الترسانة" },
      { year: "2005", event: "أول بطولة أفريقية" },
      { year: "2006", event: "أفضل لاعب في أفريقيا" },
      { year: "2008", event: "قائد الفريق" },
      { year: "2013", event: "اعتزال اللعب" },
    ],
  },
];

const LegendsPage = () => {
  const [selectedLegend, setSelectedLegend] = useState(null);
  const [activeTab, setActiveTab] = useState("stats");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (selectedLegend) {
      const loadPromises = selectedLegend.rareImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });

      Promise.all(loadPromises).then(() => setImagesLoaded(true));
    }
  }, [selectedLegend]);

  // تأثيرات العدادات
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000; // مدة الحركة بالمللي ثانية
      const step = target / (duration / 16); // 16ms لكل إطار

      let start = null;
      let currentCount = 0;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        currentCount = Math.min(target, step * (progress / 16));
        setCount(Math.floor(currentCount));

        if (currentCount < target) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [target]);

    return count;
  };

  // Dynamic Background حسب الأسطورة المختارة
  useEffect(() => {
    if (selectedLegend) {
      document.body.style.backgroundImage = `url(${selectedLegend.bgImage})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.transition = "background-image 0.5s ease";
    } else {
      document.body.style.backgroundImage =
        "linear-gradient(to bottom, #f3f4f6, #e5e7eb)";
    }

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundAttachment = "";
    };
  }, [selectedLegend]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
      ref={containerRef}
    >
      {/* Parallax Background */}
      {!selectedLegend && (
        <motion.div
          className="fixed inset-0 bg-[url('/ahly-bg.jpg')] bg-cover bg-center opacity-20 -z-10"
          style={{ y: yBg }}
        />
      )}

      <div className="max-w-7xl mx-auto relative">
        {/* العنوان الرئيسي مع تأثيرات */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#C8102E] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8102E] to-[#a00c22]">
              أساطير النادي الأهلي
            </span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            عمالقة كتبوا تاريخ القلعة الحمراء بأحرف من ذهب
          </motion.p>
        </motion.div>

        {/* قائمة الأساطير مع تأثيرات Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {legendsData.map((legend) => (
            <motion.div
              key={legend.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: legend.id * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(200, 16, 46, 0.3), 0 10px 10px -5px rgba(200, 16, 46, 0.1)",
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:z-10"
              onClick={() => setSelectedLegend(legend)}
            >
              <div className="relative h-72 overflow-hidden group">
                <motion.img
                  src={legend.image}
                  alt={legend.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {legend.name}
                    </h3>
                    <div className="flex justify-between mt-2 text-white/90">
                      <span>{legend.position}</span>
                      <span>{legend.era}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#C8102E]/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  {legend.stats.trophies} بطولة
                </div>
              </div>
              <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
                <div className="flex items-center text-[#C8102E] font-medium">
                  <FaFutbol className="ml-1" />
                  <span>
                    <Counter target={legend.stats.goals} /> هدف
                  </span>
                </div>
                <div className="flex items-center text-gray-600 font-medium">
                  <FaChartLine className="ml-1" />
                  <span>
                    <Counter target={legend.stats.matches} /> مباراة
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* نافذة تفاصيل الأسطورة */}
        <AnimatePresence>
          {selectedLegend && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => {
                setSelectedLegend(null);
                setIsOpen(false);
                setCurrentVideo(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* عنوان النافذة */}
                <div className="bg-gradient-to-r from-[#C8102E] to-[#a00c22] text-white p-6 sticky top-0 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {selectedLegend.name}
                    </h3>
                    <button
                      onClick={() => {
                        setSelectedLegend(null);
                        setIsOpen(false);
                        setCurrentVideo(null);
                      }}
                      className="text-white hover:text-gray-200 text-xl bg-black/20 p-2 rounded-full"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm md:text-base">
                    <span>{selectedLegend.position}</span>
                    <span>|</span>
                    <span>{selectedLegend.era}</span>
                  </div>
                </div>

                {/* محتوى النافذة */}
                <div className="p-6">
                  {/* الصورة الرئيسية والإحصائيات */}
                  <div className="flex flex-col lg:flex-row gap-8 mb-10">
                    <div className="lg:w-1/3">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-xl shadow-lg"
                      >
                        <img
                          src={selectedLegend.image}
                          alt={selectedLegend.name}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end p-4">
                          <span className="text-white font-medium">
                            اضغط للتكبير
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            setCurrentImageIndex(0);
                            setIsOpen(true);
                          }}
                          className="absolute inset-0 w-full h-full"
                        />
                      </motion.div>
                    </div>

                    <div className="lg:w-2/3">
                      <h4 className="text-xl font-bold text-[#C8102E] mb-6 border-b pb-2">
                        الإنجازات والإحصائيات
                      </h4>

                      {/* عدادات الإحصائيات */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <motion.div
                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center border border-gray-200 shadow-sm"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="text-3xl font-bold text-[#C8102E]">
                            <Counter target={selectedLegend.stats.matches} />
                          </div>
                          <div className="text-gray-600 mt-2">مباراة</div>
                        </motion.div>

                        <motion.div
                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center border border-gray-200 shadow-sm"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="text-3xl font-bold text-[#C8102E]">
                            <Counter target={selectedLegend.stats.goals} />
                          </div>
                          <div className="text-gray-600 mt-2">هدف</div>
                        </motion.div>

                        <motion.div
                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center border border-gray-200 shadow-sm"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="text-3xl font-bold text-[#C8102E]">
                            <Counter target={selectedLegend.stats.trophies} />
                          </div>
                          <div className="text-gray-600 mt-2">بطولة</div>
                        </motion.div>
                      </div>

                      {/* الجدول الزمني */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-gray-800 mb-4">
                          المسيرة الزمنية
                        </h5>
                        <div className="relative">
                          {/* الخط الزمني */}
                          <div className="absolute left-1/2 h-full w-1 bg-[#C8102E] transform -translate-x-1/2"></div>

                          {/* الأحداث */}
                          <div className="space-y-8">
                            {selectedLegend.timeline.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{
                                  opacity: 0,
                                  x: index % 2 === 0 ? 50 : -50,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex ${
                                  index % 2 === 0
                                    ? "justify-start"
                                    : "justify-end"
                                }`}
                              >
                                <div
                                  className={`w-5/12 p-4 rounded-lg ${
                                    index % 2 === 0
                                      ? "bg-[#C8102E]/10 ml-6"
                                      : "bg-gray-100 mr-6"
                                  } border border-gray-200`}
                                >
                                  <div
                                    className={`text-sm font-bold ${
                                      index % 2 === 0
                                        ? "text-[#C8102E]"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {item.year}
                                  </div>
                                  <div className="text-gray-600 mt-1">
                                    {item.event}
                                  </div>
                                </div>
                                <div
                                  className={`absolute w-4 h-4 rounded-full bg-[#C8102E] border-2 border-white ${
                                    index % 2 === 0
                                      ? "left-1/2 ml-2"
                                      : "right-1/2 mr-2"
                                  }`}
                                  style={{
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                  }}
                                ></div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* تبويبات المحتوى */}
                  <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                      <button
                        onClick={() => setActiveTab("stats")}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "stats"
                            ? "border-[#C8102E] text-[#C8102E]"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        الإحصائيات
                      </button>
                      <button
                        onClick={() => setActiveTab("images")}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "images"
                            ? "border-[#C8102E] text-[#C8102E]"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        معرض الصور
                      </button>
                      <button
                        onClick={() => setActiveTab("videos")}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "videos"
                            ? "border-[#C8102E] text-[#C8102E]"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        الفيديوهات
                      </button>
                      <button
                        onClick={() => setActiveTab("testimonials")}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "testimonials"
                            ? "border-[#C8102E] text-[#C8102E]"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        شهادات
                      </button>
                    </nav>
                  </div>

                  {/* محتوى التبويب المحدد */}
                  <div className="mb-8">
                    {/* إحصائيات مفصلة */}
                    {activeTab === "stats" && (
                      <div className="space-y-8">
                        {/* الرسم البياني */}
                        <div>
                          <h5 className="text-lg font-bold text-[#C8102E] mb-4">
                            الأداء الموسمي
                          </h5>
                          <div className="bg-white rounded-xl shadow-md p-4">
                            <ResponsiveContainer width="100%" height={400}>
                              <BarChart
                                data={selectedLegend.seasonStats}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="season" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar
                                  dataKey="goals"
                                  fill="#C8102E"
                                  name="الأهداف"
                                />
                                <Bar
                                  dataKey="matches"
                                  fill="#8884d8"
                                  name="المباريات"
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* جدول الإحصائيات */}
                        <div>
                          <h5 className="text-lg font-bold text-[#C8102E] mb-4">
                            تفاصيل الموسم
                          </h5>
                          <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                              <thead className="bg-[#C8102E] text-white">
                                <tr>
                                  <th className="px-6 py-3 text-right text-sm font-medium">
                                    الموسم
                                  </th>
                                  <th className="px-6 py-3 text-right text-sm font-medium">
                                    المباريات
                                  </th>
                                  <th className="px-6 py-3 text-right text-sm font-medium">
                                    الأهداف
                                  </th>
                                  <th className="px-6 py-3 text-right text-sm font-medium">
                                    البطولات
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {selectedLegend.seasonStats.map(
                                  (season, index) => (
                                    <tr
                                      key={index}
                                      className={
                                        index % 2 === 0
                                          ? "bg-white"
                                          : "bg-gray-50"
                                      }
                                    >
                                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {season.season}
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {season.matches}
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {season.goals}
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {season.trophies}
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* معرض الصور */}
                    {activeTab === "images" && (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {selectedLegend.rareImages.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(index);
                              setIsOpen(true);
                            }}
                          >
                            <img
                              src={image}
                              alt={`${selectedLegend.name} ${index + 1}`}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                              <div className="bg-white/80 text-[#C8102E] p-2 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* الفيديوهات */}
                    {activeTab === "videos" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedLegend.videos.map((video, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => setCurrentVideo(video)}
                          >
                            <div className="relative pt-[56.25%] bg-black">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full group">
                                  <div className="relative w-full h-full group">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 z-10"></div>

                                    {/* Image */}
                                    <img
                                      src={video.image}
                                      alt={video.title}
                                      className="w-full h-full object-cover absolute inset-0 z-0"
                                    />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                      <button className="bg-[#C8102E] text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#a00c22] transition transform group-hover:scale-110">
                                        <FaPlay className="ml-1" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <h5 className="font-bold text-lg">
                                {video.title}
                              </h5>
                              <div className="text-sm text-gray-600 mt-2">
                                <div>التاريخ: {video.date}</div>
                                {video.match && (
                                  <div>المباراة: {video.match}</div>
                                )}
                                {video.opponent && (
                                  <div>المنافس: {video.opponent}</div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* شهادات الجمهور */}
                    {activeTab === "testimonials" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedLegend.testimonials.map(
                          (testimonial, index) => (
                            <motion.div
                              key={index}
                              initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? 50 : -50,
                              }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-200"
                            >
                              <FaQuoteLeft className="text-[#C8102E] text-2xl mb-4 opacity-30" />
                              <p className="text-gray-700 text-lg leading-relaxed">
                                {testimonial.text}
                              </p>
                              <div className="mt-4 text-sm text-gray-500 font-medium">
                                - {testimonial.author}
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox للصور */}
        {isOpen && selectedLegend && imagesLoaded && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={selectedLegend.rareImages.map((src) => ({ src }))}
            index={currentImageIndex}
            on={{
              view: ({ index }) => setCurrentImageIndex(index),
            }}
          />
        )}
        {/* مشغل الفيديو */}
        {currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setCurrentVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setCurrentVideo(null)}
                className="absolute top-4 left-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
              >
                <FaTimes />
              </button>

              <div className="pt-[56.25%] relative">
                <ReactPlayer
                  url={currentVideo.video}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{currentVideo.title}</h3>
                <div className="text-gray-300">
                  <div>التاريخ: {currentVideo.date}</div>
                  {currentVideo.match && (
                    <div>المباراة: {currentVideo.match}</div>
                  )}
                  {currentVideo.opponent && (
                    <div>المنافس: {currentVideo.opponent}</div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LegendsPage;
