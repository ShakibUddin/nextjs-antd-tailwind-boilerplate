import React, { useState } from "react";
import Image from "next/image";
import { Layout, Menu, theme } from "antd";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../public/svgs/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link href={"/dashboard"}>Dashboard</Link>,
    "/dashboard",
    <MdDashboard />
  ),
  getItem(<Link href={"/users"}>Users</Link>, "/users", <FaUsers />),
  getItem("Files", "3", <SiGoogledocs />),
];
const CustomLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="w-16 h-16 p-4 mx-auto flex justify-center items-center">
          <Image src={logo} width={80} height={80} alt="logo" />
        </div>
        <Menu
          theme="dark"
          selectedKeys={[router.pathname]}
          defaultSelectedKeys={["1"]}
          mode="inline"
          onChange={() => {}}
          items={[
            ...items,
            {
              key: "/logout",
              icon: <BiLogOut size={17} />,
              children: null,
              label: "Logout",
              onClick: () => {
                router.replace("/login");
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
