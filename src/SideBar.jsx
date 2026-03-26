function SideBar() {
  const clickHandler = (e) => {
    const action = e.target.dataset.action;
    console.log(action);
    switch (action) {
      case "gitHub":
        window.open(`https://github.com/Nate-Teka`, "_blank");
        break;
      case "linkedIn":
        window.open(`https://www.linkedin.com/in/nathaniel-tekalgn-622031366/`, "_blank");
        break;
      case "twitter":
        window.open(`https://x.com/Nate2031`, "_blank");
        break;
      case "instagram":
        window.open(`https://www.instagram.com/itanwgg/`, "_blank");
        break;
      
      default:
        console.log(action);
        break;
    }
    
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