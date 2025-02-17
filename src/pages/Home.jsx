import { React, useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import apiProducts from "../api/apiProducts";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  let navigate = useNavigate();

  let { state } = useLocation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiProducts.list().then((data) => {
      setProducts(data);
    });
  }, []);

  const onClickDetail = (id) => () => {
    navigate("detail", { state: { productId: id } });
  };

  const onClickAdd = (id) => () => {
    navigate("add", { state: { productId: id } });
  };

  return (
    <>
      <Container fluid="md" className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            {products.map((obj) => {
              return (
                <Card style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>Product Name : </Card.Title>
                    <Card.Text>{obj["property_value"]}</Card.Text>
                    <>
                      <Button
                        variant="primary"
                        className="mx-1 my-1"
                        onClick={onClickDetail(obj["product_id"])}
                      >
                        Detail
                      </Button>
                      <Button
                        variant="success"
                        className="mx-1 my-1"
                        onClick={onClickAdd(obj["product_id"])}
                      >
                        Add Dynamic Property
                      </Button>
                    </>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
