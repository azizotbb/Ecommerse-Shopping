import { useState } from "react";
import avatar from "../../imgs/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../hooks/useNotification";
import { postBrand } from "../../redux/brand/brandSlice";
export default function AdminAddBrandHook() {
  const [img, setImg] = useState(avatar);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const isLoding = useSelector((state) => state.brand.isPostLoding);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onChangeName = (e) => {
    e.persist();

    setText(e.target.value);
  };
  const submint = (e) => {
    const formData = new FormData();
    formData.append("name", text);
    formData.append("image", file);
    dispatch(postBrand(formData));
    setText("");
    setImg(avatar);
    if (text === "" && file === null) {
      notify("من فظلك اكمل البيانات", "warn");
    } else {
      notify("تمت عملية الاضافه بنجاح", "success");
    }
  };
  return [img, text, isLoding, onImageChange, submint, onChangeName];
}
