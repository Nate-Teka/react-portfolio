function Footer() {
  const currentYear = new Date().getFullYear();
  /* Handler logic remains same */
  
  return (
    <footer className="w-full h-fit bg-black">
      <div className="text-center p-4 grid gap-4 md:mx-12 lg:mx-[10%]">
        <div className="flex flex-col gap-4 m-4 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Nathaniel Tekalgn</h3>
            <p>A frontend focused developer that aims to produce results that are efficient and satisfactory.</p>
          </div>
          <div className="group">
            <h3 className="text-2xl font-bold mb-2">Socials</h3>
            {["github", "twitter", "instagram", "linkedin"].map(social => (
               <i key={social} className={`fa-brands fa-${social} fa-2x m-2 transition-all duration-250 hover:text-accent hover:cursor-pointer`}></i>
            ))}
          </div>
        </div>
        <hr className="m-4" />
        <div>
          <p>&copy;Copyright <span>{currentYear}</span> made by Nathaniel Tekalgn.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;