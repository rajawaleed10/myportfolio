import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onNextContainerClick = useCallback(() => {
    navigate("/reviews");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/about-me");
  }, [navigate]);

  return (
    <section className="frame-parent">
      <div className="next-parent">
        <div className="next1" onClick={onNextContainerClick}>
          <img className="next-icon1" loading="lazy" alt="" src="/next.svg" />
        </div>
        <div className="back1" onClick={onBackContainerClick}>
          <img className="back-icon1" loading="lazy" alt="" src="/back.svg" />
        </div>
      </div>
      <div className="frame-content">
        <div className="my-portfolio-parent">
          <h2 className="my-portfolio">My Portfolio</h2>
          <img className="text-frame-icon" loading="lazy" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
