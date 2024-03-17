import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getColorDetails } from "../../api";
import { createAsyncAction } from "../../helpers";

export const initialState: ColorDetailsState = {
  colorDetails: {} as ColorDetails,
  loading: true,
};

const fetchColorDetails = createAsyncAction(
  "request-Color/fetchColorDetails",
  async (colorId: number) => {
    try {
      const response = await getColorDetails(colorId);
      return response;
    } catch (error) {
      return console.log(error); //error type can be corrected FIXME:
    }
  }
);
const slice = createSlice({
  name: "request-Color",
  initialState,
  reducers: {
    setColor: (
      state,
      action: PayloadAction<ColorDetailsState["colorDetails"]>
    ) => {
      state.colorDetails = action.payload;
    },
    setLoading: (
      state,
      { payload }: PayloadAction<ColorDetailsState["loading"]>
    ) => {
      state.loading = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchColorDetails.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(fetchColorDetails.fulfilled, (state, { payload }) => {
      state.colorDetails = payload as ColorDetails;
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
