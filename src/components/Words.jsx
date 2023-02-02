import React from "react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import bg from "../assets/img/ab.svg";
import axios from "axios";

const Words = () => {
  const navigate = useNavigate();

  const req = window.location.search;

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://abbc.uz/api/words${req}`)
      .then((res) => setData(res?.data?.data));
  }, [req]);
  return (
    <section className="words" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="words-title">Sózler dizimi</div>
        <div className="words-list">
          <ul className="words-list_item">
            {data.map((item, indx) => {
              return (
                <li
                  onClick={() => navigate(`/wordslist/item${req}`)}
                  key={indx}
                >
                  {item.latin}
                </li>
              );
            })}
          </ul>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Words;
