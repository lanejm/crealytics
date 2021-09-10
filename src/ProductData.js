import React from "react";
import "./App.css";
import { productData } from "./data";

export const Products = () => {
  return (
    <>
      <div className="product-container">
        {productData.map((data, key) => {
          return (
            <div key={key}>
              <Product 
              key = {key}
              title = {data.title}
              gtin = {data.gtin}
              gender = {data.gender}
              salePrice = {data.salePrice}
              price = {data.price}
              image = {data.imageLink}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};


const Product = ({ title, gtin, gender, salePrice, price, imageLink }) => {
    if (!title) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{title}</h5>
            </td>
            <td>
              <h5>{gtin}</h5>
            </td>
            <td>
              <h5>{gender}</h5>
            </td>
            <td>
              <h4>{salePrice}</h4>
            </td>
            <td>
              <p>{price}</p>
            </td>
            <td>
              <p>{imageLink}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };