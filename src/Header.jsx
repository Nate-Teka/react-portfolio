
function Header() {
    return (
        <>
        <header className="navbar">
                <nav className="navbar__container">
                    <div className="navbar__user-info__container">
                          <div className="navbar__user-info__container__img-container">
                          <img src="/placeholder.jpg" alt="Profile picture"/>
                        </div>
                        <p className="navbar__user-info__container__name">Nathaniel Tekalgn</p>
                    </div>
                    <ul className="navbar__options">
                        <li className="navbar__item"><a href="#aboutLink" className="navbar__item__link">about</a></li>
                        <li className="navbar__item" id="projectsLink"><a href="#" className="navbar__item__link">projects</a></li>
                        <li className="navbar__item" ><a href="#contactLink" className="navbar__item__link">contact me</a></li>
                    </ul>
                </nav>
        </header>
        </>
        
    );
}
export default Header