import { React, useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import apiProducts from "../api/apiProducts";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

export default function Home() {
  let navigate = useNavigate();

  let { state } = useLocation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiProducts.list().then((data) => {
      setProducts(data);
    });
  }, []);

  const onClickDetailProduct = (id, product_name) => () => {
    navigate("/detail-product", {
      state: { productId: id, product_name: product_name },
    });
  };

  const onClickAddDynamicProduct = (id, product_name) => () => {
    navigate("add-dynamic-product", {
      state: { productId: id, product_name: product_name },
    });
  };

  const onClickAddProduct = () => {
    navigate("add-product");
  };

  const onClickDeleteProduct = (id) => () => {
    if (confirm("apakah kamu yakin?")) {
      apiProducts.deleteProduct(id);
      apiProducts.list().then((data) => {
        setProducts(data);
      });
    }
  };

  return (
    <>
      <Container fluid="md" className="mt-5">
        <Row className="mt-2">
          <Col></Col>
          <Col></Col>
          <Col xl={6.5}>
            <h1>Welcome to Dynamic Product System</h1>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col></Col>
          <Col>
            <Button
              variant="secondary"
              className="mx-1 my-1"
              onClick={onClickAddProduct}
            >
              Add New Product
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {products.map((obj) => {
              return (
                <Card style={{ width: "22rem" }} className="my-4 card">
                  <Card.Body>
                    <Card.Title style={{ color: "#E7A572", fontSize: "2em" }}>
                      Product Name :{" "}
                    </Card.Title>
                    <Card.Text style={{ color: "#E7A572", fontSize: "1.5em" }}>
                      {obj["property_value"]}
                    </Card.Text>
                    <>
                      <Button
                        variant="primary"
                        className="mx-1 my-1"
                        onClick={onClickDetailProduct(
                          obj["product_id"],
                          obj["property_value"]
                        )}
                      >
                        Detail
                      </Button>
                      <Button
                        variant="success"
                        className="mx-1 my-1"
                        onClick={onClickAddDynamicProduct(
                          obj["product_id"],
                          obj["property_value"]
                        )}
                      >
                        Add Dynamic Property
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-1 my-1"
                        onClick={onClickDeleteProduct(obj["product_id"])}
                      >
                        Delete
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
