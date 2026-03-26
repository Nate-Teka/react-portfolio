function Header() {
  return (
    <header className=" rounded-b-2xl bg-secondary mx-auto w-fit ">
      <nav className="flex justify-center p-6 rounded-b-2xl md:rounded-none">
        <ul className="flex">
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