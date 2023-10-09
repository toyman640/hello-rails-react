import { createAsyncThunk } from '@reduxjs/toolkit';
import { setGreet } from '../reducer/greetSlice';

export const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async (_, { dispatch }) => {
  try {
    const response = await fetch('/random_message');
    const data = await response.json();
    dispatch(setGreet(data.message));
  } catch (error) {
    throw error;
  }
});
