import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
interface USER {
  displayName: string;
  photoUrl: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { uid: "", photoUrl: "", displayName: "" },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: "", photoUrl: "", displayName: "" };
    },
    updateUserProfile: (state, action: PayloadAction<USER>) => {
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});
// dispatchするには3つのアクションをexportする必要がある
export const { login, logout, updateUserProfile } = userSlice.actions;
// useSelectorを使う時に呼び出す関数
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;