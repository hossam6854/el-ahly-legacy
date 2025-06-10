// src/redux/squadSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { teamData as initialTeamData } from "../../data/playersData";

// دالة لمسح أي أدوار سابقة وضبط isStarter إلى false
const resetPlayerRoles = (playersArray) => {
  // إضافة تحقق للتأكد من أن المدخل هو مصفوفة
  if (!Array.isArray(playersArray)) {
    console.error("resetPlayerRoles: Expected an array for playersArray, but received:", playersArray);
    return []; // إرجاع مصفوفة فارغة لتجنب الأخطاء
  }
  return playersArray.map((player) => ({
    ...player,
    isStarter: false,
    assignedRole: null,
    isCaptain: false,
  }));
};

// دالة لتحديد اللاعبين الأساسيين بناءً على التشكيلة
const assignStarters = (allPlayers, currentFormationConfig) => {
  // إضافة تحقق للتأكد من أن المدخل هو مصفوفة
  if (!Array.isArray(allPlayers)) {
    console.error("assignStarters: Expected an array for allPlayers, but received:", allPlayers);
    return []; // إرجاع مصفوفة فارغة لتجنب الأخطاء
  }

  // إنشاء نسخة عميقة لتجنب أي مشاكل في immutability
  let tempPlayers = JSON.parse(JSON.stringify(allPlayers));
  tempPlayers = resetPlayerRoles(tempPlayers);
  
  const assignedPlayerIds = new Set(); // لتتبع اللاعبين الذين تم تعيينهم بالفعل كبداية

  // فرز اللاعبين لتحديد الأفضل أو الأقدم أولاً لكل مركز، أو يمكن تعديل هذا حسب الأولوية
  // هنا، الأولوية للاعبين الذين انضموا مبكرًا
  const sortedAvailablePlayers = [...tempPlayers].sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate));

  for (const role in currentFormationConfig) {
    const requiredCount = currentFormationConfig[role];
    let assignedCount = 0;
    for (const player of sortedAvailablePlayers) {
      // إذا كان اللاعب لم يتم تعيينه بالفعل في هذه التشكيلة وكان يمكنه لعب هذا الدور
      if (!assignedPlayerIds.has(player.id) && player.positions.includes(role)) {
        const playerInTemp = tempPlayers.find(p => p.id === player.id);
        if (playerInTemp) {
          playerInTemp.isStarter = true;
          playerInTemp.assignedRole = role; // تعيين الدور المحدد
          assignedPlayerIds.add(player.id);
          assignedCount++;
          if (assignedCount >= requiredCount) {
            break; // تم تعيين العدد المطلوب لهذا الدور
          }
        }
      }
    }
  }

  // إعادة تعيين الكابتن بناءً على اللاعبين الأساسيين الجدد
  const allStarters = tempPlayers.filter(p => p.isStarter);
  if (allStarters.length > 0) {
    const captain = allStarters.reduce((oldest, player) => {
      return new Date(player.joinDate) < new Date(oldest.joinDate)
        ? player
        : oldest;
    });
    const captainPlayer = tempPlayers.find(p => p.id === captain.id);
    if (captainPlayer) {
      captainPlayer.isCaptain = true;
    }
  }

  return tempPlayers;
};

// تعريفات التشكيلات مع عدد اللاعبين المطلوبين لكل مركز دقيق
const formationMap = {
  "4-3-3": {
    "حارس مرمى": 1,
    "مدافع أيمن": 1,
    "مدافع أيسر": 1,
    "قلب دفاع": 2,
    "خط وسط مدافع": 1,
    "خط وسط": 2,
    "وينج يمين": 1,
    "وينج شمال": 1,
    "مهاجم": 1,
  },
  "4-2-3-1": {
    "حارس مرمى": 1,
    "مدافع أيمن": 1,
    "مدافع أيسر": 1,
    "قلب دفاع": 2,
    "خط وسط مدافع": 2,
    "خط وسط هجومي": 1,
    "وينج يمين": 1,
    "وينج شمال": 1,
    "مهاجم": 1,
  },
  "3-5-2": {
    "حارس مرمى": 1,
    "قلب دفاع": 3,
    "خط وسط مدافع": 2,
    "خط وسط": 1, // Central midfielder (can be deep)
    "وينج يمين": 1, // Wing-back / wide midfielder
    "وينج شمال": 1, // Wing-back / wide midfielder
    "مهاجم": 2,
  },
};

// الحالة الأولية للمخزن
const initialState = {
  formation: "4-3-3",
  // تأكد من أن initialTeamData.players يتم نسخه بعمق قبل التعيين
  players: assignStarters(JSON.parse(JSON.stringify(initialTeamData.players)), formationMap["4-3-3"]),
  coach: initialTeamData.coach,
};

const squadSlice = createSlice({
  name: "squad",
  initialState,
  reducers: {
    // تحديد التشكيلة وتحديث اللاعبين الأساسيين
    setFormation: (state, action) => {
      state.formation = action.payload;
      // تمرير نسخة عميقة من اللاعبين الحاليين إلى assignStarters
      state.players = assignStarters(JSON.parse(JSON.stringify(state.players)), formationMap[action.payload]);
    },
    // تبديل اللاعبين وتعديل حالتهم
    swapPlayers: (state, action) => {
      const { playerToSwapId, replacementPlayerId } = action.payload;

      const playerToSwap = state.players.find(p => p.id === playerToSwapId);
      const replacementPlayer = state.players.find(p => p.id === replacementPlayerId);

      if (playerToSwap && replacementPlayer) {
        const originalAssignedRole = playerToSwap.assignedRole;
        // لا نحتاج لتتبع originalIsCaptain هنا، سنعيد حساب الكابتن بعد التبديل

        // إخراج اللاعب من التشكيلة الأساسية
        playerToSwap.isStarter = false;
        playerToSwap.assignedRole = null;
        playerToSwap.isCaptain = false; // اللاعب الذي يخرج يفقد شارة الكابتن

        // إدخال اللاعب البديل إلى التشكيلة الأساسية
        replacementPlayer.isStarter = true;
        replacementPlayer.assignedRole = originalAssignedRole;
        // لا نقوم بتعيين isCaptain لـ replacementPlayer هنا، سيتم تحديد الكابتن لاحقًا

        // بعد التبديل، أعد حساب الكابتن بناءً على التشكيلة الجديدة
        // أولاً، تأكد من مسح جميع شارات الكابتن الحالية
        state.players.forEach(p => p.isCaptain = false);

        const allStarters = state.players.filter(p => p.isStarter);
        if (allStarters.length > 0) {
          const newCaptainCandidate = allStarters.reduce((oldest, player) => {
            return new Date(player.joinDate) < new Date(oldest.joinDate)
              ? player
              : oldest;
          });
          const newCaptainPlayer = state.players.find(p => p.id === newCaptainCandidate.id);
          if (newCaptainPlayer) {
            newCaptainPlayer.isCaptain = true;
          }
        }
      }
    },
  },
});

export const { setFormation, swapPlayers } = squadSlice.actions;

export default squadSlice.reducer;
