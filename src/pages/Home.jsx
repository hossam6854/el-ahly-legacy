import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTrophy, FaHeart, FaArrowLeft } from "react-icons/fa";
import { data } from "../data/playersData.jsx";
import { FiArrowLeft } from "react-icons/fi";


import Img from "/stadAlahly.jpg";

const Home = () => {
  const [animatedCounts, setAnimatedCounts] = useState({});

  useEffect(() => {
    // تأثير العد المتدرج للأرقام
    const animationDuration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / animationDuration);

      const newCounts = {};
      data.championshipsData.forEach((champ) => {
        newCounts[champ.id] = Math.floor(progress * champ.count);
      });

      setAnimatedCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <div
      style={{ fontFamily: "'El Messiri', sans-serif" }}
      dir="rtl"
      className="bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden flex items-center justify-center text-center bg-black">
        {/* الخلفية: صورة استاد واضحة مع طبقة خفيفة للتعتيم */}
        <div className="absolute inset-0">
          <img
            src={Img}
            alt="استاد الأهلي"
            className="w-full h-full object-cover"
          />
<div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent" />
</div>

        {/* المحتوى الزجاجي */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 backdrop-blur-sm bg-white/10 rounded-3xl p-10 max-w-3xl text-white border border-white/30 shadow-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#C8102E] drop-shadow-lg">
            متحف النادي الأهلي
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-white/90">
            حيث يتلاقى المجد بالتاريخ، وتُروى الحكايات للأجيال ⚡
          </p>
          <motion.div>
            <Link
              to="/quiz"
              className="inline-block bg-[#C8102E] text-white px-8 py-4 rounded-full hover:bg-[#a00c22] transition text-lg font-semibold shadow-xl"
            >
              اختبر مدي انتماءك لهذا النادي العريق
            </Link>
          </motion.div>
        </motion.div>

        {/* شريط الأخبار */}
        <div className="absolute top-0 left-0 right-0 bg-[#C8102E] py-3 overflow-hidden z-20">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-12 text-white text-base font-medium whitespace-nowrap"
          >
            {data.news.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                📰 {item.title}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* بطولات الأهلي - تصميم متطور */}
<section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('/path/to/al-ahly-pattern.svg')] bg-repeat opacity-20"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="text-center mb-20">
        <motion.h2 
          className="text-5xl font-extrabold text-gray-900 relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="relative z-10 px-4">
            سجل التتويج
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-[#C8102E] opacity-70 -z-1"></span>
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          إرث من المجد.. تاريخ من البطولات.. مسيرة لا تتوقف
        </motion.p>
      </div>

      {/* تصميم متدرج للبطولات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.championshipsData.slice(0, 3).map((champ, index) => (
          <motion.div
            key={champ.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative bg-white rounded-xl overflow-hidden shadow-lg border-l-4 border-[#C8102E] transform transition-all duration-300 hover:z-10"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#C8102E] transform translate-x-8 -translate-y-8 rotate-45 opacity-20"></div>
            
            <div className="p-8 text-center">
              <div className="mb-6 text-[#C8102E] flex justify-center">
                <motion.div 
                  className="text-5xl"
                >
                  {champ.icon}
                </motion.div>
              </div>
              
              <motion.h3 
                className="text-6xl font-black text-[#C8102E] mb-4"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {animatedCounts[champ.id] || 0}
                <span className="text-3xl">+</span>
              </motion.h3>
              
              <p className="text-2xl font-semibold text-gray-800 mb-6">{champ.title}</p>
              
              <div className="relative h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-[#C8102E]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <motion.p 
                className="mt-6 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                أول بطولة: {champ.wins[0].year || "1960"}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* زر الاستكشاف بتأثير مميز */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/championships"
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white rounded-lg group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#C8102E] to-[#8C0B21] group-hover:from-[#8C0B21] group-hover:to-[#C8102E] transition-all duration-300"></span>
          <span className="absolute top-0 left-0 w-full h-1 bg-white opacity-20"></span>
          <span className="absolute bottom-0 left-0 w-0 h-full bg-white opacity-20 group-hover:w-full transition-all duration-500"></span>
          <span className="relative z-10 flex items-center gap-3 text-xl">
            <FaTrophy className="text-yellow-300" />
            <span>المتحف الذهبي للأهلي</span>
            <FaArrowLeft className="text-sm" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  </div>
  
  {/* عناصر زخرفية */}
  <div className="absolute bottom-0 left-0 w-full h-16 bg-[#C8102E] opacity-10 transform -skew-y-2 origin-left"></div>
</section>

     {/* ذاكرة الأجيال - تصميم معدل */}
<section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" dir="rtl">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-800 relative inline-block">
          <span className="relative z-10 px-4">
            ذاكرة الأجيال
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-full h-1 bg-[#C8102E] transform -translate-y-1 origin-left"
            />
          </span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-8xl font-bold text-gray-100 -z-10 select-none" style={{ width: '120%' }}>
            Moments
          </span>
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          لحظات خالدة في تاريخنا، تروي قصصًا من الماضي وتلهم المستقبل
        </p>
      </div>

      {/* Slider Container with Improved Navigation */}
      <div className="relative group">
        {/* Custom Scrollbar Track */}
        <div className="h-1 bg-gray-200 rounded-full mb-8 mx-2 overflow-hidden">
          <motion.div 
            className="h-full bg-[#C8102E] rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        <div className="flex overflow-x-auto pb-14 scrollbar-hide space-x-8 px-2 snap-x snap-mandatory">
          {data.moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex-shrink-0 w-80 md:w-96 h-[28rem] relative group/card snap-center"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image with Parallax Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl">
                <motion.img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                <div className="absolute bottom-20 left-6 w-8 h-8 border border-white/20 rotate-45" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-3 h-3 bg-[#C8102E] rounded-full" />
                  <span className="text-sm font-medium">{moment.year}</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  {moment.title}
                </h3>
                <motion.p 
                  className="text-white/90 line-clamp-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {moment.description || "لحظة تاريخية في سجل الأجيال"}
                </motion.p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-white/30 mt-4"
                />
              </div>
              
              {/* Hover Effect - Shine */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button with Animation */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/timeline"
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-lg group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C8102E] to-[#a00c22] group-hover:from-[#a00c22] group-hover:to-[#C8102E] transition-all duration-300"></span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-64 group-hover:h-64 ease-in-out duration-500"></span>
          <span className="relative z-10 flex items-center gap-3 text-lg">
            <FaHeart className="animate-pulse" />
            اكتشف المزيد من الذكريات
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
    
    {/* Decorative Elements */}
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C8102E]/10 blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C8102E]/5 blur-3xl -z-10" />
  </div>
</section>

      {/* أساطير الأهلي */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-gray-800 font-bold text-center mb-16 relative">
            <span className="relative inline-block">
              عمالقة كتبوا التاريخ
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#C8102E] transform -translate-y-2"></span>
            </span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {data.legends.map((legend, index) => (
              <motion.div
                key={legend.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#C8102E] rounded-full opacity-0 group-hover:opacity-20 transition duration-300 transform group-hover:scale-110"></div>
                  <img
                    src={legend.image}
                    alt={legend.name}
                    className="rounded-full w-32 h-32 object-cover mx-auto border-4 border-[#C8102E] shadow-lg group-hover:shadow-xl transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4 text-gray-800">
                  {legend.name}
                </h3>
                <p className="text-gray-600">{legend.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-gradient-to-r from-[#C8102E] to-[#a00c22] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/ahly-pattern.png')] bg-repeat"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <FaHeart className="text-4xl mx-auto mb-6 text-white opacity-80" />
          <p className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed">
            "الأهلي ليس مجرد نادٍ.. إنه حكاية شغف تتوارثها الأجيال، وملحمة مجد
            كتبها العظماء، وقصة حب لا تنتهي بين النادي وأعظم جمهور في العالم"
          </p>
          <div className="mt-8 h-1 w-24 bg-white mx-auto opacity-70"></div>
        </motion.div>
      </section>

      {/* قسم الرعاة */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-gray-800 font-bold text-center mb-16 relative">
              <span className="relative inline-block">
                رعاة النادي الأهلي
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#C8102E] transform -translate-y-2"></span>
              </span>
            </h2>

            

            {/* شريط الرعاة الرسميين */}
            <div className="mb-20">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-12 gap-6 items-center">
                {data.sponsors.officialSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="flex items-center justify-center h-28"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                    </div>
                ))}
              </div>
            </div>

            {/* رسالة شكر للرعاة */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 text-center bg-[#C8102E] text-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-3">
                نشكر رعاة النادي الأهلي
              </h3>
              <p className="text-lg">
                شركاء النجاح الذين يدعمون مسيرة الأهلي نحو المجد ويساهمون في
                كتابة التاريخ
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
