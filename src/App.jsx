import { useEffect, useRef, useState } from "react";
// import { BASE_URL, fetchData } from "./API";
import UserCard from "./UserCard";
import api, { getUsers } from "./config";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const [items, setItems] = useState([]);
  const [searchedValue, setSearchedValue] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);
  // const {
  //   data: items = [],
  //   isError,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUsers,
  // });

  // useEffect(() => {
  //   const loadData = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const res = await fetch(`${BASE_URL}`);
  //       const data = await res.json();
  //       setItems(data);
  //     } catch (error) {
  //       console.error(error.message);
  //     } finally {
  //       setLoading(false)
  //     }
  //   };

  //   loadData();
  // }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await api.get("/users");
        setItems(res);
      } catch (error) {
        console.log(error.message);
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
  const displayedData = searchedValue ?? items;
  return (
    <>
      <header>header</header>

      {loading && <span>loading...</span>}
      {loading && error && <span>{error.message}</span>}

      <input
        ref={searchInputRef}
        type="search"
        placeholder="جستجوی نام..."
        onChange={searchUser}
      />

      <button onClick={() => searchUser()}>Search</button>

      <h1>Online shop</h1>

      {displayedData?.map((item) => (
        <UserCard key={item.id} user={item} />
      ))}

      <footer>footer</footer>
    </>
  );
};

export default App;
