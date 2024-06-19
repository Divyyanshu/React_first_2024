/* eslint-disable react/prop-types */
import "./Card.css";
import Images1 from "../assests/image1.jpg";


function Card({name,age}) {
  return (
      <div className="card">
        <img src={Images1} alt="" className="card_img" />
        <div>
          <h1>{name}</h1>
          <h2>Age : {age}</h2>
        </div>
      </div>
  );
}

export default Card;
