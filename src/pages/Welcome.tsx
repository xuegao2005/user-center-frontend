import { PageContainer } from '@ant-design/pro-components';
import { Card, Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  useIntl();
  return (
    <PageContainer>
      <Card>
        <CodePreview>用户中心管理系统</CodePreview>
      </Card>
      <Card>
        <CodePreview>用户中心管理系统</CodePreview>
      </Card>
      <Card>
        <CodePreview>用户中心管理系统</CodePreview>
      </Card>
      <Card>
        <CodePreview>用户中心管理系统</CodePreview>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
