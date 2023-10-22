import React, { useState } from 'react'
import { Card, Form, Input,Typography,Button, message, Select} from 'antd'
import { ref, uploadBytesResumable,getDownloadURL  } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import {firestore, storage} from "../../../config/FirebaseConfig"
import { useAuthContext } from '../../../context/AuthContext';

export default function AdminPanel() {

    const {user} = useAuthContext()
    const [fileList, setFileList] = useState([{}])
    const [isProgress, setIsProgress] = useState("")
    const [isLoading, setIsLoading] = useState(false)
  
    const {Title} = Typography
    const handleFailed = () => {
        message.error("Fill all the inputs correctly")
    }


const handleFinish = (values) => {
  const {author,book,category,price,rating,reviews,bookdescription,authordescription,bookreviews} = values
      const randomId = () => Math.random().toString(36).slice(2)
      const booksData = {
        author,book,category,price,rating,reviews,bookdescription,authordescription,bookreviews,
        dateCreated:serverTimestamp(),
        createdBy:user.createdBy,
        id:randomId(),
        image:""
      }
    imgDoc(booksData)
}
const imgDoc = (booksData) => {
  const file =fileList
  const ext = file.name.split(".").pop();
       const ImageRef = ref(storage, `images/${booksData.id}.${ext}`);
       const uploadTask = uploadBytesResumable(ImageRef, file);
       setIsLoading(true)
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       setIsProgress(Math.round(progress))
       if (progress == 100) {
         setTimeout(() => {
          setIsProgress(false)
        }, 1000);
       }
      },
       (error)=>{
         console.error(error)
         message.error("Something went wrong while adding image")
         setIsLoading(false)
       },
       () => {
        getDownloadURL (uploadTask.snapshot.ref)
        .then((downloadURL) => {
          let data = {...booksData,image:downloadURL}
          bookDocument(data)
        });
      }
      )
   
}
const bookDocument = async(booksData) =>{
     try {
      await setDoc(doc(firestore, "books", booksData.id), booksData)
      message.success("Book added successfully")
      setIsLoading(false)
     } catch (error) {
        message.error("Something went wront while adding book")
     }
}

  return (
    <>
        <div className="container py-5 admin">
            <div className="row  ">
                <div className=" col-12 col-md-8 m-auto">
                   <Card hoverable={true}>
                   <Form layout='vertical' onFinish={handleFinish} onFinishFailed={handleFailed}>
                     <Title level={1} className='text-center my-4'>Admin Panel</Title>
                        <Form.Item label="Author's Name " name="author" rules={[
                            {min:3,message:"Please enter atleast 3 letters",required:true,whitespace:true}
                        ]} hasFeedback>
                            <Input placeholder='Enter Author Name' />
                        </Form.Item>
                        <Form.Item label="Book Name "  name="book" rules={[
                            {min:3,message:"Please enter atleast 3 letters",required:true,whitespace:true}
                        ]} hasFeedback>
                            <Input placeholder='Enter Book Name' />
                        </Form.Item>
              
                        <div className="row g-3">
                          <div className="col-12 col-md">
                            <Form.Item  label="Reviews " name="reviews" rules={[{required:true,message:"Please Enter Reviews"}]} >
                              <Input type="number" min={1} className="form-control" placeholder="Enter User Review" aria-label="Enter User Review" />
    
                            </Form.Item>
                        </div>
                        <div className="col-12 col-md">
                            <Form.Item  label="Rating " name="rating"  rules={[{required:true,message:"Please Enter Rating"}]} >
                              <Input type="number" min={1} max={5}className="form-control" placeholder="Enter User Rating" aria-label="Enter User Rating" step=".1"/>
                            </Form.Item>
                        </div>
                        <div className="col-12 col-md">
                            <Form.Item  label="Price" name="price"  rules={[{required:true,message:"Please Enter Price"}]}  >
                              <Input type="integer" min={0} className="form-control" placeholder="Enter Price" aria-label="Enter Price"/>
                            </Form.Item>
                        </div>
                      </div>
                        <div className="col-12 ">
                            <Form.Item  label="Category" name="category"  rules={[{required:true,message:"Please Select Category"}]}  >
                              <Select name="category" placeholder="Select Your Category">
                                <Select.Option  value="horror">Horror</Select.Option>
                                <Select.Option  value="triller">Triller</Select.Option>
                                <Select.Option  value="science">Science Fiction</Select.Option>
                                <Select.Option  value="history">History</Select.Option>
                              </Select>
                            </Form.Item>
                        </div>
                        <div className="col-12 ">
                            <Form.Item  label="Book Description" name="bookdescription"  rules={[{required:true,message:"Please Enter Book Description"}]}  >
                                 <Input.TextArea  rows={5} placeholder='Enter Book Description'/>
                            </Form.Item>
                        </div>
                        <div className="col-12 ">
                            <Form.Item  label="Author Description" name="authordescription"  rules={[{required:true,message:"Please Enter Author Description"}]}  >
                                 <Input.TextArea  rows={5} placeholder='Enter Author Description'/>
                            </Form.Item>
                        </div>
                        <div className="col-12 ">
                            <Form.Item  label="Book Reviews" name="bookreviews"  rules={[{required:true,message:"Please Enter Book Reviews"}]}  >
                                 <Input.TextArea  rows={5} placeholder='Enter Book Reviews'/>
                            </Form.Item>
                        </div>

                     
                      <Form.Item label="File" className='d-block w-100' name="file"   rules={[{required:true,message:"Please Choose File"},
                       
                    ]}>
                          <input className="form-control" type="file" name='file' onChange={e=>{setFileList(e.target.files[0])}} id="formFile" />
                      </Form.Item>
                     {isProgress ? <div className="progress  my-3">
                         <div className="progress-bar " role="progressbar" aria-label="Example with label" style={{width:` ${isProgress}%`}}aria-valuenow={isProgress} aria-valuemin="0" aria-valuemax="100" >{isProgress}%</div>
                     </div> 
                     : ""    
                    }     

                      <Form.Item>
                         <Button htmlType='submit'  className='postBtn w-50 m-auto' loading={isLoading} disabled={isLoading}>Add Post</Button>
                      </Form.Item>
                    </Form>
                   </Card>
                </div>
            </div>
        </div>
    </>
  )
 }
