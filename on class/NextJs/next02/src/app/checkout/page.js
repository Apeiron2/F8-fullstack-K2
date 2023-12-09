"use client";
import React, { useState } from "react";
import useSWR from "swr";
const provincesApi = `http://localhost:3000/api/provinces`;
const districtsApi = `http://localhost:3000/api/districts`;
const fetcher = (url) => fetch(url).then((res) => res.json());
const CheckOut = () => {
  const [provinceID, setProvinceID] = useState();
  const handleChangeProvince = (e) => {
    setProvinceID(e.target.value);
  };
  const { data: provinces } = useSWR(provincesApi, fetcher);
  const { data: districts } = useSWR(
    `${districtsApi}?province_id=${provinceID}`,
    fetcher
  );
  return (
    <div>
      <select name="" id="" onChange={handleChangeProvince}>
        <option value="">Chọn tỉnh thành phố</option>
        {provinces?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
      <select name="" id="">
        <option value="">Chọn quận huyện</option>
        {districts?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CheckOut;
