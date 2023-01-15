import React from "react";
import Card from "../components/Card";
import Badge from "./Badge";

const TopicCard = () => {
  return (
    <React.Fragment>
      <div className="topic">
        <div className="topic-inner">
          <div className="topic-info">
            <Badge
              t={"Úyreniw ushın álipbe"}
              p={"10px 35px"}
              tt={"uppercase"}
            />
            <h2 className="topic-title">Uyreniw ushin sozlik</h2>
            <p className="topic-desc">
              Muayyan so'zni qidiryapsizmi yoki shunchaki ko'rib chiqyapsizmi,
              siz o'qitish va ko'ngil ochish uchun mo'ljallangan do'stona
              tushuntirishlar va qiziqarli tadbirlar olamini topasiz.
            </p>
            <button className="topic-btn">Toliqraq</button>
          </div>
          <div className="topic-content">
            <Card />
          </div>
        </div>
      </div>
      {/* // second */}

      <div className="topic">
        <div className="topic-inner">
          <div className="topic-content">
            <Card />
          </div>
          <div className="topic-info">
            <Badge
              t={"Úyreniw ushın álipbe"}
              p={"10px 35px"}
              tt={"uppercase"}
              style={{ marginRight: 0 }}
            />
            <h2 className="topic-title">Uyreniw ushin sozlik</h2>
            <p className="topic-desc">
              Muayyan so'zni qidiryapsizmi yoki shunchaki ko'rib chiqyapsizmi,
              siz o'qitish va ko'ngil ochish uchun mo'ljallangan do'stona
              tushuntirishlar va qiziqarli tadbirlar olamini topasiz.
            </p>
            <button className="topic-btn">Toliqraq</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicCard;
