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
      reset: () => initialState, 
  },
});

export const { setCourseField,addChapter,reset } = courseSlice.actions;
export default courseSlice.reducer;
