// matches.js
import { useEffect, useState, useMemo } from "react";
import MatchCard from "../components/MatchCard";
import FilterTabs from "../components/FilterTabs";
import SearchInput from "../components/SearchInput";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";
import CountdownTimer from "../components/CountdownTimer";
import { useNavigate } from "react-router-dom";

const MatchesPage = () => {
  const [matches, setMatches] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const storedMatches =
          JSON.parse(localStorage.getItem("ahlyMatches")) || [];
        setMatches(storedMatches);
      } catch (error) {
        console.error("Failed to load matches:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMatches();
  }, []);

  const filteredMatches = useMemo(() => {
    return matches.filter((match) => {
      const matchesFilter = filter === "all" || match.competition.id === filter;
      const matchesSearch =
        searchTerm === "" ||
        match.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.competition.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        match.teamB.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [matches, filter, searchTerm]);

  const getNextMatch = useMemo(() => {
    const upcomingMatches = matches.filter((match) => match.status === "قادمة");
    if (upcomingMatches.length === 0) return null;

    // نرتب المباريات حسب التاريخ الأقرب
    upcomingMatches.sort((a, b) => new Date(a.date) - new Date(b.date));
    return upcomingMatches[0];
  }, [matches]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-16 text-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 🎯 قسم المباراة القادمة مع التايمر */}
        {getNextMatch && (
          <section className="bg-gradient-to-r from-red-900 to-red-700 rounded-2xl p-6 text-white shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">
              المباراة القادمة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex flex-col items-center">
                <img
                  src={getNextMatch.teamA.logo}
                  alt={getNextMatch.teamA.name}
                  className="h-16 md:h-20 mb-2"
                />
                <span className="font-bold">{getNextMatch.teamA.name}</span>
              </div>

              <div className="text-center">
                <div className="mb-2">
                  <span className="bg-black bg-opacity-30 px-4 py-1 rounded-full text-sm">
                    {getNextMatch.competition.name}
                  </span>
                </div>
                <div className="text-3xl font-bold my-2">VS</div>
                <div className="text-sm">
                  {getNextMatch.date} | {getNextMatch.stadium}
                </div>
                <div className="mt-4">
                  <CountdownTimer targetDate={getNextMatch.date} targetTime={getNextMatch.time} />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={getNextMatch.teamB.logo}
                  alt={getNextMatch.teamB.name}
                  className="h-16 md:h-20 mb-2"
                />
                <span className="font-bold">{getNextMatch.teamB.name}</span>
              </div>
            </div>
          </section>
        )}

        {/* 🟥 1. Page Title + Summary */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4">
          <PageHeader title="مباريات النادي الأهلي" />
          <div className="text-sm text-gray-500">
            {matches.length > 0 && `عدد المباريات: ${filteredMatches.length}`}
          </div>
        </header>

        {/* 🔍 2. Filters + Search */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <FilterTabs active={filter} setActive={setFilter} />
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="ابحث عن مباراة أو فريق..."
          />
        </section>

        <section className="space-y-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin h-10 w-10 border-t-4 border-red-600 border-solid rounded-full" />
            </div>
          ) : filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <MatchCard
                key={`${match.id}-${match.date}`}
                match={match}
                onClick={() => navigate(`/match/${match.id}`)}
              />
            ))
          ) : (
            <EmptyState
              title="لا توجد مباريات متاحة"
              description="حاول تغيير الفلتر أو البحث أو انتظر التحديثات القادمة"
            />
          )}
        </section>

      </div>
    </div>
  );
};

export default MatchesPage;
