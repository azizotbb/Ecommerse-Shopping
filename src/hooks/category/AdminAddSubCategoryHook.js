import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/category/categorySlice";
import { postSubCategory } from "../../redux/SubCategories/subSlice";

const AdminAddSubCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const data = useSelector((state) => state.category.categorys.data);
  const subcategory = useSelector((state) => state.subCategory.subcategory);

  const handelChange = (e) => {
    setId(e.target.value);
  };

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const handelClick = (e) => {
    setLoading(true);
    dispatch(
      postSubCategory({
        name: name,
        category: id,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("اسم التصنيف الفرعي");
      setId("0");
      setLoading(true);
    }
  }, [loading]);
  return [
    id,
    name,
    loading,
    data,
    subcategory,
    handelChange,
    handelClick,
    onChangeName,
  ];
};

export default AdminAddSubCategoryHook;
