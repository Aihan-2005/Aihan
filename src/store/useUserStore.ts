import { create } from "zustand"

interface User {
  name: string
  email: string
  avatar: string
}

interface UserState {
  user: User | null
  login: (u: User) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (u) => set({ user: u }),
  logout: () => set({ user: null }),
}))
