import { create } from "zustand";


const authStore = (set) => ({
  token: null,
  userId: null,
  roleNo: null,
  login: (token, userId, roleNo) => set({ token, userId, roleNo }),
  logout: () => {
    localStorage.removeItem("token"); 
    set({ token: null, userId: null, roleNo: null });
  },
})

export const useAuthStore = create(authStore)
