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
        <h1> Our Vision :</h1>
        <span className={style.missionmatter}>
          Empowering women to recognize, embrace, and assert their rights,
          fostering independence through our expert Counsellings and inspiring a
          transformative perspective on life's possibilities.
        </span>
      </div>
      <div className={style.mission}>
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

      <h1>Our Team</h1>
      <div className={style.one}>
        <div className={style.subimg}>
          <img className={style.image} src={img5} alt="" />
          <h3>P.Saroja</h3>
          <h4>MBA,MA PSYCHOLOGY</h4>
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
          * Behavioural Skills Coach <br />
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
            <h4>FAMILY COUNSELLOR</h4>
            <h4>LIFESKILLS COACH</h4>
            <h4>WOMEN EMPOWER COACH</h4>
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
            <h3>Vadlapatla Bhargavi</h3>
            <h4>M.Tech</h4>
            <h4>STUDENT COUNSELLOR</h4>
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
      <div className={style.faq}>
        <h1 className="text-black">FAQ's</h1>
        <div className={style.faqitem}>
          <h1>Can I get psychological counselling online?</h1>
          <span className="m-3">
            Yes, you can get psychological counselling online In India and from
            any part of the world with BetterLYF.com.Online psychological
            counselling allows you to take counselling from your therapist from
            the comfort of your home and at your convenient time.BetterLYF
            offers quality psychological counselling online by trained and
            experienced listed therapists which is as effective as face- to -
            face counselling.
          </span>
        </div>
        <div className={style.faqitem}>
          <h1>What are the advantages of online counseling?</h1>
          <span className="m-3">
            There are various advantages when it comes to Online Counseling.
            Accessibility is one of the primary advantages. Because the entire
            setup is online, one can access counseling from their home. Online
            counselling also helps with a lot of flexibility when it comes to
            the timing of an appointment which you can choose as per your
            convenience by choosing the mode of Psychological Counselling, be it
            call, video call or chat. Online Counseling is also advantageous in
            terms of finances because you can save the travel & inconvenience
            costs. You can start your online counselling with BetterLYF: The
            most trusted and rated online therapy service provider in India.
          </span>
        </div>
        <div className={style.faqitem}>
          <h1>How much does online therapy cost?</h1>
          <span className="m-3">
            Online therapy in India costs like a traditional setup, sometimes
            lesser. You can expect a 40-60 minute appointment in between 800₹ to
            2000₹.You can start your journey with BetterLYF by purchasing 1
            session for 999 with the Discus Plan or with the Bliss plan where
            the per session cost is as low as ₹ 715. All sessions at BetterLYF
            are for 45 minutes.Therapy prices differ for clients outside India
            as we have to use different mediums to create awareness and deliver
            therapy beyond our borders.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
