import { TABS } from '@/constants/tabs';
import { create } from 'zustand';

type Store = {
  tab: string;
  changeTab: (tab: string) => void;
};

export const useTabStore = create<Store>()((set) => ({
  tab: TABS[0],
  changeTab: (newTab) => set(() => ({ tab: newTab })),
}));
