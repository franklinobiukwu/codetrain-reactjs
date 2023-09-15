import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 hero-img-box">
      <div className="hero-content flex-col lg:flex-row">
        <div className="max-w-sm rounded-lg shadow-2xl">
          <img
            className="mask mask-parallelogram-2"
            src="/images/codetrain-happy-2.jpg"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Join next gen</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
