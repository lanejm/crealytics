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
              salePrice = {data.sale_price}
              price = {data.price}
              image = {data.image_link}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};


const Product = ({ title, gtin, gender, sale_price, price, image_link }) => {
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
              <h4>{sale_price}</h4>
            </td>
            <td>
              <p>{price}</p>
            </td>
            <td>
              <p>{image_link}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };