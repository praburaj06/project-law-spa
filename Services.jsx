const Services = () => (
  <section id="services" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy-blue">Our Legal Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: 'Corporate Law', 
            desc: 'Our corporate law practice offers end-to-end legal solutions for businesses across India. From company formation and compliance with the Companies Act, 2013, to drafting and negotiating complex contracts, mergers, acquisitions, and corporate restructuring, we ensure your business operates within the legal framework. Our team advises on foreign direct investment (FDI) policies, SEBI regulations, and corporate governance, helping startups, SMEs, and multinationals thrive in India’s dynamic market.' 
          },
          { 
            title: 'Civil Litigation', 
            desc: 'We provide expert representation in civil litigation across Indian courts, handling disputes related to property, contracts, consumer rights, and torts. Our attorneys meticulously prepare cases, from filing suits to representing clients in High Courts and the Supreme Court. Whether it’s a land dispute under the Transfer of Property Act, 1882, or a commercial disagreement, we aim for swift and favorable resolutions while safeguarding your interests.' 
          },
          { 
            title: 'Criminal Defense', 
            desc: 'Our criminal defense team offers robust representation for clients facing charges under the Indian Penal Code, 1860, and other criminal laws. From bail applications to defending complex cases like white-collar crimes, fraud, or cybercrime, we craft strategic defenses to protect your rights. Our attorneys work tirelessly to ensure fair trials and uphold justice in district courts, High Courts, and beyond.' 
          },
          { 
            title: 'Family Law', 
            desc: 'We provide compassionate and discreet legal support for family-related matters, including divorce, child custody, alimony, and succession disputes. Our team navigates the complexities of the Hindu Marriage Act, 1955, Muslim Personal Law, and other family laws to deliver fair outcomes. Whether in family courts or mediation, we prioritize amicable resolutions while protecting your emotional and financial interests.' 
          },
          { 
            title: 'Intellectual Property', 
            desc: 'Protecting your intellectual assets is critical in today’s competitive landscape. We offer comprehensive services for trademark, patent, and copyright registration, enforcement, and litigation under the Trade Marks Act, 1999, and Patents Act, 1970. From IP portfolio management to defending against infringement, our team ensures your innovations and brand identity are secure across India and internationally.' 
          },
          { 
            title: 'Real Estate', 
            desc: 'Our real estate practice provides legal guidance for property transactions, title verification, and disputes under the Real Estate (Regulation and Development) Act, 2016 (RERA). We assist with drafting sale agreements, lease contracts, and joint ventures, ensuring compliance with local laws. Whether you’re a developer, investor, or individual, we mitigate risks and resolve disputes in property matters efficiently.' 
          },
          { 
            title: 'Taxation Law', 
            desc: 'Navigating India’s complex tax regime requires expert guidance. We provide advisory and litigation services for direct taxes (Income Tax Act, 1961) and indirect taxes (GST, Customs). From tax planning for individuals and corporations to representing clients before tax tribunals and authorities, our team ensures compliance and minimizes liabilities while addressing disputes effectively.' 
          },
          { 
            title: 'Labour and Employment', 
            desc: 'We offer specialized services in labour and employment law, advising employers and employees on compliance with the Industrial Disputes Act, 1947, and other labour laws. Our services include drafting employment contracts, handling workplace disputes, and ensuring adherence to wage laws, ESIC, and PF regulations. We represent clients in labour courts and tribunals to resolve conflicts fairly.' 
          },
          { 
            title: 'Arbitration and Mediation', 
            desc: 'For efficient and cost-effective dispute resolution, we provide expert arbitration and mediation services under the Arbitration and Conciliation Act, 1996. Our team facilitates negotiations, drafts arbitration agreements, and represents clients in arbitral tribunals. We aim to resolve commercial, contractual, and personal disputes amicably, minimizing litigation costs and delays.' 
          },
        ].map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-navy-blue">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;