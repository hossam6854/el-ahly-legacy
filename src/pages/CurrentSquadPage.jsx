// src/pages/CurrentSquadPage.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFutbol,
  FaTrophy,
  FaInfoCircle,
  FaExchangeAlt,
  FaUserTie,
  FaTimes,
  FaStar,
  FaShieldAlt,
  FaRunning,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFormation, swapPlayers } from "../redux/slices/squadSlice";

// Helper for field positions based on formation and specific roles
const formationPositions = {
  "4-3-3": {
    "حارس مرمى": [{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }],
    "مدافع أيسر": [{ bottom: "25%", left: "10%" }],
    "قلب دفاع": [{ bottom: "25%", left: "35%" }, { bottom: "25%", left: "65%" }],
    "مدافع أيمن": [{ bottom: "25%", left: "90%" }],
    "خط وسط مدافع": [{ bottom: "45%", left: "50%", transform: "translateX(-50%)" }],
    "خط وسط": [{ bottom: "45%", left: "25%" }, { bottom: "45%", left: "75%" }],
    "وينج شمال": [{ bottom: "65%", left: "10%" }],
    "مهاجم": [{ bottom: "75%", left: "50%", transform: "translateX(-50%)" }],
    "وينج يمين": [{ bottom: "65%", left: "90%" }],
  },
  "4-2-3-1": {
    "حارس مرمى": [{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }],
    "مدافع أيسر": [{ bottom: "25%", left: "10%" }],
    "قلب دفاع": [{ bottom: "25%", left: "35%" }, { bottom: "25%", left: "65%" }],
    "مدافع أيمن": [{ bottom: "25%", left: "90%" }],
    "خط وسط مدافع": [{ bottom: "40%", left: "40%" }, { bottom: "40%", left: "60%" }],
    "خط وسط هجومي": [{ bottom: "55%", left: "50%", transform: "translateX(-50%)" }],
    "وينج شمال": [{ bottom: "65%", left: "15%" }],
    "وينج يمين": [{ bottom: "65%", left: "85%" }],
    "مهاجم": [{ bottom: "75%", left: "50%", transform: "translateX(-50%)" }],
  },
  "3-5-2": {
    "حارس مرمى": [{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }],
    "قلب دفاع": [{ bottom: "25%", left: "25%" }, { bottom: "25%", left: "50%", transform: "translateX(-50%)" }, { bottom: "25%", left: "75%" }],
    "خط وسط مدافع": [{ bottom: "45%", left: "35%" }, { bottom: "45%", left: "65%" }],
    "خط وسط": [{ bottom: "55%", left: "50%", transform: "translateX(-50%)" }],
    "وينج شمال": [{ bottom: "60%", left: "10%" }], // Wing-back / wide midfielder
    "وينج يمين": [{ bottom: "60%", left: "90%" }], // Wing-back / wide midfielder
    "مهاجم": [{ bottom: "75%", left: "40%" }, { bottom: "75%", left: "60%" }],
  },
};

const CurrentSquadPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formation, players, coach } = useSelector((state) => state.squad);

  const [isMobile, setIsMobile] = useState(false);
  const [swapMode, setSwapMode] = useState(false);
  const [playerToSwap, setPlayerToSwap] = useState(null);
  const [showFormationGuide, setShowFormationGuide] = useState(false);

  // الكشف عن حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // تفعيل وضع التبديل
  const activateSwapMode = (player) => {
    setSwapMode(true);
    setPlayerToSwap(player);
  };

  // إلغاء وضع التبديل
  const cancelSwap = () => {
    setSwapMode(false);
    setPlayerToSwap(null);
  };

  // تبديل اللاعبين باستخدام Redux action
  const performSwapAction = (replacementPlayer) => {
    dispatch(
      swapPlayers({
        playerToSwapId: playerToSwap.id,
        replacementPlayerId: replacementPlayer.id,
      })
    );
    cancelSwap(); // إغلاق وضع التبديل بعد التبديل
  };

  // الحصول على اللاعبين البدلاء المناسبين لنفس مركز اللاعب المطلوب استبداله
  const getSuitableReplacements = () => {
    if (!playerToSwap) return [];
    // البدائل المناسبة هي اللاعبين الذين ليسوا أساسيين ويمكنهم لعب الدور الذي كان يشغله اللاعب المراد تبديله
    const suitableSubs = players.filter(
      (p) => !p.isStarter && p.positions.includes(playerToSwap.assignedRole)
    );
    return suitableSubs;
  };

  const starters = players.filter((p) => p.isStarter);
  const substitutes = players.filter((p) => !p.isStarter);
  const suitableReplacements = getSuitableReplacements();

  // تجميع اللاعبين الأساسيين حسب المراكز المخصصة لهم
  const startersByAssignedRole = {};
  starters.forEach(player => {
    if (!startersByAssignedRole[player.assignedRole]) {
      startersByAssignedRole[player.assignedRole] = [];
    }
    startersByAssignedRole[player.assignedRole].push(player);
  });

  // تأثيرات إضافية (نجوم عائمة)
  const floatingStars = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 0.5 + 0.5,
  }));

  // Map Arabic role names to icons for substitutes section
  const getPositionIcon = (position) => {
    switch (position) {
      case "حارس مرمى": return <FaShieldAlt size={12} />;
      case "مدافع أيمن":
      case "مدافع أيسر":
      case "قلب دفاع": return <FaShieldAlt size={12} />;
      case "خط وسط مدافع":
      case "خط وسط":
      case "خط وسط هجومي": return <FaRunning size={12} />;
      case "وينج يمين":
      case "وينج شمال":
      case "مهاجم": return <FaFutbol size={12} />;
      default: return null;
    }
  };

  const getPositionDisplayName = (position) => {
    switch (position) {
      case "حارس مرمى": return "حراس مرمى";
      case "مدافع أيمن": return "مدافع أيمن";
      case "مدافع أيسر": return "مدافع أيسر";
      case "قلب دفاع": return "مدافعون"; // General category for subs list
      case "خط وسط مدافع": return "خط وسط مدافع";
      case "خط وسط": return "خط وسط";
      case "خط وسط هجومي": return "خط وسط هجومي"; // General category for subs list
      case "وينج يمين": return "وينج يمين";
      case "وينج شمال": return "وينج شمال";
      case "مهاجم": return "مهاجمون"; // General category for subs list
      default: return position;
    }
  };


  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#1a0a0a] to-[#0a0a0a] py-4 sm:py-8 px-2 sm:px-4 lg:px-8 relative overflow-hidden font-inter"
      dir="rtl"
    >
      {/* تأثيرات النجوم العائمة */}
      {floatingStars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, 20, 40],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: star.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute text-yellow-400"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: `${star.size}rem`,
          }}
        >
          <FaStar />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* وضع التبديل النشط */}
        <AnimatePresence>
          {swapMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-b from-[#2a0a0a] to-[#1a0a0a] rounded-xl w-full max-w-md p-6 border border-[#C8102E]/50 shadow-lg shadow-[#C8102E]/20"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#C8102E]">
                    تغيير اللاعب
                  </h3>
                  <button
                    onClick={cancelSwap}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2 text-white">
                    اللاعب الحالي:
                  </h4>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 bg-[#1a0a0a] p-3 rounded-lg border border-[#C8102E]/30"
                  >
                    <div className="relative">
                      <img
                        src={playerToSwap.image}
                        alt={playerToSwap.name}
                        className="w-12 h-12 rounded-full border-2 border-[#C8102E]"
                      />
                      {playerToSwap.isCaptain && (
                        <div className="absolute -top-2 -left-2 bg-yellow-400 text-[#C8102E] rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md">
                          C
                        </div>
                      )}
                    </div>
                    <div>
                      <h5 className="font-bold text-white">
                        {playerToSwap.name}
                      </h5>
                      <p className="text-sm text-gray-300">
                        {playerToSwap.assignedRole || "دور غير محدد"}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="bg-[#C8102E] text-white px-2 py-0.5 rounded-full text-xs font-bold">
                          رقم {playerToSwap.number}
                        </span>
                        {playerToSwap.isCaptain && (
                          <span className="bg-yellow-400 text-[#C8102E] px-2 py-0.5 rounded-full text-xs font-bold">
                            الكابتن
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-white">
                      اختر البديل:
                    </h4>
                    <span className="text-xs text-gray-400">
                      {suitableReplacements.length} لاعب متاح
                    </span>
                  </div>
                  {suitableReplacements.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2">
                      {suitableReplacements.map((player) => (
                        <motion.div
                          key={player.id}
                          whileHover={{
                            scale: 1.03,
                            boxShadow: "0 0 10px rgba(200, 16, 46, 0.5)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 bg-[#1a0a0a] p-2 rounded-lg cursor-pointer border border-[#C8102E]/20 hover:border-[#C8102E]/50 transition-all"
                          onClick={() => performSwapAction(player)}
                        >
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-10 h-10 rounded-full border border-[#C8102E]"
                          />
                          <div className="flex-1">
                            <h5 className="font-bold text-sm truncate text-white">
                              {player.name.split(" ").slice(0, 3).join(" ")}
                            </h5>
                            <div className="flex justify-between items-center">
                              <p className="text-xs text-gray-400">
                                #{player.number}
                              </p>
                              <span className="text-xs bg-[#C8102E] text-white px-1 rounded">
                                {player.positions[0]}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              انضم في {player.joinDate}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 bg-[#1a0a0a]/50 rounded-lg border border-dashed border-[#C8102E]/30">
                      <FaTimes className="mx-auto text-[#C8102E] mb-2" />
                      <p className="text-gray-400">
                        لا يوجد بدائل متاحين لنفس المركز
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-12 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ scale: 1.2, opacity: 0.1 }}
              animate={{ scale: 1, opacity: 0.05 }}
              transition={{ duration: 2 }}
              className="text-6xl sm:text-8xl font-black text-[#C8102E] tracking-wider"
            >
              الأهلي
            </motion.h1>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4 relative">
            تشكيلة الأهلي الحالية
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-6 text-yellow-400"
            >
              <FaShieldAlt />
            </motion.span>
          </h1>
          <p className="text-sm sm:text-xl text-red-400 max-w-3xl mx-auto relative">
            أبطال القلعة الحمراء في الموسم الحالي
            <motion.span
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-1 -right-6 text-yellow-400"
            >
              <FaTrophy />
            </motion.span>
          </p>
        </motion.div>

        {/* المدرب */}
        <div className="flex justify-center mb-6 sm:mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#2a0a0a] to-[#1a0a0a] rounded-xl shadow-lg p-4 flex items-center gap-4 cursor-pointer border border-[#C8102E]/30 hover:border-[#C8102E]/50 transition-all group relative overflow-hidden"
            onClick={() => navigate(`/player/${coach.id}`)}
          >
            <div className="absolute inset-0 bg-[#C8102E] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#C8102E] shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#C8102E] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <FaUserTie />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-lg sm:text-xl text-white">
                {coach.name}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">مدرب الفريق</p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-1 mt-1"
              >
                <span className="text-xs bg-[#C8102E] text-white px-2 py-0.5 rounded-full">
                  {coach.trophies} بطولات
                </span>
                <span className="text-xs bg-yellow-400 text-[#C8102E] px-2 py-0.5 rounded-full">
                  منذ {coach.since}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* اختيار التشكيلة */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-12 flex-wrap relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFormationGuide(!showFormationGuide)}
            className="absolute left-0 top-0 bg-[#1a0a0a] text-white p-2 rounded-full shadow-md border border-[#C8102E]/30 hover:border-[#C8102E]/50"
          >
            <FaInfoCircle />
          </motion.button>

          {["4-3-3", "4-2-3-1", "3-5-2"].map((form) => (
            <motion.button
              key={form}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(setFormation(form))}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-all ${
                formation === form
                  ? "bg-[#C8102E] text-white shadow-lg hover:bg-[#D6203C]"
                  : "bg-[#1a0a0a] text-gray-300 hover:bg-[#2a0a0a] shadow-md border border-[#C8102E]/20 cursor-pointer"
              }`}
            >
              {form}
            </motion.button>
          ))}
        </div>

        {/* دليل التشكيلات */}
        <AnimatePresence>
          {showFormationGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#1a0a0a] rounded-lg mb-6 overflow-hidden border border-[#C8102E]/30"
            >
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#C8102E] mb-2">
                  دليل التشكيلات
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-[#2a0a0a] rounded-lg">
                    <h4 className="font-medium text-white mb-1">4-3-3</h4>
                    <p className="text-sm text-gray-400">
                      1 حارس مرمى، 4 مدافعين (أيمن، أيسر، 2 قلب دفاع)، 1 وسط مدافع، 2 وسط، 1 وينج يمين، 1 وينج شمال، 1 مهاجم. تشكيلة متوازنة تناسب الهجوم والدفاع.
                    </p>
                  </div>
                  <div className="p-3 bg-[#2a0a0a] rounded-lg">
                    <h4 className="font-medium text-white mb-1">4-2-3-1</h4>
                    <p className="text-sm text-gray-400">
                      1 حارس مرمى، 4 مدافعين، 2 وسط دفاعي، 1 وسط هجومي، 2 وينج، 1 مهاجم. تناسب السيطرة على وسط الملعب واللعب الهجومي.
                    </p>
                  </div>
                  <div className="p-3 bg-[#2a0a0a] rounded-lg">
                    <h4 className="font-medium text-white mb-1">3-5-2</h4>
                    <p className="text-sm text-gray-400">
                      1 حارس مرمى، 3 قلوب دفاع، 2 وسط مدافع، 1 وسط، 2 وينج (متحركين)، 2 مهاجمين. تشكيلة هجومية مع سيطرة على وسط الملعب وتأكيد على الأجنحة.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* المحتوى الرئيسي */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* ملعب كرة القدم */}
          <div className="flex-1 relative bg-gradient-to-b from-green-900 to-green-800 rounded-xl sm:rounded-3xl overflow-hidden border-4 sm:border-8 border-green-700 shadow-xl sm:shadow-2xl">
            {/* تأثيرات الملعب */}
            <div className="absolute inset-0 bg-green-900/50"></div>
            <div className="absolute inset-0 bg-stripes opacity-10"></div>

            {/* خطوط الملعب */}
            <div className="absolute inset-0 border border-white opacity-20 rounded-lg sm:rounded-xl m-1 sm:m-2"></div>
            <div className="absolute top-1/2 left-0 right-0 border-t border-white opacity-20"></div>
            <div className="absolute top-1/4 left-1/2 w-8 h-8 sm:w-12 sm:h-12 border border-white opacity-20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-1/4 left-1/2 w-8 h-8 sm:w-12 sm:h-12 border border-white opacity-20 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

            {/* منطقة المرمى */}
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 border-b border-l border-r border-white opacity-20 rounded-b-lg sm:rounded-b-xl mx-6 sm:mx-12"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 border-t border-l border-r border-white opacity-20 rounded-t-lg sm:rounded-t-xl mx-6 sm:mx-12"></div>

            {/* تأثيرات إضافية */}
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#C8102E] rounded-full opacity-30 filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>

            {/* اللاعبين الأساسيين على أرض الملعب */}
            <div className="relative h-[450px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
              {Object.entries(startersByAssignedRole).map(([role, playersInRole]) => {
                const positionsForRole = formationPositions[formation]?.[role];
                if (!positionsForRole || playersInRole.length === 0) return null;

                return playersInRole.map((player, index) => {
                  const posStyle = positionsForRole[index % positionsForRole.length]; // Cycle through positions if more players than defined spots
                  return (
                    <motion.div
                      key={player.id}
                      className="absolute cursor-pointer group"
                      style={posStyle}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div
                        className="bg-[#C8102E] rounded-full p-1 shadow-md sm:shadow-lg group-hover:shadow-xl group-hover:shadow-[#C8102E]/30 transition-all"
                        onClick={() => navigate(`/player/${player.id}`)}
                      >
                        <div className="bg-white rounded-full p-0.5 sm:p-1">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border border-[#C8102E]"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-1 text-white text-xs font-medium">
                        <div className="truncate w-12 sm:w-16">
                          {player.name.split(" ").slice(0, 3).join(" ")}
                        </div>
                      </div>
                      {player.isCaptain && (
                        <div className="absolute -top-2 -left-2 bg-yellow-400 text-[#C8102E] rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md">
                          C
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // منع الانتقال لصفحة اللاعب
                          activateSwapMode(player);
                        }}
                        className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-[#C8102E] shadow-md hover:bg-gray-100 transition-all"
                      >
                        <FaExchangeAlt size={12} />
                      </button>
                    </motion.div>
                  );
                });
              })}
            </div>
          </div>
          {/* البدلاء - لم تعد مخصصة للشاشات الكبيرة فقط */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            // تم تغيير w-full لجعلها تأخذ العرض الكامل على الموبايل
            // و lg:w-1/6 على الشاشات الكبيرة
            className="w-full lg:w-1/6 flex flex-col gap-4 bg-gradient-to-b from-[#1a0a0a] to-[#2a0a0a] rounded-lg border border-[#C8102E]/30 shadow-lg"
          >
            <h3 className="text-white font-bold text-lg text-center bg-[#C8102E] py-2 rounded-t-lg flex items-center justify-center gap-2">
              <FaExchangeAlt size={14} />
              <span>البدلاء</span>
            </h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto p-2">
              {/* Group substitutes by their primary position for display */}
              {Object.entries(substitutes.reduce((acc, player) => {
                const mainPos = player.positions[0]; // Assuming first position is primary for display
                if (!acc[mainPos]) acc[mainPos] = [];
                acc[mainPos].push(player);
                return acc;
              }, {})).map(
                ([position, playersInGroup]) =>
                  playersInGroup.length > 0 && (
                    <div key={position} className="space-y-2">
                      <h4 className="text-white text-sm font-medium px-2 flex items-center gap-1">
                        {getPositionIcon(position)}
                        {getPositionDisplayName(position)}
                      </h4>
                      {playersInGroup.map((player) => (
                        <motion.div
                          key={player.id}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-[#1a0a0a] rounded-lg p-2 flex items-center gap-2 cursor-pointer border border-[#C8102E]/20 hover:border-[#C8102E]/40 transition-all group relative overflow-hidden"
                          onClick={() => navigate(`/player/${player.id}`)}
                        >
                          <div className="absolute inset-0 bg-[#C8102E] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                          <div className="relative z-10">
                            <img
                              src={player.image}
                              alt={player.name}
                              className="w-10 h-10 rounded-full object-cover border border-[#C8102E]"
                            />
                            <div className="absolute -top-2 -right-2 bg-[#C8102E] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md">
                              {player.number}
                            </div>
                          </div>
                          <div className="flex-1 relative z-10">
                            <h4 className="font-bold text-sm truncate text-white">
                              {player.name.split(" ").slice(0, 3).join(" ")}
                            </h4>
                            <p className="text-xs text-gray-400">
                              {player.positions[0]}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )
              )}
            </div>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

export default CurrentSquadPage;
