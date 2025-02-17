import { React, useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import apiProducts from "../api/apiProducts";
import Button from "react-bootstrap/Button";

export default function Detail() {
  let navigate = useNavigate();

  let { state } = useLocation();

  const [product, setProduct] = useState({});
  const [dynamicProperty, setDynamicProperty] = useState([]);

  useEffect(() => {
    apiProducts.getById(state.productId).then((data) => {
      setProduct(data);
      setDynamicProperty(data["dynamic_property"]);
      console.log(dynamicProperty);
    });
  }, []);

  const onClickDelete = (id) => (event) => {
    // event.preventDefault();
    apiProducts.deleteDynamicProperty(id);
    navigate(-1);
  };

  const onClickEdit = (id, staticProductId) => () => {
    navigate("/edit", {
      state: { productId: id, staticProductId: staticProductId },
    });
  };

  let i = 1;

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Property Name</th>
            <th>Property Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dynamicProperty.map((obj) => {
            return (
              <tr>
                <td>{i++}</td>
                <td>{obj["property_name"]}</td>
                <td>{obj["property_value"]}</td>
                <td>
                  <Button
                    variant="warning"
                    className="mx-1 my-1"
                    onClick={onClickEdit(
                      obj["product_id"],
                      obj["static_product_id"]
                    )}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-1 my-1"
                    onClick={onClickDelete(obj["product_id"])}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
