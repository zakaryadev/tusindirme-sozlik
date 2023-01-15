import React from "react";
import Card from "../components/Card";

const TopicCard = () => {
  return (
    <div className="topic">
      <div className="topic-inner">
        <div className="topic-info">
          <div className="topic-title">Uyreniw ushin sozlik</div>
          <div className="topic-desc">
            Muayyan so'zni qidiryapsizmi yoki shunchaki ko'rib chiqyapsizmi, siz
            o'qitish va ko'ngil ochish uchun mo'ljallangan do'stona
            tushuntirishlar va qiziqarli tadbirlar olamini topasiz.
          </div>
          <button className="topic-btn">
            Toliqraq
          </button>
        </div>
        <div className="topic-content">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
