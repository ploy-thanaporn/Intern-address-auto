import React, { useState } from "react";
import province from "../data/province.json";
import district from "../data/district.json";
import subdistrict from "../data/subdistrict.json";

const Content = () => {
  const [selectProvince, setSelectProvince] = useState([]);
  const [selectDistrict, setSelectDistrict] = useState([]);
  const [selectSubDistrict, setSelectSubDistrict] = useState([]);

  return (
    <div className="flex w-full">
      <div className="flex justify-around ">
        <div className="m-4">
          <p className="mb-2">จังหวัด</p>

          <select
            className="border-gray-500 rounded-md text-zinc-500"
            onChange={(e) => setSelectProvince(e.target.value)}
          >
            <option>กรุณาเลือกจังหวัด</option>
            {province.map((province, index) => {
              return (
                <option
                  value={province.value}
                  key={index}
                  className="text-zinc-500"
                >
                  {province.provinceNameTh}
                </option>
              );
            })}
          </select>
        </div>
        <div className="m-4">
          <p className="mb-2">อำเภอ</p>
          <select
            className="border-gray-500 rounded-md text-zinc-500"
            onChange={(e) => setSelectDistrict(e.target.value)}
          >
            <option>กรุณาเลือกอำเภอ</option>
            {district
              .filter((district) => selectProvince == district.provinceId)
              .map((district, index) => {
                return (
                  <option
                    value={district.value}
                    key={index}
                    className="text-zinc-500"
                  >
                    {district.districtNameTh}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className="flex justify-around w-full">
        <div className="m-4">
          <p className="mb-2">ตำบล</p>
          <select
            className="border-gray-500 rounded-md text-zinc-500"
            onChange={(e) => setSelectSubDistrict(e.target.value)}
          >
            <option>กรุณาเลือกตำบล</option>

            {subdistrict
              .filter((subdistrict) => selectDistrict == subdistrict.districtId)
              .map((subdistrict, index) => {
                return (
                  <option
                    value={subdistrict.subdistrictNameTh}
                    key={index}
                    className="text-zinc-500"
                  >
                    {subdistrict.subdistrictNameTh}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="m-4">
          <p className="mb-2">รหัสไปรษณีย์</p>

          <select className="border-gray-500 rounded-md text-zinc-500">
            <option>กรุณาเลือกรหัสไปรษณีย์</option>

            {subdistrict
              .filter(
                (subdistrict) =>
                  selectSubDistrict == subdistrict.subdistrictNameTh
              )

              .map((subdistrict, index) => {
                return (
                  <option
                    value={subdistrict.districtId}
                    key={index}
                    onChange={(e) => setSelectSubDistrict(e.target.value)}
                  >
                    {subdistrict.zipCode}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Content;
