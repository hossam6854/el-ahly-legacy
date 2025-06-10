import { Facebook, Instagram, Youtube, Trophy, Shield, Users, History } from "lucide-react";
import { Link } from "react-router-dom";
import AhlyImg from "../assets/logos/new-logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-b from-[#0a0a0a] to-[#2a0a0a] text-gray-200 pt-16 pb-8 border-t border-[#C8102E]/30"
      style={{ fontFamily: "'El Messiri', sans-serif" }}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        {/* القسم العلوي */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* شعار الأهلي ومعلومات أساسية */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start mb-6 group">
              <img 
                src={AhlyImg} 
                alt="شعار النادي الأهلي" 
                className="h-24 mb-4 transition-transform duration-500 group-hover:scale-110" 
              />
              <h3 className="text-3xl font-bold text-[#C8102E]">النادي الأهلي</h3>
              <p className="text-gray-400 mt-1">تأسس 1907 - أعظم نادي في الكون</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" aria-label="فيسبوك" className="bg-[#ffffff0d] hover:bg-[#C8102E] p-3 rounded-full transition-all duration-300">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" aria-label="إنستجرام" className="bg-[#ffffff0d] hover:bg-[#C8102E] p-3 rounded-full transition-all duration-300">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" aria-label="يوتيوب" className="bg-[#ffffff0d] hover:bg-[#C8102E] p-3 rounded-full transition-all duration-300">
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#C8102E] rounded-full"></span>
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-[#C8102E] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full"></span>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/matches" className="flex items-center gap-2 hover:text-[#C8102E] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full"></span>
                  مباريات النادي
                </Link>
              </li>
              <li>
                <Link to="/current-squad" className="flex items-center gap-2 hover:text-[#C8102E] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full"></span>
                  الفريق الحالي
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="flex items-center gap-2 hover:text-[#C8102E] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full"></span>
                  تاريخ النادي
                </Link>
              </li>
              <li>
                <Link to="/championships" className="flex items-center gap-2 hover:text-[#C8102E] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full"></span>
                  متحف البطولات
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="flex items-center gap-2 hover:text-[#C8102E] transition-colors duration-300">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full"></span>
                  اختبر نفسك
                </Link>
              </li>
            </ul>
          </div>

          {/* إحصائيات الأهلي */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#C8102E] rounded-full"></span>
              إنجازات خالدة
            </h4>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#C8102E]/10 p-3 rounded-full">
                  <Trophy className="text-[#C8102E]" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">153</p>
                  <p className="text-gray-400 text-sm">بطولة محلية ودولية</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#C8102E]/10 p-3 rounded-full">
                  <Shield className="text-[#C8102E]" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-gray-400 text-sm">بطولة أفريقية للأندية</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#C8102E]/10 p-3 rounded-full">
                  <Users className="text-[#C8102E]" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">70+</p>
                  <p className="text-gray-400 text-sm">مليون مشجع حول العالم</p>
                </div>
              </div>
            </div>
          </div>

         {/* نبض الجماهير */}
<div>
  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
    <span className="w-3 h-3 bg-[#C8102E] rounded-full"></span>
    نبض الجماهير
  </h4>
  <div className="space-y-4">
    {[
      "الأهلي مش مجرد نادي.. ده حب وحياة.",
      "خسارة الأهلي وجع.. لكن عمره ما بيكسرنا.",
      "الأهلي فوق الجميع.. مش شعار، ده أسلوب حياة."
    ].map((quote, index) => (
      <div
        key={index}
        className="bg-[#ffffff0d] hover:bg-[#C8102E]/20 border border-[#C8102E]/10 rounded-lg p-4 transition-all duration-300 group"
      >
        <p className="text-sm text-gray-300 group-hover:text-white text-center">{quote}</p>
      </div>
    ))}
  </div>
</div>
</div>



        {/* القسم السفلي */}
        <div className="border-t border-[#C8102E]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 النادي الأهلي - جميع الحقوق محفوظة | صنع بعشق الأهلي ❤️
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-[#C8102E] text-sm transition-colors duration-300">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#C8102E] text-sm transition-colors duration-300">
              شروط الاستخدام
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-[#C8102E] text-sm transition-colors duration-300">
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;