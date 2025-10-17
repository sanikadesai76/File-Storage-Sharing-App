import "./Home.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaTerminal,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-left">
        <h1 className="title">
          I'm <span className="highlight">Sanika</span> Desai
        </h1>
        <p className="description">
          A passionate developer who loves building intuitive web applications
          and solving complex DSA problems. I'm currently exploring the world of
          tech, learning, building, and growing every day!
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/sanikadesai76"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanika-desai-a20080293/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:sddesai1603@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://leetcode.com/sanu_89/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://codolio.com/profile/sa.nu_89"
            target="_blank"
            rel="noopener noreferrer"
            title="Codolio"
          >
            <FaTerminal />
          </a>
        </div>

        <div className="buttons">
          <button className="btn-primary">My Work</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>

      <div className="home-right">
        <img
          src="/profile-sanika.png"
          alt="Sanika Desai"
          className="profile-pic"
        />
      </div>
    </section>
  );
};

export default Home;
