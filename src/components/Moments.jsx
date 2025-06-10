import { motion } from "framer-motion";
import { moments } from "../data/moments";
import { Link } from "react-router-dom";

export default function Moments() {
  return (
    <div className="bg-black min-h-screen py-16 px-6">
      <h2 className="text-5xl text-[#C8102E] font-bold mb-12 text-center">
        لحظات من التاريخ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {moments.map((moment, index) => (
          <motion.div
            key={index}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={moment.image}
              alt={moment.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 text-[#C8102E]">
                {moment.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{moment.date}</p>
              <p className="mb-4">{moment.description}</p>
              <Link
                to={`/moment/${index}`}
                className="inline-block bg-[#C8102E] px-5 py-2 rounded-lg font-semibold text-white hover:bg-[#a00c22] transition"
              >
                اعرف أكتر
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
