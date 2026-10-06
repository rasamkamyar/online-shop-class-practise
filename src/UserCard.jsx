import "./App.css";

const UserCard = ({ user }) => {
  const { name, phone, email, address, company } = user;
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
      </div>
    </div>
  );
};

export default UserCard;
