import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/utils";

const SelectedSlice = createSlice({
  name: "selected",
  initialState: {
    selected: getFromLocalStorage('selected') ?? [],
  },
  reducers: {
    add: (state, action) => {
      state.selected.push(action.payload);
      saveToLocalStorage('selected', state.selected)
    },
    remove: (state, action) => {
      state.selected = state.selected.filter((s) => s.id !== action.payload);
      saveToLocalStorage('selected', state.selected)
    },
  },
});

export const { add, remove } = SelectedSlice.actions;
export default SelectedSlice.reducer;
