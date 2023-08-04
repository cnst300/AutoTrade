import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "../style/Rent.css";
// import data from "../data/data.json";
import axios from "axios";

function Rent() {
  const [selectedItem, setSelectedItem] = useState("Show All");
  const [data, setData] = useState(null);

  const getData = () => {
    axios.get("http://localhost:8000/auth/rent").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="rentContainer">
        <SideBar setSelectedItem={setSelectedItem} />
        <div className="containerCards">
          {selectedItem === "Show All"
            ? data?.map((car, index) => (
                <tr key={index}>
                  <div className="image">
                    <img className="image__img" src={car.image} alt="" />
                    <div className="image__overlay image__overlay--primary">
                      <div className="image_title">
                        <h3>Make:</h3>
                        <h4>{car.make}</h4>
                        <h3>Model:</h3>
                        <h4>{car.model}</h4>
                        <h3>Price/day:</h3>
                        <h4>{car.priceperday}€ </h4>
                        <h3>Availability:</h3>
                        <h4>{car.available ? "Available" : "Unavailable"}</h4>
                      </div>
                    </div>
                  </div>
                </tr>
              ))
            : data
                ?.filter(
                  (car) =>
                    car.make === selectedItem ||
                    car.model === selectedItem ||
                    car.engine === selectedItem
                )
                .map((car, index) => (
                  <tr key={index}>
                    <div className="image">
                      <img className="image__img" src={car.image} alt="" />
                      <div className="image__overlay image__overlay--primary">
                        <div className="image_title">
                          <h3>Make:</h3>
                          <h4>{car.make}</h4>
                          <h3>Model:</h3>
                          <h4>{car.model}</h4>
                          <h3>Price/day:</h3>
                          <h4>{car.priceperday}€ </h4>
                          <h3>Availability:</h3>
                          <h4>{car.available ? "Available" : "Unavailable"}</h4>
                        </div>
                      </div>
                    </div>
                  </tr>
                ))}
        </div>
      </div>
    </>
  );
}

export default Rent;
