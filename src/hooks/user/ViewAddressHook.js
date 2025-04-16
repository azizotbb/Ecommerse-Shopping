import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddress } from "../../redux/user/userSlice";

const ViewAddressHook = () => {
  const disptach = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await disptach(getAllUserAddress());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.user.resAllAddress);

  return [res];
};

export default ViewAddressHook;
