import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  course: {
    title: '',
    description: '',
    category: '',
    duration: '',
    coverImage: null,
  },
  chapters:[],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseField: (state, action) => {
      Object.assign(state.course, action.payload);
    },
    addChapter: (state, action) => {
        state.chapters.push(action.payload); 
      },
  },
});

export const { setCourseField,addChapter } = courseSlice.actions;
export default courseSlice.reducer;
