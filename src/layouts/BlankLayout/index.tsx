import React from 'react';
import { Inspector } from 'react-dev-inspector';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const InspectorWrapper =
  process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

//把antd组件的英文切换为中文 https://blog.csdn.net/MFWSCQ/article/details/102956089
const Layout: React.FC = ({ children }) => {
  return (
    <InspectorWrapper>
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </InspectorWrapper>
  );
};

export default Layout;
