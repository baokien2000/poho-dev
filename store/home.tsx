import { create } from 'zustand'
import { devtools, persist ,createJSONStorage } from 'zustand/middleware'

interface BearState {
  bears: number
    increase: (by: number) => void
    setBear: (by: number) => void
}

export const useBearStore = create<BearState>()(
    persist(
        (set, get) => ({
            bears: 0,
            increase: (by) => set((state) => ({ bears: state.bears + by })),
            setBear: (by) => set(() => ({ bears: by })),
        }),
        {
          name: 'bear-storage',
          storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)