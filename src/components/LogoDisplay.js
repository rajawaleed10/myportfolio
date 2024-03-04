import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogoDisplay.css";

const LogoDisplay = () => {
  const navigate = useNavigate();

  const onLearnMoreContainerClick = useCallback(() => {
    navigate("/about-me");
  }, [navigate]);

  return (
    <div className="logo-display">
      <div className="greeting-text">
        <b className="hello-there">Hello there,</b>
      </div>
      <div className="graphic-design-portfolio">
        <div className="iam-waleed-abid-parent">
          <h1 className="iam-waleed-abid-container">
            <p className="iam-waleed">
              <span className="iam">{`I’AM `}</span>
              <span>{`WALEED `}</span>
            </p>
            <p className="abid">ABID</p>
          </h1>
          <b className="graphic-designer">
            Graphic Designer | React.js | React Native
          </b>
        </div>
      </div>
      <div className="learn-more" onClick={onLearnMoreContainerClick}>
        <div className="learn-more-child" />
        <b className="click-to-learn">Click To Learn More</b>
      </div>
    </div>
  );
};

export default LogoDisplay;
