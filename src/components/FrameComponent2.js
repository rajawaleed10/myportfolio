import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onNextContainerClick = useCallback(() => {
    navigate("/contact-me");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/protfolio");
  }, [navigate]);

  return (
    <section className="frame-container">
      <div className="next-group">
        <div className="next2" onClick={onNextContainerClick}>
          <img className="next-icon2" loading="lazy" alt="" src="/next.svg" />
        </div>
        <div className="back2" onClick={onBackContainerClick}>
          <img className="back-icon2" loading="lazy" alt="" src="/back.svg" />
        </div>
      </div>
      <div className="client-testimonials">
        <div className="happy-clients-say-parent">
          <h1 className="happy-clients-say">Happy Clients Say</h1>
          <div className="text-frame-a" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
