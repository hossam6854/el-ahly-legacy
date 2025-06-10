import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

import Trika2006 from "../assets/legents/images/trika.jpg";
import moment1 from "../assets/moments/100-130446-acl-second-place-alahly-title_700x400.jpg";
import moment2 from "../assets/moments/12690770981714500016.jpg";
import moment3 from "../assets/moments/14725403461587583927.jpg";
import moment4 from "../assets/moments/201612171034163416.jpg";
import moment5 from "../assets/moments/4932452891454527984.jpg";
import moment6 from "../assets/moments/ahly-179335688.jpg";
import moment7 from "../assets/moments/zizo.jpg";

import personal from "../assets/personal/1742901817.jpg";
import personal2 from "../assets/personal/Aboutrika2011.jpg";
import personal3 from "../assets/personal/kateb.jpg";
import personal4 from "../assets/personal/saleh.jpeg";
import personal5 from "../assets/personal/hossam.jpg";
import personal6 from "../assets/personal/wael.jpg";
import personal7 from "../assets/personal/emo.png";
import personal8 from "../assets/personal/motab.jpg";
import personal9 from "../assets/personal/barakat.jpg";
import personal10 from "../assets/personal/ali.png";

import sponsors1 from "../assets/parteners/Adidas_Logo.svg";
import sponsors2 from "../assets/parteners/UofCanada-Digital-Color.png";
import sponsors3 from "../assets/parteners/almarasem1-66aa44a2e83cf.png";
import sponsors4 from "../assets/parteners/Coca-Cola-64f479504eed6.png";
import sponsors5 from "../assets/parteners/glc-64f477424d687.png";
import sponsors6 from "../assets/parteners/Logo-prometeon1.png";
import sponsors7 from "../assets/parteners/fab-logo-new-64f476976fcad.png";
import sponsors8 from "../assets/parteners/imagescon1.png";
import sponsors9 from "../assets/parteners/etisalat-and-logo-png_seeklogo-588606.png";
import sponsors10 from "../assets/parteners/Jetour-Logo-500x281.png";
import sponsors11 from "../assets/parteners/Lipton-Logo-600x600-6509c0671b91d.png";
import sponsors12 from "../assets/parteners/shelll-64f478bc0a087.png";

import coutch from "../assets/CurrentSquad/rabiro.png";
import player from "../assets/CurrentSquad/abdalwahed.png";
import player3 from "../assets/CurrentSquad/alio.jpg";
import player4 from "../assets/CurrentSquad/asraf.jpg";
import player5 from "../assets/CurrentSquad/afsha.png";
import player6 from "../assets/CurrentSquad/atiaallah.png";
import player7 from "../assets/CurrentSquad/bekham.jpg";
import player8 from "../assets/CurrentSquad/bnramadan.jpg";
import player9 from "../assets/CurrentSquad/dary.jpg";
import player10 from "../assets/CurrentSquad/dbas.png";
import player11 from "../assets/CurrentSquad/elsay.png";
import player12 from "../assets/CurrentSquad/elshahat.png";
import player13 from "../assets/CurrentSquad/esh.jpg";
import player14 from "../assets/CurrentSquad/foad.png";
import player15 from "../assets/CurrentSquad/grar.jpg";
import player16 from "../assets/CurrentSquad/hamdyfathy.jpg";
import player17 from "../assets/CurrentSquad/hany.jpg";
import player18 from "../assets/CurrentSquad/khaled.png";
import player19 from "../assets/CurrentSquad/koka.png";
import player20 from "../assets/CurrentSquad/maklof.png";
import player21 from "../assets/CurrentSquad/marwanatiaa.png";
import player22 from "../assets/CurrentSquad/moabdallah.png";
import player23 from "../assets/CurrentSquad/nedved.png";
import player24 from "../assets/CurrentSquad/Oufa31.jpg";
import player25 from "../assets/CurrentSquad/reda.png";
import player26 from "../assets/CurrentSquad/sihaa.jpg";
import player27 from "../assets/CurrentSquad/snawy.png";
import player28 from "../assets/CurrentSquad/taherr.jpg";
import player29 from "../assets/CurrentSquad/trezegah.jpg";
import player30 from "../assets/CurrentSquad/wisam.png";
import player31 from "../assets/CurrentSquad/yaser.jpg";
import ZizoImg from "../assets/CurrentSquad/zizoo.png";

import logo from "../assets/logos/new-logo.png";
import africa from "../assets/matches/CAF_Champions_League.png";
import clubworldcup from "../assets/matches/2025_FIFA_Club_World_Cup.svg.png";
import intermiami from "../assets/matches/Inter_Miami_CF_logo.svg.png";
import palmeiras from "../assets/matches/Palmeiras_logo.svg.png";
import porto from "../assets/matches/fc-porto-logo.png";
import tarajy from "../assets/matches/trajy.png";

import lega from "../assets/champ/leag.png";
import champion from "../assets/champ/africa.png";
import confidral from "../assets/champ/kofidral.png";
import kas from "../assets/champ/kas.png";
import superafrica from "../assets/champ/Supafrica.png";
import superclub from "../assets/champ/egyptionsuper.png";
import afroasuwy from "../assets/champ/afroasuwy.png";
import arab from "../assets/champ/arab.png";
import arakas from "../assets/champ/arakas.png";
import cairodawry from "../assets/champ/cairodawry.png";
import hussin from "../assets/champ/hussin.png";
import kasalkouus from "../assets/champ/kasalkouus.png";

const matches = [
  {
    id: 1,
    title: "الأهلي vs الترجي",
    date: "2025-06-01",
    time: "22:00",
    teamA: {
      name: "الأهلي",
      logo: logo,
      goals: 1,
      possession: 58,
      shots: 12,
      shotsOnTarget: 5,
      corners: 7,
      passes: 460,
      successfulPasses: 390,
      fouls: 18,
      offsides: 4,
      yellowCards: 3,
      redCards: 0,
    },
    teamB: {
      name: "الترجي",
      logo: tarajy,
      goals: 0,
      possession: 42,
      shots: 8,
      shotsOnTarget: 3,
      corners: 4,
      passes: 370,
      successfulPasses: 310,
      fouls: 18,
      offsides: 4,
      yellowCards: 3,
      redCards: 0,
    },
    score: "1 - 0",
    competition: {
      id: "africa",
      name: "دوري أبطال أفريقيا",
      logo: africa,
      stage: "نصف النهائي",
    },
    status: "منتهية",
    stadium: "ستاد القاهرة الدولي",
    referee: "محمود عاشور",
    attendance: "75,000",
    highlights: "https://youtube.com/ahly-tergaa-highlights",
    report:
      "في مباراة مثيرة على ستاد القاهرة، الأهلي تفوق بهدف نظيف أحرزه حسين الشحات في الدقيقة 67 بعد تمريرة سحرية من بيرسي تاو. المباراة شهدت سيطرة أهلاوية واستبسال من الترجي في الدفاع، مع تألق كبير من محمد الشناوي الذي أنقذ فرصتين خطيرتين.",
    manOfTheMatch: "مصطفي شوبير",
    events: [
      { minute: 67, type: "goal", team: "teamA", player: "حسين الشحات" },
      { minute: 42, type: "yellowCard", team: "teamA", player: "أليو ديانج" },
      {
        minute: 55,
        type: "substitution",
        team: "teamA",
        playerOut: "كهربا",
        playerIn: "شريف",
      },
      {
        minute: 78,
        type: "yellowCard",
        team: "teamB",
        player: "محمد علي بن رمضان",
      },
    ],
  },

  // 🏆 كأس العالم للأندية 2025 - المباراة 1
  {
    id: 2,
    title: "الأهلي vs إنتر ميامي",
    date: "2025-06-14",
    time: "03:00",
    teamA: {
      name: "الأهلي",
      logo: logo,
      goals: null,
      possession: null,
      shots: null,
      shotsOnTarget: null,
      corners: null,
    },
    teamB: {
      name: "إنتر ميامي",
      logo: intermiami,
      goals: null,
      possession: null,
      shots: null,
      shotsOnTarget: null,
      corners: null,
    },
    score: "لم تبدأ",
    competition: {
      id: "clubworldcup",
      name: "كأس العالم للأندية 2025",
      logo: clubworldcup,
      stage: "دور المجموعات",
    },
    status: "قادمة",
    stadium: "Hard Rock Stadium – ميامي",
    referee: null,
    attendance: null,
    highlights: null,
    report: null,
    manOfTheMatch: null,
    stats: {
      fouls: null,
      offsides: null,
      yellowCards: null,
      redCards: null,
    },
  },

  // 🏆 كأس العالم للأندية 2025 - المباراة 2
  {
    id: 3,
    title: "الأهلي vs بالميراس",
    date: "2025-06-19",
    time: "19:00",
    teamA: {
      name: "الأهلي",
      logo: logo,
      goals: null,
      possession: null,
      shots: null,
      shotsOnTarget: null,
      corners: null,
    },
    teamB: {
      name: "بالميراس",
      logo: palmeiras,
      goals: null,
      possession: null,
      shots: null,
      shotsOnTarget: null,
      corners: null,
    },
    score: "لم تبدأ",
    competition: {
      id: "clubworldcup",
      name: "كأس العالم للأندية 2025",
      logo: clubworldcup,
      stage: "دور المجموعات",
    },
    status: "قادمة",
    stadium: "MetLife Stadium – نيويورك",
    referee: null,
    attendance: null,
    highlights: null,
    report: null,
    manOfTheMatch: null,
    stats: {
      fouls: null,
      offsides: null,
      yellowCards: null,
      redCards: null,
    },
  },

  // 🏆 كأس العالم للأندية 2025 - المباراة 3
  {
    id: 4,
    title: "الأهلي vs بورتو",
    date: "2025-06-24",
    time: "04:00",
    teamA: {
      name: "الأهلي",
      logo: logo,
      goals: null,
      possession: null,
      shots: null,
      shotsOnTarget: null,
      corners: null,
    },
    teamB: {
      name: "بورتو",
      logo: porto,
      goals: null,
      possession: null,
      shots: null,
      shotsOnTarget: null,
      corners: null,
    },
    score: "لم تبدأ",
    competition: {
      id: "clubworldcup",
      name: "كأس العالم للأندية 2025",
      logo: clubworldcup,
      stage: "دور المجموعات",
    },
    status: "قادمة",
    stadium: "MetLife Stadium – نيويورك",
    referee: null,
    attendance: null,
    highlights: null,
    report: null,
    manOfTheMatch: null,
    stats: {
      fouls: null,
      offsides: null,
      yellowCards: null,
      redCards: null,
    },
  },
];

// حفظ البيانات في localStorage
localStorage.setItem("ahlyMatches", JSON.stringify(matches));

export const data = {
  championshipsData: [
    {
      id: 1,
      title: "الدوري المصري الممتاز",
      count: 45,
      type: "دوري",
      image: lega,
      description:
        "أكثر الأندية تتويجاً بالدوري المصري عبر التاريخ، سيطر الأهلي على الكرة المصرية بعروض أسطورية. (45 لقبًا حتى نهاية موسم 2024-2025)",
      wins: [
        {
          year: 1949,
          captain: "أحمد مكاوي",
          coach: "إريك جونز (إنجليزي)",
          topScorer: "محمد دياب العطار (الديبة)  - هداف الدوري",
          notableMatches: [
            "الأهلي 5-0 فاروق (الزمالك حالياً) - أول مباراة قمة في الدوري",
          ],
        },
        {
          year: 1950,
          captain: "أحمد مكاوي",
          coach: "إريك جونز",
          topScorer: "أحمد مكاوي",
          notableMatches: [
            "الأهلي 2-0 الترسانة (ضمن اللقب بفارق النقاط)",
            "الأهلي 2-1 الزمالك",
          ],
        },
        {
          year: 1951,
          captain: "أحمد مكاوي",
          coach: "إريك جونز",
          topScorer: "أحمد مكاوي",
          notableMatches: [
            "الأهلي 4-1 الترسانة (ضمن اللقب)",
            "الأهلي 6-0 الأوليمبي",
          ],
        },
        {
          year: 1953,
          captain: "عبد الرحمن فوزي",
          coach: "مصطفى كامل منصور",
          topScorer: "أحمد مكاوي",
          notableMatches: ["الأهلي 2-0 الزمالك (مباراة حسم اللقب)"],
        },
        {
          year: 1954,
          captain: "عبد الرحمن فوزي",
          coach: "مصطفى كامل منصور",
          topScorer: "أحمد مكاوي",
          notableMatches: ["الأهلي 4-2 الزمالك (ضمن اللقب بفارق النقاط)"],
        },
        {
          year: 1956,
          captain: "عبد الرحمن فوزي",
          coach: "مصطفى كامل منصور",
          topScorer: "وجيه مصطفى",
          notableMatches: [
            "الأهلي 3-0 الزمالك",
            "الأهلي 4-1 الترسانة (ضمن اللقب)",
          ],
        },
        {
          year: 1957,
          captain: "رأفت عطية",
          coach: "مصطفى كامل منصور",
          topScorer: "صالح سليم",
          notableMatches: [
            "الأهلي 2-0 الزمالك (مباراة فاصلة لتحديد اللقب بعد تساوي النقاط)",
          ],
        },
        {
          year: 1958,
          captain: "رأفت عطية",
          coach: "مصطفى كامل منصور",
          topScorer: "صالح سليم",
          notableMatches: ["الأهلي 3-1 الزمالك"],
        },
        {
          year: 1959,
          captain: "رأفت عطية",
          coach: "محمد الحلو",
          topScorer: "صالح سليم",
          notableMatches: ["الأهلي 2-1 الزمالك (ضمن اللقب)"],
        },
        {
          year: 1961,
          captain: "رأفت عطية",
          coach: "محمد الحلو",
          topScorer: "طاهر الشيخ",
          notableMatches: ["الأهلي 4-0 الزمالك"],
        },
        {
          year: 1962,
          captain: "صالح سليم",
          coach: "محمد الحلو",
          topScorer: "صالح سليم",
          notableMatches: ["الأهلي 3-0 الترسانة (ضمن اللقب في الجولة الأخيرة)"],
        },
        {
          year: 1975,
          captain: "طه بصري",
          coach: "ديولا جينجيل (مجري)",
          topScorer: "محمود الخطيب",
          notableMatches: [
            "الأهلي 3-0 الزمالك",
            "الأهلي 4-0 الترسانة (ضمن اللقب)",
          ],
        },
        {
          year: 1976,
          captain: "طه بصري",
          coach: "ديولا جينجيل",
          topScorer: "مصطفى عبده",
          notableMatches: [
            "الأهلي 2-1 الإسماعيلي (حسم اللقب في الجولة الأخيرة بفارق نقطة)",
          ],
        },
        {
          year: 1977,
          captain: "طه بصري",
          coach: "ديولا جينجيل",
          topScorer: "محمود الخطيب (11 هدفًا)",
          notableMatches: ["الأهلي 1-0 الزمالك (ضمن اللقب)"],
        },
        {
          year: 1979,
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا (برازيلي)",
          topScorer: "محمود الخطيب (11 هدفًا)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 3-0 المصري (ضمن اللقب)",
          ],
        },
        {
          year: 1980,
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا",
          topScorer: "محمود الخطيب",
          notableMatches: [
            "الأهلي 2-1 الزمالك",
            "الأهلي 1-0 المقاولون العرب (ضمن اللقب)",
          ],
        },
        {
          year: 1981,
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا",
          topScorer: "محمود الخطيب",
          notableMatches: [
            "الأهلي 3-0 غزل المحلة (ضمن اللقب قبل النهاية بـ 3 جولات)",
          ],
        },
        {
          year: 1982,
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا",
          topScorer: "مصطفى عبده",
          notableMatches: [
            "الأهلي 1-0 الزمالك",
            "الأهلي 2-0 الإسماعيلي (ضمن اللقب)",
          ],
        },
        {
          year: 1985,
          captain: "طاهر أبو زيد",
          coach: "هلموت رودي (ألماني)",
          topScorer: "طاهر أبو زيد",
          notableMatches: ["الأهلي 2-0 الزمالك (مباراة القمة التي حسمت اللقب)"],
        },
        {
          year: 1986,
          captain: "طاهر أبو زيد",
          coach: "هلموت رودي",
          topScorer: "طاهر أبو زيد",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 3-0 غزل المحلة (ضمن اللقب)",
          ],
        },
        {
          year: 1987,
          captain: "طاهر أبو زيد",
          coach: "هلموت رودي",
          topScorer: "أيمن شوقي",
          notableMatches: [
            "الأهلي 2-1 الزمالك (ضمن اللقب بفارق الأهداف بعد تساوي النقاط)",
          ],
        },
        {
          year: 1989,
          captain: "إبراهيم حسن",
          coach: "محمود الجوهري",
          topScorer: "علاء ميهوب",
          notableMatches: ["الأهلي 1-0 الزمالك (ضمن اللقب بعد مباراة فاصلة)"],
        },
        {
          year: 1994,
          captain: "إبراهيم حسن",
          coach: "راينر هابل (ألماني)",
          topScorer: "محمد رمضان",
          notableMatches: [
            "الأهلي 3-0 الزمالك",
            "الأهلي 2-0 الإسماعيلي (ضمن اللقب)",
          ],
        },
        {
          year: 1995,
          captain: "إبراهيم حسن",
          coach: "راينر هابل",
          topScorer: "حسام حسن (11 هدفًا)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 1-0 الإسماعيلي (ضمن اللقب)",
          ],
        },
        {
          year: 1996,
          captain: "إبراهيم حسن",
          coach: "راينر هابل",
          topScorer: "حسام حسن (7 أهداف)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 2-1 المصري (ضمن اللقب)",
          ],
        },
        {
          year: 1997,
          captain: "إبراهيم حسن",
          coach: "راينر هابل",
          topScorer: "حسام حسن (14 هدفًا)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 2-0 الإسماعيلي (ضمن اللقب)",
          ],
        },
        {
          year: 1998,
          captain: "إبراهيم حسن",
          coach: "راينر هابل",
          topScorer: "حسام حسن (15 هدفًا)",
          notableMatches: ["الأهلي 2-1 الزمالك (ضمن اللقب بفارق 3 نقاط)"],
        },
        {
          year: 1999,
          captain: "خالد بيبو",
          coach: "جوزيف هيكر (ألماني)",
          topScorer: "حسام حسن (15 هدفًا)",
          notableMatches: ["الأهلي 2-1 الزمالك (ضمن اللقب)"],
        },
        {
          year: 2000,
          captain: "خالد بيبو",
          coach: "مانويل جوزيه (برتغالي)",
          topScorer: "أحمد بلال (14 هدفًا)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 2-0 الإسماعيلي (ضمن اللقب)",
          ],
        },
        {
          year: 2005,
          captain: "أحمد بلال",
          coach: "مانويل جوزيه",
          topScorer: "عماد متعب (15 هدفًا)",
          notableMatches: [
            "الأهلي 6-0 الترسانة (أكبر فوز في الموسم)",
            "الأهلي 3-0 الزمالك (ضمن اللقب)",
          ],
        },
        {
          year: 2006,
          captain: "أحمد بلال",
          coach: "مانويل جوزيه",
          topScorer: "محمد أبو تريكة (18 هدفًا)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 5-1 أسمنت أسيوط (ضمن اللقب بفارق كبير)",
          ],
        },
        {
          year: 2007,
          captain: "أحمد بلال",
          coach: "مانويل جوزيه",
          topScorer: "أمادو فلافيو (12 هدفًا)",
          notableMatches: [
            "الأهلي 2-1 الزمالك",
            "الأهلي 4-0 بتروجيت (ضمن اللقب)",
          ],
        },
        {
          year: 2008,
          captain: "أحمد حسن",
          coach: "مانويل جوزيه",
          topScorer: "أمادو فلافيو (12 هدفًا)",
          notableMatches: ["الأهلي 2-1 الزمالك (ضمن اللقب)"],
        },
        {
          year: 2009,
          captain: "أحمد حسن",
          coach: "مانويل جوزيه",
          topScorer: "محمد أبو تريكة (10 أهداف)",
          notableMatches: [
            "الأهلي 1-0 الزمالك",
            "الأهلي 3-0 بترول أسيوط (ضمن اللقب)",
          ],
        },
        {
          year: 2010,
          captain: "أحمد حسن",
          coach: "حسام البدراوي",
          topScorer: "محمد ناجي جدو (10 أهداف)",
          notableMatches: [
            "الأهلي 3-3 الزمالك",
            "الأهلي 3-1 الإسماعيلي (مباراة فاصلة لحسم اللقب)",
          ],
        },
        {
          year: 2011,
          captain: "أحمد حسن",
          coach: "مانويل جوزيه",
          topScorer: "محمد ناجي جدو (9 أهداف)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 1-0 إنبي (ضمن اللقب قبل النهاية بـ 3 جولات)",
          ],
        },
        {
          year: 2014,
          captain: "وائل جمعة",
          coach: "محمد يوسف",
          topScorer: "عمرو جمال (6 أهداف)",
          notableMatches: [
            "الأهلي 1-0 سموحة (نهائي الدورة الرباعية لحسم اللقب)",
            "الأهلي 1-0 الزمالك (الدورة الرباعية)",
          ],
        },
        {
          year: 2016,
          captain: "حسام عاشور",
          coach: "مارتن يول (هولندي)",
          topScorer: "ماليك إيفونا (12 هدفًا)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 2-0 الإسماعيلي (ضمن اللقب)",
          ],
        },
        {
          year: 2017,
          captain: "حسام عاشور",
          coach: "حسام البدراوي",
          topScorer: "عبد الله السعيد (10 أهداف)",
          notableMatches: [
            "الأهلي 2-0 الزمالك",
            "الأهلي 2-2 مصر المقاصة (التعادل الذي ضمن اللقب)",
          ],
        },
        {
          year: 2018,
          captain: "حسام عاشور",
          coach: "حسام البدراوي",
          topScorer: "وليد أزارو (18 هدفًا)",
          notableMatches: [
            "الأهلي 3-0 الزمالك",
            "الأهلي 1-0 المقاولون العرب (ضمن اللقب)",
          ],
        },
        {
          year: 2019,
          captain: "حسام عاشور",
          coach: "لاسارتي (أوروجواياني)",
          topScorer: "وليد أزارو (10 أهداف)",
          notableMatches: [
            "الأهلي 1-0 الزمالك",
            "الأهلي 3-1 المقاولون العرب (ضمن اللقب في الجولة قبل الأخيرة)",
          ],
        },
        {
          year: 2020,
          captain: "محمد الشناوي",
          coach: "رينيه فايلر (سويسري)",
          topScorer: "علي معلول (11 هدفًا)",
          notableMatches: [
            "الأهلي 5-3 الزمالك",
            "الأهلي 2-0 المقاولون العرب (ضمن اللقب)",
          ],
        },
        {
          year: 2023,
          captain: "محمد الشناوي",
          coach: "مارسيل كولر (سويسري)",
          topScorer: "محمد شريف (11 هدفًا)",
          notableMatches: [
            "الأهلي 3-0 الزمالك",
            "الأهلي 2-1 بيراميدز (منافس مباشر)",
            "الأهلي 3-0 إنبي (ضمن اللقب)",
          ],
        },
        {
          year: 2024,
          captain: "محمد الشناوي",
          coach: "مارسيل كولر (سويسري)",
          topScorer: "وسام أبو علي (18 هدفًا)",
          notableMatches: [
            "الأهلي 2-1 الزمالك (مباراة حاسمة للقب)",
            "الأهلي 4-1 فيوتشر (ضمن اللقب قبل النهاية بعدة جولات)",
          ],
        },
        {
          year: 2025,
          captain: "محمد الشناوي",
          coach: "مارسيل كولر (سويسري)",
          topScorer: "إمام عاشور (13 هدفًا)",
          notableMatches: ["الأهلي 6-0 فاركو (ضمن اللقب)"],
        },
      ],
      stats: {
        mostTitles: true,
        longestWinningStreak: "9 مواسم متتالية (2004-2005 إلى 2013-2014)",
        biggestWin: "الأهلي 6-0 الترسانة (2005)",
        mostSuccessfulCoach: "مانويل جوزيه (6 ألقاب)",
        mostTitlesAsCaptain: "حسام عاشور (10 ألقاب)",
      },
    },
    {
      id: 2,
      title: "كأس مصر",
      count: 39,
      type: "كأس",
      image: kas,
      description:
        "سيطرة مطلقة على بطولة كأس مصر، حيث سجل الأهلي أرقاماً قياسية في عدد الألقاب والانتشار الجماهيري. (39 لقبًا حتى نهاية نسخة 2023 التي لُعبت في مارس 2024).",
      wins: [
        {
          year: 1924,
          matchHighlights: "/highlights-cup-1924.mp4",
          image: "/cup-1924.jpg",
          captain: "أحمد أنور",
          coach: "جيمس ماكراي (إسكتلندي)",
          finalScore: "4-1 ضد السكة الحديد",
          scorers: ["حسين حجازي (2)", "محمود مختار التتش", "أحمد مكاوي"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1925,
          matchHighlights: "/highlights-cup-1925.mp4",
          image: "/cup-1925.jpg",
          captain: "أحمد أنور",
          coach: "جيمس ماكراي (إسكتلندي)",
          finalScore: "4-1 ضد السكة الحديد",
          scorers: ["حسين حجازي", "مختار التتش", "أحمد مكاوي", "فؤاد الجميل"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1927,
          matchHighlights: "/highlights-cup-1927.mp4",
          image: "/cup-1927.jpg",
          captain: "أحمد أنور",
          coach: "جيمس ماكراي (إسكتلندي)",
          finalScore: "5-0 ضد الاتحاد السكندري",
          scorers: ["مختار التتش (2)", "أحمد مكاوي", "جميل عثمان", "أحمد رياض"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1928,
          matchHighlights: "/highlights-cup-1928.mp4",
          image: "/cup-1928.jpg",
          captain: "أحمد أنور",
          coach: "جيمس ماكراي (إسكتلندي)",
          finalScore: "2-1 ضد الاتحاد السكندري",
          scorers: ["مختار التتش", "محمد لبيب"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1930,
          matchHighlights: "/highlights-cup-1930.mp4",
          image: "/cup-1930.jpg",
          captain: "مختار التتش",
          coach: "جوزيف ماكلولين (إنجليزي)",
          finalScore: "4-1 ضد الاتحاد السكندري",
          scorers: ["مصطفى كامل طه (2)", "مختار التتش", "حسين حمدي"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1931,
          matchHighlights: "/highlights-cup-1931.mp4",
          image: "/cup-1931.jpg",
          captain: "مختار التتش",
          coach: "جوزيف ماكلولين (إنجليزي)",
          finalScore: "4-1 ضد المختلط (الزمالك حالياً)",
          scorers: ["حسين حمدي (2)", "مصطفى كامل طه", "مختار التتش"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1937,
          matchHighlights: "/highlights-cup-1937.mp4",
          image: "/cup-1937.jpg",
          captain: "مصطفى كامل طه",
          coach: "علي الحسني (مصري)",
          finalScore: "3-2 ضد المختلط (الزمالك حالياً)",
          scorers: ["حلمي فوزي", "محمد الجندي", "مصطفى كامل طه"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1940,
          matchHighlights: "/highlights-cup-1940.mp4",
          image: "/cup-1940.jpg",
          captain: "مصطفى كامل طه",
          coach: "علي الحسني (مصري)",
          finalScore: "2-0 ضد المختلط (الزمالك حالياً)",
          scorers: ["مصطفى كامل طه", "حسين مدكور"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1942,
          matchHighlights: "/highlights-cup-1942.mp4",
          image: "/cup-1942.jpg",
          captain: "مصطفى كامل طه",
          coach: "علي الحسني (مصري)",
          finalScore: "6-1 ضد الاتحاد السكندري",
          scorers: ["حسين مدكور (3)", "عبد الكريم صقر (2)", "مصطفى كامل طه"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1943,
          matchHighlights: "/highlights-cup-1943.mp4",
          image: "/cup-1943.jpg",
          captain: "مصطفى كامل طه",
          coach: "علي الحسني (مصري)",
          finalScore: "5-1 ضد السكة الحديد",
          scorers: [
            "حسين مدكور (2)",
            "أحمد مكاوي",
            "عبد الكريم صقر",
            "زكي عثمان",
          ],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1945,
          matchHighlights: "/highlights-cup-1945.mp4",
          image: "/cup-1945.jpg",
          captain: "مصطفى كامل طه",
          coach: "علي الحسني (مصري)",
          finalScore: "3-0 ضد السكة الحديد",
          scorers: ["أحمد مكاوي", "عبد الكريم صقر", "حسين مدكور"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1946,
          matchHighlights: "/highlights-cup-1946.mp4",
          image: "/cup-1946.jpg",
          captain: "مصطفى كامل طه",
          coach: "علي الحسني (مصري)",
          finalScore: "3-0 ضد الاتحاد السكندري",
          scorers: ["حسين مدكور (2)", "أحمد مكاوي"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1947,
          matchHighlights: "/highlights-cup-1947.mp4",
          image: "/cup-1947.jpg",
          captain: "مصطفى كامل طه",
          coach: "علي الحسني (مصري)",
          finalScore: "3-0 ضد الاتحاد السكندري",
          scorers: ["أحمد مكاوي", "حسين مدكور", "فؤاد صدقي"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1949,
          matchHighlights: "/highlights-cup-1949.mp4",
          image: "/cup-1949.jpg",
          captain: "أحمد مكاوي",
          coach: "إريك جونز (إنجليزي)",
          finalScore: "6-0 ضد الأوليمبي",
          scorers: [
            "أحمد مكاوي (2)",
            "أحمد فوزي (2)",
            "صالح سليم",
            "فتحي",
            "محمد الجندي",
          ],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1950,
          matchHighlights: "/highlights-cup-1950.mp4",
          image: "/cup-1950.jpg",
          captain: "أحمد مكاوي",
          coach: "إريك جونز (إنجليزي)",
          finalScore: "5-0 ضد الاتحاد السكندري",
          scorers: ["أحمد مكاوي (2)", "أحمد فوزي", "محمد الجندي", "صالح سليم"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1951,
          matchHighlights: "/highlights-cup-1951.mp4",
          image: "/cup-1951.jpg",
          captain: "أحمد مكاوي",
          coach: "إريك جونز (إنجليزي)",
          finalScore: "2-1 ضد الترسانة",
          scorers: ["أحمد مكاوي", "أحمد فوزي"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1953,
          matchHighlights: "/highlights-cup-1953.mp4",
          image: "/cup-1953.jpg",
          captain: "عبد الرحمن فوزي",
          coach: "مصطفى كامل منصور (مصري)",
          finalScore: "4-1 ضد الترسانة",
          scorers: ["أحمد فوزي (2)", "صالح سليم", "أحمد مكاوي"],
          stadium: "ملعب المختلط (الزمالك حالياً)",
        },
        {
          year: 1956,
          matchHighlights: "/highlights-cup-1956.mp4",
          image: "/cup-1956.jpg",
          captain: "صالح سليم",
          coach: "عبد الكريم صقر (مصري)",
          finalScore: "1-0 ضد الترسانة",
          scorers: ["السيد الضظوي"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1958,
          matchHighlights: "/highlights-cup-1958.mp4",
          image: "/cup-1958.jpg",
          captain: "صالح سليم",
          coach: "محمد الحلو (مصري)",
          finalScore: "2-1 ضد الزمالك",
          scorers: ["السيد الضظوي", "صالح سليم"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1961,
          matchHighlights: "/highlights-cup-1961.mp4",
          image: "/cup-1961.jpg",
          captain: "صالح سليم",
          coach: "محمد الحلو (مصري)",
          finalScore: "5-0 ضد القناة",
          scorers: [
            "صالح سليم (2)",
            "طه إسماعيل",
            "مروان كنفاني",
            "رفعت الفناجيلي",
          ],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1966,
          matchHighlights: "/highlights-cup-1966.mp4",
          image: "/cup-1966.jpg",
          captain: "صالح سليم",
          coach: "محمد الحلو (مصري)",
          finalScore: "3-1 ضد الترسانة",
          scorers: ["شريف الجندي", "عبد الفتاح", "علي خليل"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1978,
          matchHighlights: "/highlights-cup-1978.mp4",
          image: "/cup-1978.jpg",
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا (برازيلي)",
          finalScore: "4-2 ضد الزمالك",
          scorers: ["محمود الخطيب (2)", "مصطفى عبده", "أحمد عبد الباقي"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1981,
          matchHighlights: "/highlights-cup-1981.mp4",
          image: "/cup-1981.jpg",
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا (برازيلي)",
          finalScore: "2-1 ضد المقاولون العرب",
          scorers: ["محمود الخطيب", "ربيع ياسين"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1983,
          matchHighlights: "/highlights-cup-1983.mp4",
          image: "/cup-1983.jpg",
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا (برازيلي)",
          finalScore: "1-0 ضد الزمالك",
          scorers: ["مجدي عبد الغني"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1984,
          matchHighlights: "/highlights-cup-1984.mp4",
          image: "/cup-1984.jpg",
          captain: "طاهر أبو زيد",
          coach: "محمود الجوهري (مصري)",
          finalScore: "3-1 ضد المصري",
          scorers: ["طاهر أبو زيد (2)", "محمد عباس"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1985,
          matchHighlights: "/highlights-cup-1985.mp4",
          image: "/cup-1985.jpg",
          captain: "طاهر أبو زيد",
          coach: "هلموت رودي (ألماني)",
          finalScore: "3-2 ضد الإسماعيلي",
          scorers: ["طاهر أبو زيد (2)", "مصطفى عبده"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1989,
          matchHighlights: "/highlights-cup-1989.mp4",
          image: "/cup-1989.jpg",
          captain: "ثابت البطل",
          coach: "محمود الجوهري (مصري)",
          finalScore: "3-0 ضد غزل المحلة",
          scorers: ["محمد رمضان", "أيمن شوقي", "حسام حسن"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1991,
          matchHighlights: "/highlights-cup-1991.mp4",
          image: "/cup-1991.jpg",
          captain: "طارق خليل",
          coach: "محمود الجوهري (مصري)",
          finalScore: "2-1 ضد الزمالك",
          scorers: ["محمد رمضان", "أيمن شوقي"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1992,
          matchHighlights: "/highlights-cup-1992.mp4",
          image: "/cup-1992.jpg",
          captain: "طارق خليل",
          coach: "محمود الجوهري (مصري)",
          finalScore: "2-1 ضد الزمالك",
          scorers: ["محمد رمضان", "حسام حسن"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1993,
          matchHighlights: "/highlights-cup-1993.mp4",
          image: "/cup-1993.jpg",
          captain: "إبراهيم حسن",
          coach: "محمود الجوهري (مصري)",
          finalScore: "3-2 ضد الزمالك",
          scorers: ["حسام حسن", "محمد رمضان", "رضا عبد العال"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 1996,
          matchHighlights: "/highlights-cup-1996.mp4",
          image: "/cup-1996.jpg",
          captain: "محمد يوسف",
          coach: "راينر هابل (ألماني)",
          finalScore: "3-1 ضد المنصورة",
          scorers: ["حسام حسن", "أحمد فيليكس", "وليد صلاح الدين"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 2001,
          matchHighlights: "/highlights-cup-2001.mp4",
          image: "/cup-2001.jpg",
          captain: "هادي خشبة",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore: "2-0 ضد غزل المحلة",
          scorers: ["إبراهيم سعيد", "خالد بيبو"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 2003,
          matchHighlights: "/highlights-cup-2003.mp4",
          image: "/cup-2003.jpg",
          captain: "هادي خشبة",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore: "1-0 ضد الإسماعيلي",
          scorers: ["خالد بيبو"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 2006,
          matchHighlights: "/highlights-cup-2006.mp4",
          image: "/cup-2006.jpg",
          captain: "شادي محمد",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore: "1-0 ضد إنبي",
          scorers: ["محمد أبو تريكة"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 2007,
          matchHighlights: "/highlights-cup-2007.mp4",
          image: "/cup-2007.jpg",
          captain: "شادي محمد",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore: "4-3 ضد الزمالك",
          scorers: ["فلافيو", "أسامة حسني", "محمد أبو تريكة", "محمد بركات"],
          stadium: "ستاد القاهرة",
        },
        {
          year: 2017,
          matchHighlights: "/highlights-cup-2017.mp4",
          image: "/cup-2017.jpg",
          captain: "حسام عاشور",
          coach: "حسام البدري (مصري)",
          finalScore: "2-1 ضد المصري",
          scorers: ["عمرو جمال", "أحمد فتحي"],
          stadium: "ستاد برج العرب",
        },
        {
          year: 2020,
          matchHighlights: "/highlights-cup-2020.mp4",
          image: "/cup-2020.jpg",
          captain: "محمد الشناوي",
          coach: "بيتسو موسيماني (جنوب أفريقي)",
          finalScore: "1-1 (2-1 بعد الوقت الإضافي) ضد طلائع الجيش",
          scorers: ["محمود كهربا"],
          stadium: "ستاد القاهرة الدولي",
        },
        {
          year: 2022,
          matchHighlights: "/highlights-cup-2022.mp4",
          image: "/cup-2022.jpg",
          captain: "محمد الشناوي",
          coach: "مارسيل كولر (سويسري)",
          finalScore: "2-1 ضد بيراميدز",
          scorers: ["محمود كهربا", "حمدي فتحي"],
          stadium: "ستاد القاهرة الدولي",
        },
        {
          year: 2023,
          matchHighlights: "/highlights-cup-2023.mp4",
          image: "/cup-2023.jpg",
          captain: "محمد الشناوي",
          coach: "مارسيل كولر (سويسري)",
          finalScore: "2-0 ضد الزمالك",
          scorers: ["إمام عاشور", "محمد مجدي أفشة"],
          stadium: "استاد الأول بارك (الرياض، السعودية)",
        },
      ],
      stats: {
        mostTitles: true,
        mostConsecutiveFinals:
          "غير معروف (لا يوجد سجل دقيق لهذا الإحصاء بشكل عام)",
        biggestWinInFinal: "6-0 ضد الأوليمبي (1949)",
        mostFrequentOpponentInFinal:
          "الزمالك والاتحاد السكندري (كلاهما 9 مرات في النهائي ضد الأهلي)",
        mostSuccessfulCoach:
          "مانويل جوزيه (5 ألقاب) وعلي الحسني (9 ألقاب كلاعب ومدرب، 9 ألقاب كمدرب فقط)",
        mostGoalsInFinal:
          "6 أهداف (مرتين: 6-1 ضد الاتحاد السكندري في 1942، و6-0 ضد الأوليمبي في 1949)",
        mostAppearancesInFinal: "52 مرة (حتى 2023)",
      },
    },
    {
      id: 3,
      title: "دوري أبطال أفريقيا",
      count: 12,
      type: "أفريقيا",
      image: champion,
      description:
        "عملاق أفريقيا بلا منازع، الأهلي هو النادي الأكثر تتويجاً بدوري الأبطال الأفريقي عبر التاريخ. (12 لقبًا)",
      wins: [
        {
          year: 1982,
          matchHighlights: "/highlights-caf-1982.mp4",
          image: "/caf-1982.jpg",
          captain: "محمود الخطيب",
          coach: "تيلي سانتانا (برازيلي)",
          finalScore:
            "4-1 ضد أشانتي كوتوكو (مجموع المباراتين، الذهاب 3-0، الإياب 1-1)",
          scorers: ["محمود الخطيب (2)", "مصطفى عبده", "مدحت رمضان"],
          stadium:
            "الذهاب: ستاد القاهرة الدولي (مصر)، الإياب: ملعب كوماسي الرياضي (غانا)",
        },
        {
          year: 1987,
          matchHighlights: "/highlights-caf-1987.mp4",
          image: "/caf-1987.jpg",
          captain: "طاهر أبو زيد",
          coach: "هلموت رودي (ألماني)",
          finalScore: "0-0 ضد الهلال السوداني (الأهلي فاز 4-2 بركلات الترجيح)",
          scorers: [],
          stadium:
            "الذهاب: ستاد القاهرة الدولي (مصر)، الإياب: ملعب الهلال (السودان)",
        },
        {
          year: 2001,
          matchHighlights: "/highlights-caf-2001.mp4",
          image: "/caf-2001.jpg",
          captain: "هادي خشبة",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore:
            "4-1 ضد ماميلودي صن داونز (مجموع المباراتين، الذهاب 1-1، الإياب 3-0)",
          scorers: ["سيد عبد الحفيظ", "علاء إبراهيم", "خالد بيبو (2)"],
          stadium:
            "الذهاب: ملعب لوفتوس فيرسفيلد (جنوب أفريقيا)، الإياب: ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 2005,
          matchHighlights: "/highlights-caf-2005.mp4",
          image: "/caf-2005.jpg",
          captain: "شادي محمد",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore:
            "3-0 ضد النجم الساحلي (مجموع المباراتين، الذهاب 0-0، الإياب 3-0)",
          scorers: ["محمد أبو تريكة (2)", "عماد متعب"],
          stadium:
            "الذهاب: الملعب الأولمبي بسوسة (تونس)، الإياب: ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 2006,
          matchHighlights: "/highlights-caf-2006.mp4",
          image: "/caf-2006.jpg",
          captain: "شادي محمد",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore:
            "1-1 ضد الصفاقسي التونسي (الأهلي فاز بقاعدة الهدف خارج الأرض بعد التعادل 1-1 ذهاباً و 0-1 إياباً)",
          scorers: ["محمد أبو تريكة"],
          stadium:
            "الذهاب: ستاد القاهرة الدولي (مصر)، الإياب: الملعب الأولمبي برادس (تونس)",
        },
        {
          year: 2008,
          matchHighlights: "/highlights-caf-2008.mp4",
          image: "/caf-2008.jpg",
          captain: "شادي محمد",
          coach: "مانويل جوزيه (برتغالي)",
          finalScore:
            "4-2 ضد كوتون سبورت الكاميروني (مجموع المباراتين، الذهاب 2-0، الإياب 2-2)",
          scorers: ["فلافيو (2)", "وائل جمعة", "أحمد حسن"],
          stadium:
            "الذهاب: ستاد القاهرة الدولي (مصر)، الإياب: ملعب رومدي أدجيا (الكاميرون)",
        },
        {
          year: 2012,
          matchHighlights: "/highlights-caf-2012.mp4",
          image: "/caf-2012.jpg",
          captain: "أحمد فتحي",
          coach: "حسام البدري (مصري)",
          finalScore:
            "3-2 ضد الترجي التونسي (مجموع المباراتين، الذهاب 1-1، الإياب 2-1)",
          scorers: ["محمد ناجي جدو", "محمد أبو تريكة", "السيد حمدي"],
          stadium:
            "الذهاب: ستاد برج العرب (مصر)، الإياب: الملعب الأولمبي برادس (تونس)",
        },
        {
          year: 2013,
          matchHighlights: "/highlights-caf-2013.mp4",
          image: "/caf-2013.jpg",
          captain: "وائل جمعة",
          coach: "محمد يوسف (مصري)",
          finalScore:
            "3-1 ضد أورلاندو بايرتس (مجموع المباراتين، الذهاب 1-1، الإياب 2-0)",
          scorers: ["محمد أبو تريكة", "أحمد عبد الظاهر", "عمرو جمال"],
          stadium:
            "الذهاب: ملعب أورلاندو (جنوب أفريقيا)، الإياب: ملعب المقاولون العرب (مصر)",
        },
        {
          year: 2020,
          matchHighlights: "/highlights-caf-2020.mp4",
          image: "/caf-2020.jpg",
          captain: "محمد الشناوي",
          coach: "بيتسو موسيماني (جنوب أفريقي)",
          finalScore: "2-1 ضد الزمالك",
          scorers: ["عمرو السولية", "محمد مجدي أفشة"],
          stadium: "ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 2021,
          matchHighlights: "/highlights-caf-2021.mp4",
          image: "/caf-2021.jpg",
          captain: "محمد الشناوي",
          coach: "بيتسو موسيماني (جنوب أفريقي)",
          finalScore: "3-0 ضد كايزر تشيفز",
          scorers: ["محمد شريف", "محمد مجدي أفشة", "عمرو السولية"],
          stadium: "مركب محمد الخامس (المغرب)",
        },
        {
          year: 2023,
          matchHighlights: "/highlights-caf-2023.mp4",
          image: "/caf-2023.jpg",
          captain: "محمد الشناوي",
          coach: "مارسيل كولر (سويسري)",
          finalScore:
            "3-2 ضد الوداد الرياضي (مجموع المباراتين، الذهاب 2-1، الإياب 1-1)",
          scorers: [
            "بيرسي تاو",
            "محمود كهربا",
            "يحيى عطية الله (هدف في مرماه)",
          ],
          stadium:
            "الذهاب: ستاد القاهرة الدولي (مصر)، الإياب: مركب محمد الخامس (المغرب)",
        },
        {
          year: 2024,
          matchHighlights: "/highlights-caf-2024.mp4",
          image: "/caf-2024.jpg",
          captain: "محمد الشناوي",
          coach: "مارسيل كولر (سويسري)",
          finalScore:
            "1-0 ضد الترجي الرياضي التونسي (مجموع المباراتين، الذهاب 0-0، الإياب 1-0)",
          scorers: ["روجر أهولو (هدف في مرماه - لاعب الترجي)"],
          stadium:
            "الذهاب: الملعب الأولمبي برادس (تونس)، الإياب: ستاد القاهرة الدولي (مصر)",
        },
      ],
      stats: {
        mostTitles: true,
        mostFinals: "17 مرة (الأهلي وصل إلى النهائي 17 مرة وفاز بـ 12 لقبًا)",
        longestUnbeatenRun: "21 مباراة (2005-2007)",
        mostSuccessfulCoach: "مانويل جوزيه (4 ألقاب)",
        topScorerInHistory: "محمد أبو تريكة (33 هدفاً في البطولة)",
      },
    },
    {
      id: 4,
      title: "كأس السوبر الأفريقي",
      count: 8,
      type: "سوبر",
      image: superafrica,
      description:
        "سيطرة أفريقية مطلقة في لقاء الأبطال، حيث يثبت الأهلي تفوقه على أبطال الكونفدرالية الأفريقية. (8 ألقاب)",
      wins: [
        {
          year: 2002,
          opponent: "كايزر تشيفز (جنوب أفريقيا)",
          coach: "مانويل جوزيه (برتغالي)",
          captain: "هادي خشبة",
          finalScore: "4-1",
          stadium: "ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 2006,
          opponent: "الجيش الملكي (المغرب)",
          coach: "مانويل جوزيه (برتغالي)",
          captain: "شادي محمد",
          finalScore: "0-0 (4-2 ركلات جزاء)",
          stadium: "ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 2007,
          opponent: "النجم الساحلي (تونس)",
          coach: "مانويل جوزيه (برتغالي)",
          captain: "شادي محمد",
          finalScore: "0-0 (5-4 ركلات جزاء)",
          stadium: "ملعب أديس أبابا (إثيوبيا)",
        },
        {
          year: 2009,
          opponent: "الصفاقسي (تونس)",
          coach: "مانويل جوزيه (برتغالي)",
          captain: "أحمد حسن",
          finalScore: "2-1",
          stadium: "ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 2013,
          opponent: "ليوباردز (الكونغو)",
          coach: "محمد يوسف (مصري)",
          captain: "وائل جمعة",
          finalScore: "2-1",
          stadium: "ملعب برج العرب (مصر)",
        },
        {
          year: 2014,
          opponent: "النادي الرياضي الصفاقسي (تونس)",
          coach: "محمد يوسف (مصري)",
          captain: "وائل جمعة",
          finalScore: "3-2",
          stadium: "ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 2020,
          opponent: "نهضة بركان (المغرب)",
          coach: "بيتسو موسيماني (جنوب أفريقي)",
          captain: "محمد الشناوي",
          finalScore: "2-0",
          stadium: "استاد جاسم بن حمد (قطر)",
        },
        {
          year: 2021,
          opponent: "الرجاء الرياضي (المغرب)",
          coach: "بيتسو موسيماني (جنوب أفريقي)",
          captain: "محمد الشناوي",
          finalScore: "1-1 (6-5 ركلات جزاء)",
          stadium: "ملعب أحمد بن علي (قطر)",
        },
      ],
      stats: {
        mostTitles: true,
        mostConsecutiveWins: "3 مرات (2006–2007–2009)",
        biggestWin: "4-1 ضد كايزر تشيفز (2002)",
        mostSuccessfulCoach: "مانويل جوزيه (4 ألقاب)",
      },
    },
    {
      id: 5,
      title: "كأس الكونفيدرالية الأفريقية",
      count: 1,
      type: "أفريقيا",
      image: confidral,
      description:
        "إضافة تاريخية لسجل الأهلي القاري، حيث أصبح أول نادٍ مصري يتوج بلقب الكونفيدرالية الأفريقية بطريقة درامية. (1 لقب)",
      wins: [
        {
          year: 2014,
          matchHighlights: "/highlights-confed-2014.mp4",
          image: "/confed-2014.jpg",
          captain: "وائل جمعة",
          coach: "خوان كارلوس جاريدو (إسباني)",
          finalScore: "2-2 (الأهلي فاز بقاعدة الهدف خارج الأرض)",
          finalsDetail: [
            { leg: "ذهاب", score: "2-1 لسيوي سبورت (كوت ديفوار)" },
            { leg: "إياب", score: "1-0 للأهلي (مصر)" },
          ],
          scorers: ["عماد متعب (هدف قاتل في الدقيقة 96)"],
          stadium:
            "الذهاب: ملعب روبرت شامبور (كوت ديفوار)، الإياب: ستاد القاهرة الدولي (مصر)",
        },
      ],
      stats: {
        firstEgyptianClubToWin: true,
        completedAfricanTreble: true,
      },
    },
    {
      id: 6,
      title: "كأس السوبر المصري",
      count: 15,
      type: "سوبر",
      image: superclub,
      description:
        "هيمنة محلية مطلقة في لقاء الأبطال، حيث يثبت الأهلي تفوقه على أبطال الدوري والكأس. (15 لقبًا)",
      wins: [
        {
          year: 2003,
          opponent: "الزمالك",
          coach: "توني أوليفيرا",
          captain: "هادي خشبة",
          score: "0-0 (3-1 ركلات جزاء)",
          stadium: "استاد أكاديمية الشرطة",
        },
        {
          year: 2005,
          opponent: "انبي",
          coach: "مانويل جوزيه",
          captain: "شادي محمد",
          score: "1-0",
          stadium: "استاد المقاولون العرب، القاهرة",
        },
        {
          year: 2006,
          opponent: "إنبي",
          coach: "مانويل جوزيه",
          captain: "شادي محمد",
          score: "1-0",
          stadium: "استاد عثمان أحمد عثمان",
        },
        {
          year: 2007,
          opponent: "الإسماعيلي",
          coach: "مانويل جوزيه",
          captain: "شادي محمد",
          score: "1-1 (4-2 ركلات جزاء)",
          stadium: "استاد القاهرة الدولي",
        },
        {
          year: 2008,
          opponent: "إنبي",
          coach: "مانويل جوزيه",
          captain: "شادي محمد",
          score: "2-0",
          stadium: "استاد القاهرة الدولي",
        },
        {
          year: 2010,
          opponent: "حرس الحدود",
          coach: "حسام البدري",
          captain: "أحمد حسن",
          score: "1-0",
          stadium: "استاد القاهرة الدولي",
        },
        {
          year: 2012,
          opponent: "إنبي",
          coach: "حسام البدري",
          captain: "محمد أبو تريكة",
          score: "2-1",
          stadium: "استاد برج العرب",
        },
        {
          year: 2014,
          opponent: "الزمالك",
          coach: "خوان كارلوس جاريدو",
          captain: "حسام عاشور",
          score: "0-0 (5-4 ركلات جزاء)",
          stadium: "استاد القاهرة الدولي",
        },
        {
          year: 2015,
          opponent: "الزمالك",
          coach: "زيزو",
          captain: "حسام عاشور",
          score: "3-2",
          stadium: "استاد هزاع بن زايد (العين، الإمارات)",
        },
        {
          year: 2017,
          opponent: "المصري",
          coach: "حسام البدري",
          captain: "حسام عاشور",
          score: "1-0",
          stadium: "استاد هزاع بن زايد (العين، الإمارات)",
        },
        {
          year: 2018,
          opponent: "الزمالك",
          coach: "باتريس كارتيرون",
          captain: "حسام عاشور",
          score: "3-2",
          stadium: "استاد برج العرب",
        },
        {
          year: 2021,
          opponent: "الزمالك",
          coach: "موسيماني",
          captain: "محمد الشناوي",
          score: "2-0 (أهداف برونو سافيو وكريم فؤاد)",
          stadium: "استاد هزاع بن زايد (العين، الإمارات)",
        },
        {
          year: 2022,
          opponent: "بيراميدز",
          coach: "موسيماني",
          captain: "محمد الشناوي",
          score: "1-0",
          stadium: "ملعب محمد بن زايد (أبوظبي، الإمارات)",
        },
        {
          year: 2023,
          opponent: "موديرن فيوتشر",
          coach: "مارسيل كولر",
          captain: "محمد الشناوي",
          score: "4-2",
          stadium: "ملعب محمد بن زايد (أبوظبي، الإمارات)",
        },
        {
          year: 2024,
          opponent: "موديرن فيوتشر",
          coach: "مارسيل كولر",
          captain: "محمد الشناوي",
          score: "0-0 (7-6 ركلات جزاء)",
          stadium: "ملعب محمد بن زايد (أبوظبي، الإمارات)",
        },
      ],
      stats: {
        mostTitles: true,
        mostConsecutiveWins: "غير معروف",
        biggestWin: "3-2 ضد الزمالك (2015)",
        mostSuccessfulCoach: "مانويل جوزيه (3 ألقاب)",
      },
    },
    {
      id: 7,
      title: "كأس الكؤوس الأفريقية",
      count: 4,
      type: "أفريقيا",
      image: kasalkouus,
      description:
        "تتويج الأهلي بلقب كأس الكؤوس الأفريقية، مما يؤكد هيمنته على البطولات القارية المختلفة. (4 ألقاب)",
      wins: [
        {
          year: 1984,
          opponent: "كانون ياوندي (الكاميرون)",
          captain: "محمود الخطيب",
          coach: "محمود الجوهري (مصري)",
          finalScore: "1-0 (بعد مجموع المباراتين: ذهاب 0-0، إياب 1-0)",
          scorers: ["علاء ميهوب"],
          stadium:
            "الذهاب: ملعب أحمدو أهيدجو (الكاميرون)، الإياب: ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 1985,
          opponent: "ليفنتيس يونايتد (نيجيريا)",
          captain: "محمود الخطيب",
          coach: "محمود الجوهري (مصري)",
          finalScore: "2-1 (بعد مجموع المباراتين: ذهاب 0-0، إياب 2-1)",
          scorers: ["طاهر أبو زيد", "مصطفى عبده"],
          stadium:
            "الذهاب: ملعب ليفنتيس (نيجيريا)، الإياب: ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 1986,
          opponent: "أسيك أبيدجان (ساحل العاج)",
          captain: "طاهر أبو زيد",
          coach: "هلموت رودي (ألماني)",
          finalScore: "3-0 (بعد مجموع المباراتين: ذهاب 2-0، إياب 1-0)",
          scorers: ["أيمن شوقي (2)", "مجدي عبد الغني"],
          stadium:
            "الذهاب: ستاد القاهرة الدولي (مصر)، الإياب: ملعب فيليكس هوفويت-بواني (ساحل العاج)",
        },
        {
          year: 1993,
          opponent: "أفريكا سبورتس (ساحل العاج)",
          captain: "إبراهيم حسن",
          coach: "محمود الجوهري (مصري)",
          finalScore: "2-1 (بعد مجموع المباراتين: ذهاب 1-1، إياب 1-0)",
          scorers: ["محمد رمضان", "أيمن شوقي"],
          stadium:
            "الذهاب: ملعب فيليكس هوفويت-بواني (ساحل العاج)، الإياب: ستاد القاهرة الدولي (مصر)",
        },
      ],
      stats: {
        mostTitles: true,
      },
    },
    {
      id: 8,
      title: "بطولات الأندية العربية",
      count: 4,
      type: "عربية",
      image: arab,
      description:
        "هيمنة الأهلي على الساحة العربية، حيث توج بأربعة ألقاب مختلفة في بطولات الأندية العربية.",
      wins: [
        {
          year: 1994,
          title: "كأس الكؤوس العربية",
          opponent: "الشباب (السعودية)",
          coach: "آلان هاريس (إنجليزي)",
          captain: "وليد صلاح الدين",
          finalScore: "1-0",
          scorers: ["إبراهيم حسن"],
          stadium: "ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 1996,
          title: "كأس الأندية العربية أبطال الدوري",
          opponent: "الرجاء الرياضي (المغرب)",
          coach: "راينر هابل (ألماني)",
          captain: "إبراهيم حسن",
          finalScore: "3-1",
          scorers: ["أحمد فليكس", "وليد صلاح الدين", "حسام حسن"],
          stadium: "ستاد القاهرة الدولي (مصر)",
        },
        {
          year: 1997,
          title: "كأس السوبر العربي",
          opponent: "دورة رباعية",
          coach: "راينر هابل (ألماني)",
          captain: "حسام حسن",
          finalScore: "فاز بالنقاط",
          scorers: [],
          stadium: "الدار البيضاء (المغرب)",
        },
        {
          year: 1998,
          title: "كأس السوبر العربي",
          opponent: "دورة رباعية",
          coach: "راينر هابل (ألماني)",
          captain: "حسام حسن",
          finalScore: "فاز بالنقاط",
          scorers: [],
          stadium: "دمشق (سوريا)",
        },
      ],
      stats: {
        mostArabSuperCups: true,
      },
    },
    {
      id: 9,
      title: "كأس السلطان حسين",
      count: 7,
      type: "كأس",
      image: hussin,
      description:
        "بطولة تاريخية كان الأهلي صاحب الرقم القياسي في الفوز بها. (7 ألقاب)",
      wins: [
        {
          year: 1923,
          opponent: "المختلط (الزمالك)",
          coach: "غير معروف",
          captain: "أحمد فؤاد أنور",
          finalScore: "2-1",
          scorers: ["منير حافظ", "محمود مختار التتش"],
          stadium: "ملعب المختلط (بالزمالك)",
          note: "فاز على الزمالك (المختلط) في النهائي",
        },
        {
          year: 1925,
          opponent: "الاتحاد السكندري",
          coach: "غير معروف",
          captain: "أحمد فؤاد أنور",
          finalScore: "2-1",
          scorers: ["ممدوح مختار التتش", "عبد الكريم"],
          stadium: "ملعب الشاطبي (الإسكندرية)",
          note: "فاز على الاتحاد السكندري في النهائي",
        },
        {
          year: 1926,
          opponent: "الترسانة",
          coach: "غير معروف",
          captain: "محمود مختار التتش",
          finalScore: "2-1",
          scorers: ["محمود مختار التتش (هدفين)"],
          stadium: "ملعب الأهلي بالجزيرة (القاهرة)",
          note: "فاز على الترسانة في النهائي",
        },
        {
          year: 1927,
          opponent: "المصري",
          coach: "غير معروف",
          captain: "محمود مختار التتش",
          finalScore: "2-0",
          scorers: ["محمود مختار التتش", "جميل الزبير"],
          stadium: "ملعب الأهلي بالجزيرة (القاهرة)",
          note: "فاز على المصري في النهائي",
        },
        {
          year: 1929,
          opponent: "الترسانة",
          coach: "غير معروف",
          captain: "محمود مختار التتش",
          finalScore: "2-0",
          scorers: ["حسين حجازي (هدفين)"],
          stadium: "ملعب الأهلي بالجزيرة (القاهرة)",
          note: "فاز على الترسانة في النهائي",
        },
        {
          year: 1931,
          opponent: "بورسعيد",
          coach: "غير معروف",
          captain: "محمود مختار التتش",
          finalScore: "4-1",
          scorers: ["ممدوح مختار التتش (هدفين)", "حسين حجازي", "مصطفى كامل طه"],
          stadium: "ملعب الأهلي بالجزيرة (القاهرة)",
          note: "فاز على بورسعيد في النهائي",
        },
        {
          year: 1938,
          opponent: "الأوليمبي",
          coach: "غير معروف",
          captain: "مصطفى كامل طه",
          finalScore: "3-1",
          scorers: ["حسين مدكور", "صالح الصواف", "مصطفى كامل طه"],
          stadium: "ملعب الأهلي بالجزيرة (القاهرة)",
          note: "فاز على الأوليمبي في النهائي",
        },
      ],
      stats: {
        mostTitles: true,
        oldestTournamentWon: true,
      },
    },
    {
      id: 10,
      title: "دوري القاهرة",
      count: 16,
      type: "دوري",
      image: cairodawry,
      description:
        "هيمنة الأهلي على أول بطولة دوري في تاريخ كرة القدم المصرية. (16 لقبًا)",
      wins: [
        {
          year: 1924,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "أحمد فؤاد أنور",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium: "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط)",
        },
        {
          year: 1927,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "محمود مختار التتش",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1928,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "محمود مختار التتش",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1929,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "محمود مختار التتش",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1931,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "محمود مختار التتش",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1935,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "مصطفى كامل طه",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1936,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "مصطفى كامل طه",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1937,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "مصطفى كامل طه",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1938,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "مصطفى كامل طه",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1939,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "مصطفى كامل طه",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب المختلط، ملعب الترسانة)",
        },
        {
          year: 1942,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "أحمد مكاوي",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب الزمالك، ملعب الترسانة)",
        },
        {
          year: 1947,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "أحمد مكاوي",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب الزمالك، ملعب الترسانة)",
        },
        {
          year: 1948,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "أحمد مكاوي",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب الزمالك، ملعب الترسانة)",
        },
        {
          year: 1950,
          coach: "غير معروف (إدارة فنية للنادي)",
          captain: "ممدوح صقر",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب الزمالك، ملعب الترسانة)",
        },
        {
          year: 1958,
          coach: "توفيق عبد الله",
          captain: "صالح سليم",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب الزمالك، ملعب الترسانة)",
        },
        {
          year: 1962,
          coach: "مختار التتش (مدير فني)",
          captain: "صالح سليم",
          finalScore: "نظام دوري",
          scorers: ["غير معروف (لا توجد سجلات مفصلة)"],
          stadium:
            "ملاعب القاهرة الكبرى (ملعب الأهلي بالجزيرة، ملعب الزمالك، ملعب الترسانة)",
        },
      ],
      stats: {
        mostTitles: true,
        firstLeagueInEgypt: true,
      },
    },
    {
      id: 11,
      title: "كأس الجمهورية العربية المتحدة",
      count: 1,
      type: "كأس",
      image: arakas,
      description:
        "لقب تاريخي وحيد توج به الأهلي خلال فترة الجمهورية العربية المتحدة.",
      wins: [
        {
          year: 1961,
          opponent: "الترسانة",
          coach: "مختار التتش (مصري)",
          captain: "صالح سليم",
          finalScore: "4-1",
          scorers: ["صالح سليم"],
          stadium: "غير محدد بدقة، غالبًا ملعب القاهرة",
        },
      ],
      stats: {},
    },
    {
      id: 12,
      title: "كأس الأفرو آسيوية",
      count: 1,
      type: "كأس",
      image: afroasuwy,
      description: "تتويج الأهلي بلقب كأس الأفرو آسيوية. (1 لقب)",
      wins: [
        {
          year: 1989,
          captain: "ثابت البطل",
          coach: "مايكل إيفرت (ألماني)",
          finalScore: "الأهلي 3-1 يوهانغ ستيلرز (مجموع المباراتين)",
          opponent: "يوهانغ ستيلرز",
          scorers: [
            "أيمن شوقي (هدفين في الذهاب)",
            "طاهر أبو زيد (هدف في الإياب)",
          ],
          stadium:
            "الذهاب: استاد القاهرة الدولي، الإياب: ملعب بوهانج ستيل يارد",
        },
      ],
      stats: {},
    },
  ],

  legends: [
    {
      id: 1,
      name: "احمد السيد زيزو",
      image: personal,
      role: "عاوز تغيظو  ..... هاتلو زيزوووووو",
    },
    { id: 2, name: "أبو تريكة", image: personal2, role: "المايسترو" },
    { id: 3, name: "محمود الخطيب", image: personal3, role: "القناص" },
    { id: 4, name: "صالح سليم", image: personal4, role: "الأسطورة" },
    {
      id: 5,
      name: "حسام حسن",
      image: personal5,
      role: "الهداف التاريخي",
    },
    { id: 6, name: "وائل جمعة", image: personal6, role: "الجنرال" },
    {
      id: 7,
      name: "امام عاشور",
      image: personal7,
      role: "الساطور",
    },
    {
      id: 8,
      name: "عماد متعب",
      image: personal8,
      role: "متعب الحراس",
    },
    {
      id: 9,
      name: "محمد بركات",
      image: personal9,
      role: "ملك الحركات",
    },
    {
      id: 10,
      name: "علي معلول",
      image: personal10,
      role: "اسرع دليفري في مصر",
    },
  ],
  moments: [
    {
      id: 1,
      image: moment7,
      title: "تعاقد الاهلي مع زيزو",
      year: 2025,
      description: "صفقه القرن بالنسبه للعديد من الجماهير الاهلاويه",
    },
    {
      id: 2,
      image: moment1,
      title: "التتويج بدوري الابطال 2020",
      year: 2020,
      description: "القاضيه مممممكن",
    },
    {
      id: 3,
      title: "ملحمة ستاد رادس",
      date: "9 نوفمبر 2018",
      image: moment2,
      description: "ريمونتادا تاريخية أمام الترجي.",
      year: 2018,
    },
    {
      id: 4,
      image: moment6,
      title: "كأس أفريقيا العاشر",
      year: 2013,
      description: "ذكرايات الطفوله اول بطوله افريقيا",
    },
    {
      id: 5,
      image: moment5,
      title: "جمهور الأهلي العظيم",
      year: 2012,
      description: "رحم الله شهداء النادي الاهلي 72",
    },
    {
      id: 6,
      title: "كأس العالم للأندية",
      date: "12 فبراير 2006",
      image: moment4,
      description: "الأهلي ثالث العالم في اليابان.",
      year: 2006,
    },
    {
      id: 7,
      image: Trika2006,
      title: "هدف أبو تريكة التاريخي",
      year: 2006,
      description: "تاني اعظم هدف بالنسبالي في بطولة افريقيا",
    },
    {
      id: 8,
      title: "لقب القرن الإفريقي",
      date: "22 مايو 2001",
      image: moment3,
      description: "لحظة تتويج الأهلي نادي القرن في إفريقيا.",
      year: 2001,
    },
  ],
  news: [
    { title: "الأهلي يتوّج بالدوري للمره 45 في تاريخه!" },
    { title: "معلول يعلن رحيله عن الاهلي" },
    { title: "رسمياً: تجديد عقد محمد الشناوي حتى 2027" },
    { title: "الأهلي يعلن ضم أحمد سيد زيزو رسميًا من الزمالك" },
    {
      title: "الأهلي يُقيم أول تدريباته في ميامي استعدادًا لكأس العالم للأندية",
    },
    { title: "ريبييرو: اخترت الأهلي لأنني أريد تحقيق المجد في إفريقيا" },
    { title: "الأهلي يضم أحمد رمضان بيكهام من سيراميكا كليوباترا" },
    { title: "فيفا: تخفيض أسعار تذاكر مباراة الأهلي وإنتر ميامي" },
    {
      title:
        "ميسي يقود إنتر ميامي لمواجهة نارية أمام الأهلي في مونديال الأندية",
    },
    { title: "بعثة الأهلي تقيم صلاة العيد في مقر المعسكر بالولايات المتحدة" },
  ],

  sponsors: {
    officialSponsors: [
      {
        id: 1,
        name: "شركة الاتصالات",
        logo: sponsors1,
        since: 2010,
      },
      {
        id: 2,
        name: "بنك القاهرة",
        logo: sponsors2,
        since: 2015,
      },
      {
        id: 3,
        name: "شركة السيارات",
        logo: sponsors3,
        since: 2018,
      },
      {
        id: 4,
        name: "المجموعة الرياضية",
        logo: sponsors4,
        since: 2020,
      },
      {
        id: 5,
        name: "شركة مياه الحياة",
        logo: sponsors5,
        since: 2019,
      },
      {
        id: 6,
        name: "مطاعم البلد",
        logo: sponsors6,
        since: 2021,
      },
      {
        id: 7,
        name: "مجموعة التأمين المتحدة",
        logo: sponsors7,
        since: 2022,
      },
      {
        id: 8,
        name: "شركة الطيران الوطنية",
        logo: sponsors8,
        since: 2023,
      },
      {
        id: 9,
        name: "مستشفى الشفاء",
        logo: sponsors9,
        since: 2020,
      },
      {
        id: 10,
        name: "تطبيق الدفع السريع",
        logo: sponsors10,
        since: 2021,
      },
      {
        id: 11,
        name: "أكاديمية النجوم",
        logo: sponsors11,
        since: 2016,
      },
      {
        id: 12,
        name: "مجموعة الإعلام الجديد",
        logo: sponsors12,
        since: 2017,
      },
    ],
  },
};

export const teamData = {
  coach: {
    id: 100,
    name: "خوسيه ريفيرو",
    image: coutch,
    isCoach: true,
    winRate: 0,
    age: 50,
    nationality: "إسبانيا",
    since: "2025-05-29",
    trophies: 0,
    matchesCoached: 0,
    details: {
      birthDate: "1975-01-01",
      experience: "مدرب ذو خبرة، قادم من أندية إفريقية وأوروبية",
      previousTeams: ["أورلاندو بايرتس (جنوب أفريقيا)", "أندية أوروبية أخرى"],
      coachingStyle: "متوازن مع ميل هجومي، يعتمد على الضغط العالي",
      achievements: ["لا توجد بطولات مع الأهلي حتى الآن"],
    },
  },
  players: [
    {
      id: 1,
      name: "مصطفى شوبير",
      number: 16,
      image: player24,
      age: 26,
      nationality: "مصر",
      positions: ["حارس مرمى"],
      attributes: {
        reflexes: 85,
        handling: 80,
        positioning: 78,
        defending: 80,
        physical: 70,
      },
      stats: {
        matches: 70,
        cleanSheets: 35,
        saves: 140,
        penaltySaves: 5,
      },
      joinDate: "2019-07-01",
      details: {
        birthDate: "1999-03-17",
        height: "188 سم",
        weight: "82 كجم",
        contractUntil: "2027-06-30",
        previousTeams: ["الأهلي للشباب"],
        strengths: [
          "رد الفعل السريع",
          "التوزيع الجيد",
          "التصدي للكرات العرضية",
        ],
        achievements: ["2× دوري أبطال أفريقيا (دور أساسي في 2023-24)"],
      },
    },
    {
      id: 2,
      name: "محمد الشناوي",
      number: 1,
      image: player27,
      age: 36,
      isLegend: true,
      nationality: "مصر",
      positions: ["حارس مرمى"],
      attributes: {
        reflexes: 92,
        handling: 88,
        positioning: 85,
        defending: 90,
        physical: 75,
      },
      stats: {
        matches: 280,
        cleanSheets: 130,
        saves: 500,
        penaltySaves: 15,
      },
      joinDate: "2016-07-11",
      details: {
        birthDate: "1988-12-18",
        height: "193 سم",
        weight: "88 كجم",
        contractUntil: "2027-06-30",
        previousTeams: [
          "الإنتاج الحربي",
          "طلائع الجيش",
          "حرس الحدود",
          "بتروجيت",
        ],
        strengths: [
          "التصديات الحاسمة",
          "قيادة المنطقة الدفاعية",
          "التوزيع بالقدم",
        ],
        achievements: [
          "3× دوري أبطال أفريقيا",
          "6× الدوري المصري الممتاز",
          "أفضل حارس في الدوري المصري عدة مرات",
        ],
      },
    },
    {
      id: 3,
      name: "مصطفى مخلوف",
      number: 70,
      image: player20,
      age: 25,
      nationality: "مصر",
      positions: ["حارس مرمى"],
      attributes: {
        reflexes: 72,
        handling: 68,
        positioning: 65,
        defending: 65,
        physical: 62,
      },
      stats: {
        matches: 0,
        cleanSheets: 0,
        saves: 0,
        penaltySaves: 0,
      },
      joinDate: "2023-01-10",
      details: {
        birthDate: "1999-11-05",
        height: "187 سم",
        weight: "78 كجم",
        contractUntil: "2027-06-30",
        previousTeams: ["الأهلي للشباب"],
        strengths: ["التشابك الجوي", "التواصل مع المدافعين"],
        achievements: [],
      },
    },
    {
      id: 4,
      name: "محمد سيحا",
      number: 99,
      image: player26,
      age: 20,
      nationality: "مصر",
      positions: ["حارس مرمى"],
      attributes: {
        reflexes: 68,
        handling: 65,
        positioning: 65,
        defending: 60,
        physical: 60,
      },
      stats: {
        matches: 0,
        cleanSheets: 0,
        saves: 0,
        penaltySaves: 0,
      },
      joinDate: "2025-07-01",
      details: {
        birthDate: "2005-01-01",
        height: "185 سم",
        weight: "75 كجم",
        contractUntil: "2029-06-30",
        previousTeams: ["المقاولون العرب"],
        strengths: ["الواعدية", "التمركز"],
        achievements: [],
      },
    },
    {
      id: 5,
      name: "محمد هاني",
      number: 30,
      image: player17,
      age: 29,
      nationality: "مصر",
      positions: ["مدافع أيمن"],
      attributes: {
        pace: 88,
        shooting: 82,
        dribbling: 82,
        passing: 78,
        defending: 75,
        physical: 70,
      },
      stats: {
        matches: 180,
        goals: 5,
        assists: 25,
        tackles: 250,
      },
      joinDate: "2015-07-01",
      details: {
        birthDate: "1996-01-25",
        height: "184 سم",
        weight: "78 كجم",
        contractUntil: "2027-06-30",
        previousTeams: ["الأهلي للشباب"],
        strengths: [
          "السرعة",
          "المراوغة",
          "التمريرات العرضية",
          "التغطية الدفاعية",
        ],
        achievements: ["5× دوري أبطال أفريقيا", "7× الدوري المصري الممتاز"],
      },
    },
    {
      id: 6,
      name: "أشرف داري",
      number: 26,
      image: player9,
      age: 26,
      nationality: "المغرب",
      positions: ["قلب دفاع"],
      attributes: {
        pace: 85,
        shooting: 83,
        dribbling: 80,
        passing: 70,
        defending: 82,
        physical: 82,
      },
      stats: {
        matches: 10,
        goals: 0,
        assists: 0,
        tackles: 15,
      },
      joinDate: "2025-01-01",
      details: {
        birthDate: "1999-05-06",
        height: "189 سم",
        weight: "85 كجم",
        contractUntil: "2028-06-30",
        previousTeams: ["الوداد الرياضي", "ستاد بريست 29", "شارلوروا"],
        strengths: ["التشابك الجوي", "التمركز الجيد", "التدخلات القوية"],
        achievements: [
          "دوري أبطال أفريقيا (مع الوداد)",
          "المشاركة في كأس العالم 2022 (مع المغرب)",
        ],
      },
    },
    {
      id: 7,
      name: "مصطفى العش",
      number: 12,
      image: player13,
      age: 26,
      nationality: "مصر",
      positions: ["قلب دفاع"],
      attributes: {
        pace: 78,
        shooting: 76,
        dribbling: 75,
        passing: 70,
        defending: 77,
        physical: 77,
      },
      stats: {
        matches: 5,
        goals: 0,
        assists: 0,
        tackles: 8,
      },
      joinDate: "2025-01-01",
      details: {
        birthDate: "1998-06-21",
        height: "183 سم",
        weight: "77 كجم",
        contractUntil: "2028-06-30",
        previousTeams: ["سيراميكا كليوباترا", "طلائع الجيش", "حرس الحدود"],
        strengths: [
          "التغطية الجيدة",
          "التمريرات الطويلة",
          "القدرة على تسجيل الأهداف بالرأس",
        ],
        achievements: [],
      },
    },
    {
      id: 8,
      name: "يحيى عطية الله",
      number: 24,
      image: player6,
      age: 30,
      nationality: "المغرب",
      positions: ["مدافع أيسر"],
      attributes: {
        pace: 82,
        shooting: 78,
        dribbling: 78,
        passing: 85,
        defending: 77,
        physical: 75,
      },
      stats: {
        matches: 30,
        goals: 2,
        assists: 8,
        tackles: 50,
      },
      joinDate: "2025-07-01",
      details: {
        birthDate: "1995-03-02",
        height: "181 سم",
        weight: "76 كجم",
        contractUntil: "2028-06-30",
        previousTeams: [
          "أولمبيك خريبكة",
          "فولوس",
          "الوداد الرياضي",
          "سوتشي (روسيا)",
        ],
        strengths: ["السرعة", "العرضيات", "التمريرات المتقنة"],
        achievements: [
          "دوري أبطال أفريقيا (مع الوداد)",
          "المشاركة في كأس العالم 2022 (مع المغرب)",
        ],
      },
    },
    {
      id: 9,
      name: "خالد عبد الفتاح",
      number: 4,
      image: player18,
      age: 26,
      nationality: "مصر",
      positions: ["مدافع أيمن"],
      attributes: {
        pace: 75,
        shooting: 70,
        dribbling: 72,
        passing: 72,
        defending: 78,
        physical: 75,
      },
      stats: {
        matches: 40,
        goals: 1,
        assists: 5,
        tackles: 70,
      },
      joinDate: "2023-01-01",
      details: {
        birthDate: "1999-01-22",
        height: "185 سم",
        weight: "79 كجم",
        contractUntil: "2026-06-30",
        previousTeams: ["سموحة"],
        strengths: ["المرونة التكتيكية", "التدخلات", "التغطية"],
        achievements: [],
      },
    },
    {
      id: 10,
      name: "عمر كمال عبد الواحد",
      number: 13,
      image: player,
      age: 31,
      nationality: "مصر",
      positions: ["مدافع أيمن", "وينج يمين"],
      attributes: {
        pace: 80,
        shooting: 75,
        dribbling: 75,
        passing: 78,
        defending: 75,
        physical: 77,
      },
      stats: {
        matches: 20,
        goals: 2,
        assists: 3,
        tackles: 35,
      },
      joinDate: "2024-01-29",
      details: {
        birthDate: "1993-09-29",
        height: "182 سم",
        weight: "77 كجم",
        contractUntil: "2027-06-30",
        previousTeams: ["المصري", "فيوتشر"],
        strengths: [
          "التسديد من بعيد",
          "السرعة",
          "القدرة على اللعب في أكثر من مركز",
        ],
        achievements: [],
      },
    },
    {
      id: 11,
      name: "أحمد نبيل كوكا",
      number: 29,
      image: player19,
      age: 23,
      nationality: "مصر",
      positions: ["مدافع أيسر", "خط وسط مدافع"],
      attributes: {
        pace: 78,
        shooting: 75,
        dribbling: 75,
        passing: 78,
        defending: 75,
        physical: 70,
      },
      stats: {
        matches: 60,
        goals: 3,
        assists: 8,
        tackles: 100,
      },
      joinDate: "2020-07-01",
      details: {
        birthDate: "2001-07-04",
        height: "183 سم",
        weight: "78 كجم",
        contractUntil: "2028-06-30",
        previousTeams: ["الأهلي للشباب"],
        strengths: ["التمرير الدقيق", "التدخلات", "القراءة الجيدة للعب"],
        achievements: [],
      },
    },
    {
      id: 12,
      name: "كريم الدبيس",
      number: 21,
      image: player10,
      age: 22,
      nationality: "مصر",
      positions: ["مدافع أيسر"],
      attributes: {
        pace: 70,
        shooting: 68,
        dribbling: 68,
        passing: 70,
        defending: 65,
        physical: 68,
      },
      stats: {
        matches: 15,
        goals: 0,
        assists: 2,
        tackles: 20,
      },
      joinDate: "2022-09-01",
      details: {
        birthDate: "2003-06-03",
        height: "186 سم",
        weight: "80 كجم",
        contractUntil: "2027-06-30",
        previousTeams: ["إنبي"],
        strengths: ["البناء من الخلف", "التغطية الدفاعية"],
        achievements: [],
      },
    },
    {
      id: 13,
      name: "كريم فؤاد",
      number: 7,
      image: player14,
      age: 25,
      nationality: "مصر",
      positions: ["مدافع أيمن", "مدافع أيسر"],
      attributes: {
        pace: 82,
        shooting: 78,
        dribbling: 78,
        passing: 75,
        defending: 72,
        physical: 75,
      },
      stats: {
        matches: 50,
        goals: 4,
        assists: 8,
        tackles: 60,
      },
      joinDate: "2021-09-01",
      details: {
        birthDate: "1999-10-01",
        height: "178 سم",
        weight: "73 كجم",
        contractUntil: "2026-06-30",
        previousTeams: ["النجوم", "إنبي"],
        strengths: [
          "السرعة",
          "القدرة على اللعب في عدة مراكز (ظهير أيمن، جناح أيمن)",
          "التمريرات العرضية",
        ],
        achievements: ["دوري أبطال أفريقيا", "الدوري المصري الممتاز"],
      },
    },
    {
      id: 14,
      name: "أحمد رمضان بيكهام",
      number: 28,
      image: player7,
      age: 27,
      nationality: "مصر",
      positions: ["قلب دفاع"],
      attributes: {
        pace: 78,
        shooting: 75,
        dribbling: 75,
        passing: 70,
        defending: 72,
        physical: 80,
      },
      stats: {
        matches: 30,
        goals: 1,
        assists: 2,
        tackles: 40,
      },
      joinDate: "2020-11-01",
      details: {
        birthDate: "1997-09-01",
        height: "186 سم",
        weight: "82 كجم",
        contractUntil: "2026-06-30",
        previousTeams: ["وادي دجلة", "حرس الحدود", "سموحة"],
        strengths: ["القوة البدنية", "التمركز الجيد", "الكرات الطويلة"],
        achievements: ["دوري أبطال أفريقيا", "الدوري المصري الممتاز"],
      },
    },
    {
      id: 15,
      name: "ياسر إبراهيم",
      number: 6,
      image: player31,
      age: 31,
      nationality: "مصر",
      positions: ["قلب دفاع"],
      attributes: {
        pace: 70,
        shooting: 55,
        dribbling: 60,
        passing: 65,
        defending: 78,
        physical: 82
      },
      "stats": {
        "matches": 32,
        "goals": 2,
        "assists": 1,
        "tackles": 55
      },
      "joinDate": "2019-01-02",
      "details": {
        "birthDate": "1993-02-10",
        "height": "185 سم",
        "weight": "80 كجم",
        "contractUntil": "2026-06-30",
        "previousTeams": ["سموحة", "طلائع الجيش"],
        "strengths": ["القوة البدنية", "التغطية الدفاعية", "ضربات الرأس"],
        "achievements": [
          "دوري أبطال أفريقيا",
          "الدوري المصري الممتاز",
          "كأس مصر",
          "كأس السوبر المصري"
        ]
      }
    },
    {
      id: 16,
      name: "إمام عاشور",
      number: 22,
      image: personal7,
      age: 27,
      nationality: "مصر",
      positions: ["خط وسط هجومي", "خط وسط"],
      attributes: {
        pace: 85,
        shooting: 80,
        dribbling: 82,
        passing: 82,
        defending: 78,
        physical: 75,
      },
      stats: {
        matches: 45,
        goals: 10,
        assists: 15,
        passes: 900,
      },
      joinDate: "2023-07-15",
      details: {
        birthDate: "1998-02-20",
        height: "176 سم",
        weight: "70 كجم",
        contractUntil: "2028-06-30",
        previousTeams: [
          "غزل المحلة",
          "حرس الحدود",
          "الزمالك",
          "ميتلاند الدنماركي",
        ],
        strengths: ["التحكم في الكرة", "التسديدات القوية", "الربط بين الخطوط"],
        achievements: [
          "دوري أبطال أفريقيا (مع الأهلي)",
          "الدوري المصري الممتاز (مع الأهلي والزمالك)",
        ],
      },
    },
    {
      id: 17,
      name: "أليو ديانج",
      number: 15,
      image: player3,
      age: 27,
      nationality: "السنغال",
      positions: ["خط وسط مدافع", "خط وسط"],
      attributes: {
        pace: 90,
        shooting: 88,
        dribbling: 87,
        passing: 75,
        defending: 88,
        physical: 75,
      },
      stats: {
        matches: 210,
        goals: 15,
        assists: 25,
        passes: 3500,
      },
      joinDate: "2019-07-08",
      details: {
        birthDate: "1997-10-16",
        height: "185 سم",
        weight: "78 كجم",
        contractUntil: "2026-06-30",
        previousTeams: ["مولودية الجزائر"],
        strengths: [
          "القوة البدنية",
          "استعادة الكرة",
          "المراوغة",
          "التسديد من بعيد",
        ],
        achievements: ["3× دوري أبطال أفريقيا", "4× الدوري المصري الممتاز"],
      },
    },
    {
      id: 18,
      name: "محمد علي بن رمضان",
      number: 14,
      image: player8,
      age: 25,
      nationality: "تونس",
      positions: ["خط وسط هجومي", "خط وسط"],
      attributes: {
        pace: 80,
        shooting: 78,
        dribbling: 72,
        passing: 75,
        defending: 75,
        physical: 77,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        passes: 0,
      },
      joinDate: "2025-07-01",
      details: {
        birthDate: "1999-09-06",
        height: "178 سم",
        weight: "72 كجم",
        contractUntil: "2029-06-30",
        previousTeams: ["الترجي الرياضي التونسي", "فيرينتسفاروشي"],
        strengths: [
          "التحكم في الكرة",
          "التمرير الدقيق",
          "القدرة الدفاعية والهجومية",
        ],
        achievements: ["الدوري التونسي", "دوري أبطال أفريقيا (مع الترجي)"],
      },
    },
    {
      id: 19,
      name: "مروان عطية",
      number: 13,
      image: player21,
      age: 26,
      nationality: "مصر",
      positions: ["خط وسط مدافع", "خط وسط"],
      attributes: {
        pace: 82,
        shooting: 80,
        dribbling: 78,
        passing: 80,
        defending: 75,
        physical: 75,
      },
      stats: {
        matches: 70,
        goals: 5,
        assists: 10,
        passes: 1200,
      },
      joinDate: "2023-01-01",
      details: {
        birthDate: "1998-08-11",
        height: "182 سم",
        weight: "76 كجم",
        contractUntil: "2027-06-30",
        previousTeams: ["الاتحاد السكندري"],
        strengths: ["استعادة الكرة", "التمريرات القصيرة", "الضغط العالي"],
        achievements: ["2× دوري أبطال أفريقيا", "2× الدوري المصري الممتاز"],
      },
    },
    {
      id: 20,
      name: "كريم نيدفيد",
      number: 20,
      image: player23,
      age: 27,
      nationality: "مصر",
      positions: ["خط وسط", "خط وسط مدافع"],
      attributes: {
        pace: 75,
        shooting: 72,
        dribbling: 70,
        passing: 70,
        defending: 72,
        physical: 72,
      },
      stats: {
        matches: 95,
        goals: 10,
        assists: 15,
        passes: 1500,
      },
      joinDate: "2016-07-01",
      details: {
        birthDate: "1997-08-08",
        height: "178 سم",
        weight: "73 كجم",
        contractUntil: "2026-06-30",
        previousTeams: ["وادي دجلة (إعارة)", "فيوتشر (إعارة)"],
        strengths: [
          "الرؤية الجيدة",
          "التمريرات المفتاحية",
          "القدرة على اللعب في أكثر من مركز",
        ],
        achievements: [],
      },
    },
    {
      id: 21,
      name: "حمدي فتحي",
      number: 8,
      image: player16,
      age: 30,
      nationality: "مصر",
      positions: ["خط وسط", "خط وسط مدافع"],
      attributes: {
        pace: 85,
        shooting: 82,
        dribbling: 82,
        passing: 78,
        defending: 75,
        physical: 88,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        passes: 0,
      },
      joinDate: "2025-07-01",
      details: {
        birthDate: "1994-09-29",
        height: "180 سم",
        weight: "78 كجم",
        contractUntil: "2026-06-30",
        previousTeams: ["إنبي", "الوكرة القطري"],
        strengths: ["القدرة البدنية", "استعادة الكرة", "التسديد من بعيد"],
        achievements: [
          "3× دوري أبطال أفريقيا (مع الأهلي)",
          "4× الدوري المصري الممتاز (مع الأهلي)",
        ],
      },
    },
    {
      id: 22,
      name: "محمد مجدي أفشة",
      number: 19,
      image: player5,
      age: 29,
      nationality: "مصر",
      positions: ["خط وسط هجومي", "خط وسط"],
      attributes: {
        pace: 85,
        shooting: 80,
        dribbling: 82,
        passing: 85,
        defending: 88,
        physical: 85,
      },
      stats: {
        matches: 180,
        goals: 40,
        assists: 60,
        passes: 3000,
      },
      joinDate: "2019-08-01",
      details: {
        birthDate: "1996-03-05",
        height: "174 سم",
        weight: "70 كجم",
        contractUntil: "2027-06-30",
        previousTeams: ["إنبي", "بيراميدز"],
        strengths: [
          "صناعة اللعب",
          "التمريرات الحاسمة",
          "التسديد من بعيد",
          "الضغط العالي",
        ],
        achievements: ["3× دوري أبطال أفريقيا", "5× الدوري المصري الممتاز"],
      },
    },
    {
      id: 23,
      name: "عمر الساعي",
      number: 33,
      image: player11,
      age: 23,
      nationality: "مصر",
      positions: ["خط وسط", "خط وسط مدافع"],
      attributes: {
        pace: 70,
        shooting: 68,
        dribbling: 65,
        passing: 65,
        defending: 68,
        physical: 65,
      },
      stats: {
        matches: 5,
        goals: 0,
        assists: 1,
        passes: 50,
      },
      joinDate: "2023-01-01",
      details: {
        birthDate: "2005-01-15",
        height: "176 سم",
        weight: "70 كجم",
        contractUntil: "2028-06-30",
        previousTeams: ["الأهلي للشباب"],
        strengths: ["الواعدية", "التمرير", "التحكم بالكرة"],
        achievements: [],
      },
    },
    {
      id: 24,
      name: "أحمد رضا",
      number: 34,
      image: player25,
      age: 24,
      nationality: "مصر",
      positions: ["خط وسط", "خط وسط مدافع"],
      attributes: {
        pace: 68,
        shooting: 65,
        dribbling: 65,
        passing: 65,
        defending: 65,
        physical: 62,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        passes: 0,
      },
      joinDate: "2024-01-01",
      details: {
        birthDate: "2004-03-20",
        height: "175 سم",
        weight: "68 كجم",
        contractUntil: "2029-06-30",
        previousTeams: ["الأهلي للشباب"],
        strengths: ["التحكم بالكرة", "المرونة", "الوعي التكتيكي"],
        achievements: [],
      },
    },
    {
      id: 25,
      name: 'أحمد سيد "زيزو"',
      number: 25,
      image: ZizoImg,
      age: 27,
      nationality: "مصر",
      positions: ["وينج يمين", "مهاجم"],
      attributes: {
        pace: 88,
        shooting: 85,
        dribbling: 82,
        passing: 85,
        defending: 88,
        physical: 85,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        shots: 0,
      },
      joinDate: "2025-07-01",
      details: {
        birthDate: "1997-01-10",
        height: "175 سم",
        weight: "70 كجم",
        contractUntil: "2029-06-30",
        previousTeams: ["الزمالك"],
        strengths: [
          "التسديد من بعيد",
          "صناعة اللعب",
          "الضربات الثابتة",
          "القدرة على تسجيل الأهداف",
        ],
        achievements: [],
      },
    },
    {
      id: 26,
      name: "وسام أبو علي",
      number: 9,
      image: player30,
      age: 26,
      nationality: "فلسطين/الدنمارك",
      positions: ["مهاجم"],
      attributes: {
        pace: 85,
        shooting: 80,
        dribbling: 82,
        passing: 78,
        defending: 75,
        physical: 75,
      },
      stats: {
        matches: 20,
        goals: 8,
        assists: 3,
        shots: 40,
      },
      joinDate: "2024-01-11",
      details: {
        birthDate: "1999-01-29",
        height: "185 سم",
        weight: "80 كجم",
        contractUntil: "2028-06-30",
        previousTeams: ["فندسييل", "سيريوس", "آلبورج"],
        strengths: [
          "الإنهاء الفعال",
          "التحركات الذكية داخل الصندوق",
          "الرأسيات القوية",
        ],
        achievements: [],
      },
    },
    {
      id: 27,
      name: 'محمود حسن "تريزيجيه"',
      number: 7,
      image: player29,
      age: 30,
      isCaptain: true,
      nationality: "مصر",
      positions: ["وينج شمال", "مهاجم"],
      attributes: {
        pace: 85,
        shooting: 83,
        dribbling: 80,
        passing: 78,
        defending: 75,
        physical: 75,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        shots: 0,
      },
      joinDate: "2014-07-01",
      details: {
        birthDate: "1994-10-01",
        height: "178 سم",
        weight: "72 كجم",
        contractUntil: "2029-06-30",
        previousTeams: ["طرابزون سبور (تركيا)", "ناشئين الاهلي"],
        strengths: ["السرعة", "المراوغة", "التسديد من مسافات بعيدة"],
        achievements: [],
      },
    },
    {
      id: 28,
      name: "أشرف بن شرقي",
      number: 34,
      image: player4,
      age: 30,
      nationality: "المغرب",
      positions: ["وينج شمال", "مهاجم"],
      attributes: {
        pace: 87,
        shooting: 82,
        dribbling: 80,
        passing: 78,
        defending: 75,
        physical: 75,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        shots: 0,
      },
      joinDate: "2025-07-01",
      details: {
        birthDate: "1994-09-24",
        height: "177 سم",
        weight: "72 كجم",
        contractUntil: "2028-06-30",
        previousTeams: [
          "الوداد الرياضي",
          "الهلال السعودي",
          "لانس الفرنسي",
          "الزمالك",
          "الريان القطري",
        ],
        strengths: ["المهارة الفردية", "الإنهاء أمام المرمى", "السرعة"],
        achievements: [],
      },
    },
    {
      id: 29,
      name: "حسين الشحات",
      number: 14,
      image: player12,
      age: 32,
      nationality: "مصر",
      positions: ["وينج يمين"],
      attributes: {
        pace: 85,
        shooting: 82,
        dribbling: 82,
        passing: 75,
        defending: 75,
        physical: 80,
      },
      stats: {
        matches: 150,
        goals: 35,
        assists: 45,
        shots: 150,
      },
      joinDate: "2019-01-01",
      details: {
        birthDate: "1993-06-21",
        height: "170 سم",
        weight: "68 كجم",
        contractUntil: "2026-06-30",
        previousTeams: ["مصر المقاصة", "العين الإماراتي"],
        strengths: ["المهارة الفردية", "صناعة الفرص", "الإنهاء"],
        achievements: ["3× دوري أبطال أفريقيا", "5× الدوري المصري الممتاز"],
      },
    },
    {
      id: 30,
      name: "طاهر محمد طاهر",
      number: 27,
      image: player28,
      age: 27,
      nationality: "مصر",
      positions: ["وينج يمين", "مهاجم"],
      attributes: {
        pace: 80,
        shooting: 78,
        dribbling: 75,
        passing: 75,
        defending: 72,
        physical: 75,
      },
      stats: {
        matches: 80,
        goals: 15,
        assists: 10,
        shots: 80,
      },
      joinDate: "2020-10-01",
      details: {
        birthDate: "1997-03-07",
        height: "179 سم",
        weight: "74 كجم",
        contractUntil: "2025-06-30",
        previousTeams: ["المقاولون العرب", "لوهافر (إعارة)"],
        strengths: ["السرعة", "القدرة على الاختراق", "التسديد القوي"],
        achievements: ["دوري أبطال أفريقيا", "الدوري المصري الممتاز"],
      },
    },
    {
      id: 31,
      name: "نيتس جراديشار",
      number: 30,
      image: player15,
      age: 22,
      nationality: "سلوفينيا",
      positions: ["مهاجم", "وينج شمال"],
      attributes: {
        pace: 80,
        shooting: 78,
        dribbling: 75,
        passing: 75,
        defending: 72,
        physical: 75,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        shots: 0,
      },
      joinDate: "2025-07-01",
      details: {
        birthDate: "2003-02-12",
        height: "188 سم",
        weight: "83 كجم",
        contractUntil: "2029-06-30",
        previousTeams: ["رودار فيلينيه", "إنتربلوك", "برافو", "روزديل"],
        strengths: ["الإنهاء", "الرأسيات", "القوة البدنية"],
        achievements: [],
      },
    },
    {
      id: 32,
      name: "محمد عبدالله",
      number: 32,
      image: player22,
      age: 19,
      nationality: "مصر",
      positions: ["وينج يمين"],
      attributes: {
        pace: 75,
        shooting: 70,
        dribbling: 68,
        passing: 65,
        defending: 65,
        physical: 65,
      },
      stats: {
        matches: 0,
        goals: 0,
        assists: 0,
        shots: 0,
      },
      joinDate: "2024-01-01",
      details: {
        birthDate: "2006-05-10",
        height: "178 سم",
        weight: "72 كجم",
        contractUntil: "2029-06-30",
        previousTeams: ["الأهلي للشباب"],
        strengths: ["الواعدية", "السرعة", "المهارة الفردية"],
        achievements: [],
      },
    },
  ],
};

export const fullTimelineData = {
  "1900s": [
    {
      year: 1907,
      championships: [],
      coaches: ["ميتشيل إينس"],
      events: [
        "تأسيس النادي الأهلي في 24 أبريل 1907 على يد عمر لطفي بك",
        "اختيار عمر لطفي بك كأول رئيس للنادي",
        "تحديد اللون الأحمر كلون أساسي للنادي",
      ],
      players: [],
      stadiums: [],
      stats: {
        members: 50,
        matches: 0,
        goals: 0,
      },
    },
    {
      year: 1908,
      championships: [],
      coaches: ["ميتشيل إينس"],
      events: [
        "إشهار النادي رسمياً كشركة مساهمة",
        "لعب النادي أولى مبارياته الودية",
      ],
      players: [],
      stadiums: [],
      stats: {
        members: 120,
        matches: 0,
        goals: 0,
      },
    },
  ],
  "1910s": [
    {
      year: 1911,
      championships: [],
      coaches: ["ميتشيل إينس"],
      events: ["لعب النادي أولى مبارياته الودية ضد فرق أجنبية ومحلية"],
      players: ["حسين حجازي (انضم لاحقًا)"],
      stadiums: [],
      stats: {
        members: 200,
        matches: 5,
        goals: 8,
      },
    },
    {
      year: 1916,
      championships: [],
      coaches: [],
      events: ["تأسيس أول فريق كرة قدم رسمي للنادي"],
      players: ["حسين حجازي", "أحمد بك سالم"],
      stadiums: [],
      stats: {
        members: 350,
        matches: 10,
        goals: 20,
      },
    },
    {
      year: 1917,
      championships: ["كأس السلطان حسين"],
      coaches: [],
      events: ["فوز الأهلي بأول بطولة رسمية في تاريخه: كأس السلطان حسين"],
      players: ["حسين حجازي", "أحمد بك سالم"],
      stadiums: [],
      stats: {
        members: 400,
        matches: 15,
        goals: 30,
      },
    },
  ],
  "1920s": [
    {
      year: 1923,
      championships: ["كأس مصر"],
      coaches: [],
      events: ["فوز الأهلي بأول لقب كأس مصر"],
      players: ["مختار التتش", "حسين حجازي"],
      stadiums: [],
      stats: {
        members: 700,
        matches: 30,
        goals: 70,
      },
    },
    {
      year: 1929,
      championships: ["كأس مصر"],
      coaches: [],
      events: ["توسعة مقر النادي وتطوير مرافقه الرياضية"],
      players: ["مختار التتش", "أحمد مكاوي"],
      stadiums: [],
      stats: {
        members: 1200,
        matches: 60,
        goals: 150,
      },
    },
  ],
  "1930s": [
    {
      year: 1931,
      championships: [],
      coaches: [],
      events: ["افتتاح ملعب مختار التتش (كان يُعرف سابقًا باسم ملعب الجزيرة)"],
      players: ["مختار التتش", "أحمد مكاوي"],
      stadiums: ["ملعب مختار التتش"],
      stats: {
        members: 1800,
        matches: 100,
        goals: 250,
      },
    },
    {
      year: 1937,
      championships: [],
      coaches: [],
      events: [
        "تأسيس أول فريق لكرة السلة بالنادي",
        "تأسيس أول فريق لكرة اليد بالنادي",
      ],
      players: ["مختار التتش", "عبد الكريم صقر"],
      stadiums: [],
      stats: {
        members: 2500,
        matches: 130,
        goals: 350,
      },
    },
  ],
  "1940s": [
    {
      year: 1940,
      championships: ["كأس مصر"],
      coaches: [],
      events: ["استمرار النادي في حصد البطولات المحلية"],
      players: ["محمد الجندي", "صالح سليم (انضم لاحقًا)"],
      stadiums: [],
      stats: {
        members: 4000,
        matches: 180,
        goals: 500,
      },
    },
    {
      year: 1948,
      championships: [],
      coaches: [],
      events: ["تأسيس الدوري المصري الممتاز وانطلاق نسخته الأولى"],
      players: ["أحمد مكاوي", "صالح سليم"],
      stadiums: [],
      stats: {
        members: 6000,
        matches: 220,
        goals: 650,
      },
    },
    {
      year: 1949,
      championships: ["الدوري المصري الممتاز"],
      coaches: ["فولفغانغ هاغ"],
      events: ["فوز الأهلي بأول لقب في تاريخ الدوري المصري الممتاز"],
      players: ["صالح سليم", "أحمد مكاوي", "فؤاد صدقي"],
      stadiums: [],
      stats: {
        members: 8000,
        matches: 250,
        goals: 750,
      },
    },
  ],
  "1950s": [
    {
      year: 1953,
      championships: ["الدوري المصري الممتاز", "كأس مصر"],
      coaches: ["تيماش فاري"],
      events: ["تحقيق الأهلي الثنائية المحلية (الدوري والكأس)"],
      players: ["صالح سليم", "عبد الجليل", "أحمد أبو حسين"],
      stadiums: [],
      stats: {
        members: 12000,
        matches: 350,
        goals: 1000,
      },
    },
    {
      year: 1959,
      championships: ["الدوري المصري الممتاز", "كأس مصر"],
      coaches: ["هانز أوي"],
      events: [
        "استمرار هيمنة الأهلي على البطولات المحلية",
        "إنشاء أول فريق للجمباز بالنادي",
      ],
      players: ["صالح سليم", "طارق سليم", "رفعت الفناجيلي"],
      stadiums: [],
      stats: {
        members: 18000,
        matches: 450,
        goals: 1300,
      },
    },
  ],
  "1960s": [
    {
      year: 1961,
      championships: ["الدوري المصري الممتاز", "كأس مصر"],
      coaches: ["ميشيل فاندن بوش"],
      events: ["استمرار النادي في تحقيق الأرقام القياسية في الدوري"],
      players: ["صالح سليم", "طارق سليم", "مروان كنفاني"],
      stadiums: [],
      stats: {
        members: 22000,
        matches: 550,
        goals: 1600,
      },
    },
    {
      year: 1965,
      championships: ["الدوري المصري الممتاز"],
      coaches: ["فؤاد صدقي"],
      events: ["تأسيس أول فريق للكرة الطائرة بالنادي"],
      players: ["محمود الخطيب (انضم لاحقًا)", "مصطفى عبده (انضم لاحقًا)"],
      stadiums: [],
      stats: {
        members: 28000,
        matches: 650,
        goals: 1900,
      },
    },
  ],
  "1970s": [
    {
      year: 1970,
      championships: [],
      coaches: ["عبده صالح الوحش"],
      events: ["فترة انتقالية للنادي وتجديد دماء الفريق"],
      players: ["محمود الخطيب", "مصطفى عبده"],
      stadiums: [],
      stats: {
        members: 35000,
        matches: 750,
        goals: 2200,
      },
    },
    {
      year: 1976,
      championships: ["الدوري المصري الممتاز", "كأس مصر"],
      coaches: ["هيديكوتي"],
      events: [
        "فوز الأهلي بالدوري وكأس مصر للمرة الأولى في سبعينيات القرن الماضي",
      ],
      players: ["محمود الخطيب", "مصطفى عبده", "طاهر أبو زيد (انضم لاحقًا)"],
      stadiums: [],
      stats: {
        members: 45000,
        matches: 850,
        goals: 2500,
      },
    },
    {
      year: 1977,
      championships: ["كأس أفريقيا للأندية أبطال الكؤوس"],
      coaches: ["هيديكوتي"],
      events: [
        "فوز الأهلي بأول بطولة أفريقية في تاريخه: كأس أفريقيا للأندية أبطال الكؤوس",
      ],
      players: ["محمود الخطيب", "مصطفى عبده", "أحمد شوبير (انضم لاحقًا)"],
      stadiums: [],
      stats: {
        members: 50000,
        matches: 880,
        goals: 2600,
      },
    },
  ],
  "1980s": [
    {
      year: 1981,
      championships: ["الدوري المصري الممتاز"],
      coaches: ["محمود الجوهري"],
      events: [
        "فوز الأهلي بالدوري المصري الممتاز",
        "تأسيس فريق السباحة بالنادي",
      ],
      players: ["محمود الخطيب", "طاهر أبو زيد", "مجدي عبد الغني"],
      stadiums: [],
      stats: {
        members: 60000,
        matches: 950,
        goals: 2800,
      },
    },
    {
      year: 1982,
      championships: ["دوري أبطال أفريقيا"],
      coaches: ["محمود الجوهري"],
      events: [
        "فوز الأهلي بلقبه الأول في دوري أبطال أفريقيا",
        "تتويج محمود الخطيب بلقب أفضل لاعب في أفريقيا",
      ],
      players: ["محمود الخطيب", "طاهر أبو زيد", "مصطفى عبده"],
      stadiums: [],
      stats: {
        members: 70000,
        matches: 980,
        goals: 2900,
      },
    },
    {
      year: 1987,
      championships: ["دوري أبطال أفريقيا"],
      coaches: ["أنور سلامة"],
      events: ["فوز الأهلي بلقبه الثاني في دوري أبطال أفريقيا"],
      players: ["طاهر أبو زيد", "مجدي عبد الغني", "أيمن شوقي"],
      stadiums: [],
      stats: {
        members: 90000,
        matches: 1100,
        goals: 3300,
      },
    },
  ],
  "1990s": [
    {
      year: 1992,
      championships: ["الدوري المصري الممتاز", "كأس مصر"],
      coaches: ["مايكل إيفرت"],
      events: ["فترة تجديد للفريق وبناء جيل جديد من اللاعبين"],
      players: ["هادي خشبة", "محمد يوسف"],
      stadiums: [],
      stats: {
        members: 120000,
        matches: 1300,
        goals: 3900,
      },
    },
    {
      year: 1997,
      championships: ["الدوري المصري الممتاز", "كأس مصر"],
      coaches: ["راينر هولمان"],
      events: [
        "فوز الأهلي بلقب الدوري للمرة الخامسة على التوالي (رقم قياسي آنذاك)",
        "تأسيس أول أكاديمية كرة قدم للناشئين بالنادي",
      ],
      players: ["حسام حسن", "إبراهيم حسن", "هادي خشبة"],
      stadiums: [],
      stats: {
        members: 180000,
        matches: 1500,
        goals: 4500,
      },
    },
  ],
  "2000s": [
    {
      year: 2001,
      championships: ["دوري أبطال أفريقيا"],
      coaches: ["مانويل جوزيه"],
      events: ["فوز الأهلي بلقبه الثالث في دوري أبطال أفريقيا"],
      players: ["محمد بركات", "وائل جمعة", "عصام الحضري", "محمد أبو تريكة"],
      stadiums: [],
      stats: {
        members: 250000,
        matches: 1700,
        goals: 5100,
      },
    },
    {
      year: 2005,
      championships: [
        "الدوري المصري الممتاز",
        "دوري أبطال أفريقيا",
        "كأس السوبر المصري",
      ],
      coaches: ["مانويل جوزيه"],
      events: [
        "بداية العصر الذهبي الثاني للنادي تحت قيادة مانويل جوزيه",
        "تأسيس قناة الأهلي الفضائية",
        "الفوز بالدوري ودوري أبطال أفريقيا وكأس السوبر المصري",
      ],
      players: ["محمد أبو تريكة", "محمد بركات", "عماد متعب", "عصام الحضري"],
      stadiums: [],
      stats: {
        members: 400000,
        matches: 1900,
        goals: 5700,
      },
    },
    {
      year: 2006,
      championships: [
        "الدوري المصري الممتاز",
        "دوري أبطال أفريقيا",
        "كأس السوبر المصري",
        "كأس السوبر الأفريقي",
      ],
      coaches: ["مانويل جوزيه"],
      events: [
        "استمرار هيمنة الأهلي بتحقيق الألقاب المحلية والقارية",
        "المشاركة في كأس العالم للأندية",
      ],
      players: ["محمد أبو تريكة", "محمد بركات", "عماد متعب", "وائل جمعة"],
      stadiums: [],
      stats: {
        members: 500000,
        matches: 2000,
        goals: 6000,
      },
    },
    {
      year: 2008,
      championships: [
        "الدوري المصري الممتاز",
        "دوري أبطال أفريقيا",
        "كأس السوبر المصري",
      ],
      coaches: ["مانويل جوزيه"],
      events: [
        "احتفال النادي بالذكرى المئوية لتأسيسه",
        "الفوز بلقب دوري أبطال أفريقيا للمرة السادسة",
        "تحقيق الثلاثية المحلية",
      ],
      players: ["محمد أبو تريكة", "وائل جمعة", "أحمد حسن", "محمد شوقي"],
      stadiums: [],
      stats: {
        members: 600000,
        matches: 2100,
        goals: 6300,
      },
    },
  ],
  "2010s": [
    {
      year: 2012,
      championships: ["دوري أبطال أفريقيا", "كأس السوبر المصري"],
      coaches: ["حسام البدري"],
      events: [
        "فوز الأهلي بلقبه السابع في دوري أبطال أفريقيا بعد أحداث بورسعيد",
        "المشاركة في كأس العالم للأندية",
      ],
      players: ["محمد أبو تريكة", "وليد سليمان", "أحمد فتحي", "عماد متعب"],
      stadiums: [],
      stats: {
        members: 800000,
        matches: 2300,
        goals: 6900,
      },
    },
    {
      year: 2013,
      championships: ["دوري أبطال أفريقيا", "كأس السوبر الأفريقي"],
      coaches: ["محمد يوسف"],
      events: [
        "تتويج الأهلي بدوري أبطال أفريقيا للمرة الثامنة",
        "الفوز بكأس السوبر الأفريقي",
      ],
      players: [
        "محمد أبو تريكة",
        "عبد الله السعيد",
        "رمضان صبحي",
        "شريف إكرامي",
      ],
      stadiums: [],
      stats: {
        members: 900000,
        matches: 2400,
        goals: 7200,
      },
    },
    {
      year: 2014,
      championships: ["كأس الكونفيدرالية الأفريقية", "كأس السوبر الأفريقي"],
      coaches: ["خوان كارلوس جاريدو"],
      events: [
        "فوز الأهلي بكأس الكونفيدرالية الأفريقية لأول مرة في تاريخه",
        "الفوز بكأس السوبر الأفريقي",
      ],
      players: ["عماد متعب", "حسام غالي", "وليد سليمان", "عبد الله السعيد"],
      stadiums: [],
      stats: {
        members: 950000,
        matches: 2500,
        goals: 7500,
      },
    },
    {
      year: 2017,
      championships: ["الدوري المصري الممتاز", "كأس مصر", "كأس السوبر المصري"],
      coaches: ["حسام البدري"],
      events: [
        "احتفال النادي بالذكرى 110 لتأسيسه",
        "تحقيق الثلاثية المحلية",
        "الوصول لنهائي دوري أبطال أفريقيا",
      ],
      players: ["حسام عاشور", "عبد الله السعيد", "أحمد فتحي", "مؤمن زكريا"],
      stadiums: [],
      stats: {
        members: 1000000,
        matches: 2600,
        goals: 7800,
      },
    },
    {
      year: 2018,
      championships: ["الدوري المصري الممتاز"],
      coaches: ["باتريس كارتيرون"],
      events: [
        "فوز الأهلي بالدوري المصري الممتاز",
        "الوصول لنهائي دوري أبطال أفريقيا",
      ],
      players: ["وليد سليمان", "علي معلول", "محمد الشناوي"],
      stadiums: [],
      stats: {
        members: 1050000,
        matches: 2650,
        goals: 7950,
      },
    },
    {
      year: 2019,
      championships: ["الدوري المصري الممتاز", "كأس السوبر المصري"],
      coaches: ["لاسارتي", "رينيه فايلر"],
      events: [
        "فوز الأهلي بالدوري المصري والسوبر المصري",
        "رحيل لاسارتي وقدوم فايلر",
      ],
      players: ["حسين الشحات", "علي معلول", "محمد الشناوي", "أجايي"],
      stadiums: [],
      stats: {
        members: 1100000,
        matches: 2700,
        goals: 8100,
      },
    },
  ],
  "2020s": [
    {
      year: 2020,
      championships: ["الدوري المصري الممتاز", "كأس مصر", "دوري أبطال أفريقيا"],
      coaches: ["رينيه فايلر", "بيتسو موسيماني"],
      events: [
        "تحقيق الثلاثية التاريخية (الدوري والكأس ودوري الأبطال) لأول مرة",
        "تجاوز عدد أعضاء النادي مليون عضو",
        "رحيل فايلر وتولي موسيماني القيادة الفنية",
      ],
      players: ["محمد الشناوي", "علي معلول", "محمد مجدي أفشة", "أليو ديانج"],
      stadiums: [],
      stats: {
        members: 1200000,
        matches: 2800,
        goals: 8400,
      },
    },
    {
      year: 2021,
      championships: [
        "دوري أبطال أفريقيا",
        "كأس السوبر الأفريقي (مايو)",
        "كأس السوبر الأفريقي (ديسمبر)",
        "الميدالية البرونزية في كأس العالم للأندية",
      ],
      coaches: ["بيتسو موسيماني"],
      events: [
        "الفوز بدوري أبطال أفريقيا للمرة العاشرة في تاريخ النادي (العاشرة يا أهلي)",
        "تحقيق برونزية كأس العالم للأندية للمرة الثانية",
        "الفوز بكأس السوبر الأفريقي مرتين في نفس العام",
      ],
      players: ["محمد الشناوي", "بيرسي تاو", "محمد شريف", "علي معلول"],
      stadiums: [],
      stats: {
        members: 1300000,
        matches: 2950,
        goals: 8800,
      },
    },
    {
      year: 2022,
      championships: ["كأس مصر", "كأس السوبر المصري"],
      coaches: ["بيتسو موسيماني", "مارسيل كولر"],
      events: [
        "تغيير الجهاز الفني وتولي مارسيل كولر القيادة",
        "الفوز بكأس مصر وكأس السوبر المصري",
      ],
      players: [
        "محمد الشناوي",
        "حسين الشحات",
        "عمرو السولية",
        "أحمد عبد القادر",
      ],
      stadiums: [],
      stats: {
        members: 1400000,
        matches: 3050,
        goals: 9100,
      },
    },
    {
      year: 2023,
      championships: [
        "الدوري المصري الممتاز",
        "كأس مصر",
        "دوري أبطال أفريقيا",
        "كأس السوبر المصري",
      ],
      coaches: ["مارسيل كولر"],
      events: [
        "تحقيق أربعة ألقاب في موسم واحد",
        "الفوز بلقب دوري أبطال أفريقيا للمرة الحادية عشرة",
        "افتتاح بعض منشآت المدينة الرياضية الجديدة",
      ],
      players: [
        "محمد الشناوي",
        "حسين الشحات",
        "علي معلول",
        "بيرسي تاو",
        "إمام عاشور",
      ],
      stadiums: ["استاد الأهلي وي السلام (الاستاد الحالي)"],
      stats: {
        members: 1500000,
        matches: 3100,
        goals: 9300,
      },
    },
    {
      year: 2024,
      championships: [
        "الدوري المصري الممتاز",
        "دوري أبطال أفريقيا",
        "كأس السوبر المصري",
      ],
      coaches: ["مارسيل كولر"],
      events: [
        "الفوز بلقب الدوري المصري الممتاز للمرة الـ 44",
        "الفوز بلقب دوري أبطال أفريقيا للمرة الثانية عشرة",
        "الفوز بكأس السوبر المصري",
      ],
      players: [
        "محمد الشناوي",
        "حسين الشحات",
        "علي معلول",
        "إمام عاشور",
        "محمود عبد المنعم كهربا",
      ],
      stadiums: [],
      stats: {
        members: 1600000,
        matches: 3200,
        goals: 9600,
      },
    },
    {
      year: 2025,
      championships: ["الدوري المصري الممتاز", "كأس السوبر المصري"],
      coaches: ["خوسيه ريفيرو", "مارسيل كولر"],
      events: [
        "استمرار المشاركة في البطولات المحلية والقارية",
        "تطوير مستمر للمنشآت الرياضية",
        "رحيل كولر",
        "المشاركة في كاس العالم للانديه",
      ],
      players: ["شوبير", "بن رمضان", "تريزيجيه", "إمام عاشور", "زيزو"],
      stadiums: [],
      stats: {
        members: 1700000,
        matches: 3250,
        goals: 9750,
      },
    },
  ],
};

export const questions = [
  {
    id: 1,
    question: "من هو أكثر لاعب سجل أهدافًا في تاريخ الأهلي؟",
    options: ["محمود الخطيب", "حسام حسن", "صالح سليم", "محمد أبو تريكة"],
    correctAnswer: "محمود الخطيب",
    difficulty: "hard",
    category: "لاعبون",
    funFact: "محمود الخطيب سجل 157 هدفاً للأهلي.",
  },
  {
    id: 2,
    question: "في أي عام تأسس النادي الأهلي؟",
    options: ["1905", "1907", "1911", "1909"],
    correctAnswer: "1907",
    difficulty: "easy",
    category: "تاريخ",
    funFact:
      "تأسس الأهلي في 24 أبريل 1907 على يد ميشيل إنس ومجموعة من الأعضاء المؤسسين.",
  },
  {
    id: 3,
    question: "من كان أول رئيس للنادي الأهلي؟",
    options: ["عمر لطفي بك", "ميشيل إنس", "عزيز عزت باشا", "جمال عبد الناصر"],
    correctAnswer: "ميشيل إنس",
    difficulty: "easy",
    category: "تاريخ",
    funFact: "ميشيل إنس كان أول رئيس للأهلي وشغل المنصب من 1907 حتى 1908.",
  },
  {
    id: 4,
    question: "كم مرة فاز الأهلي بدوري أبطال أفريقيا؟",
    options: ["8", "10", "12", "11"],
    correctAnswer: "12",
    difficulty: "medium",
    category: "إنجازات",
    funFact:
      "الأهلي هو أكثر فريق فوزاً بدوري أبطال أفريقيا برصيد 12 لقباً حتى عام 2025.",
  },
  {
    id: 5,
    question: "من هو اللاعب الذي لعب لأطول فترة في الأهلي؟",
    options: ["حسام عاشور", "أحمد شوبير", "محمد أبو تريكة", "وائل جمعة"],
    correctAnswer: "حسام عاشور",
    difficulty: "hard",
    category: "لاعبون",
    funFact: "حسام عاشور لعب للأهلي لمدة 22 عاماً.",
  },
  {
    id: 6,
    question: "ما هو لقب النادي الأهلي؟",
    options: [
      "القلعة الحمراء",
      "عمالقة أفريقيا",
      "المارد الأحمر",
      "فريق المليون",
    ],
    correctAnswer: "المارد الأحمر",
    difficulty: "easy",
    category: "عام",
    funFact: "لقب المارد الأحمر يعود إلى الوان تيشيرت النادي الأهلي.",
  },
  {
    id: 7,
    question: "من هو المدرب الذي قاد الأهلي لأكبر عدد من البطولات؟",
    options: ["مانويل جوزيه", "محمود الجوهري", "حسام البدري", "ريتو فيلا"],
    correctAnswer: "مانويل جوزيه",
    difficulty: "medium",
    category: "مدربون",
    funFact: "مانويل جوزيه قاد الأهلي لـ20 بطولة خلال فتراته الأربع مع النادي.",
  },
  {
    id: 8,
    question: "في أي ملعب يلعب الأهلي مبارياته الأساسية؟",
    options: [
      "استاد القاهرة",
      "استاد السلام",
      "استاد الجيش",
      "استاد برج العرب",
    ],
    correctAnswer: "استاد القاهرة",
    difficulty: "easy",
    category: "منشآت",
    funFact: "استاد القاهرة يتسع لـ75,000 متفرج وهو أكبر استاد في مصر.",
  },
  {
    id: 9,
    question: "ما هو أول لقب أفريقي حققه الأهلي؟",
    options: [
      "دوري أبطال أفريقيا",
      "كأس الكؤوس الأفريقية",
      "كأس السوبر الأفريقي",
      "كأس الكونفيدرالية",
    ],
    correctAnswer: "دوري أبطال أفريقيا",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "فاز الأهلي بدوري أبطال أفريقيا لأول مرة في 1982.",
  },
  {
    id: 10,
    question: "من هو الهداف التاريخي للأهلي في البطولات الأفريقية؟",
    options: ["محمد أبو تريكة", "عماد متعب", "محمود الخطيب", "محمد ناجي"],
    correctAnswer: "محمود الخطيب",
    difficulty: "medium",
    category: "لاعبون",
    funFact: "محمود الخطيب سجل 37 هدفاً للأهلي في البطولات الأفريقية.",
  },
  {
    id: 11,
    question: "كم مرة فاز الأهلي بالدوري المصري؟",
    options: ["38", "44", "45", "43"],
    correctAnswer: "45",
    difficulty: "easy",
    category: "إنجازات",
    funFact: "الأهلي هو الأكثر تتويجاً بالدوري المصري حتى عام 2025.",
  },
  {
    id: 12,
    question: "من هو اللاعب الذي سجل أسرع هدف في تاريخ الأهلي؟",
    options: ["حسام غالي", "عماد متعب", "حسام عاشور", "أحمد بلال"],
    correctAnswer: "حسام عاشور",
    difficulty: "hard",
    category: "لاعبون",
    funFact: "حسام عاشور سجل هدفاً بعد 34 ثانيه فقط من بداية المباراة.",
  },
  {
    id: 13,
    question: "ما هو عدد ألقاب الأهلي في كأس مصر؟",
    options: ["39", "38", "36", "37"],
    correctAnswer: "39",
    difficulty: "medium",
    category: "إنجازات",
    funFact: "الأهلي يحمل الرقم القياسي لعدد ألقاب كأس مصر.",
  },
  {
    id: 14,
    question: "في أي عام فاز الأهلي بأول دوري مصري؟",
    options: ["1948", "1949", "1950", "1951"],
    correctAnswer: "1949",
    difficulty: "hard",
    category: "تاريخ",
    funFact: "فاز الأهلي بأول دوري مصري في موسم 1948-1949.",
  },
  {
    id: 15,
    question: "ما هو عدد ألقاب الأهلي في كأس السوبر المصري؟",
    options: ["14", "13", "12", "15"],
    correctAnswer: "15",
    difficulty: "medium",
    category: "إنجازات",
    funFact: "الأهلي يحمل الرقم القياسي لعدد ألقاب كأس السوبر المصري.",
  },
  {
    id: 16,
    question: "في أي عام فاز الأهلي بأول دوري أبطال أفريقيا؟",
    options: ["1982", "1987", "1980", "1985"],
    correctAnswer: "1982",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "فاز الأهلي بأول دوري أبطال أفريقيا بعد تغلبه على أسيك أبيدجان.",
  },
  {
    id: 17,
    question: "ما هو عدد ألقاب الأهلي في كأس السوبر الأفريقي؟",
    options: ["8", "7", "9", "6"],
    correctAnswer: "8",
    difficulty: "medium",
    category: "إنجازات",
    funFact: "الأهلي يحمل الرقم القياسي لعدد ألقاب كأس السوبر الأفريقي.",
  },

  {
    id: 18,
    question: "ما هو أكبر فوز للأهلي في الدوري المصري؟",
    options: ["12-0", "10-0", "13-0", "9-0"],
    correctAnswer: "13-0",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "الأهلي فاز على الجونه 13-0 .",
  },
  {
    id: 19,
    question: "كم مرة توالت فيها ألقاب الدوري المصري للأهلي؟",
    options: ["9", "6", "7", "8"],
    correctAnswer: "9",
    difficulty: "medium",
    category: "إنجازات",
    funFact: "الأهلي فاز بالدوري المصري 9 مرات متتالية.",
  },
  {
    id: 20,
    question: "من هو اللاعب الذي سجل هدف الأهلي رقم 1000 في الدوري المصري؟",
    options: ["محمد أبو تريكة", "عماد متعب", "محمد عامر", "أحمد بلال"],
    correctAnswer: "محمد عامر",
    difficulty: "hard",
    category: "لاعبون",
    funFact: "محمد عامر سجل الهدف رقم 1000 للأهلي في الدوري المصري.",
  },
  {
    id: 21,
    question: "ما هو عدد مرات مشاركة الأهلي في كأس العالم للأندية؟",
    options: ["7", "6", "8", "9"],
    correctAnswer: "9",
    difficulty: "medium",
    category: "إنجازات",
    funFact: "الأهلي شارك في كأس العالم للأندية 9 مرات حتى 2025.",
  },
  {
    id: 22,
    question: "من هو أول لاعب أجنبي يضع شارة القياده مع الأهلي؟",
    options: ["مروان الكنفاني", "علي معلول", "إسحاق أول", "محمد عبدالمنعم شطة"],
    correctAnswer: "مروان الكنفاني",
    difficulty: "hard",
    category: "لاعبون",
    funFact: "مروان الكنفاني كان أول لاعب أجنبي يضع شارة القياده مع الأهلي.",
  },
  {
    id: 23,
    question: "ما هو أفضل مركز حققه الأهلي في كأس العالم للأندية؟",
    options: ["الثاني", "الثالث", "الرابع", "الخامس"],
    correctAnswer: "الثالث",
    difficulty: "medium",
    category: "إنجازات",
    funFact: "الأهلي حصل على المركز الثالث في كأس العالم للأندية 2006.",
  },
  {
    id: 24,
    question: "من هو المدرب المصري الذي قاد الأهلي لأكبر عدد من البطولات؟",
    options: [
      "محمود الجوهري",
      "حسام البدري",
      "عبد العزيز عبد الشافي",
      "جميل عثمان",
    ],
    correctAnswer: "جميل عثمان",
    difficulty: "hard",
    category: "مدربون",
    funFact: "جميل عثمان قاد الأهلي لـ18 بطولة في فتراته المختلفة.",
  },
  {
    id: 25,
    question: "من هو المدرب الاول في تاريخ النادي الاهلي؟",
    options: ["فريتز بيمبول", "لبيب محمود", "مصطفى كامل منصور", "جميل عثمان"],
    correctAnswer: "جميل عثمان",
    difficulty: "hard",
    category: "مدربون",
    funFact: "جميل عثمان كان المدرب الاول في تاريخ النادي الاهلي.",
  },
  {
    id: 26,
    question: "من هو أول لاعب مصري يسجل للأهلي في كأس العالم للأندية؟",
    options: ["محمد أبو تريكة", "عماد متعب", "محمد بركات", "أحمد بلال"],
    correctAnswer: "عماد متعب",
    difficulty: "medium",
    category: "لاعبون",
    funFact: "عماد متعب سجل هدف الأهلي الأول في مونديال الأندية.",
  },
  {
    id: 27,
    question: "ما هو عدد مرات فوز الأهلي بالدوري المصري بدون هزيمة؟",
    options: ["7", "4", "5", "6"],
    correctAnswer: "7",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "الأهلي فاز بالدوري 7 مرات بدون أي هزيمة.",
  },
  {
    id: 28,
    question: "من هو أول لاعب يسجل للأهلي في نهائي دوري أبطال أفريقيا؟",
    options: ["مختار مختار", "محمود الخطيب", "علاء ميهوب", "مصطفى عبده"],
    correctAnswer: "محمود الخطيب",
    difficulty: "hard",
    category: "لاعبون",
    funFact: "محمود الخطيب سجل أول هدف للأهلي في دوري الأبطال.",
  },
  {
    id: 29,
    question: "ما هو عدد الأهداف التي سجلها الأهلي في موسم واحد من الدوري؟",
    options: ["69", "72", "75", "78"],
    correctAnswer: "75",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "الأهلي سجل 75 هدفاً.",
  },
  {
    id: 30,
    question: "ما هو عدد مرات فوز الأهلي بالدوري والكأس في نفس الموسم؟",
    options: ["12", "14", "16", "18"],
    correctAnswer: "16",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "الأهلي حقق الدوري والكأس معاً 16 مرة في تاريخه.",
  },

  {
    id: 31,
    question: "من هو أول لاعب أهلي يحصل على لقب أفضل لاعب في أفريقيا من الكاف؟",
    options: ["محمود الخطيب", "محمد أبو تريكة", "محمد بركات", "وائل جمعة"],
    correctAnswer: "محمود الخطيب",
    difficulty: "hard",
    category: "لاعبون",
    funFact:
      "محمود الخطيب هو اللاعب المصري الاول الذي فاز بجائزة الكرة الذهبية الأفريقية عام 1983.",
  },
  {
    id: 32,
    question:
      "في أي عام تم افتتاح استاد مختار التتش بمقر النادي الأهلي بالجزيرة؟",
    options: ["1927", "1928", "1929", "1930"],
    correctAnswer: "1929",
    difficulty: "medium",
    category: "منشآت",
    funFact:
      "سمي الملعب باسم مختار التتش تقديراً لجهوده كلاعب وإداري في النادي.",
  },
  {
    id: 33,
    question:
      "ما هو أكبر عدد من النقاط حققه الأهلي في موسم واحد من الدوري المصري؟",
    options: ["88 نقطة", "89 نقطة", "90 نقطة", "91 نقطة"],
    correctAnswer: "89 نقطة",
    difficulty: "hard",
    category: "إنجازات",
    funFact:
      "حقق الأهلي 89 نقطة في موسم 2019-2020 وهو أعلى رصيد نقطي في تاريخ الدوري المصري بنظامه الحالي.",
  },
  {
    id: 34,
    question:
      "من هو اللاعب الذي يحمل الرقم القياسي لأكثر عدد من المباريات الدولية مع الأهلي؟",
    options: ["وائل جمعة", "حسام عاشور", "أحمد فتحي", "محمد بركات"],
    correctAnswer: "وائل جمعة",
    difficulty: "medium",
    category: "لاعبون",
    funFact: "وائل جمعة يمتلك رقم قياسي في عدد المباريات القارية مع الأهلي.",
  },
  {
    id: 35,
    question:
      "كم مرة فاز الأهلي بلقب الدوري المصري تحت قيادة المدرب مانويل جوزيه؟",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6",
    difficulty: "medium",
    category: "مدربون",
    funFact:
      "مانويل جوزيه قاد الأهلي للفوز بـ 6 ألقاب دوري مصري خلال فتراته المتعددة.",
  },
  {
    id: 36,
    question: "ما هو أول فريق واجهه الأهلي في كأس العالم للأندية؟",
    options: ["اتحاد جدة", "سيدني إف سي", "ديبورتيفو سابريسا", "الفيحاء"],
    correctAnswer: "اتحاد جدة",
    difficulty: "hard",
    category: "إنجازات",
    funFact:
      "أول مباراة للأهلي في كأس العالم للأندية كانت ضد اتحاد جدة السعودي في ديسمبر 2005.",
  },
  {
    id: 37,
    question: "ما هو أكبر انتصار للأهلي في دوري أبطال أفريقيا؟",
    options: ["7-0", "9-0", "6-0", "5-0"],
    correctAnswer: "9-0",
    difficulty: "hard",
    category: "إنجازات",
    funFact:
      "أكبر فوز للأهلي في دوري أبطال أفريقيا كان بنتيجة 9-0 على اطلع بره في 2019/2020.",
  },
  {
    id: 38,
    question: "من هو اللاعب الأجنبي الأكثر تسجيلاً للأهداف في تاريخ الأهلي؟",
    options: ["فلافيو أمادو", "جون أنطوي", "بيرسي تاو", "علي معلول"],
    correctAnswer: "فلافيو أمادو",
    difficulty: "medium",
    category: "لاعبون",
    funFact:
      "فلافيو أمادو (أنجولي) هو الهداف التاريخي للاعبين الأجانب في الأهلي.",
  },
  {
    id: 39,
    question: "في أي عام فاز الأهلي بلقب كأس الكونفيدرالية الأفريقية؟",
    options: ["2013", "2014", "2015", "2016"],
    correctAnswer: "2014",
    difficulty: "medium",
    category: "إنجازات",
    funFact:
      "فاز الأهلي بكأس الكونفيدرالية الأفريقية لأول مرة في تاريخه عام 2014 على حساب سيو سبورت الإيفواري.",
  },
  {
    id: 40,
    question: "ما هو الاسم القديم لمجلة الأهلي الرسمية؟",
    options: ["صوت الأهلي", "مجلة النادي", "الأهلي اليوم", "الجمهورية الحمراء"],
    correctAnswer: "صوت الأهلي",
    difficulty: "hard",
    category: "عام",
    funFact: "مجلة الأهلي هي أقدم مجلة رياضية تصدر عن نادٍ في مصر.",
  },
  {
    id: 41,
    question:
      "من هو اللاعب الذي سجل هدف الفوز للأهلي في نهائي دوري أبطال أفريقيا 2020 ضد الزمالك؟",
    options: ["محمد مجدي أفشة", "عمرو السولية", "حسين الشحات", "جونيور أجايي"],
    correctAnswer: "محمد مجدي أفشة",
    difficulty: "easy",
    category: "لاعبون",
    funFact: "هدف أفشة في 'نهائي القرن' يعتبر من أشهر الأهداف في تاريخ الأهلي.",
  },
  {
    id: 42,
    question:
      "كم عدد المرات التي فاز فيها الأهلي بالثلاثية (الدوري والكأس ودوري أبطال أفريقيا)؟",
    options: ["مرة واحدة", "مرتين", "ثلاث مرات", "أربع مرات"],
    correctAnswer: "ثلاث مرات",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "حقق الأهلي الثلاثية في مواسم 2006-2007، 2019-2020، و 2022-2023.",
  },
  {
    id: 43,
    question: "من هو حارس المرمى الأكثر مشاركة في تاريخ النادي الأهلي؟",
    options: ["أحمد شوبير", "عصام الحضري", "إكرامي الشحات", "مصطفى كامل منصور"],
    correctAnswer: "إكرامي الشحات",
    difficulty: "medium",
    category: "لاعبون",
    funFact: "إكرامي الشحات من أبرز حراس المرمى في تاريخ الأهلي.",
  },
  {
    id: 44,
    question:
      "في أي دولة أقيمت بطولة كأس العالم للأندية التي حقق فيها الأهلي المركز الثالث عام 2006؟",
    options: ["اليابان", "الإمارات", "المغرب", "قطر"],
    correctAnswer: "اليابان",
    difficulty: "easy",
    category: "إنجازات",
    funFact:
      "تعتبر مشاركة الأهلي في مونديال الأندية 2006 الأبرز في تاريخه حتى الآن.",
  },
  {
    id: 45,
    question:
      "من هو أول لاعب أهلي يسجل في مرمى الزمالك في أول ديربي يجمع الفريقين؟",
    options: ["محرم ابراهيم", "حسين حجازي", "مختار التتش", "صالح سليم"],
    correctAnswer: "حسين حجازي",
    difficulty: "hard",
    category: "تاريخ",
    funFact:
      "حسين حجازي سجل الهدف الأول للأهلي في أول مباراة ديربي ضد الزمالك عام 1917.",
  },
  {
    id: 46,
    question:
      "ما هو عدد ألقاب الأهلي في كأس الكؤوس الأفريقية (البطولة الأفريقية للأندية أبطال الكؤوس سابقاً)؟",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
    difficulty: "medium",
    category: "إنجازات",
    funFact:
      "الأهلي فاز بلقب كأس الكؤوس الأفريقية أعوام 1984، 1985، 1986، 1993.",
  },
  {
    id: 47,
    question: "من هو أصغر لاعب شارك مع الفريق الأول للنادي الأهلي؟",
    options: ["محمد طلعت", "رمضان صبحي", "كريم نيدفيد", "حمزة عبدالكريم"],
    correctAnswer: "حمزة عبدالكريم",
    difficulty: "hard",
    category: "لاعبون",
    funFact: "حمزة عبدالكريم شارك مع الأهلي في سن 17 عاماً.",
  },
  {
    id: 48,
    question:
      "كم عدد الميداليات البرونزية التي حققها الأهلي في كأس العالم للأندية؟",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
    difficulty: "medium",
    category: "إنجازات",
    funFact:
      "الأهلي هو ثاني أكثر فريق حصولاً على الميدالية البرونزية في تاريخ كأس العالم للأندية.",
  },
  {
    id: 49,
    question: "من هو أول مدرب أجنبي يتولى قيادة النادي الأهلي؟",
    options: ["فريتز بيمبول", "دون ريفير", "مانويل جوزيه", "تيد ماكدوغال"],
    correctAnswer: "فريتز بيمبول",
    difficulty: "hard",
    category: "مدربون",
    funFact: "فريتز بيمبول (نمساوي) قاد الأهلي في فترة الأربعينات.",
  },
  {
    id: 50,
    question: "كم مرة فاز الأهلي بلقب كأس السوبر الأفرو-آسيوي؟",
    options: ["مرة واحدة", "مرتين", "ثلاث مرات", "لم يفز بها"],
    correctAnswer: "مرة واحدة",
    difficulty: "medium",
    category: "إنجازات",
    funFact:
      "فاز الأهلي بكأس السوبر الأفرو-آسيوي عام 1988 بعد فوزه على يوميوري الياباني.",
  },
  {
    id: 51,
    question: "من هو اللاعب الذي يحمل لقب 'القناص' في تاريخ الأهلي؟",
    options: ["عماد متعب", "أحمد بلال", "محمد طلعت", "صلاح محسن"],
    correctAnswer: "عماد متعب",
    difficulty: "easy",
    category: "لاعبون",
    funFact: "عماد متعب اشتهر بقدرته على إنهاء الهجمات وتسجيل الأهداف الحاسمة.",
  },
  {
    id: 52,
    question: "من هو أول رئيس للنادي الأهلي يتم انتخابه؟",
    options: [
      "عزيز عزت باشا",
      "عمر لطفي بك",
      "محمد شريف صبري باشا",
      "أحمد بك فؤاد",
    ],
    correctAnswer: "عزيز عزت باشا",
    difficulty: "hard",
    category: "تاريخ",
    funFact: "تم انتخاب عزيز عزت باشا كأول رئيس للنادي الأهلي بعد تأسيسه.",
  },
  {
    id: 53,
    question: "ما هو أكبر فارق نقطي بين الأهلي وصيفه في تاريخ الدوري المصري؟",
    options: ["17 نقطة", "20 نقطة", "22 نقطة", "25 نقطة"],
    correctAnswer: "25 نقطة",
    difficulty: "hard",
    category: "إنجازات",
    funFact:
      "حقق الأهلي هذا الفارق الكبير في موسم 2019-2020، حيث حصد 89 نقطة بينما حصل الزمالك على 64 نقطة.",
  },
  {
    id: 54,
    question:
      "من هو اللاعب الذي سجل هدف الأهلي في مرمى ريال مدريد في كأس العالم للأندية؟",
    options: ["علي معلول", "محمد شريف", "محمد مجدي أفشة", "محمود متولي"],
    correctAnswer: "علي معلول",
    difficulty: "medium",
    category: "لاعبون",
    funFact:
      "علي معلول سجل هدف الأهلي الوحيد من ركلة جزاء في مرمى ريال مدريد في نصف نهائي كأس العالم للأندية 2022 (التي أقيمت في فبراير 2023).",
  },
  {
    id: 55,
    question: "في أي عام تم تغيير شعار النادي الأهلي ليشمل نسر الأهلي الحالي؟",
    options: ["1950", "1952", "1960", "1970"],
    correctAnswer: "1952",
    difficulty: "hard",
    category: "عام",
    funFact:
      "تم تغيير شعار الأهلي بعد ثورة يوليو 1952، ليحل النسر محل التاج الملكي.",
  },
  {
    id: 56,
    question: "ما هو عدد مرات فوز الأهلي بالدوري المصري في عقد السبعينيات؟",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5",
    difficulty: "hard",
    category: "إنجازات",
    funFact:
      "الأهلي فاز بالدوري 5 مرات في السبعينيات (1974، 1975، 1976، 1978، 1979).",
  },
  {
    id: 57,
    question: "ما هو عدد ألقاب الأهلي في كأس السلطان حسين؟",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "الأهلي فاز بكأس السلطان حسين 7 مرات قبل إلغائها.",
  },

  {
    id: 58,
    question: "من هو أول كابتن للنادي الأهلي في أول مباراة رسمية؟",
    options: ["أحمد فؤاد أنور", "مختار التتش", "محمد شريف صبري", "حسين حجازي"],
    correctAnswer: "أحمد فؤاد أنور",
    difficulty: "hard",
    category: "تاريخ",
    funFact:
      "أحمد فؤاد أنور كان كابتن الأهلي في أول مباراة رسمية للفريق عام 1917.",
  },
  {
    id: 59,
    question:
      "كم عدد المرات التي توج فيها الأهلي بلقب دوري أبطال أفريقيا على حساب فريق من تونس؟",
    options: ["مرة واحدة", "مرتين", "ثلاث مرات", "أربع مرات"],
    correctAnswer: "ثلاث مرات",
    difficulty: "medium",
    category: "إنجازات",
    funFact:
      "فاز الأهلي بدوري الأبطال على حساب الترجي الرياضي التونسي مرتين (2012، 2024) والنجم الساحلي مرة واحدة (2007).",
  },
  {
    id: 60,
    question: "من هو الهداف التاريخي لمباريات القمة بين الأهلي والزمالك؟",
    options: ["محمود الخطيب", "حسام حسن", "مصطفى كامل طه", "محمد أبو تريكة"],
    correctAnswer: "حسام حسن",
    difficulty: "medium",
    category: "لاعبون",
    funFact:
      "حسام حسن سجل 9 أهداف في مباريات القمة مع الأهلي و 6 أهداف مع الزمالك ليصبح الهداف التاريخي للقمة بـ 15 هدفاً.",
  },
  {
    id: 61,
    question:
      "في أي عام تولى الكابتن محمود الخطيب رئاسة النادي الأهلي لأول مرة؟",
    options: ["2016", "2017", "2018", "2019"],
    correctAnswer: "2017",
    difficulty: "easy",
    category: "إدارة",
    funFact:
      "محمود الخطيب هو أول لاعب كرة قدم يتولى رئاسة النادي الأهلي بعد اعتزاله.",
  },
  {
    id: 62,
    question: "ما هو أكبر انتصار للأهلي على الزمالك في تاريخ الدوري المصري؟",
    options: ["6-0", "6-1", "7-1", "5-0"],
    correctAnswer: "6-1",
    difficulty: "easy",
    category: "إنجازات",
    funFact:
      "الانتصار الأشهر للأهلي على الزمالك بنتيجة 6-1 كان في موسم 2001-2002.",
  },
  {
    id: 63,
    question: "من هو أول لاعب أجنبي يسجل للأهلي في الدوري المصري؟",
    options: ["تريزور", "فلافيو", "جلبيرتو", "فيكتور أومانا"],
    correctAnswer: "تريزور",
    difficulty: "hard",
    category: "لاعبون",
    funFact:
      "الكونغولي تريزور هو أول أجنبي يسجل للأهلي في الدوري المصري عام 1993.",
  },
  {
    id: 64,
    question: "كم عدد ألقاب كأس السوبر الأفريقي التي حصدها الأهلي خارج مصر؟",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
    difficulty: "hard",
    category: "إنجازات",
    funFact:
      "فاز الأهلي بكأس السوبر الأفريقي خارج مصر في جنوب أفريقيا (2002)، مالي (2014)، قطر (2019، 2021).",
  },
  {
    id: 65,
    question: "ما هو الاسم الشعبي الذي يطلق على جماهير النادي الأهلي؟",
    options: ["الجيش الأحمر", "التراس أهلاوي", "ألتراس ديفيلز", "العشاق الحمر"],
    correctAnswer: "التراس أهلاوي",
    difficulty: "easy",
    category: "عام",
    funFact: "التراس أهلاوي هي مجموعة مشجعي الأهلي التي تأسست عام 2007.",
  },
  {
    id: 66,
    question: "في أي عام تم إضافة 'فريق القرن' إلى شعار النادي الأهلي؟",
    options: ["2000", "2001", "2002", "2003"],
    correctAnswer: "2001",
    difficulty: "medium",
    category: "عام",
    funFact:
      "تم منح الأهلي لقب 'نادي القرن الأفريقي' من قبل الاتحاد الأفريقي لكرة القدم (الكاف) عام 2000.",
  },
  {
    id: 67,
    question:
      "ما هو النادي الأوروبي الذي واجهه الأهلي لأول مرة في مباراة ودية تاريخية؟",
    options: ["ريال مدريد", "بايرن ميونخ", "برشلونة", "مانشستر يونايتد"],
    correctAnswer: "بايرن ميونخ",
    difficulty: "hard",
    category: "تاريخ",
    funFact:
      "أول مباراة ودية للأهلي ضد فريق أوروبي كبير كانت ضد بايرن ميونخ الألماني عام 1977.",
  },
  {
    id: 68,
    question:
      "كم عدد الأهداف التي سجلها الأهلي في دوري أبطال أفريقيا 2024 الذي توج به باللقب؟",
    options: ["14", "15", "16", "17"],
    correctAnswer: "17",
    difficulty: "medium",
    category: "إنجازات",
    funFact:
      "سجل الأهلي 17 هدفًا في رحلته للتتويج بلقب دوري أبطال أفريقيا 2023-2024.",
  },
  {
    id: 69,
    question: "من هو اللاعب الذي اشتهر بلقب 'المايسترو' في الأهلي؟",
    options: ["صالح سليم", "محمود الخطيب", "محمد أبو تريكة", "مختار التتش"],
    correctAnswer: "صالح سليم",
    difficulty: "easy",
    category: "لاعبون",
    funFact:
      "صالح سليم يعد من أبرز رموز النادي الأهلي على مر التاريخ كلاعب ورئيس.",
  },
  {
    id: 70,
    question: "كم مرة حصد الأهلي لقب كأس السوبر الأفريقي بركلات الترجيح؟",
    options: ["مرة واحدة", "مرتين", "ثلاث مرات", "أربع مرات"],
    correctAnswer: "مرتين",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "فاز الأهلي بكأس السوبر الأفريقي بركلات الترجيح عامي 2002 و 2014.",
  },
  {
    id: 71,
    question: "من هو أول لاعب أجنبي يحصل على لقب هداف الدوري المصري مع الأهلي؟",
    options: ["فلافيو أمادو", "جون أنطوي", "صنداي ابيديه", "أوليفيرا"],
    correctAnswer: "فلافيو أمادو",
    difficulty: "medium",
    category: "لاعبون",
    funFact: "فلافيو أمادو كان هداف الدوري المصري مع الأهلي موسم 2006-2007.",
  },
  {
    id: 72,
    question:
      "في أي عام وقعت أحداث 'مذبحة بورسعيد' التي راح ضحيتها عدد من جماهير الأهلي؟",
    options: ["2011", "2012", "2013", "2014"],
    correctAnswer: "2012",
    difficulty: "easy",
    category: "تاريخ",
    funFact:
      "وقعت المذبحة في الأول من فبراير 2012 بعد مباراة الأهلي والمصري البورسعيدي.",
  },
  {
    id: 73,
    question:
      "ما هو أكبر عدد من الأهداف سجلها لاعب أهلي في مباراة واحدة بالدوري المصري؟",
    options: ["4 أهداف", "5 أهداف", "6 أهداف", "7 أهداف"],
    correctAnswer: "7 أهداف",
    difficulty: "hard",
    category: "لاعبون",
    funFact:
      "صالح سليم (لاعب الأهلي) سجل 7 أهداف في مباراة واحدة ضد الاسماعيلي عام 1957.",
  },
  {
    id: 74,
    question:
      "ما هو أطول سلسلة مباريات متتالية لم يتلقى فيها الأهلي هزيمة في الدوري المصري؟",
    options: ["45 مباراة", "50 مباراة", "55 مباراة", "60 مباراة"],
    correctAnswer: "55 مباراة",
    difficulty: "hard",
    category: "إنجازات",
    funFact: "امتدت السلسلة من موسم 2003-2004 حتى موسم 2005-2006.",
  },
  {
    id: 75,
    question: "من هو أول لاعب أهلي يحترف في الدوريات الأوروبية الكبرى؟",
    options: ["محمد صلاح", "أحمد حسن", "محمد النني", "أحمد حسام ميدو"],
    correctAnswer: "محمد النني",
    difficulty: "hard",
    category: "لاعبون",
    funFact:
      "أول لاعب مصري محترف في الدوريات الأوروبية الكبرى (من خريجي الأهلي) هو محمد النني الذي احترف في بازل ثم أرسنال.",
  },
];
