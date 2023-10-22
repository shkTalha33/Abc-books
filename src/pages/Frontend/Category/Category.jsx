import React, { useEffect, useState } from 'react';
import PagesTopSection from '../../../components/PagesTopSection';
import '../../../scss/_category.scss';
import { Checkbox, Select, Slider } from 'antd';
import { useCategoryContext } from '../../../context/CategoryContext';
import BookCard from "../../../components/BookCard"
import topImg from "../../../assets/pics/hero/pagesTop.jpg"

export default function Category() {

  const { dispatch,filters,filter_Products } = useCategoryContext();
  const {max,min,price} = filters


  const [checkbox, setCheckbox] = useState([])
  const [range, setRange] = useState(0)
  const [order, setOrder] = useState("low")
  const [stars, setStars] = useState(null)


  const handleChange = (name,value) => {
     dispatch({type:"FILTERATION_METHODS",payload:{name,value}})
  }

  const handleCheckbox = (category) => {
      let isSelected = checkbox.includes(category)
      let newArray ;
      if (isSelected) {
         newArray = checkbox.filter((item)=>item !== category)
      }else{
         newArray = [...checkbox,category]
      }
      setCheckbox(newArray)
      handleChange("category",newArray)
  }
  const handleOrder = (order) => {
      setOrder(order)
      console.log(order)
  }

  
  useEffect(() => {
    dispatch({type:"FILTRATION_OF_PRODUCTS"})
    dispatch({type:"SET_PRODUCT_ORDER",payload:{order}})

  }, [checkbox,range,stars,order])
  
  
  return (
    <>
      <div className="bg-white p-0 px-md-5 category">
        <div className="container  ">
          <div className="row mx-0 mx-md-5">
            <div className="col-12 px-0 pb-5">
              <PagesTopSection heading="Book Category" img={topImg} />
            </div>
          </div>
          <div className="row mx-0 mx-md-5">
            <div className="col-lg-3 px-0 filter-section my-5">
              <div className="filter-category col-12 p-4">
                <p>Filters By Categories</p>
                <div className="checkBoxGroup">
                  <Checkbox
                    className="w-100 circle-box my-1"
                    name="category"
                   onChange={() => handleCheckbox('history')}
                   checked={checkbox.includes('history')}

                    value="history"
                  >
                    <span style={{ fontWeight: 600, fontSize: 16 }}>History</span>
                  </Checkbox>
                  <Checkbox
                    className="w-100 circle-box my-1"
                    name="category"
                   onChange={() => handleCheckbox('horror')}
                   checked={checkbox.includes('horror')}
                    value="horror"
                  >
                    <span style={{ fontWeight: 600, fontSize: 16 }}>Horror</span>
                  </Checkbox>
                  <Checkbox
                    className="w-100 circle-box my-1"
                    name="category"
                   onChange={() => handleCheckbox('triller')}
                   checked={checkbox.includes('triller')}


                    value="triller"
                  >
                    <span style={{ fontWeight: 600, fontSize: 16 }}>Triller</span>
                  </Checkbox>
                  <Checkbox
                    className="w-100 circle-box my-1"
                    name="category"
                   onChange={() => handleCheckbox('science')}
                   checked={checkbox.includes('science')}
                   

                    value="science"
                  >
                    <span style={{ fontWeight: 600, fontSize: 16 }}>Science Fiction</span>
                  </Checkbox>
                </div>
              </div>
              <div className="filter-price col-12 p-4">
                <p>Filters By Price</p>
                <Slider
                  className="ms-5"
                  name="price"
                  min={min}
                  max={max}
                  value={price}
                  onChange={(value)=>{
                  setRange(value)
                  handleChange("price",value)
                 }}
                />
              </div>
              <div className="filter-stars col-12 p-4">
                <p>Filters By Rating</p>
                <Select
                  className="w-100"
                  name="rating"
                  value={stars}
                  placeholder="Filter By Rating"
                 onChange={(value)=>{
                   setStars(value)
                   handleChange("rating",value)
                 }}
                >
                 <Select.Option value="5">5 Star Rating</Select.Option>
                 <Select.Option value="4">4 Star Rating</Select.Option>
                 <Select.Option value="3">3 Star Rating</Select.Option>
                 <Select.Option value="2">2 Star Rating</Select.Option>
                 <Select.Option value="1">1 Star Rating</Select.Option>

                </Select>
              </div>
            </div>

            <div className="col-lg-9 book-section">
              <div className="row">
                <div className="col my-5 d-flex justify-content-end">
                  <Select className="w-50 w-md-50 w-lg-25" onChange={(value)=>handleOrder(value)}  name="order" placeholder="Filter By Order">
                    <Select.Option value="high" >High Price</Select.Option>
                    <Select.Option value="low" >Low Price</Select.Option>
                    <Select.Option value="a-z" >Ascending Order</Select.Option>
                    <Select.Option value="z-a" >Descending Order</Select.Option>
                  </Select>
                </div>
              </div>
              <div className="row">
                <div className="col mb-5 category-books">
                    {filter_Products.map((product,i)=>{
                      return(
                       <BookCard key={i} book={product} />
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

