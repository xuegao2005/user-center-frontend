import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#248dea',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Xue Gao',
  pwa: false,
  logo: 'https://i.pinimg.com/736x/6b/08/bd/6b08bd43cfaea54d6616867ad32f427f.jpg',
  iconfontUrl: '',
};

export default Settings;
