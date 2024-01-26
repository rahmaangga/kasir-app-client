import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const TotalBayar = ({ keranjangs }) => {
  const navigate = useNavigate();

  const submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menu: keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
        navigate('/sukses');
    });
  };

  const totalBayar = keranjangs.reduce((result, item) => result + item.total_harga, 0);

  return (
    <div className="fixed-bottom">
      <Row>
        <Col md={{ span: 3, offset: 9 }} className="px-2">
          <h4>
            Total Harga : <strong className="float-right">Rp. {totalBayar}</strong>
          </h4>
          <Button
            variant="primary"
            className="mb-3 mt2 w-50 mr-2 ml-2"
            size="lg"
            onClick={() => submitTotalBayar(totalBayar)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TotalBayar;