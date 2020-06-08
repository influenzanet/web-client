import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudyInfos } from "../../types/study-api";

export interface StudyState {
  subscribedStudies: StudyInfos[];
  availableStudies: StudyInfos[];
}

const initialState: StudyState = {
  subscribedStudies: [],
  availableStudies: [],
} as StudyState;

const studySlice = createSlice({
  name: 'study',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
      return state;
    },
    setSubscribedStudies: (state, action: PayloadAction<StudyInfos[]>) => {
      state.subscribedStudies = action.payload;
      return state;
    },
    setAvailableStudies: (state, action: PayloadAction<StudyInfos[]>) => {
      state.availableStudies = action.payload;
      return state;
    },
  },
});

export const studyActions = studySlice.actions;

export default studySlice;
