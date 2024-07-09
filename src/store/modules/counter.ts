import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: 'test'
  },
  reducers: {}
});

export default counterSlice.reducer;
