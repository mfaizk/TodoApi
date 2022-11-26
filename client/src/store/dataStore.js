import { createStore } from "zustand";
import axios from "axios";
const dataStore = (set) => ({
  user: {},
  data: {},

  getUser: () => {
    axios.get();
  },
});

export const useDataStore = createStore(dataStore);
