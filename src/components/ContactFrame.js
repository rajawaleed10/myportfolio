import { useCallback } from "react";
import "./ContactFrame.css";

const ContactFrame = () => {
  const onWhatsappButtonClick = useCallback(() => {
    window.open("https://wa.me/+923165182294");
  }, []);

  return (
    <section className="contact-frame">
      <div className="text-frame">
        <img
          className="side-img-icon"
          loading="lazy"
          alt=""
          src="/side-img@2x.png"
        />
        <div className="inner-frame1">
          <div className="parent-frame">
            <div className="phone-frame">
              <div className="email-input">
                <b className="email">Email</b>
                <div className="waleedabid10outlookcom">
                  waleed.abid.10@outlook.com
                </div>
              </div>
              <div className="email-and-phone-frame">
                <b className="phone">Phone</b>
                <div className="div">+92 316-5182294</div>
              </div>
            </div>
            <button className="whatsapp-button" onClick={onWhatsappButtonClick}>
              <div className="whatsapp-button-child" />
              <img
                className="vector-shape-icon"
                alt=""
                src="/vector-shape.svg"
              />
            </button>
            <div className="thank-you-for">
              Thank you for taking the time to consider me. It will be exciting
              to learn more about your vision for the project and how my skills
              could contribute to the success of your project.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrame;
