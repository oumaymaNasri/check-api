import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataFetching.css";
import UserCard from "./UserCard";

const DataFetching = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li><UserCard card={user}/></li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;

