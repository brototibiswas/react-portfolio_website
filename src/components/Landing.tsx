import LandingHeadline from "./LandingHeadline";

const Landing = () => {
  return (
    <div className="container d-flex p-4 mt-5 justify-content-between">
      <LandingHeadline />
      <img
        src="../../public/portfolio_image_landing.jpg"
        className="landing_image"
      />
    </div>
  );
};

export default Landing;
