import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {BLOG, CSDN, GITHUB} from "@/constant";

const Footer: React.FC = () => {
  const defaultMessage = 'xuegao';

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '1',
          title: 'csdn',
          href: CSDN,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: GITHUB,
          blankTarget: true,
        },
        {
          key: '2',
          title: 'blog',
          href: BLOG,
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
