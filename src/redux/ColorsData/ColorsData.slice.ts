import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getColors } from "../../api";
import { createAsyncAction } from "../../helpers";

export const initialState: ColorsDataState = {
  colorsData: {} as ColorsData,
  loading: true,
};

const fetchColorsData = createAsyncAction(
  "request-ColorsData/fetchColorsData",
  async () => {
    try {
      const response = await getColors();
      return response;
    } catch (error) {
      return console.log(error); //error type can be corrected FIXME:
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
