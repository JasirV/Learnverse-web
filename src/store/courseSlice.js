import { createSlice } from '@reduxjs/toolkit';

// Initial state for course and chapter identifiers
const initialState = {
  courseId: null,
  chapterId: null,
};
const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
    setChapterId: (state, action) => {
      state.chapterId = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setChapterId,setCourseId,reset } = courseSlice.actions;
export default courseSlice.reducer;
