/**
 * @umijs/plugin-model
 * https://umijs.org/zh-CN/plugins/plugin-model
 */

import { useState, useCallback } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState(null);

  const signin = useCallback((userName, password) => {
    setUser({
      userName,
      password,
    });
  }, []);

  const signout = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
