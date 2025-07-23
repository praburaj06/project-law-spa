const About = () => (
  <section id="about" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy-blue">About Thathraa Law Associates</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/about.jpg?auto=format&fit=crop&w=800"
            alt="Indian Lawyers"
            className="w-full h-auto shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-600 mb-4">
            Established over two decades ago, Thathraa Law Associates is a leading Indian law firm committed to delivering unparalleled legal services across the nation. Our team of seasoned attorneys brings extensive expertise in navigating the complexities of Indian laws, from corporate compliance under the Companies Act, 2013, to civil and criminal litigation in High Courts and the Supreme Court. We pride ourselves on a client-centric approach, offering tailored solutions that address the unique needs of individuals, businesses, and organizations.
          </p>
          <p className="text-gray-600 mb-4">
            With a deep understanding of India’s diverse legal landscape, we handle cases involving family law, intellectual property, real estate, taxation, and arbitration, among others. Our dedication to integrity, excellence, and ethical practice ensures that we achieve optimal outcomes while building lasting client relationships. At Thathraa Law Associates, we are driven by a passion for justice and a commitment to upholding the rule of law across India.
          </p>
          <p className="text-gray-600">
            Our firm is headquartered in the heart of India, with a network of legal experts collaborating to provide seamless support in urban and rural jurisdictions. Whether you’re a startup seeking regulatory guidance or an individual navigating a personal legal matter, Thathraa Law Associates stands as your trusted partner, delivering results with professionalism and care.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;