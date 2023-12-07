import React from "react";
import style from "./aboutus.module.css";
import "./aboutus.module.css";
import img1 from "../Assests/img1.jpeg";
import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
import img4 from "../Assests/img4.jpeg";
import img5 from "../Assests/img5.jpeg";
import services from "../Assests/services.jpeg";
import { useNavigate } from "react-router-dom";
const Aboutus = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/aboutall");
  };
  return (
    <div className={style.container}>
      <h1>ABOUT US</h1>
      <div className={style.mission}>
        <h1> Our Mission :</h1>
        <span className={style.missionmatter}>
          I feel glad to share that i have a rich background experience in
          teaching across schools and colleges, I bring a wealth of knowledge
          and passion to education. As a life skills and career coach, I extend
          personalized counseling services to students, guiding them on a path
          of self-discovery and informed career choices. Committed to making a
          positive impact, I actively contribute to the empowerment of women and
          adolescent girls. Through a blend of teaching, counseling, and
          advocacy, I aspire to foster growth and resilience in individuals.
          Let's embark on this journey together!
          <br />
          Empowering women to recognize, embrace, and assert their rights,
          fostering independence through our expert Counsellings and inspiring a
          transformative perspective on life's possibilities.
        </span>
      </div>
      <div className={style.mission}>
        <h1> Our Vission :</h1>
        <span className={style.missionmatter}>
          "Life Skills Matter! Learning essential life skills isn't just a
          lesson for today, it's a roadmap for a successful tomorrow. From
          students to seasoned individuals, mastering communication,
          problem-solving, resilience, adaptability etc etc are the key to
          navigate one's life's journey with confidence and success. Start
          today, empower your tomorrows!"
        </span>
      </div>
      <div className={style.services}>
        <h1>Our Services</h1>
        <img src={services} alt="" className={style.serviceimg} />
      </div>
      <h1>Our Members</h1>
      
      <div className={style.one}>
        <div className={style.subimg}>
          <img className={style.image} src={img5} alt="" />
          <h3>P. Saroja</h3>
          <h4>MBA,MA,(PSYCHOLOGY)</h4>
          <h4>COUNSELLING PSYCHOLOGIST</h4>
          <br />
          <button
            type="button"
            className="btn btn-primary text-black "
            onClick={handleclick}
          >
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
            <button
              type="button"
              className="btn btn-primary text-black "
              onClick={handleclick}
            >
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
            <button
              type="button"
              className="btn btn-primary text-black "
              onClick={handleclick}
            >
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
            <button
              type="button"
              className="btn btn-primary text-black m-{3}"
              onClick={handleclick}
            >
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
            <button
              type="button"
              className="btn btn-primary text-black "
              onClick={handleclick}
            >
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
