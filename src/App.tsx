import Vid from "./assets/background2.mp4";
import { useState } from "react";
// import {ChevronDown} from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { FormEvent } from "react"; // <-- add "type" here
function App() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    commodities: "",
    consent: false,
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // const countries = [
  //   "United States",
  //   "United Kingdom",
  //   "Canada",
  //   "Australia",
  //   "Germany",
  //   "France",
  //   "India",
  //   "Japan",
  // ];

  // const handleCountrySelect = (country: string) => {
  //   setSelectedCountry(country);
  //   setIsDropdownOpen(false);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", newsletterEmail);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="arkaj.svg"
                alt="LOGO"
                className="h-8 w-auto object-contain"
              />
              <span className="text-2xl font-bold">Arkaj</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Agri community app
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Ingredients sourcing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Life at Arkaj
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Impact
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
            </div>

            <button className="bg-pink text-red px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Join Us
            </button>
          </div>
        </div>
      </nav>

      <main className="relative min-h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={Vid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Cultivating Trust <br />
            Nurturing Prosperity
            {/*<br />milled food ingredients..*/}
          </h1>

          <div className="relative inline-block">
            {/* <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-yellow-300 text-black px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-3 hover:bg-yellow-400 transition-colors min-w-[280px] justify-between"
            >
              <span>{selectedCountry || 'Select your country'}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl overflow-hidden">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleCountrySelect(country)}
                    className="w-full text-left px-6 py-3 text-black hover:bg-gray-100 transition-colors"
                  >
                    {country}
                  </button>
                ))}
              </div>
            )} */}

            <section id="design-1" className="mb-20">
              <div className="max-w-md mx-auto text-center">
                <form
                  className="flex items-center gap-2 mb-4"
                  aria-label="Subscribe to newsletter form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Email address"
                    required
                    className="
          flex-1 px-4 py-2 rounded-xl text-white placeholder-gray-300
          bg-white/10 border border-white/20 backdrop-blur-md
          focus:outline-none focus:ring-2 focus:ring-emerald-400
        "
                  />

                  <button
                    type="submit"
                    className="
          px-5 py-2 rounded-xl font-medium text-white
          bg-[#0b4f4a]/80 border border-white/30 backdrop-blur-md
          hover:bg-[#0BA27A] hover:shadow-lg transition
        "
                  >
                    Notify Me
                  </button>
                </form>

                <p className="text-sm text-gray-400">
                  Get notified when we launch
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-teal-800 text-white rounded-3xl p-12 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-lg mb-6 leading-relaxed">
                  Arkaj connects urban investors, farmers, and food buyers
                  through crop-backed financing.{" "}
                  <span className="text-yellow-300 font-bold">
                    enabling transparent, efficient, and sustainable
                  </span>{" "}
                  agricultural supply chains in India.
                </p>
                <p className="text-lg mb-8">
                  Want to partner with us? Write to us:
                  <br />
                  <a
                    href="mailto:info@arkaj.co"
                    className="text-yellow-300 hover:text-yellow-400 transition-colors"
                  >
                    info@arkaj.co
                  </a>
                </p>
                <button className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  View Products
                </button>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="Enter your designation"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Commodities you source
                </label>
                <input
                  type="text"
                  name="commodities"
                  value={formData.commodities}
                  onChange={handleInputChange}
                  placeholder="Enter name of commodities you source"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  required
                />
                <label className="ml-3 text-gray-700 text-sm">
                  I consent to receive emails related to this form submission
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-300 text-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Arkaj transcends the role of a mere fintech platform; it serves
                as a bridge connecting everyday individuals with the farmers who
                nourish us. For centuries, agriculture has been the lifeblood of
                India, yet farmers frequently face challenges in accessing
                timely capital. Arkaj aims to reshape that narrative.
              </p>
              <p className="text-lg leading-relaxed">
                We invite individuals to invest directly in the cropping cycles
                of farmers. These funds provide essential resources — seeds,
                fertilizers, equipment, and timely assistance. As the harvest
                approaches, Arkaj facilitates the journey of produce to market,
                ensuring that both investors and farmers share in the fruits of
                success.
              </p>
              <button className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                More about Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-6">
                Building Arkaj
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Life at Arkaj
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-6">
                Our Solutions
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Ingredients Sourcing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Agri Community App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                  >
                    Truck tracking on SaudaBook
                    <span className="bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    CSR Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email please"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-teal-800 text-white py-3 rounded-lg font-semibold hover:bg-teal-900 transition-colors"
                >
                  Subscribe to our newsletter
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/people/Arkaj/61581160820450/"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/arkaj_2025/"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/arkaj-investments"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center space-x-8">
              <p className="text-gray-600 text-sm">
                © Arkaj Service Private Limited 2025. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <img
                  src="arkaj.svg"
                  alt="LOGO"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-gray-900">Arkaj</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
