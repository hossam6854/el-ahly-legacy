import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import AhlyImg from "../assets/logos/new-logo.png";

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/matches", label: "المباريات" },
  { to: "/current-squad", label: "الفريق الحالي" },
  { to: "/timeline", label: "لحظات مع التاريخ" },
  { to: "/championships", label: "متحف الأهلي" },
  { to: "/quiz", label: "اختبار اهلاوي" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
      dir="rtl"
      style={{ fontFamily: "'El Messiri', sans-serif" }}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6 lg:px-14">
        {/* Logo with improved styling */}
        <Link 
          to="/" 
          className="flex items-center gap-3 select-none group"
        >
          <img 
            src={AhlyImg} 
            alt="شعار النادي الأهلي" 
            className="h-20 w-16 object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="hidden md:flex flex-col items-start">
            <span className="text-2xl font-bold text-[#C8102E] leading-tight">النادي الأهلي</span>
            <span className="text-xs text-gray-600">مصر · تأسس 1907</span>
          </div>
        </Link>

        {/* Enhanced Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-3 text-lg font-medium transition-all duration-200 relative group ${
                location.pathname === link.to
                  ? "text-[#C8102E] font-bold"
                  : "text-gray-800 hover:text-[#C8102E]"
              }`}
            >
              {link.label}
              {/* Animated underline effect */}
              <span
                className={`absolute bottom-2 right-2 h-0.5 bg-[#C8102E] transition-all duration-300 ${
                  location.pathname === link.to
                    ? "w-5/6 opacity-100"
                    : "w-0 opacity-0 group-hover:w-5/6 group-hover:opacity-100"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button with better styling */}
        <button
          className="md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-red-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="قائمة التنقل"
        >
          {menuOpen ? (
            <XIcon className="w-8 h-8 text-[#C8102E] stroke-2" />
          ) : (
            <MenuIcon className="w-8 h-8 text-[#C8102E] stroke-2" />
          )}
        </button>
      </div>

      {/* Improved Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-2 shadow-inner" : "max-h-0 py-0"
        } bg-white`}
      >
        <div className="flex flex-col gap-1 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-white bg-[#C8102E] font-bold"
                  : "text-gray-800 hover:bg-red-50 hover:text-[#C8102E]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;