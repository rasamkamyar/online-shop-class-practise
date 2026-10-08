import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./config";

function Details() {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUsers(id),
  });

  if (isLoading) {
    return <div>در حال دریافت اطلاعات کاربر...</div>;
  }

  if (isError) {
    return <div>خطا در دریافت اطلاعات: {error.message}</div>;
  }

  const { name, email, phone, company, address } = user;
  const { name: companyName } = company;
  const { city } = address;
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← بازگشت به صفحه اصلی</Link>

      <h3>جزییات کاربر: {name}</h3>
      <p>ایمیل: {email}</p>
      <p>تلفن: {phone}</p>
      <p>شرکت: {companyName}</p>
      <p>شهر: {city}</p>
    </div>
  );
}

export default Details;
