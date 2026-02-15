import { FaGithub, FaLinkedin, FaInstagram,FaFacebook,FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">SudurCodex</h2>
          <p className="mt-4 text-sm">
            SudurCodex is an AI-driven technology startup building scalable
            web applications, intelligent systems, and automation solutions
            for modern businesses.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>AI Solutions</li>
            <li>Web Development</li>
            <li>Chatbot Development</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
                <Link to='/about'>About Us</Link>
            </li>
            <li>
                <Link to="/careers">Careers</Link>
            </li>
            <li>
                <Link to="/internships">Internships</Link>
            </li>
            <li>
                <Link to="/hackathon">Hackathons</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: info@sudurcodex.com</li>
            <li>SudurPaschim Nepal</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/company/sudur-codex/" target="_blank" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sudurcodex?igsh=bGo4cTQ1bjhsaTNn" target="_blank" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/16u8ZVfa4t" target="_blank" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} SudurCodex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
