import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to Admin
      await emailjs.send(
        "service_ijnsop1",        
        "template_qwn22jf",   
        formData,
        "PBpBbA88kzj4U0UdI"
      );

      // Send Auto Reply
      await emailjs.send(
        "service_ijnsop1",        
        "template_kj8qi4r",    
        formData,
        "PBpBbA88kzj4U0UdI"
      );

      toast.success("Message sent successfully!");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
   <>
        <section className="bg-[#f3f3f7] min-h-screen">

  {/* HERO SECTION */}
  <div
    className="h-[60vh] flex items-center justify-center text-white bg-cover bg-center relative"
    style={{
      backgroundImage: "url('banner1.png')", 
    }}
  >
    <div className="absolute inset-0 bg-blue-950/70"></div>

    <div className="relative text-center px-6">
      <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
        Hello<br />
        Let’s work together <br />
        Connect With Our Team.
      </h1>
    </div>
  </div>

  {/* CONTACT SECTION */}
  <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-16">

    {/* LEFT SIDE */}
  <div className="space-y-6">

  <div className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
    Contact SudurCodex
  </div>

  <h2 className="text-3xl font-bold text-gray-900 leading-snug">
    Let’s Discuss Your Next
    <span className="text-blue-700"> Digital Project</span>
  </h2>

  <p className="text-gray-600 leading-relaxed max-w-md">
    Whether you’re looking for professional web development, AI-driven solutions,
    IT skill training, or collaboration opportunities, our team is ready to help.
    Reach out and let’s build something impactful together.
  </p>

  <div className="pt-4 border-t border-gray-300">
    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
      Business Email
    </p>

    <a
      href="mailto:info@sudurcodex.com"
      className="text-blue-700 font-medium text-lg hover:underline transition"
    >
      sudurcodex8848@gmail.com
    </a>
  </div>

</div>


    {/* RIGHT SIDE FORM */}
    <div>
      <h3 className="text-lg font-semibold mb-6 text-gray-800">
        Contact
      </h3>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Name Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="placeholder:text-zinc-400 border-b border-gray-400 focus:border-blue-600 outline-none py-2"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="placeholder:text-zinc-400 border-b border-gray-400 focus:border-blue-600 outline-none py-2"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full placeholder:text-zinc-400 border-b border-gray-400 focus:border-blue-600 outline-none py-2"
        />

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write a message"
          rows="4"
          required
          className="w-full placeholder:text-zinc-400 border-b border-gray-400 focus:border-blue-600 outline-none py-2"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

      </form>
    </div>

  </div>
</section>

   </>
    
  );
};

export default ContactForm;
