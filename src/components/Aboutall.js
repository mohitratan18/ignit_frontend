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
        Counseling Psychologist🎓|Educator📚|Life Coach👩‍🏫
(Psycho-Onchologist)

"From Classroom to Care rooms-Supporting minds at every stage"

Student,Family,Grief&Cancer Counseling
💛Building emotional strength
📩DM for session&collaborations

🎥Sharing tips on Parenting,Guidance,Lifeskills&Wellness Emotional Care

Supporting Students,Parents,
Cancer Warriors &Families💛

Educator📚

To Inspire⏳
To Educate📚
To empower🎯
        </h4>
      </div>
    </div>
  );
};

export default Aboutall;
