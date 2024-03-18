import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getColors } from "../../api";
import { createAsyncAction } from "../../helpers";

export const initialState: ColorsDataState = {
  colorsData: {} as ColorsData,
  loading: true,
};

const fetchColorsData = createAsyncAction(
  "request-ColorsData/fetchColorsData",
  async ({page, perPage, id}: FetchParams) => {
    try {
      const response = await getColors({page, perPage, id});
      return response as ColorsData;
    } catch (error) {
      return console.log('Error fetching data:', error);
    }
  }
);
const slice = createSlice({
  name: "request-ColorsData",
  initialState,
  reducers: {
    setList: (
      state,
      action: PayloadAction<ColorsDataState["colorsData"]>
    ) => {
      state.colorsData = action.payload;
    },
    setLoading: (
      state,
      { payload }: PayloadAction<ColorsDataState["loading"]>
    ) => {
      state.loading = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchColorsData.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(fetchColorsData.fulfilled, (state, { payload }) => {
      state.colorsData = payload as ColorsData;
      state.loading = false;
    });
    builder.addCase(fetchColorsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default slice.reducer;

export const ColorsDataAction = {
  ...slice.actions,
  fetchColorsData,
};
