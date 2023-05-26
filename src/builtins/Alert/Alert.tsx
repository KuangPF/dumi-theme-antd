import { Alert as AntdAlert, AlertProps } from 'antd';
import { FC, ReactNode } from 'react';

const Alert: FC<AlertProps & { children?: ReactNode }> = (props) => {
  const { children, ...restProps } = props;
  return <AntdAlert style={{ marginBottom: 16 }} message={children} {...restProps} />;
};

export default Alert;
