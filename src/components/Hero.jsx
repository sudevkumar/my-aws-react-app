import React, { useEffect, useState } from "react";
import "./hero.css";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
