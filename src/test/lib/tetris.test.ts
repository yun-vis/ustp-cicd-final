import { createEmptyBoard } from "@/lib/tetris";

describe("Tetris board logic", () => {

    it("creates a board with correct dimensions", () => {
    const board = createEmptyBoard();

    expect(board.length).toBe(20);
  });

//     it("creates a board with correct dimensions", () => {
//     const board = createBoard(20, 10);

//     expect(board.length).toBe(20);
//     expect(board[0].length).toBe(10);
//   });

//   it("initializes board with empty cells", () => {
//     const board = createBoard(2, 2);
//     expect(board).toEqual([
//       [0, 0],
//       [0, 0],
//     ]);
//   });
});
