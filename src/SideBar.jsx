function SideBar() {
  const clickHandler = (e) => {
    /* Handler logic remains same */
  };

  return (
    <div className="absolute left-0 top-1/2 hidden md:block">
      <ul className="bg-white py-4 px-2 rounded-r-xl">
        {["github", "linkedin", "twitter", "instagram"].map((social) => (
          <li key={social} className="group">
            <i 
              data-action={social === "github" ? "gitHub" : social === "linkedin" ? "linkedIn" : social}
              className={`fa-brands fa-${social} fa-2x m-2 text-black transition-all duration-150 group-hover:text-accent group-hover:text-[2.2em] cursor-pointer`}
              onClick={clickHandler}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SideBar;