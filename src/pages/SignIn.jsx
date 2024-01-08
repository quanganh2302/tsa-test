import React, { useState } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

import { Button, Form, Input, Modal } from "antd";
import { UserOutlined, LockOutlined, CloseOutlined } from "@ant-design/icons";
import Background from "../assets/bg-page-login.png";
import { ReactComponent as LogoFull } from "../assets/logo-full.svg";
import { components } from "../styles";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <section
      className=" h-full w-full bg-center bg-no-repeat bg-cover flex justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container-custom mt-20 justify-center relative">
        <div className="ml-[15px] mr-[15px] w-full h-full ">
          <div className="flex justify-center flex-col w-full ">
            <div className=" flex justify-center ">
              <LogoFull className=" my-6 max-w-[90%] max-h-[32px]" />
            </div>
            <div className=" auth-form flex flex-col justify-center p-8">
              <div className="flex flex-col justify-center mb-12">
                <h1 className={components.titleH1}>Đăng nhập</h1>
                <p className="text-authForm text-center">
                  Bạn chưa có tài khoản?{" "}
                  <Link to="/dang-ky" className="link">
                    Đăng ký ngay
                  </Link>
                </p>
              </div>
              <Form
                name="basic"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                style={{
                  minWidth: 400,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="min-h-[46px]" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    className="min-h-[46px]"
                    prefix={<LockOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    span: 24,
                  }}
                >
                  <Button
                    className="text-white min-h-[46px] text-[18px] font-normal"
                    block
                    type="primary"
                    htmlType="submit"
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <p className="link hover:cursor-pointer" onClick={showModal}>
                  {" "}
                  Quên mật khẩu?
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        closeIcon={false}
        className="relative"
        footer={[]}
      >
        <CloseOutlined
          onClick={handleCancel}
          className="block absolute top-[-55px] right-1/2 translate-x-1/2 bg-white rounded-full text-center leading-5 font-bold w-[1.5rem] h-[1.5rem]"
        />

        <div className=" p-6 ">
          <h1 className={components.titleH1}>Lấy lại mật khẩu</h1>
        </div>
        <div className=" p-6">
          <div>
            <p>
              Nhập email dùng để đăng ký tài khoản của bạn.
              <br />
              Chúng tôi sẽ gửi bạn một đường link để reset lại mật khẩu vào
              email này
            </p>
          </div>
          <Form
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              minWidth: 400,
            }}
          >
            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input className="min-h-[46px]" />
            </Form.Item>
            <Button className={clsx(components.button, "text-base")}>
              Gửi thông tin lấy lại mật khẩu
            </Button>
            ,
          </Form>
        </div>
      </Modal>
    </section>
  );
};

export default SignIn;
