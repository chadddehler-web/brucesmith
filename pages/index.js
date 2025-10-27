import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent.");
    // TODO: Replace alert with API call or email handler
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-green-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Reginald’s Golf Training</h1>
        <p className="mt-4 text-lg text-green-100">
          Precision. Power. Performance. Personalized golf coaching designed to
          elevate your game.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-green-900 font-semibold rounded hover:bg-green-200 transition">
          Book Your First Lesson
        </button>
      </header>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-green-800 mb-4">About Reginald</h2>
        <p className="text-lg leading-relaxed">
          Reginald’s Golf Training provides personalized lessons for golfers of
          all levels — from beginners learning fundamentals to experienced
          players refining their swing. With years of experience and a passion
          for teaching, Reginald combines modern swing analysis technology with
          proven coaching methods to deliver real, measurable improvement.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Coaching Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Private Lessons</h3>
              <p>
                One-on-one coaching focused on fundamentals, swing mechanics,
                and personalized improvement plans. Ideal for golfers who want
                rapid progress and direct feedback.
              </p>
              <p className="mt-3 font-semibold">$80 / Hour</p>
            </div>

            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">3-Lesson Package</h3>
              <p>
                Perfect for building consistency over multiple sessions.
                Includes swing video analysis and tailored drills for lasting
                improvement.
              </p>
              <p className="mt-3 font-semibold">$200 / Package</p>
            </div>

            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Junior Golf Program</h3>
              <p>
                Youth coaching focused on developing proper technique, course
                etiquette, and confidence. Great for young athletes looking to
                get competitive.
              </p>
              <p className="mt-3 font-semibold">Starting at $50 / Session</p>
            </div>

            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">
                Corporate & Group Clinics
              </h3>
              <p>
                Interactive clinics designed for teams or businesses looking for
                fun, team-building, and golf skill improvement.
              </p>
              <p className="mt-3 font-semibold">Custom Pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">
            What Clients Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-white p-6 rounded shadow">
              <p className="italic">
                “Reginald helped me fix my slice in just three lessons. I’m
                hitting straighter than ever!”
              </p>
              <p className="mt-3 font-semibold text-green-700">— David L.</p>
            </blockquote>

            <blockquote className="bg-white p-6 rounded shadow">
              <p className="italic">
                “His approach is professional yet fun. My handicap dropped by 5
                strokes this season.”
              </p>
              <p className="mt-3 font-semibold text-green-700">— Sarah K.</p>
            </blockquote>

            <blockquote className="bg-white p-6 rounded shadow">
              <p className="italic">
                “The best coach I’ve ever had — Reginald’s video feedback is a
                game changer.”
              </p>
              <p className="mt-3 font-semibold text-green-700">— James P.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg mb-8">
            Ready to improve your swing or book your first session? Fill out the
            form below and Reginald will get back to you within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-green-50 p-8 rounded-lg shadow"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Tell us about your goals..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Reginald’s Golf Training • All Rights Reserved</p>
      </footer>
    </div>
  );
}