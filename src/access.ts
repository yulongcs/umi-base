/**
 * 权限管理
 * @umijs/plugin-access： https://umijs.org/zh-CN/plugins/plugin-access
 */
// initialState 是通过初始化状态插件 @umijs/plugin-initial-state 提供的数据，你可以使用该数据来初始化你的用户权限。

export default (initialState: any) => {
  const { userName, role } = initialState;

  return {
    canCreateUser: userName === 'authEndy',
    canDeleteUser: role === 'admin',
    canUpdateUser: (user: string) => {
      return user === 'authEndy';
    },
    canStartVM: (vm: any) => {
      return vm.status === 'STOP';
    },
  };
};
