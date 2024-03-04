import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  const navigate = useNavigate();

  const onNextContainerClick = useCallback(() => {
    navigate("/protfolio");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHireMeButtonClick = useCallback(() => {
    window.open("https://fiverr.com/rajasunny10");
  }, []);

  const onMyCVButtonClick = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1yZKxGctzf9oScC0M4lM1_3cMYfNUIXCa/view?usp=sharing"
    );
  }, []);

  return (
    <div className="about-me">
      <div className="next-prev-frames-parent">
        <div className="next-prev-frames">
          <div className="next" onClick={onNextContainerClick}>
            <img className="next-icon" loading="lazy" alt="" src="/next.svg" />
          </div>
          <div className="back" onClick={onBackContainerClick}>
            <img className="back-icon" loading="lazy" alt="" src="/back.svg" />
          </div>
        </div>
        <div className="navigation-buttons">
          <img
            className="my-pic-2"
            loading="lazy"
            alt=""
            src="/my-pic-2@2x.png"
          />
        </div>
      </div>
      <div className="line-separator-parent">
        <div className="line-separator">
          <h1 className="about-me1">ABOUT ME</h1>
          <img className="button-frame-icon" loading="lazy" alt="" />
        </div>
        <div className="passionate-frame">
          <div className="i-am-a">
            I am a passionate and results-oriented graphic designer with over 5
            years of experience in creating high-quality visual content. I am
            also skilled in React.js and React Native Front-End developer, with
            a strong ability to collaborate with clients to understand their
            needs and deliver projects on time and within budget. Download my
            resume and get to know me better
          </div>
          <div className="hire-me-buttons-frame">
            <div className="hire-me-button" onClick={onHireMeButtonClick}>
              <div className="hire-me-button-child" />
              <b className="hire-me">Hire Me</b>
            </div>
            <div className="my-cv-button" onClick={onMyCVButtonClick}>
              <div className="my-cv-button-child" />
              <b className="my-cv">My CV</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
