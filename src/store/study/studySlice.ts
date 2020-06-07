import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudyInfos } from "../../types/study-api";

export interface StudyState {
  subscribedStudies: StudyInfos[];
  availableStudies: StudyInfos[];
}

const studySlice = createSlice({
  name: 'study',
  initialState: {
    subscribedStudies: [],
    availableStudies: [],
  } as StudyState,
  reducers: {
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
