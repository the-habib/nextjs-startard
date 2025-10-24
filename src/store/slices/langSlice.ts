import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LangState {
    locale: string;
}

const initialState: LangState = {
    locale: "en",
};

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload;
        },
    },
});

export const { setLocale } = langSlice.actions;
export default langSlice.reducer;
