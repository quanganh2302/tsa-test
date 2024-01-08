import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import Background from "../assets/bg-page-login.png";
import { ReactComponent as LogoFull } from "../assets/logo-full.svg";
import { components } from "../styles";
const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
                <h1 className={components.titleH1}>Đăng ký tài khoản</h1>
                <p className="text-authForm text-center">
                  Bạn đã có tài khoản?{" "}
                  <Link to="/dang-nhap" className="link">
                    Đăng nhập ngay
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
                  label="Họ tên"
                  name="username"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="Điền đầy đủ theo họ tên trên CMND/CCCD"
                    className="min-h-[46px]"
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className="min-h-[46px]"
                    placeholder="Điền chính xác email để nhận thông tin"
                  />
                </Form.Item>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    type="number"
                    className="min-h-[46px]"
                    placeholder="Số điện thoại liên hệ"
                  />
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
                    placeholder="Nhập mật khẩu"
                  />
                </Form.Item>
                <Form.Item
                  label="Nhập lại mật khẩu"
                  name="rePassword"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    className="min-h-[46px]"
                    placeholder="Xác nhận lại mật khẩu"
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
                    Đăng ký
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
