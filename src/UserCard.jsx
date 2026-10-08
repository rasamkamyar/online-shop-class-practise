import { Link } from "react-router-dom";
import "./App.css";
import Details from "./Details";

const UserCard = ({ user }) => {
  const { name, phone, email, address, company, id } = user;
  const { city, street, zipcode } = address;
  const { name: companyName } = company;

  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>

      <div className="user-info">
        <p className="user-email">
          <strong>ایمیل:</strong> {email}
        </p>
        <p className="user-phone">
          <strong>تلفن:</strong> {phone}
        </p>
        <p className="user-company">
          <strong>شرکت:</strong> {companyName}
        </p>
        <p className="user-address">
          <strong>آدرس:</strong> {city}، {street} (کد پستی: {zipcode})
        </p>
        <button>
          <Link to={`/users/${id}`} state={{user}}  >مشاهده جزئیات</Link>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
