import { useCallback } from "react";
import FrameGroup from "./FrameGroup";
import "./GroupGraphicDesign.css";

const GroupGraphicDesign = () => {
  const onPortfolio1ContainerClick = useCallback(() => {
    window.open("https://www.behance.net/waleedabid1");
  }, []);

  const onPortfolio2ContainerClick = useCallback(() => {
    window.open("https://github.com/rajawaleed10");
  }, []);

  const onPortfolio3ContainerClick = useCallback(() => {
    window.open("https://www.behance.net/waleedabid1");
  }, []);

  return (
    <div className="group-graphic-design">
      <FrameGroup
        group="/group@2x.png"
        graphicDesign="Graphic Design"
        onPortfolio1ContainerClick={onPortfolio1ContainerClick}
      />
      <FrameGroup
        group="/group-1@2x.png"
        graphicDesign={`Web & App Development`}
        propLeft="-86.7px"
        propWidth="593.1px"
        onPortfolio1ContainerClick={onPortfolio2ContainerClick}
      />
      <div className="frame-group1">
        <div className="portfolio-3" onClick={onPortfolio3ContainerClick}>
          <img className="group-icon1" alt="" src="/group-2@2x.png" />
        </div>
        <div className="web-app-design-wrapper">
          <b className="web-app">{`Web & App Design`}</b>
        </div>
      </div>
    </div>
  );
};

export default GroupGraphicDesign;
