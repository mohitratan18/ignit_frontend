import React from "react";
import Styles from "./aboutall.module.css";
// import img1 from "../Assests/img1.jpeg";
import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
import img4 from "../Assests/img4.jpeg";
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
      <div className={Styles.item}>
        <img src={img2} alt="" className={Styles.image} />
        <h4>
          Bhargavi, a distinguished teaching professional with M.Tech Background
          worked as student counsellor providing high quality services to
          students. Beyond career guidance extends to enhancing interpersonal
          relationships and nurturing skills for happier and more resilient
          life. Approach is rooted in evidence- based psychological principles ,
          ensuring that clients not only discover their potential but also
          acquire the tools to..thrive in an ever-changing world. With my
          guidance individuals can chart a path to personal and professional
          fullfillment
        </h4>
      </div>
      {/* <div className={Styles.item}>
        <img src={img1} alt="" className={Styles.image} />
        <h4>
          This is Amulya Rajesh with a unique background of an Advocate and a
          Relationship Counsellor where I can navigate complex and sensitive
          situations for my clients.I can address the intersection of law and
          mental health involving Domestic Violence, Substance Abuse and Mental
          Health Issues and ensure the well-being of my clients by guiding them
          to lead a hurdle free and a happy life.
        </h4>
      </div> */}
      <div className={Styles.item}>
        <img src={img4} alt="" className={Styles.image} />
        <h4>
          This is Jhansi Krishna a passionate and a dedicated commerce graduate
          with keen interest in guiding students towards successful
          careers.Holds a diploma in psychology guidance and counselling with a
          deep understanding of human behaviour.As a Certified counsellor
          committed to providing personalized career advice and help individuals
          to navigate their professional journey unlocking their potential and
          achieve their career aspirations.
        </h4>
      </div>
    </div>
  );
};

export default Aboutall;
