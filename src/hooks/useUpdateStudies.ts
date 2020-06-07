import { useDispatch } from "react-redux";
import { useAsyncCall } from ".";
import { getStudiesForUserReq, getAllAvailableStudiesReq } from "../api/study-api";
import { studyActions } from "../store/study/studySlice";

export const useUpdateStudies = (): [boolean, () => Promise<void>] => {
  const dispatch = useDispatch();
  const [loading, asyncCall] = useAsyncCall();

  const getAllStudies = async () => {
    await getSubscribedStudies();
    await getAvailableStudies();
  }

  const getSubscribedStudies = async () => {
    await asyncCall(async () => {
      const response = await getStudiesForUserReq();
      dispatch(studyActions.setSubscribedStudies((response.data.studies) ? response.data.studies : []));
    });
  }

  const getAvailableStudies = async () => {
    await asyncCall(async () => {
      const response = await getAllAvailableStudiesReq();
      dispatch(studyActions.setAvailableStudies((response.data.studies) ? response.data.studies : []));
    });
  }

  return [loading, getAllStudies];
}
