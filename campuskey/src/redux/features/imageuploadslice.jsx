import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFile: null,
  uploadedImagePath: null,
};

export const imageUploadSlice = createSlice({
  name: "imageUpload",
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedFile = action.payload;
    },
    setUploadedImagePath: (state, action) => {
      state.uploadedImagePath = action.payload;
    },
  },
});

export const { setSelectedImage, setUploadedImagePath } = imageUploadSlice.actions;

export default imageUploadSlice.reducer;
