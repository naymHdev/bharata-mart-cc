const Footer = () => {

  const footerLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 lg:text-left">
          <h3 className="text-4xl font-bold mb-4">IndiaMart</h3>
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.url} className="hover:text-gray-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 lg:text-right mt-4 lg:mt-0">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
