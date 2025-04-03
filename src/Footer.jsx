function Footer() {
  const currentYear = new Date().getFullYear();
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
    return(<><footer className="footer">
        <div className="footer__container">
          <div className="footer__container__main">
            <div className="footer__container__main__description">
              <h3 className="footer__header">Nathaniel Tekalgn</h3>
              <p className="footer__paragraph">A frontend focused developer that aims to produce results that are efficient and satisfactory.</p>
            </div>
            <div className="footer__container__main__socials">
              <h3 className="footer__header">Socials</h3>
              <i data-action="gitHub" className="fa-brands fa-github fa-2x"  onClick={clickHandler}></i>
              <i data-action="twitter" className="fa-brands fa-twitter fa-2x" onClick={clickHandler}></i>
              <i data-action="instagram" className="fa-brands fa-instagram fa-2x" onClick={clickHandler}></i>
              <i data-action="linkedIn" className="fa-brands fa-linkedin fa-2x" onClick={clickHandler}></i>
            </div>
          </div>
          <hr className="footer__container__main__divider"/>
          <div className="footer__container__copyright">
            <p>&copy;Copyright <span id="copyright-year">{currentYear}</span> made by Nathaniel Tekalgn.</p>
          </div>
        </div>
      </footer></>)
}
export default Footer