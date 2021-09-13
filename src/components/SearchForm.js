import React, {useState} from "react";
import JSONDATA from "../productData.json"
import {Table} from 'reactstrap'

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <Table dark>
            <thead>
              <tr>
                <th>Title</th>
                <th>GTIN</th>
                <th>Gender</th>
                <th>Sale Price</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{val.title}</td>
                <td>{val.gtin}</td>
                <td>{val.gender}</td>
                <td>{val.sale_price}</td>
                <td>{val.price}</td>
                <td>{val.image_link}</td>

              </tr>
            </tbody>
          </Table>
          // <div className="title" key={key}>
          //   <p>{val.title}</p>
          //   <p>{val.gtin}</p>
          //   <p>{val.gender}</p>
          //   <p>{val.sale_price}</p>
          //   <p>{val.price}</p>
          //   <p>{val.image_link}</p>
          // </div>
        );
      })}
    </div>
  );
};

export default SearchForm;
