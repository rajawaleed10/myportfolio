import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews">
      <FrameComponent2 />
      <FrameComponent1
        clientReviews="/ellipse-1@2x.png"
        brettEttridge="Brett Ettridge"
        outstandingServiceAndEndP="Outstanding service and end product was delivered in a timely manner . I am very happy and satisfied"
        reviewFrame="/ellipse-1-1@2x.png"
        annaRose="Anna Rose"
        iHadToMakeSeveralRevision="I had to make several revisions and Waleed was always understanding and quick to respond. The final product great"
        qotation1="/qotation-1.svg"
        qotation11="/qotation-1.svg"
      />
      <FrameComponent1
        clientReviews="/ellipse-1-2@2x.png"
        brettEttridge="Peter Thrive"
        outstandingServiceAndEndP="Waleed answered suggestions quickly and made all corrections until it was satisfactory. Great work. Thank You"
        reviewFrame="/ellipse-1-3@2x.png"
        annaRose="Malcolm Wayne"
        iHadToMakeSeveralRevision="Exceptional work. If you could describe your requirements to this guy. Consider that the job is completed. Excellent work. Many thanks."
        qotation1="/qotation-1.svg"
        qotation11="/qotation-1.svg"
        reviewFrameIconWidth="unset"
        reviewFrameIconFlex="1"
        reviewFrameIconOverflow="hidden"
      />
    </div>
  );
};

export default Reviews;
