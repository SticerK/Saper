export function winGame(mines: number[], player: number[]) {
  return mines.sort().every((item, index) => item === player.sort()[index]);
}
