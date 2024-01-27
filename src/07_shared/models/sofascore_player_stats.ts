export interface ISofascorePlayerStats {
  statistics: IPlayerStats;
}

interface IPlayerStats {
  totalPass: number;
  accuratePass: number;
  totalLongBalls: number;
  accurateLongBalls: number;
  totalCross: number;
  aerialLost: number;
  aerialWon: number;
  duelLost: number;
  duelWon: number;
  challengeLost: number;
  dispossessed: number;
  totalContest: number;
  wonContest: number;
  onTargetScoringAttempt: number;
  blockedScoringAttempt: number;
  goals: number;
  wasFouled: number;
  fouls: number;
  totalOffside: number;
  minutesPlayed: number;
  touches: number;
  rating: number;
  possessionLostCtrl: number;
  keyPass: number;
}
