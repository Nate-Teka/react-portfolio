

function SideBar() {
  const clickHandler = (event)=>{
    const actionType = event.target.dataset.action;
    switch (actionType) {
      case "gitHub":
        window.open("https://github.com/", "_blank");
        break;
      case "twitter":
        window.open("https://twitter.com/", "_blank");
        break;
      case "instagram":
        window.open("https://instagram.com/", "_blank");
        break;
      case "linkedIn":
        window.open("https://linkedIn.com/", "_blank");
        break;
    }
  }
  return (
    <>
      <div className="side-bar">
        <ul className="side-bar__option-container">
          <li className="side-bar__option-container__item">
            <i data-action="gitHub" id="fa-github" className="fa-brands fa-github fa-2x" onClick={clickHandler} ></i>
          </li>
          <li className="side-bar__option-container__item">
            <i data-action="linkedIn" id="fa-linkedin" className="fa-brands fa-linkedin fa-2x" onClick={clickHandler}></i>
          </li>
          <li className="side-bar__option-container__item">
            <i data-action="twitter" id="fa-twitter" className="fa-brands fa-twitter fa-2x" onClick={clickHandler}></i>
          </li>
          <li className="side-bar__option-container__item">
            <i data-action="instagram" id="fa-instagram" className="fa-brands fa-instagram fa-2x" onClick={clickHandler}></i>
          </li>
        </ul>
      </div>
    </>
  );
}
export default SideBar;
