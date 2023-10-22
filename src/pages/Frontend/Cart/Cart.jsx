import React from "react";
import PagesTopSection from "../../../components/PagesTopSection";
import topImg from "../../../assets/pics/hero/cartTop.jpg";
import { useCartContext } from "../../../context/CartContext";
import "../../../scss/_cart.scss";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export default function Cart() {
  const { dispatch, cart } = useCartContext();
  const handleDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const handleIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  return (
    <>
      <div className="container px-0 px-md-5 pb-5 cart">
        <div className="row mx-0">
          <div className="col px-0 px-md-3">
            <PagesTopSection heading="Cart" img={topImg} />
          </div>
          <div className="cartItems mt-5">
            <div className="table-responsive mt-5">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {/* {cart.map((doc, i) => {
              return(
                <tr key={i}>
                  <td><img src={doc.image} width="100px" /></td>
                  <td>{doc.price}</td>
                  <td className="quantity">
                    <button className="btn btn-primary btn-sm d-block d-md-inline" onClick={()=>{handleDecrement(doc.id)}} >{<AiOutlineMinus />}</button>
                     <span className="text-muted d-block d-md-inline mx-0 mx-md-3" >{doc.quantity}</span>
                    <button className="btn btn-danger btn-sm d-block d-md-inline" onClick={()=>{handleIncrement(doc.id)}}>{<AiOutlinePlus />}</button>
                  </td>
                  <td>{doc.price * doc.quantity}</td>
                </tr>
              )
              })} */}
                  {cart.map((doc, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <img src={doc.image} width="100px" />
                        </td>
                        <td>{doc.price}</td>
                        <td className="quantity">
                          <button
                            className="btn btn-primary btn-sm d-block d-md-inline"
                            onClick={() => {
                              handleDecrement(doc.id);
                            }}
                          >
                            {<AiOutlineMinus />}
                          </button>
                          <span className="text-muted d-block d-md-inline mx-0 mx-md-3">
                            {doc.quantity}
                          </span>
                          <button
                            className="btn btn-danger btn-sm d-block d-md-inline"
                            onClick={() => {
                              handleIncrement(doc.id);
                            }}
                          >
                            {<AiOutlinePlus />}
                          </button>
                        </td>
                        <td>{doc.price * doc.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
