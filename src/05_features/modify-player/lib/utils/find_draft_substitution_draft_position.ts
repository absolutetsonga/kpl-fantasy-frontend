export const find_draft_substitution_draft_position = (
  draft_starter_position: string | undefined
): string => {
  switch (draft_starter_position) {
    case "GK":
      return "SGK";
    case "LD":
    case "LCD":
    case "RCD":
    case "RD":
      return "SD";
    case "LM":
    case "CM":
    case "RM":
      return "SM";
    case "LS":
    case "CS":
    case "RS":
      return "SS";
    default:
      return "Unknown Position";
  }
};
