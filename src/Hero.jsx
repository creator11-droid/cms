import heroImg from "./assets/undraw_programming_re_kg9v.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>Contentful CMS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            molestiae suscipit dolorem architecto nesciunt, eum doloremque at
            totam distinctio, sapiente quia aspernatur cupiditate accusantium
            reprehenderit. Ratione, quam labore officiis expedita sunt dolores
            animi sit iste ullam adipisci illo nemo beatae ipsam nostrum cum
            quisquam harum!
          </p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="Hero-img" className="img-container"></img>
        </div>
      </div>
    </section>
  );
};
export default Hero;
