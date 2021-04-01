import React from 'react';
import { useModel, useAccess, useRequest } from 'umi';
import { Button } from 'antd';
import { getSite } from '@/services/resource';
import { useTitle, useFavicon } from 'ahooks';

export default () => {
  const { initialState } = useModel('@@initialState');
  const { userName } = initialState;
  const { user, signin, signout } = useModel('useAuthModel');
  const { canUpdateUser } = useAccess();
  const { data } = useRequest(getSite);
  useFavicon(data?.siteIcon);
  useTitle(data?.siteTitle);

  return (
    <>
      <div>userName: {userName}</div>
      <div>authUser: {user?.userName}</div>
      <div>canUpdateUser: {canUpdateUser(user?.userName) ? 'yes' : 'No'}</div>

      {user ? (
        <Button type="primary" onClick={signout}>
          signout
        </Button>
      ) : (
        <Button type="primary" onClick={() => signin('authEndy', '123456')}>
          signin
        </Button>
      )}
    </>
  );
};
