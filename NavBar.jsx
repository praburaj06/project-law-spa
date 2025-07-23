const NavBar = () => (
  <nav className="fixed w-full bg-white shadow-md z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Thathraa Law Associates" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-navy-blue ml-2">Thathraa Law Associates</h1>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="text-gray-600 hover:text-navy-blue">Home</a>
        <a href="#about" className="text-gray-600 hover:text-navy-blue">About</a>
        <a href="#services" className="text-gray-600 hover:text-navy-blue">Services</a>
        <a href="#contact" className="text-gray-600 hover:text-navy-blue">Contact</a>
      </div>
      <button className="md:hidden text-gray-600" onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div id="mobile-menu" className="hidden md:hidden bg-white">
      <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-navy-blue hover:text-white">Home</a>
      <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-navy-blue hover:text-white">About</a>
      <a href="#services" className="block px-4 py-2 text-gray-600 hover:bg-navy-blue hover:text-white">Services</a>
      <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-navy-blue hover:text-white">Contact</a>
    </div>
  </nav>
);

export default NavBar;