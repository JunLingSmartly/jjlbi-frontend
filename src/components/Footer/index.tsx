import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '李奕赫揍小邰出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '李奕赫揍小邰的博客，欢迎关注',
          title: '李奕赫揍小邰的博客',
          href: 'https://blog.csdn.net/weixin_54217216?type=blog',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: '李奕赫揍小邰的GitHub地址，欢迎star',
          title: 'GitHub地址',
          href: 'https://github.com/JunLingSmartly',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
