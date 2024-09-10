import { createSlice } from "@reduxjs/toolkit";
import translation from "../../language/translation.json";

const initialState = {
  language: "en",
  translation: translation["en"],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      const selectedLang = action.payload;
      state.language = selectedLang;
      state.translation = translation[selectedLang];
    },
  },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;
