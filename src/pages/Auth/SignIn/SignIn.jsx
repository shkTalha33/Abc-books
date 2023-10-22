import React, { useState } from 'react'
import { Card, Checkbox, Form, Input,Typography,Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../config/FirebaseConfig"
import { useAuthContext } from '../../../context/AuthContext';

export default function SignIn() {
   const {readUserProfile} = useAuthContext()
    const {Title} = Typography
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const  handleForgot = () => {
    navigate("/auth/forgotpassword")
  }
const handleFinish = (values) => {
    const {email,password} = values
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       const user = userCredential.user;
       readUserProfile(user)
       message.success("Login successful")
       
    })
    .catch((error) => {
    message.error("Something went wrong while login")
    });
    setIsLoading(false)
}
const handleError = () => {
   message.error("Invalid Email or Password")
}
  return (
     <>
        <div className="container auth py-5">
            <div className="row w-100">
                <div className="col-md-12">
                    <Card  className='col-md-5 m-auto card-sec' hoverable>
                        <Title className='text-center my-4' level={1}>Sign In</Title>
                     <Form layout='vertical' onFinish={handleFinish} onFinishFailed={handleError} >                     
                        <Form.Item label="Email" name="email" rules={[
                            {required:true,whitespace:true,message:"Please enter valid email", type:"email"}
                            
                        ]} hasFeedback>
                           <Input placeholder="Enter your Email" />
                       </Form.Item>
                        <Form.Item name="password" label="Password" rules={[
                            {required:true,whitespace:true,message:"Please Enter Correct Password "},
                            
                        ]} hasFeedback >
                           <Input.Password placeholder="Enter your Password" />
                       </Form.Item>
                        <Form.Item valuePropName='checked'  >
                            <Checkbox  >
                                <p className='mb-0 ' style={{fontSize:18,fontWeight:600}}>Keep me logged in</p>
                            </Checkbox>
                            <p  className='mb-0 ' style={{fontSize:14,color:"rgb(230, 153, 11)",cursor:"pointer"}} onClick={handleForgot}>Forgot Password</p>
                        </Form.Item>
                        <div className="d-flex justify-content-between align-items-center login-sec mt-5">
                            <p className='mb-0'>Don’t have an account? <Link to="/auth/signup"><span style={{color:"rgb(230, 153, 11)"}}>Sign Up</span> </Link> here</p>
                            <Button htmlType='submit' loading={isLoading} disabled={isLoading} >Sign In</Button>
                        </div>
                     </Form>
                    </Card>
                </div>
            </div>
        </div>
     </>
  )
}
