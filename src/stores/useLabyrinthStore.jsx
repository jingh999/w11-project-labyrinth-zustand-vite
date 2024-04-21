import { create } from "zustand"

export const useLabyrinthStore = create((set) => ({
  gameState: null,
  started: false,
  loading: false,
  setUserInput: (userInput) => set({ userInput}),
  setGameState: (gameState) => set ({ gameState}),

  music: false,
  toggleMusic: () => set((state) => ({music: !state.music })), 

  getBackground: (coordinates) => {
    switch (coordinates) {
      case "1, 0":
        return "./assets/1.jpg";
      case "1, 1":
        return "./assets/2.jpg";
      case "0, 1":
        return "./assets/3.jpg";
      default:
        return "./assets/mazeBackground.jpg.jpg"
    }
  } 
}))
