import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import iphone from "../../imgs/iphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  addToWishList,
  removeFomWishList,
} from "../../redux/wishList/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { notify } from "../../hooks/useNotification";

export default function ProductCard({ items, favProd }) {
  const dispatch = useDispatch();
  let Fav = favProd.some((fItem) => fItem === items._id);

  const [imgFav, setImgFav] = useState("gray");
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
  const [isFav, setIsFav] = useState(Fav);

  const resAdd = useSelector((state) => state.wishList.resAdd);
  const resRemove = useSelector((state) => state.wishList.resRemove);

  useEffect(() => {
    setIsFav(favProd.some((fitem) => fitem === items._id));
  }, [favProd]);

  const handelFav = () => {
    if (isFav) {
      removeFromWishListData();
    } else {
      addToWishListData();
    }
  };
  useEffect(() => {
    if (isFav === true) {
      setImgFav("red");
    } else {
      setImgFav("gray");
    }
  }, [isFav]);

  const addToWishListData = async () => {
    setImgFav("red");
    setLoadingAdd(true);

    await dispatch(addToWishList(items._id));

    setIsFav(true);
    setLoadingAdd(false);
  };

  const removeFromWishListData = async () => {
    setImgFav("gray");
    setLoadingRemove(true);

    await dispatch(removeFomWishList(items._id));

    setIsFav(false);
    setLoadingRemove(false);
  };

  useEffect(() => {
    if (loadingRemove === false) {
      if (resRemove && resRemove.status === 401) {
        notify("انتا غير مسجل", "error");
      }
    }
  }, [loadingRemove]);

  useEffect(() => {
    if (loadingAdd === false) {
      if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "error");
      }
    }
  }, [loadingAdd]);
  return (
    <Col xs="6" sm="6" md="4" lg="2" className=" my-1">
      <Card
        style={{
          maxWidth: "185px",
          maxHeight: "400px",
          minWidth: "165",
          minHeight: "380",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Link to={`/Details/${items._id}`}>
          <Card.Img variant="top" src={iphone} className="product-img" />
        </Link>
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            <FontAwesomeIcon
              onClick={handelFav}
              icon={faHeart}
              style={{
                color: imgFav,
                cursor: "pointer",
              }}
            />
          </Card.Title>
          <Link
            to="/Details/:id"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Text className="font">{items.title} </Card.Text>
            <div className=" d-flex flex-row justify-content-between">
              <div style={{ color: "#FFD43B" }}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
                {items.ratingsQuantity}{" "}
              </div>
              <div>
                <h6 className="font">
                  السعر <b> {items.price}</b>
                </h6>
              </div>
            </div>
          </Link>
          <ToastContainer />
        </Card.Body>
      </Card>
    </Col>
  );
}
