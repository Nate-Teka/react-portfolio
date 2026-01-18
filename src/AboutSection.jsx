function AboutSection() {
  return (
    <section className="w-[90%] mx-auto">
      <h2 className="text-center text-5xl my-20 max-[412px]:text-red-500" id="aboutLink">
        About me
      </h2>
      <div className="flex flex-col gap-[15%] md:flex-row justify-between">
        <div>
          <h3 className="text-4xl whitespace-nowrap mb-8">My Origins</h3>
          <p className="max-w-[700px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            dolorem iure porro, sed maiores iste nisi ut. Inventore est sapiente
            similique numquam doloremque vel eveniet illo temporibus!
          </p>
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <h3 className="text-4xl whitespace-nowrap mb-8">My skills</h3>
          <ul className="flex flex-wrap">
            {["HTML", "CSS", "JAVA", "PHP", "C++", "C#", "JavaScript", "Github", "SQL"].map((skill) => (
              <li key={skill} className="w-fit p-2 m-4 rounded-lg bg-field text-white">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;