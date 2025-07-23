const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Note: This is a demo, no data is sent.)');
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy-blue">Contact Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300" required />
              <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 h-32" required></textarea>
              <button type="submit" className="bg-navy-blue text-white px-6 py-3 hover:bg-blue-900">Send Message</button>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-600 mb-4"><strong>Address:</strong> 123 Justice St, Law City, LC 12345</p>
            <p className="text-gray-600 mb-4"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-gray-600"><strong>Email:</strong> contact@thathraalaw.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;