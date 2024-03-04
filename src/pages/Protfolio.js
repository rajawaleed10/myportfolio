import FrameComponent from "../components/FrameComponent";
import GroupGraphicDesign from "../components/GroupGraphicDesign";
import "./Protfolio.css";

const Protfolio = () => {
  return (
    <div className="protfolio">
      <FrameComponent />
      <section className="parent-frames">
        <GroupGraphicDesign />
      </section>
    </div>
  );
};

export default Protfolio;
