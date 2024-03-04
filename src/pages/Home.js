import LogoDisplay from "../components/LogoDisplay";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="logo-parent">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          <LogoDisplay />
        </div>
      </div>
      <img
        className="home-image-icon"
        loading="lazy"
        alt=""
        src="/home-image@2x.png"
      />
    </div>
  );
};

export default Home;
