import React from "react";
import Styles from "./aboutall.module.css";
// import img1 from "../Assests/img1.jpeg";
//import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
// import img4 from "../Assests/img4.jpeg";
// import img5 from "../Assests/img5.jpeg";

const Aboutall = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <img src={img3} alt="" className={Styles.image} />
        <h4>
          I feel glad to share that i have a extent background experience in
          teaching across schools and colleges, I bring a wealth of knowledge
          and passion to education. As a life skills and Women Empowerment
          coach, I extend personalized counseling services to individuals,
          guiding them on a path of self-discovery and motivate them. Committed
          to making a positive impact, I actively contribute to the empowerment
          of women and adolescent girls. Through a blend of teaching,
          counseling, and advocacy, I aspire to foster growth and resilience in
          individuals. Let's embark on this journey together!
        </h4>
      </div>
    </div>
  );
};

export default Aboutall;
