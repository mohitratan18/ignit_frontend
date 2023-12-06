import React from "react";
import Styles from "./aboutall.module.css";
import img1 from "../Assests/img1.jpeg";
import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
import img4 from "../Assests/img4.jpeg";
import img5 from "../Assests/img5.jpeg";

const Aboutall = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <img src={img5} alt="" className={Styles.image} />
        <p>
          I am a dedicated professional with a diverse educational background,
          holding both an MBA and an MA in Psychology. As a seasoned
          psychologist, my expertise lies in navigating the complexities of the
          human mind. My strength lies in handling challenges with unwavering
          patience, ensuring a compassionate and effective approach to
          psychological well-being.
        </p>
      </div>
      <div className={Styles.item}>
        <img src={img1} alt="" className={Styles.image} />
        <h4>
        This is Amulya Rajesh with a unique background of an Advocate and a Relationship Counsellor where I can navigate complex and sensitive situations for my clients.I can address the intersection of law and mental health involving Domestic Violence, Substance Abuse and Mental Health Issues and ensure the well-being of my clients by guiding them to lead a hurdle free and a happy life.
        </h4>
      </div>
      <div className={Styles.item}>
        <img src={img3} alt="" className={Styles.image} />
        <h4>
          I am a dedicated professional with a diverse educational background,
          holding both an MBA and an MA in Psychology. As a seasoned
          psychologist, my expertise lies in navigating the complexities of the
          human mind. My strength lies in handling challenges with unwavering
          patience, ensuring a compassionate and effective approach to
          psychological well-being.
        </h4>
      </div>
      <div className={Styles.item}>
        <img src={img2} alt="" className={Styles.image} />
        <h4>
          Bhargavi , a distinguished teaching professional with M.Tech
          Background worked as student counsellor providing high quality
          services to students , aiming to equip them with the knowledge and
          insights necessary to make well - informed career decisions that align
          with their individual decisions, interests and talents . beyond career
          guidance extends to enhancing interpersonal relationships and
          nurturing skills for happier and more resilient life.Approach is
          rooted in evidence- based psychological principles , ensuring that
          clients not only discover their potential but also acquire the tools
          to..thrive in an ever-changing world . with my guidance individuals
          can chart a path to personal and professional fuillfillment
        </h4>
      </div>
      <div className={Styles.item}>
        <img src={img4} alt="" className={Styles.image} />
        <h4>
          This is Jhansi Krishna a passionate and a dedicated commerce graduate
          with keen interest in guiding students towards successful
          careers.Holds a diploma in psychology guidance and counselling with a
          deep understanding of human behaviour.Certified Student counsellor
          committed to providing personalized career advice and help individuals
          to navigate their professional journey unlocking their potential and
          achieve their career aspirations.
        </h4>
      </div>
    </div>
  );
};

export default Aboutall;
