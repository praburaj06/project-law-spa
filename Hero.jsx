const Hero = () => (
  <section id="home" className="min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920)' }}>
    <div className="container mx-auto px-4 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Justice Served with Integrity</h1>
      <p className="text-lg md:text-xl mb-6">Your trusted partner in legal solutions.</p>
      <a href="#contact" className="bg-navy-blue text-white px-6 py-3 hover:bg-blue-900">Get Consultation</a>
    </div>
  </section>
);

export default Hero;