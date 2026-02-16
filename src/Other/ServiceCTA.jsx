import { useNavigate } from "react-router-dom";

export default function ServiceCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-zinc-100 text-white text-center">
      <h2 className="text-4xl font-bold mb-4 text-orange-500">
        Have an Idea? Let's Build It Together
      </h2>

      <p className="mb-8 text-gray-900 max-w-2xl mx-auto">
        Whether you want to launch a startup, upgrade your business, or start
        your tech career we help you move faster.
      </p>

      <button
        onClick={() => navigate("/contact")}
        className="px-10 py-4 bg-orange-500 rounded-lg
        hover:bg-orange-600 transition font-semibold"
      >
        Let's Connect
      </button>
    </section>
  );
}
