import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import clsx from "clsx";
import { ReactComponent as LogoFull } from "../assets/logo-short.svg";
import { ReactComponent as LogoSquare } from "../assets/logo-square.svg";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileTextOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Space } from "antd";
import Footer from "../components/Footer";
const { Header, Sider, Content } = Layout;
const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      key: "1",
      label: (
        <Link className="flex items-center gap-2" to={"/tai-khoan"}>
          <UserOutlined />
          <p className="m-0">Tài khoản</p>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="flex items-center gap-2" href="#">
          <LogoutOutlined />
          <p className="m-0">Đăng xuất</p>
        </Link>
      ),
    },
  ];
  return (
    <Layout>
      <Sider
        className="bg-white border-r border-[#f0f0f0] relative"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="h-[64px] flex items-center border-b border-[#f0f0f0]">
          <img
            className={clsx(`${collapsed ? "hidden" : "block m-4 h-8"}`)}
            src={require("../assets/logo-short.svg").default}
            alt="logo-short"
          />
          <img
            className={clsx(`${collapsed ? "block m-4 h-8" : "hidden"}`)}
            src={require("../assets/logo-square.svg").default}
            alt="logo-square"
          />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <Link to={"/dang-ky-thi"}>
                  <FileTextOutlined />
                </Link>
              ),
              label: "Bài thi Đánh giá tư duy - TSA",
            },
            {
              key: "2",
              icon: (
                <Link to={"/tai-khoan"}>
                  <UserOutlined />
                </Link>
              ),
              label: "Tài khoản",
            },
            {
              key: "3",
              icon: <QuestionCircleOutlined />,
              label: "Câu hỏi thường gặp",
            },
          ]}
        />
        <Footer className={collapsed ? "hidden" : "absolute bottom-2"} />
      </Sider>
      <Layout>
        <Header className=" bg-white p-0 flex items-center justify-between border-b border-[#f0f0f0]">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
            className="hover:bg-white"
          />
          <div className="flex items-center justify-center text-[#8c8c8c] ">
            <div className="px-5 cursor-pointer after:transition-colors after:duration-300 after:border-[#f0f0f0] after:hover:border-primary relative after:content-[''] after:block after:w-4 after:border-b after:absolute after:bottom-0">
              <UsergroupAddOutlined className="text-[16px] " />
            </div>
            <div className="px-5 cursor-pointer after:transition-colors after:duration-300 after:border-[#f0f0f0] after:hover:border-primary relative after:content-[''] after:block after:w-4 after:border-b after:absolute after:bottom-0">
              <BellOutlined className="text-[16px] " />
            </div>

            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <div className="flex items-center px-5 cursor-pointer border-b border-[#f0f0f0] ">
                <img
                  className="w-[32px] h-[32px] object-cover block mr-1"
                  src={require("../assets/userAvateDefault.png")}
                  alt="userAvatar"
                />
                <p className="m-0">userId</p>
                <DownOutlined className="text-[12px] mt-1" />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "8px 24px",
            padding: "12px 24px",
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default HomeLayout;
