import React, { useState } from 'react';
import { useMountEffect, useQuery } from '../../../../hooks';
import { verifyContactReq } from '../../../../api/user-management-api';
import CenterPage from '../../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../../components/common/FlexGrow';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../../store/user/userSlice';
import { RootState } from '../../../../store';

const VerifyToken: React.FC = () => {
  const query = useQuery();
  const token = query.get("token");

  const dispatch = useDispatch();

  const accountConfirmedAt = useSelector((state: RootState) => state.user.currentUser.account.accountConfirmedAt);

  let [loading, setLoading] = useState(false);
  let [confirmed, setConfirmed] = useState(Number(accountConfirmedAt) > 0);

  useMountEffect(() => {
    verifyToken();
  });

  const verifyToken = async () => {
    if (loading || confirmed || !token) return;
    setLoading(true);

    try {
      let response = await verifyContactReq(token);
      if (response.status === 200) {
        dispatch(userActions.setUser(response.data));
        setConfirmed(true);
      }
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  return (
    <CenterPage>
      <FlexGrow />
      {(loading)
        ? "Please wait."
        : (confirmed)
          ? "Success!"
          : "Failure"
      }
      <FlexGrow />
    </CenterPage>
  );
};

export default VerifyToken;
