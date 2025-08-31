import { mode } from "./mode.js";
import {
  elAi,
  elHands,
  elPlayer,
  elRefreshGame,
  elStatus,
} from "./html-elements.js";
import { switchZone } from "./switch-zone.js";
import { refreshGame } from "./refresh-game.js";
import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";
import { updateScore } from "./score.js";
elHands.forEach((hand) => {
  hand.addEventListener("click", (evt) => {
    const player = evt.target.alt;
    const playerSrc = evt.target.src;
    switchZone(true);
    elPlayer.src = playerSrc;

    setTimeout(() => {
      const ai = aiChoose(mode);
      elAi.src = `/images/${ai}.svg`;
      const winner = checkWinner(ai, player);
      elStatus.innerText = `${winner} | Score: ${updateScore(winner)}`;
    }, 1000);
  });
});
elRefreshGame.addEventListener("click", refreshGame);
