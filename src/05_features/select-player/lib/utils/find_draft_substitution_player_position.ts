export const find_draft_substitution_player_position = (
  draft_position: string
): string => {
  switch (draft_position) {
    case "GK":
    case "SGK":
      return "Goalkeeper";
    case "LD":
    case "LCD":
    case "RCD":
    case "RD":
    case "SD":
      return "Defender";
    case "LM":
    case "CM":
    case "RM":
    case "SM":
      return "Mittelfeld";
    case "LS":
    case "CS":
    case "RS":
    case "SS":
      return "Striker";
    default:
      return "Unknown Position";
  }
};
