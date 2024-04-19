/**
 * bash 选项卡切换组件
 */
import { useMemo, FC } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

interface TabItemsType {
  key: string;
  children: React.ReactNode;
  label: string;
  icon?: string;
}

interface BashTabsProps {
  /** tab 配置项 */
  tabItems?: TabItemsType[];
  /** 默认 tab key */
  defaultActiveKey?: string;
}
const BashTabs: FC<BashTabsProps> = (props) => {
  const { tabItems, defaultActiveKey } = props;
  const items: TabsProps['items'] = useMemo(() => {
    return tabItems?.map((item) => {
      return item;
    });
  }, [tabItems]);

  return <Tabs className="antd-site-snippet" defaultActiveKey={defaultActiveKey} items={items} />;
};

export default BashTabs;
