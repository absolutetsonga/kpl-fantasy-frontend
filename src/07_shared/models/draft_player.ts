export interface IDraftPlayer {
  id: number;
  squad: number;
  player: number;
  position: string;

  is_captain: boolean;
  is_vice_captain: boolean;
  on_bench: boolean;
}
