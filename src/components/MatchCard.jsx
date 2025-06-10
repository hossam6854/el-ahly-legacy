// components/NewMatchCard.js
import PropTypes from "prop-types";

const NewMatchCard = ({ match, onClick }) => {
  const isFinished = match.status === "منتهية";
  const isUpcoming = match.status === "قادمة";

  return (
    <div
      onClick={onClick}
      
      role="button"
      aria-label={`تفاصيل مباراة ${match.teamA.name} ضد ${match.teamB.name}`}
      tabIndex={0}
      className="group relative bg-gradient-to-br from-black via-zinc-900 to-red-900 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform cursor-pointer"
    >
      {/* Background Stadium Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/stadium-bg.jpg')] bg-cover bg-center" />

      {/* Glow border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-red-500 transition-all duration-300" />

      {/* Match Header */}
      <div className="relative z-10 flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img src={match.competition.logo} alt={match.competition.name} className="h-6" />
          <span className="text-sm font-bold text-white">{match.competition.name}</span>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full 
          ${isFinished ? "bg-green-600" : isUpcoming ? "bg-yellow-500" : "bg-blue-600"}
        `}>
          {match.status}
        </span>
      </div>

      {/* Match Info */}
      <div className="relative z-10 px-6 py-4 text-white">
        <div className="flex justify-between items-center">
          {/* Team A */}
          <div className="flex flex-col items-center w-1/3">
            <img src={match.teamA.logo} alt={match.teamA.name} className="h-14 drop-shadow-lg mb-2" />
            <span className="text-base font-bold">{match.teamA.name}</span>
          </div>

          {/* VS / Score */}
          <div className="flex flex-col items-center w-1/3">
            <span className="text-3xl font-extrabold text-white drop-shadow-md">
              {isFinished ? match.score : match.time}
            </span>
            <span className="text-sm text-gray-300">
              {isFinished ? "انتهت" : "تبدأ في"}
            </span>
          </div>

          {/* Team B */}
          <div className="flex flex-col items-center w-1/3">
            <img src={match.teamB.logo} alt={match.teamB.name} className="h-14 drop-shadow-lg mb-2" />
            <span className="text-base font-bold">{match.teamB.name}</span>
          </div>
        </div>

        {/* Match Meta Info */}
        <div className="text-xs text-center text-gray-400 mt-4">
          {match.date} | {match.stadium}
        </div>
      </div>

      {/* Man of the Match */}
      {isFinished && match.manOfTheMatch && (
        <div className="relative z-10 bg-red-800 text-sm text-white text-center py-2 rounded-b-3xl font-semibold">
          نجم المباراة: <span className="text-yellow-300">{match.manOfTheMatch}</span>
        </div>
      )}
    </div>
  );
};

NewMatchCard.propTypes = {
  match: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NewMatchCard;
