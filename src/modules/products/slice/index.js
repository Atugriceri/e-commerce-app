import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const { data } = response;
      const productDetail = {
        ...data,
        price: (Math.random() * 90 + 10).toFixed(2),
        image: `https://picsum.photos/600?random=${id + 1}`,
      };
      return productDetail;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || 'Something went wrong!');
      } if (error.request) {
        return rejectWithValue('Network error, please try again');
      }
      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const getProductComments = createAsyncThunk(
  'products/fetchProductComments',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || 'Something went wrong!');
      } if (error.request) {
        return rejectWithValue('Network error, please try again');
      }
      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const getProductList = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const { data } = response;

      const productsWithPrice = data.map((post, index) => ({
        ...post,
        price: (Math.random() * 90 + 10).toFixed(2),
        image: `https://picsum.photos/200?random=${index + 1}`,
      }));

      return productsWithPrice;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || 'Something went wrong!');
      } if (error.request) {
        return rejectWithValue('Network error, please try again');
      }
      return rejectWithValue('An unknown error occurred');
    }
  },
);

const initialState = {
  productList: { status: 'waitingPayload', data: null, error: null },
  productDetail: { status: 'waitingPayload', data: null, error: null },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.productDetail.status = 'loading';
        state.productDetail.error = null;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.productDetail.status = 'success';
        state.productDetail.data = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.productDetail.status = 'error';
        state.productDetail.error = action.payload;
      });
    builder
      .addCase(getProductComments.fulfilled, (state, action) => {
        if (state.productDetail.data) {
          state.productDetail.data.comments = action.payload;
        }
      });
    builder
      .addCase(getProductList.pending, (state) => {
        state.productList.status = 'loading';
        state.productList.error = null;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.productList.status = 'success';
        state.productList.data = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.productList.status = 'error';
        state.productList.error = action.payload;
      });
  },
});

export default productSlice.reducer;
