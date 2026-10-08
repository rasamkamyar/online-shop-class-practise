// داخل Details.jsx
import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "./config";

function Details() {
  const location = useLocation();

  const user = location.state?.user;

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <p>کاربری یافت نشد (اطلاعات در حافظه موجود نیست).</p>
        <Link to="/">← بازگشت به صفحه اصلی</Link>
      </div>
    );
  }
  const { name } = user;
  return (
    <div>
      <Link to="/">← بازگشت به صفحه اصلی</Link>
      <h2>{name}</h2>
    </div>
  );
}

export default Details;
