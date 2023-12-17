import React from "react";
import style from "./aboutus.module.css";
import "./aboutus.module.css";
import img1 from "../Assests/img1.jpeg";
import img2 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";
import img4 from "../Assests/img4.jpeg";
//import img5 from "../Assests/img5.jpeg";
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
      <div className={style.two}>
        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img3} alt="" />
            <h3>Sana Praveena</h3>
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
        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img2} alt="" />
            <h3>Vadlapatla Bhargavi</h3>
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
      </div>

      <div className={style.two}>
        <div className={style.one}>
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
            Marital Concerns <br />* Couple Therapy <br /> * Lifestyle Issues
          </span>
        </div>

        <div className={style.one}>
          <div className={style.subimg}>
            <img className={style.image} src={img4} alt="" />
            <h3>Jhansi Krishna</h3>
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
          <h1 className={style.question}>Can I get psychological counselling online?</h1>
          <span className="m-3">
            Yes, you can get psychological counselling online In India and from
            any part of the world with Ignit.com.Online psychological
            counselling allows you to take counselling from your therapist from
            the comfort of your home and at your convenient time.Ignit
            offers quality psychological counselling online by trained and
            experienced listed therapists which is as effective as face- to -
            face counselling.
          </span>
          <h1 className={style.question}>What are the advantages of online counseling?</h1>
          <span className="m-3">
            There are various advantages when it comes to Online Counseling.
            Accessibility is one of the primary advantages. Because the entire
            setup is online, one can access counseling from their home. Online
            counselling also helps with a lot of flexibility when it comes to
            the timing of an appointment which you can choose as per your
            convenience by choosing the mode of Psychological Counselling, be it
            call, video call or chat. Online Counseling is also advantageous in
            terms of finances because you can save the travel & inconvenience
            costs. You can start your online counselling with IGNIT The most
            trusted and rated online therapy service provider in India.
          </span>
          <h1 className={style.question}>Who needs Online counselling and therapy?</h1>
          <span className="m-3">
            Online therapy is for someone who is undergoing discomfort, stress,
            anxiety, depression, insomnia or emotional health challenges due to
            personal, professional or environmental issues such as Covid 19,
            climate change, or even inflation issues etc. Online therapy is also
            for people, who are unable to continue with traditional online
            therapy sessions. Ignit not only helps people heal from the
            above mentioned issues but also helps people to thrive in life with
            counselling for confidence, motivation, professional growth and
            fulfilling relationships.
          </span>
          <h1 className={style.question}>How do I choose an online counsellor? </h1>
          <span className="m-3">
            Asking a few questions to yourself will help you narrow down your
            search for an online counselor, such as - the concern that you would
            want to address with your counsellor ? You might not know the
            specifics until a few sessions.But a broader general spectrum like
            relationships, emotional issues, or others might help.Once you are
            aware of the concern you need assistance with, you can take a look
            at the Counselor's profile and if they have experience and expertise
            in handling the same issue.BetterLFY has a team of online therapists
            that excel in dealing with issues related to marriage, stress &
            anxiety, academics, professional life, friends, parenting, self -
            esteem and confidence and many more.
          </span>
          <h1 className={style.question}>What to keep in mind during online counseling? </h1>
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
            you from forgetting any important matters you need help with
          </span>
          <h1 className={style.question}>What is the medium for online therapy? </h1>
          <span className="m-3">
            Like the various mediums for online therapy used these days,
            Ignit offers you to choose between video calls, audio calls and
            chat-based online therapy sessions which is completely safe to use.
          </span>
          <h1 className={style.question}>
            Is my information secure and confidential in online counselling?
          </h1>
          <span className="m-3">
            Yes, online counseling is secure and all your information is
            confidential. Online counseling setups ensure privacy and
            confidentiality of a client. Ignit offers anonymous and
            confidential counselling where the client's records are accessible
            only by the counsellor and the client. Usually, the portals used for
            online therapy are HIPAA and FERPA compliant portals such as Zoom
            (video platform) or tawk.to (chat platform), or Spark (call
            platform). Though these are not Indian laws, the usual platforms
            used for various modes of online counselling in India as well are
            the ones mentioned above and hence have these regulations in place.
          </span>
          <h1 className={style.question}>Is online counselling expensive? </h1>
          <span className="m-3">
            Online Counseling is not expensive. In fact, it turns out to be less
            expensive than traditional listed online therapy because it helps
            you save travel costs and also online therapy sessions at Ignit
            are more cost-effective. Therefore, online counselling being
            expensive is not false and online counseling platforms like
            Ignit offer counselling plans available at various price points.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
