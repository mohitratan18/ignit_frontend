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
        <h2>Counseling Psychologist | Educator | Life Coach</h2>
       <h3>(Psycho-Onchologist)</h3>

        <h3>"From Classroom to Care rooms-Supporting minds at every stage"</h3>

        <h3>Student,Family,Grief&Cancer Counseling
        💛Building emotional strength
        📩DM for session&collaborations </h3>

        <h3>🎥Sharing tips on Parenting,Guidance,Lifeskills&Wellness Emotional Care</h3>

        <h3>Supporting Students,Parents,
        Cancer Warriors &Families💛</h3>

      <h3>Educator📚 </h3>

      <h3>To Inspire⏳ </h3>
<h3>To Educate📚 </h3>
<h3>To empower🎯</h3>
        </div>
    </div>
  );
};

export default Aboutall;
