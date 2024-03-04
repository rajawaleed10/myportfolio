import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  clientReviews,
  brettEttridge,
  outstandingServiceAndEndP,
  reviewFrame,
  annaRose,
  iHadToMakeSeveralRevision,
  qotation1,
  qotation11,
  reviewFrameIconWidth,
  reviewFrameIconFlex,
  reviewFrameIconOverflow,
}) => {
  const reviewFrameIconStyle = useMemo(() => {
    return {
      width: reviewFrameIconWidth,
      flex: reviewFrameIconFlex,
      overflow: reviewFrameIconOverflow,
    };
  }, [reviewFrameIconWidth, reviewFrameIconFlex, reviewFrameIconOverflow]);

  return (
    <section className="reviews-inner">
      <div className="frame-div">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="frame-wrapper">
            <div className="client-reviews-parent">
              <img
                className="client-reviews-icon"
                loading="lazy"
                alt=""
                src={clientReviews}
              />
              <div className="brett-ettridge-wrapper">
                <h3 className="brett-ettridge">{brettEttridge}</h3>
              </div>
            </div>
          </div>
          <div className="outstanding-service-and">
            {outstandingServiceAndEndP}
          </div>
          <img
            className="qotation-1-icon"
            loading="lazy"
            alt=""
            src={qotation1}
          />
        </div>
        <div className="rectangle-group">
          <div className="frame-item" />
          <div className="frame-wrapper1">
            <div className="review-frame-parent">
              <img
                className="review-frame-icon"
                loading="lazy"
                alt=""
                src={reviewFrame}
                style={reviewFrameIconStyle}
              />
              <div className="anna-rose-wrapper">
                <h3 className="anna-rose">{annaRose}</h3>
              </div>
            </div>
          </div>
          <div className="i-had-to">{iHadToMakeSeveralRevision}</div>
          <img
            className="qotation-1-icon1"
            loading="lazy"
            alt=""
            src={qotation11}
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
