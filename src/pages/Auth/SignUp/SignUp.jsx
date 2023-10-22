import React, { useState } from 'react'
import { Card, Form, Input,Typography,Button, message } from 'antd'
import { Link } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth,firestore} from "../../../config/FirebaseConfig"
import { serverTimestamp,doc, setDoc } from 'firebase/firestore';

export default function SignUp() {

  const {Title} = Typography
  const [isLoading, setIsLoading] = useState(false)
  const handleFinish = (values) => {
    const {email,password,fullName} = values
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
            userProfile(user,fullName)
    })
    .catch((error) => {
      message.error("Something went wrong while signup new user")
    setIsLoading(false)

    });
  }

  const userProfile=async(user,fullName)=>{
    let formData = {
      fullName,
      createdBy:{
      email:user.email,
      uid:user.uid,
      },
      role:"user",
      dateCreated:serverTimestamp(),
      status:"Active"
    }
    try {
      await setDoc(doc(firestore, "users", formData.createdBy.uid), formData);
      message.success("User Sign Up successfully")
  
    } catch (error) {
       console.error(error);
    }
    setIsLoading(false)
  }

  const handleFailed = () => {
    message.error("Fill all the input fields correctly")
  }
  return (
    <>
    <div className="container auth py-5">
            <div className="row w-100">
                <div className="col-md-12">
                    <Card  className='col-md-5 m-auto card-sec' hoverable>
                        <Title className='text-center my-4' level={1}>Sign Up</Title>
                     <Form layout='vertical' onFinish={handleFinish} onFinishFailed={handleFailed} >                     
                        <Form.Item label="Full Name" name="fullName" rules={[
                          {required:true,message:"Full Name must contain atleast 3 letters",min:3}
                        ]} hasFeedback>
                           <Input placeholder="Enter your Full Name" />
                       </Form.Item>
                        <Form.Item name="email" label="Email" rules={[
                          {required:true,message:"Please Enter ValidEmail",type:"email"}
                        ]} hasFeedback >
                           <Input placeholder="Enter your Email" />
                       </Form.Item>
                        <Form.Item label="Password" name="password" rules={[
                          {required:true,message:"Password must contain atleast 8 charcters",min:8}
                        ]} hasFeedback  >
                           <Input.Password placeholder="Enter your Password" />
                       </Form.Item >
                        <Form.Item label="Confirm Password" name="cpassword" dependencies={['password']} rules={[
                          {required:true,message:"Confirm Password required"},
                            ({getFieldValue})=>({
                              validator:(_,value)=>{
                                if (!value || getFieldValue("password") === value ) {
                                   return Promise.resolve()
                                }
                                return Promise.reject("Password doesnot match")
                              }
                            })
                           
                        ]}>
                           <Input.Password placeholder="Confirm Password" />
                       </Form.Item>
                       
                        <div className="d-flex justify-content-between align-items-center login-sec my-5">
                            <p className='mb-0'>Already have an account? <Link to="/auth/signin"><span style={{color:"rgb(230, 153, 11)"}}>Sign In</span> </Link> here</p>
                            <Button htmlType='submit' loading={isLoading} disabled={isLoading}>Sign Up</Button>
                        </div>
                     </Form>
                    </Card>
                </div>
            </div>
        </div>
        </>
  )

}
