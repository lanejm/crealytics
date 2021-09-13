import React, { useState } from "react";
import JSONDATA from "../productData.json";
import {
  Card,
  CardHeader,
  CardBody,
  CardSubtitle,
  Row,
  Col,
  CardImg,
  CardDeck,
} from "reactstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        className="search-form"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <CardDeck className="container" style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
              <Row>
                <Col >
                  <Card className="cards" key={val.title}>
                    <CardHeader className="section-title" tag="h3">
                      {val.title}
                    </CardHeader>
                    <CardBody className="card-text">
                      <CardSubtitle tag="h6">gtin: {val.gtin}</CardSubtitle>
                      <CardSubtitle tag="h6">gender: {val.gender}</CardSubtitle>
                      <CardSubtitle tag="h6">
                        sale price: {val.sale_price}
                      </CardSubtitle>
                      <CardSubtitle tag="h6">
                        price: {val.sale_price}
                      </CardSubtitle>
                      <CardImg src={val.image_link} alt="product image" />
                    </CardBody>
                  </Card>
                  <br />
                </Col>
              </Row>
            </CardDeck>
          </div>
        );
      })}
    </div>
  );
};

export default SearchForm;
