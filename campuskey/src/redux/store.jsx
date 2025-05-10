import { configureStore } from "@reduxjs/toolkit";
import imageUploadSlice from "./features/imageuploadslice";

export const store = configureStore({
  reducer: {
    imageUpload: imageUploadSlice,
  },
});
