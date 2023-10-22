import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../config/FirebaseConfig";
import { Button, Card, Form, Input, message,Typography} from "antd";
import { useNavigate } from "react-router-dom";
// const [isLoading, setIsLoading] = useState(false)

export default function ForgetPassword() {
    const navigate = useNavigate()
    const {Title} = Typography
  const handleFinish = (values) => {
    const { email } = values;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/auth/signin")
        message.success("Check Your Mail");
      })
      .catch((error) => {
        console.error(error);
        message.error("Something went wrong while Reset Email");
      });

  };
  const handleError = () => {
    message.error("Invalid Email or Password")
 }
  return (
    <>
      <div className="container auth py-5">
        <div className="row w-100">
          <div className="col-md-12">
            <Card className="col-md-5 m-auto card-sec" hoverable>
              <Title className="text-center my-4" level={1}>
               Reset Password
              </Title>
              <Form
                layout="vertical"
                onFinish={handleFinish}
                onFinishFailed={handleError}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please enter valid email",
                      type: "email",
                    },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Enter your Email" />
                </Form.Item>
                <Button
                  htmlType="submit"
                  style={{background:"orange",color:"white",border:"none",outline:"none",height:"40px",width:100,fontSize:16,margin: " 0 auto"}}
                  
                >
                  Reset
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
