let score = 0;

export function updateScore(result) {
  if (result === "win") score++;
  else if (result === "lose") score--;
  // draw bo'lsa o'zgarmaydi
  return score;
}

export function getScore() {
  return score;
}
