import React, { useState } from "react";
import { PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderMenu from "./Header-Nav/Header-List.tsx";
import LogoName from "./Header-Logo/Logo-Name.tsx";
import HeaderInput from "./Header-Input/Header-Input.tsx";
import "./layout.scss";
import Slider from "./Slider/Slider.tsx";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Игры", "1", <PieChartOutlined />, [
    getItem("Все игры", "game1"),
    getItem("Категории", "game2", undefined, [
      getItem("Новые игры", "3"),
      getItem("Популярное", "4"),
      getItem("Кено", "5"),
      getItem("Настольные", "6"),
      getItem("Лотерея", "7"),
    ]),
  ]),
  getItem("Провайдеры", "prov", []),
  getItem("Правила", "prav"),
  getItem("Бонусная политика", "bonus"),
  //баланс аккаунта
  // getItem('TZEMNA', '9'),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <Sider className="sider"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        {!collapsed && <LogoName />}
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <HeaderMenu />
          <HeaderInput />
        </Header>
        <Content className="content">
          {/* <Breadcrumb className="breadcrumb"
          /> */}
          <div className="site-layout-background">
            <Slider />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
