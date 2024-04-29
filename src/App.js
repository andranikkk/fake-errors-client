/* eslint-disable react-hooks/exhaustive-deps */
import { InputNumber, Button } from "antd";
import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

function App() {
  const [region, setRegion] = useState("georgia");
  const [errors, setErrors] = useState([0]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handleRandomSeed = () => {
    const seed = Math.floor(Math.random() * 10000);
    setErrors(seed);
  };

  const fetchUserData = () => {
    fetch(
      `https://fake-errors.onrender.com/api/users?page=${page}&region=${region}&errors=${errors}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  useEffect(() => {
    fetchUserData();
  }, [region, errors]);

  const fetchMoreUserData = () => {
    fetch(
      `https://fake-errors.onrender.com/api/users?page=${
        page + 1
      }&region=${region}&errors=${errors}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setPage(page + 1);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchMoreUserData}
      hasMore={true}
    >
      <div className="table">
        <div className="controls">
          <div className="group">
            <label htmlFor="region">Region: </label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option label="Saudi Arabia" value="arabic">
                Poland
              </option>
              <option label="Russia" value="russia">
                USA
              </option>
              <option label="Georgia" value="georgia">
                Georgia
              </option>
            </select>
          </div>
          <div className="group">
            <label htmlFor="error-slider">Errors: </label>
            <input
              type="range"
              id="error-slider"
              min="0"
              max="10"
              step={0.25}
              value={+errors}
              onChange={(e) => setErrors(e.target.value)}
            />
            <input
              type="number"
              id="error-number"
              min="0"
              max="1000"
              value={+errors}
              onChange={(e) => setErrors(e.target.value)}
            />
          </div>
          <div className="group">
            <InputNumber type="text" placeholder="seed" />
            <Button id="random-seed" onClick={handleRandomSeed}>
              Random Seed
            </Button>
          </div>

          <Button>
            <CSVLink
              data={
                users.length > 0
                  ? [
                      Object.keys(users[0]),
                      ...users.map((e) => Object.values(e)),
                    ]
                  : []
              }
            >
              Export
            </CSVLink>
          </Button>
        </div>
        <table className="mother-table" id="user-table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Random Identifier</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.index}>
                <td>{user.index}</td>
                <td>{user.identifier}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </InfiniteScroll>
  );
}

export default App;
