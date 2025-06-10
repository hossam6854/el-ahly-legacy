export const categorizePlayers = (players) => {
    const positions = {
      goalkeepers: [],
      rightDefenders: [],
      leftDefenders: [],
      centerDefenders: [],
      defensiveMidfielders: [],
      centralMidfielders: [],
      attackingMidfielders: [],
      rightWingers: [],
      leftWingers: [],
      forwards: []
    };
  
    // تصنيف اللاعبين حسب المراكز
    players.defenders.forEach(player => {
      if (player.canPlay.includes('RB')) {
        positions.rightDefenders.push(player);
      }
      if (player.canPlay.includes('LB')) {
        positions.leftDefenders.push(player);
      }
      if (player.canPlay.includes('CB')) {
        positions.centerDefenders.push(player);
      }
    });
  
    players.midfielders.forEach(player => {
      if (player.canPlay.includes('CDM')) {
        positions.defensiveMidfielders.push(player);
      }
      if (player.canPlay.includes('CM')) {
        positions.centralMidfielders.push(player);
      }
      if (player.canPlay.includes('CAM')) {
        positions.attackingMidfielders.push(player);
      }
      if (player.canPlay.includes('RW')) {
        positions.rightWingers.push(player);
      }
      if (player.canPlay.includes('LW')) {
        positions.leftWingers.push(player);
      }
    });
  
    players.forwards.forEach(player => {
      if (player.canPlay.includes('ST')) {
        positions.forwards.push(player);
      }
      if (player.canPlay.includes('RW')) {
        positions.rightWingers.push(player);
      }
      if (player.canPlay.includes('LW')) {
        positions.leftWingers.push(player);
      }
    });
  
    return positions;
  };