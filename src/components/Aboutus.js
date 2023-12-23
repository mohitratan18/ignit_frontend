import React from "react";
import style from "./aboutus.module.css";
import "./aboutus.module.css";
// import img1 from "../Assests/img1.jpeg";
import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
import img4 from "../Assests/img4.jpeg";
//import img5 from "../Assests/img5.jpeg";
// import services from "../Assests/services.jpeg";
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
        <span className={style.missionmatter}>
          "Life Skills Matter! Learning essential life skills isn't just a
          lesson for today, it's a roadmap for a successful tomorrow. From
          students to seasoned individuals, mastering communication,
          problem-solving, resilience, adaptability etc etc are the key to
          navigate one's life's journey with confidence and success. Start
          today, empower your tomorrows!"
        </span>
      </div>
      <div className={style.mission}>
        <h1> Our Vision :</h1>
        <span className={style.missionmatter}>
          Empowering women to recognize, embrace, and assert their Strengths,
          fostering individualtiy through our expert Counsellings and inspiring
          a transformative perspective on life's possibilities.
          <br />
          We Provide Real-Time discussions to foster the interactive learning
          and knowledge sharing with our Webinars.We encourage Community
          building enhancing both education and social connectivity.
        </span>
      </div>
      <div className={style.services}>
        <h1>Our Services</h1>
        <ol className={style.list}>
          <li>* Individual Counselling</li>
          <li>* Premarital Counselling</li>
          <li>* Couple Counselling</li>
          <li>* Family Counselling</li>
          <li>* Career Counselling</li>
          <li>* Education Counselling</li>
          <li>* Adolescent Counselling</li>
          <li>* Ageing Counselling</li>
          <li>* Infertility Counselling</li>
          <li>* De-Addiction Counselling</li>
          <li>* Rehabilitation Counselling</li>
        </ol>
        {/* <img src={services} alt="" className={style.serviceimg} /> */}
      </div>

      <h1>Our Team</h1>
      <div className={style.two}>
        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img3} alt="" />
            <h3 className="font-weight-bold">SANA PRAVEENA</h3>
            <h4>Family Counsellor</h4>
            <h4>Lifeskills Coach</h4>
            <h4>Women Empower Coach</h4>
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
            Women Empowerment <br /> * Adolescent Issues <br /> * Motivational
            Speaker <br /> * Couple Counselling{" "}
          </span>
        </div>
        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img2} alt="" />
            <h3 className="font-weight-bold">VADLAPATLA BHARGAVI</h3>
            <h4>Student Counsellor</h4>
            <h4>Relationship Coach</h4>
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
            * Teenage Issues <br /> * Career Assesments <br /> * Motivating
            students <br />* Empowering Students <br /> * Pre-Marital
            Counselling <br />* Relationship Counselling
          </span>
        </div>
      </div>

      <div className={style.two}>
        {/* <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img1} alt="" />
            <h3>CS.Gontla Amulya</h3>
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
            Marital Concerns <br />* Couple counselling <br /> * Lifestyle
            Issues
          </span>
        </div> */}

        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img4} alt="" />
            <h3 className="font-weight-bold">JHANSI KRISHNA</h3>
            <h4>Student Counsellor</h4>
            <h4>Parenting Coach</h4>
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
            * Exam-stress <br /> * Procrastination <br /> * Teenage Issues <br />
            * Student Motivation <br /> * Low self Esteem <br /> * Parent-teen
            issues
          </span>
        </div>
      </div>
      <div className={style.faq}>
        <h1 className="text-black">FAQ's</h1>
        <div className={style.faqitem}>
          <h1 className={style.question}>Can I get counselling online?</h1>
          <span className="m-3">
            Yes, you can get counselling online In India and from any part of
            the world with ignit.co.in . Online counselling allows you to take
            counselling from your counsellors from the comfort of your home and
            at your convenient time. Ignit offers quality counselling online by
            trained and experienced listed counsellors which is as effective as
            face-to-face counselling.
          </span>
          <h1 className={style.question}>
            What type of webinars and how often are they conducted?
          </h1>
          <span className="m-3">
            Basically, our team conducts webinars frequently on various topics
            and after the meeting, they are recorded and provided on the
            meetings page of the website. The session links can be found in the
            meetings box.
          </span>
          <h1 className={style.question}>Who needs Online counselling ?</h1>
          <span className="m-3">
            Online counselling is for someone who is undergoing discomfort,
            stress, anxiety, depression, insomnia or emotional health challenges
            due to personal, professional or environmental issues such as Covid
            19, climate change, or even inflation issues etc. Online counselling
            is also for people, who are unable to continue with traditional
            online counselling sessions. Ignit not only helps people heal from
            the above mentioned issues but also helps people to thrive in life
            with counselling for confidence, motivation, professional growth and
            fulfilling relationships.
          </span>
          <h1 className={style.question}>
            How do I choose an online counsellor?{" "}
          </h1>
          <span className="m-3">
            Asking a few questions to yourself will help you narrow down your
            search for an online counselor, such as - the concern that you would
            want to address with your counsellor ? You might not know the
            specifics until a few sessions.But a broader general spectrum like
            relationships, emotional issues, or others might help.Once you are
            aware of the concern you need assistance with, you can take a look
            at the Counselor's profile and if they have experience and expertise
            in handling the same issue.Ignit has a team of online consellers
            that excel in dealing with issues related to marriage, stress &
            anxiety, academics, professional life, friends, parenting, self -
            esteem and confidence and many more.
          </span>
          <h1 className={style.question}>
            What to keep in mind during online counselling?{" "}
          </h1>
          <span className="m-3">
            Keeping a few things in mind before and during the counselling
            session will help you focus on the concerns you need help with
            without any hurdles. Ensure you have a high-speed internet
            connection so that there will not be any interruptions during the
            session. The place you have chosen is private and safe, without any
            noise around so that you can talk conveniently. Feel free and
            open-minded to sharing the facts with your counsellor. You can also
            write down the key points you want to discuss with the counsellor
            before starting the online counselling session, as this will keep
            you from forgetting any important matters you need help with.
          </span>
          <h1 className={style.question}>
            What is the medium for online counselling?{" "}
          </h1>
          <span className="m-3">
            Like the various mediums for online counselling used these days,
            Ignit offers Webinars in Google-Meet, Zoom and chat-based online
            counselling sessions which is completely safe to use.
          </span>
          <h1 className={style.question}>
            Is my information secure and confidential in online counselling?
          </h1>
          <span className="m-3">
            Yes, online counselling is secure and all your information is
            confidential. Online counselling setups ensure privacy and
            confidentiality of a client. Ignit offers anonymous and confidential
            counselling where the client's records are accessible only by the
            counsellor and the client. Usually, the portals used for online
            counselling are Zoom and Google Meet.
          </span>
          <h1 className={style.question}>Is online counselling expensive? </h1>
          <span className="m-3">
            Online counselling is not expensive. In fact, it turns out to be
            less expensive than traditional listed online counselling because it
            helps you save travel costs and also online counselling sessions at
            Ignit are more cost-effective. Therefore, online counselling being
            expensive is not false and online counselling platforms like Ignit
            offer counselling plans available at various price points.
          </span>
          <h1 className={style.question}>
            What are the advantages of online counselling?
          </h1>
          <span className="m-3">
            There are various advantages when it comes to Online counselling.
            Accessibility is one of the primary advantages. Because the entire
            setup is online, one can access counselling from their home. Online
            counselling also helps with a lot of flexibility when it comes to
            the timing of an appointment which you can choose as per your
            convenience by choosing the mode of Psychological Counselling, be it
            call, video call or chat. Online counselling is also advantageous in
            terms of finances because you can save the travel & inconvenience
            costs. You can start your online counselling with IGNIT The most
            trusted and rated online counselling service provider in India.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
