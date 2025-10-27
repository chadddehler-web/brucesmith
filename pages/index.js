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
  };

  return (
    <div>
      <style jsx>{`
        body {
          margin: 0;
          font-family: "Inter", Arial, sans-serif;
          background-color: #f0fdf4;
          color: #1a202c;
        }
        header {
          background-color: #065f46;
          color: white;
          text-align: center;
          padding: 5rem 1rem;
        }
        header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        header p {
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
          color: #d1fae5;
        }
        header button {
          margin-top: 2rem;
          padding: 0.8rem 1.5rem;
          background: white;
          color: #065f46;
          border: none;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        header button:hover {
          background: #a7f3d0;
        }
        section {
          padding: 4rem 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 1rem;
          text-align: center;
        }
        .about p {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .services {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }
        .card p {
          font-size: 1rem;
          line-height: 1.5;
        }
        .card strong {
          display: block;
          margin-top: 0.7rem;
          color: #047857;
        }
        .testimonials {
          background-color: #d1fae5;
          padding: 4rem 1.5rem;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        blockquote {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          font-style: italic;
          line-height: 1.6;
        }
        blockquote p {
          margin-bottom: 0.5rem;
        }
        .inquiry {
          background: white;
          padding: 4rem 1.5rem;
        }
        form {
          max-width: 500px;
          margin: 0 auto;
          background: #ecfdf5;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }
        input,
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          margin-bottom: 1rem;
          font-size: 1rem;
          outline: none;
        }
        input:focus,
        textarea:focus {
          border-color: #059669;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
        }
        button.submit {
          width: 100%;
          padding: 0.9rem;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          background-color: #065f46;
          color: white;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button.submit:hover {
          background-color: #047857;
        }
        footer {
          background-color: #064e3b;
          color: white;
          text-align: center;
          padding: 1.5rem 0;
          margin-top: 2rem;
        }
      `}</style>

      {/* HERO */}
      <header>
        <h1>Reginald’s Golf Training</h1>
        <p>
          Precision. Power. Performance. Personalized golf coaching designed to
          elevate your game.
        </p>
        <button>Book Your First Lesson</button>
      </header>

      {/* ABOUT */}
      <section className="about">
        <h2>About Reginald</h2>
        <p>
          Reginald’s Golf Training provides personalized lessons for golfers of
          all levels — from beginners learning fundamentals to experienced
          players refining their swing. With years of experience and a passion
          for teaching, Reginald combines modern swing analysis technology with
          proven coaching methods to deliver real, measurable improvement.
        </p>
      </section>

      {/* SERVICES */}
      <section>
        <h2>Coaching Services</h2>
        <div className="services">
          <div className="card">
            <h3>Private Lessons</h3>
            <p>
              One-on-one coaching focused on fundamentals, swing mechanics, and
              personalized improvement plans.
            </p>
            <strong>$80 / Hour</strong>
          </div>

          <div className="card">
            <h3>3-Lesson Package</h3>
            <p>
              Perfect for building consistency. Includes swing video analysis
              and tailored drills for lasting improvement.
            </p>
            <strong>$200 / Package</strong>
          </div>

          <div className="card">
            <h3>Junior Golf Program</h3>
            <p>
              Youth coaching focused on proper technique, etiquette, and
              confidence — great for young athletes looking to compete.
            </p>
            <strong>$50 / Session</strong>
          </div>

          <div className="card">
            <h3>Corporate & Group Clinics</h3>
            <p>
              Interactive sessions designed for teams or companies wanting to
              learn golf and build connections in a fun, supportive environment.
            </p>
            <strong>Custom Pricing</strong>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Clients Are Saying</h2>
        <div className="testimonial-grid">
          <blockquote>
            <p>
              “Reginald helped me fix my slice in just three lessons. I’m hitting
              straighter than ever!”
            </p>
            <cite>— David L.</cite>
          </blockquote>

          <blockquote>
            <p>
              “His approach is professional yet fun. My handicap dropped by 5
              strokes this season.”
            </p>
            <cite>— Sarah K.</cite>
          </blockquote>

          <blockquote>
            <p>
              “The best coach I’ve ever had — Reginald’s video feedback is a game
              changer.”
            </p>
            <cite>— James P.</cite>
          </blockquote>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="inquiry">
        <h2>Get In Touch</h2>
        <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2rem" }}>
          Ready to improve your swing or book your first session? Fill out the
          form below and Reginald will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your goals..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="submit" type="submit">
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()} Reginald’s Golf Training • All Rights
          Reserved
        </p>
      </footer>
    </div>
  );
}