function Header() {
  return (
    <header className="sticky top-0 z-10 mx-auto w-full md:w-[90%] md:static">
      <nav className="flex justify-between items-center bg-secondary p-4 rounded-b-2xl md:rounded-none">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10">
            <img src="/" alt="Profile" className="w-full h-full rounded-full" />
          </div>
          <p className="font-bold">Nathaniel Tekalgn</p>
        </div>
        <ul className="flex items-center">
          {["about", "projects", "contact me"].map((item) => (
            <li key={item} className="mx-3 transition-all duration-150 ease-out hover:text-accent hover:cursor-pointer">
              <a href={`#${item.replace(' ', '')}Link`} className="capitalize">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;