import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiClient } from './ThunkAPI'

const initialState = {
  loadingDataStatus: false,
  arr: {
  informer:{},
    news: [],
    feature: [],
    paragraph: [],
    shapito:[],
  },
  data:{},
  monthList:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
}

export const getData = createAsyncThunk(
  'must/getData',
  async () => {
    const response = await apiClient.get("/api/w5/screens/news")
    return response.data
  }
)
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const slice = createSlice({
  name: 'must',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loadingDataStatus = true;
      console.log("data was obitaned", action.payload);
      state.arr.informer = action.payload.informer;
      for (let i in action.payload.documents) {
        if (i.includes('news/', 0)) {
          state.arr.news.push(action.payload.documents[i])
        } else if (i.includes('feature/', 0)) {
          state.arr.feature.push(action.payload.documents[i])
        } else if (i.includes('paragraph/', 0)) {
          state.arr.paragraph.push(action.payload.documents[i])
        }else if (i.includes('shapito/', 0)) {
          state.arr.shapito.push(action.payload.documents[i])
        }
      }
    }
  },

});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const selectArr = state => state.must.arr;

export default slice.reducer;
