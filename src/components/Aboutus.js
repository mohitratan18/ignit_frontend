import React from "react";
import style from "./aboutus.module.css";
import "./aboutus.module.css";
import img1 from "../Assests/img1.jpeg";
import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
import img4 from "../Assests/img4.jpeg";
import img5 from "../Assests/img5.jpeg";
import { useNavigate } from "react-router-dom";const Aboutus = () => {
  const navigate = useNavigate();
  const handleclick = ()=>{
    navigate('/aboutall');
  }
  return (
    <div className={style.container}>
      <h1>ABOUT US</h1>

      <div className={style.one}>
        <div className={style.subimg}>
          <img className={style.image} src={img5} alt="" />
          <h3>P. Saroja</h3>
          <h4>MBA,MA,(PSYCHOLOGY)</h4>
          <h4>COUNSELLING PSYCHOLOGIST</h4>
          <br />
          <button type="button" className="btn btn-primary text-black " onClick={handleclick}>
            Read more
          </button>
        </div>
        <span className={style.matter}>
          * Behavioural Counsellor <br />
        </span>
      </div>

      <div className={style.two}>
        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img1} alt="" />
            <h3>CS.Gontla Amulya</h3>
            <h4>BA,LLM,ACS</h4>
            <h4>ADVOCATE</h4>
            <h4>RELATIONSHIP COUNSELLOR</h4> <br />
            <button type="button" className="btn btn-primary text-black " onClick={handleclick}>
              Read more
            </button>
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
            <h4>Msc,B.E.d</h4>
            <h4>Family counsellor</h4>
            <h4>Lifeskills coach</h4>
            <h4>Women Empower coach</h4>
            <br />
            <button type="button" className="btn btn-primary text-black " onClick={handleclick}>
              Read more
            </button>
          </div>
          <span className={style.matter}>
            * Aligns Relationships <br /> * Improves Quality of life <br /> *
            Women Empowerment <br /> * Adolscent Issues <br /> * Motivational
            Speaker{" "}
          </span>
        </div>
      </div>

      <div className={style.two}>
        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img2} alt="" />
            <h3>Bhargavi Vadlapatla</h3>
            <h4>M.Tech</h4>
            <h4>Student counsellor</h4>
            <br />
            <button type="button" className="btn btn-primary text-black m-{3}" onClick={handleclick}>
              Read more
            </button>
          </div>
          <span className={style.matter}>
            * Teenage Issues <br /> * Carrer Assesments <br /> * Motivating
            students <br />* Empowering Students
          </span>
        </div>

        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img4} alt="" />
            <h3>Jhansi Krishna</h3>
            <h4>B.com,DCGC</h4>
            <h4>STUDENT COUNSELLOR</h4>
            <br />
            <button type="button" className="btn btn-primary text-black " onClick={handleclick}>
              Read more
            </button>
          </div>
          <span className={style.matter}>
            * Exam-stress <br /> * Procastination <br /> * Teenage Issues <br />
            * Student Motivation <br /> * Low self Esteem
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
