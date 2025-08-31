import { aiChoose } from "./ai-choose.js";
import { mode } from "./mode.js";
import { paper, rock, scissors } from "./constants.js";
export function checkWinner(ai, player) {
  if (ai === player) {
    return "draw";
  } else if (ai === paper && player === rock) {
    return "lose";
  } else if (ai === rock && player === scissors) {
    return "lose";
  } else if (ai === scissors && player === paper) {
    return "lose";
  } else {
    return "win";
  }
}
console.log(checkWinner(aiChoose(mode), "paper"));
