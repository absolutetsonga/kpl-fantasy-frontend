export interface ISofascorePlayers {
  players: ISofascorePlayer[];
}

export interface ISofascorePlayer {
  player: {
    name: string;
    slug: string;
    shortName: string;
    id: number;
    firstName?: string;
    lastName?: string;
  };
}
