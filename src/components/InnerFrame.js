import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InnerFrame.css";

const InnerFrame = () => {
  const navigate = useNavigate();

  const onBackContainerClick = useCallback(() => {
    navigate("/reviews");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="inner-frame">
      <div className="outer-frame">
        <div className="back3" onClick={onBackContainerClick}>
          <img className="back-icon3" alt="" src="/back.svg" />
        </div>
        <div className="home1" onClick={onHomeContainerClick}>
          <img className="home-icon" loading="lazy" alt="" src="/home.svg" />
        </div>
      </div>
      <div className="side-image-frame">
        <div className="contact-me-parent">
          <h2 className="contact-me1">Contact Me</h2>
          <div className="contact-text" />
        </div>
      </div>
    </header>
  );
};

export default InnerFrame;
