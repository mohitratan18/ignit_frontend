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
        <h1 style={{fontSize: "1.5rem", fontWeight: "bold"}}>Counseling Psychologist | Educator | Life Coach</h1><br/>
       <h3 style={{fontSize: "1.5rem", fontWeight: "bold"}}>(Psycho-Onchologist)</h3>
<br />
<div className={Styles.text}>
        <h3>"From Classroom to Care rooms-Supporting minds at every stage"</h3><br />

        <h3>Student,Family,Grief&Cancer Counseling💛Building emotional strength📩DM for session&collaborations </h3><br />

        <h3>🎥Sharing tips on Parenting,Guidance,Lifeskills&Wellness Emotional Care</h3><br />

        <h3>Supporting Students,Parents,Cancer Warriors &Families💛</h3><br />

      <h3>Educator📚 </h3><br />

      <h3>To Inspire⏳ </h3><br />
  <h3>To Educate📚 </h3><br />
<h3>To empower🎯</h3><br />
</div>
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
