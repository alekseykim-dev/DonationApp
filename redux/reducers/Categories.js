import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      categoryId: 1,
      name: '강남구',
    },
    {
      categoryId: 2,
      name: '강동구',
    },
    {
      categoryId: 3,
      name: '용산구',
    },
    {
      categoryId: 4,
      name: '은평구',
    },
    {
      categoryId: 5,
      name: '동작구',
    },
    {
      categoryId: 6,
      name: '동대문구',
    },
    {
      categoryId: 7,
      name: '도봉구',
    },
    {
      categoryId: 8,
      name: '강서구',
    },
    {
      categoryId: 9,
      name: '금천구',
    },
    {
      categoryId: 10,
      name: '마포구',
    },
    {
      categoryId: 11,
      name: '노원구',
    },
    {
      categoryId: 12,
      name: '서초구',
    },
    {
      categoryId: 13,
      name: '송파구',
    },
  ],
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;
export default Categories.reducer;
