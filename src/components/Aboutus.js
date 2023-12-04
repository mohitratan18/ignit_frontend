import React from "react";
import style from "./aboutus.module.css"
import img1 from "../Assests/img1.jpeg";
import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
import img4 from "../Assests/img4.jpeg";
import img5 from "../Assests/img5.jpeg";

const Aboutus = () => {
  return (
    <div className={style.container}>
      
      <h1>ABOUT US</h1>

      <div className={style.one}>
        <div className={style.subimg}>
          <img className={style.image} src={img5} alt="" />
          <h3>P. Saroja</h3>
          <h4>MBA,MA,PSYCHOLOGGY</h4>
          <h4>PSYCHOLOGIST</h4>
        </div>
        <span className={style.matter}>
          * Pre-Maratial Counselling <br /> * Relationship issues <br /> *
          Marital Concerns <br />* Couple Therapy <br /> * Lifestyle Issues
        </span>
      </div>

      <div className={style.two}>
      <div className={style.one}>
        <div className={style.subimg}>
          <img className={style.image} src={img1} alt="" />
          <h3>CS.Gontla Amulya</h3>
          <h4>BA,LLM,ACS</h4>
          <h4>ADVOCATE</h4>
          <h4>RELATIONSHIP COUNSELLOR</h4>
        </div>
        <span className={style.matter}>
          * Pre-Maratial Counselling <br /> * Relationship issues <br /> *
          Marital Concerns <br />* Couple Therapy <br /> * Lifestyle Issues
        </span>
      </div>

        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img3} alt="" />
            <h3>Sana Praveena</h3>
            <h4>Msc,B.ed,MA,Psychology</h4>
            <h4>Family counsellor</h4>
            <h4>Lifeskills coach,Women Empower coach</h4>
          </div>
          <span className={style.matter}>
            * Aligns Relationships <br /> * Improves Quality of life <br /> *
            Women Empowerment
          </span>
        </div>
      </div>

      <div className={style.two}>
        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img2} alt="" />
            <h3>Bhargavi Vadlapatla</h3>
            <h4>M.Tech,MA Psychology</h4>
          </div>
          <span className={style.matter}>
            * Teenage Issues <br /> * Carrer Assesments <br /> *
            Motivating students <br />* Empowering Students <br /> * Clear Stigma in students
          </span>
        </div>

        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img4} alt="" />
            <h3>Jhansi Krishna</h3>
            <h4>B.com,DCGC</h4>
            <h4>STUDENT COUNSELLOR</h4>
          </div>
          <span className={style.matter}>
            * Exam-stress <br /> * Procastination <br /> *
            Teenage Issues <br />* Student Motivation <br /> * Low self Esteem
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
