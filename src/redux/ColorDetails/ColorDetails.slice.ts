import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getColorDetails } from "../../api";
import { createAsyncAction } from "../../helpers";

export const initialState: ColorDetailsState = {
  data: {} as ColorDetailsData,
  loading: true,
  error: '',
};

const fetchColorDetails = createAsyncAction(
  "request-Color/fetchColorDetails",
  async (colorId: number) => {
    try {
      const response = await getColorDetails(colorId);
      return response ;
    } catch (error) {
      return console.error('Error fetching data:',error);
    }
  }
);
const slice = createSlice({
  name: "request-Color",
  initialState,
  reducers: {
    setColor: (
      state,
      action: PayloadAction<ColorDetailsState["data"]>
    ) => {
      state.data = action.payload;
    },
    setLoading: (
      state,
      { payload }: PayloadAction<ColorDetailsState["loading"]>
    ) => {
      state.loading = payload;
    },
    setError: (
      state,
      { payload }: PayloadAction<ColorDetailsState["error"]>
    ) => {
      state.error = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchColorDetails.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(fetchColorDetails.fulfilled, (state, { payload }) => {
      state.data = payload as ColorDetailsData;
      state.loading = false;
    });
    builder.addCase(fetchColorDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default slice.reducer;

export const ColorDetailsAction = {
  ...slice.actions,
  fetchColorDetails,
};
