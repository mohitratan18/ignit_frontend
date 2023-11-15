import React from "react";
import "../Assests/Aboutus.css";
import img2 from "../Assests/img1.jfif";
import img1 from "../Assests/img2.jpeg";
import img3 from "../Assests/img3.jfif";

const TeamMember = ({ imgSrc, alt, name, role, bio }) => (
  <div className="team-member flex justify-center items-center">
    <img
      src={imgSrc}
      alt={alt}
      className="team-member-img rounded-full w-[300px] h-[120px] one1" 
    />
    <div>
      <h4 className="p-2 text-xl font-bold">{role}</h4>
      <h3 className="p-2 text-xl font-bold">{name}</h3>
      <p className="p-2 text-xl">{bio}</p>
    </div>
  </div>
);
const newone = {
  background: "radial-gradient(#caf0f8,#6b9fec)",
};
const Aboutus = () => (
  <div className="about-us-container h-auto w-auto flex flex-col justify-center items-center mt-5" style={{ newone }}>
    <section className="about-section">
      <h2 className="text-2xl font-bold p-2">Welcome </h2>
      <p>
        We are dedicated to helping students navigate the challenges of academic
        life, providing counseling services, and fostering skill development for
        a brighter future. We are here to support you on your journey to
        personal and academic success. Our team of experienced counselors and
        life skill coaches are dedicated to helping students and families
        overcome challenges and thrive in all aspects of life.
      </p>

      <h2 className="text-2xl p-2 font-bold">Our Mission</h2>
      <p>
        Empowering students to achieve their full potential by offering
        personalized counseling, guidance, and skill-building opportunities. We
        believe in nurturing not just academic success but also personal and
        professional growth. Our main motto is to provide compassionate and
        effective counseling services for students, offer guidance for families
        facing difficulties, and empower individuals with life skills to
        navigate the complexities of life successfully.
      </p>

      <div className="mem">
        <h2 className="text-2xl p-5 font-bold">Meet the Team</h2>

        <TeamMember
          imgSrc={img1}
          alt="Team Member 1"
          name="Bhargavi Vadlapatla"
          role="M.Tech, Student Counsellor"
          bio="Bhargavi, a distinguished professional with M.Tech Background worked as a student counsellor providing high-quality services to students, aiming to equip them with the knowledge and insights necessary to make well-informed career decisions that align with their individual decisions, interests, and talents. Beyond career guidance extends to enhancing interpersonal relationships and nurturing skills for a happier and more resilient life. Approach is rooted in evidence-based psychological principles, ensuring that clients not only discover their potential but also acquire the tools to thrive in an ever-changing world. With my guidance, individuals can chart a path to personal and professional fulfillment."
        />

        <TeamMember
          imgSrc={img2}
          alt="Team Member 2"
          name="Amulya Rajesh Dasari"
          role=" B.A. LL.M., ACS, Dip. Psycology and Counselling 
          Advocate & Family Counsellor"
          bio="I am an Advocate, a qualified company secretary, and a diploma holder in psychology and counseling. Additionally, I hold the esteemed title of a qualified Zone Trainer of JCI. With over a decade of experience as an advocate, my approach blends rich legal knowledge with a humanistic touch to focus on effective problem-solving. My expertise spans diverse areas, including resolving family issues, handling civil and criminal cases, and managing corporate compliances from incorporation to annual requirements for companies and startup registrations. I specialize in drafting legal agreements, MoUs, and various other contractual documents.Driven by the rising frequency of divorces, I have founded Unbox Happiness with a mission to promote happy marriages."
        />

        <TeamMember
          imgSrc={img3}
          alt="Team Member 3"
          name="Praveena Sana"
          role="M.Sc(Physics), B.Ed, M.A(Psychology) Life Skills Coach and Family Counsellor"
          bio="I feel glad to share that I have a rich background experience in teaching across schools and colleges, I bring a wealth of knowledge and passion to education. As a life skills and career coach, I extend personalized counseling services to students, guiding them on a path of self-discovery and informed career choices. Committed to making a positive impact, I actively contribute to the empowerment of women and adolescent girls. Through a blend of teaching, counseling, and advocacy, I aspire to foster growth and resilience in individuals. Let's embark on this journey together!"
        />

        {/* Add more team members as needed */}
      </div>
    </section>
  </div>
);

export default Aboutus;
