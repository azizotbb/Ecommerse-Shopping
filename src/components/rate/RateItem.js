import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { deleteReview } from "../../redux/review/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../hooks/useNotification";

export default function RateItem({ review }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(review._id);
  let isUser = false;
  if (user._id === review.user._id) {
    isUser = true;
  }
  const dispatch = useDispatch();

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReview(review._id));
    setLoading(false);
  };
  const res = useSelector((state) => state.review.deleteReview);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم حذف التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية المسح", "error");
    }
  }, [loading]);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف التقيم</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2">{review.user.name}</div>
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#FFD43B",
              height: "16px",
              width: "16px",
              paddingTop: "8px",
            }}
          />
          <div className="cat-rate d-inline p-1 pt-2">{review.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2 justify-content-between">
          <div className="rate-description d-inline ms-2">{review.review} </div>
          {isUser === true ? (
            <FontAwesomeIcon
              icon={faTrash}
              style={{ color: "#d40c0c", cursor: "pointer" }}
              onClick={handleShow}
            />
          ) : null}
        </Col>
      </Row>
    </div>
  );
}
