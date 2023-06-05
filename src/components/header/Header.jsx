function Header() {
	return (
		<header className="flex justify-center text-gray-800 font-semibold items-center h-20 border border-gray-300">
			<nav className="flex justify-between items-center w-[600px]">
        <a className="hover:text-gray-400 duration-300" href="#">Inicio</a>
        <a className="hover:text-gray-500 duration-300" href="#">Acerca de mí</a>
        <a className="hover:text-gray-500 duration-300" href="#">Proyectos</a>
        <a className="hover:text-gray-500 duration-300" href="#">Contacto</a>
      </nav>
		</header>
	);
}

export default Header;