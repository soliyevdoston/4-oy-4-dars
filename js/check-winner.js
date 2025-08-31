import { aiChoose } from "./ai-choose";
import { scissors } from "./constants";
import { paper, rock, scissors } from "./constants.js";
export function checkWinner(ai, player) {
  if (ai === payer) {
    return "draw";
  } else if (ai === paper && payer === rock) {
    return "lose";
  } else if (ai === rock && player === scissors) {
    return "lose";
  } else if (ai === scissors && player === paper) {
    return "lose";
  } else {
    ("win");
  }
}
console.log(checkWinner(aiChoose(mode), "paper"));
