import { useMemo } from "react";
import "./FrameGroup.css";

const FrameGroup = ({
  group,
  graphicDesign,
  propLeft,
  propWidth,
  onPortfolio1ContainerClick,
}) => {
  const groupIconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className="frame-group">
      <div className="portfolio-1" onClick={onPortfolio1ContainerClick}>
        <img className="group-icon" alt="" src={group} style={groupIconStyle} />
      </div>
      <b className="graphic-design">{graphicDesign}</b>
    </div>
  );
};

export default FrameGroup;
