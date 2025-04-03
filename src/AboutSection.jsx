function AboutSection() {
  return (
    <>
      <section className="about-section">
        <h2 className="about-section__header" id="aboutLink">
          About me
        </h2>
        <div className="about-section__main-container">
          <div className="about-section__main-container__origins-section">
            <h3 className="about-section__main-container__origins-header">
              My Origins
            </h3>
            <p className="about-section__main-container__origins-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis dolorem iure porro, sed maiores iste nisi ut. Inventore
              est sapiente similique numquam doloremque vel eveniet illo
              temporibus! Maiores eligendi natus molestiae commodi quam minima
              ea praesentium quaerat id eius, quasi modi magni eveniet nostrum
              qui atque voluptate aliquam! Labore, quo.
            </p>
          </div>
          <div className="about-section__main-container__skills-section">
            <h3 className="about-section__main-container__skills-section__skills-header">
              My skills
            </h3>
            <ul className="about-section__main-container__skills-section__skills-list">
              <li className="about-section__main-container__skills-section__skills-list__item">
                HTML
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                CSS
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                JAVA
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                PHP
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                C++
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                C#
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                JavaScript
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                Github
              </li>
              <li className="about-section__main-container__skills-section__skills-list__item">
                SQL
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutSection