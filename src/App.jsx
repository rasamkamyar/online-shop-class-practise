import { useEffect, useRef, useState } from "react";
import { fetchData } from "./API";
import UserCard from "./UserCard";

const App = () => {
  const [items, setItems] = useState([]);
  const [searchedValue, setSearchedValue] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchData();
        setItems(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const searchUser = () => {
    const query = searchInputRef.current.value.toLowerCase().trim();

    const filteredData = items.filter((item) =>
      item.name.trim().toLowerCase().includes(query),
    );
    setSearchedValue(filteredData);
  };

  return (
    <>
      <header>header</header>

      {loading && <span>loading...</span>}
      {!loading && error && <span>{error}</span>}

      <input
        ref={searchInputRef}
        type="search"
        placeholder="جستجوی نام..."
        onChange={searchUser}
      />

      <button onClick={() => searchUser()}>Search</button>

      <h1>Online shop</h1>

      {(searchedValue ?? items).map((item) => (
        <UserCard key={item.id} user={item} />
      ))}

      <footer>footer</footer>
    </>
  );
};

export default App;
