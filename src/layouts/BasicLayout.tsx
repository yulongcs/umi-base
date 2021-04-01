import React from 'react';
import { ConfigProvider } from 'antd';

const BasicLayout: React.FC = (props) => {
  return (
    <ConfigProvider prefixCls="archer">
      <div>layout</div>
      <div>{props.children}</div>
    </ConfigProvider>
  );
};

export default BasicLayout;
