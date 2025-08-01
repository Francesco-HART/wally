import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AppDispatch, Dependencies, RootState } from "./create-store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: Dependencies;
}>();
