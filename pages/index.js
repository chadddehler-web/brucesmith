import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your free estimate request has been received.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff6ef", color: "#1a1a1a" }}>
      <header
        style={{
          background: "linear-gradient(135deg,#e63946,#ff9f1c)",
          color: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ fontSize: "clamp(28px,6vw,48px)", fontWeight: 800, marginBottom: 10 }}>
          Matt Hughes Windows & Power Washing
        </h1>
        <p style={{ fontSize: 18, marginBottom: 20 }}>
          Making Your Home Shine — Windows, Gutters & Driveways Cleaned Right!
        </p>
        <a
          href="#estimate"
          style={{
            background: "#fff",
            color: "#e63946",
            padding: "14px 24px",
            borderRadius: "999px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,.1)",
          }}
        >
          Get a Free Estimate
        </a>
      </header>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 14,
          background: "#fff",
          boxShadow: "0 4px 16px rgba(0,0,0,.1)",
          padding: 12,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <a href="#services" style={{ color: "#e63946", textDecoration: "none", fontWeight: 600 }}>
          Services
        </a>
        <a href="#gallery" style={{ color: "#e63946", textDecoration: "none", fontWeight: 600 }}>
          Gallery
        </a>
        <a href="#estimate" style={{ color: "#e63946", textDecoration: "none", fontWeight: 600 }}>
          Free Estimate
        </a>
      </nav>

      {/* Services */}
      <section id="services" style={{ padding: "60px 20px", maxWidth: 1100, margin: "auto" }}>
        <h2
          style={{
            color: "#e63946",
            fontSize: "clamp(22px,4vw,32px)",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          }}
        >
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/1086/1086933.png",
              title: "Window Cleaning",
              text: "Crystal clear, streak-free results for homes and storefronts. Inside and out — guaranteed shine.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
              title: "Power Washing",
              text: "Remove dirt, mold, and grime from driveways, siding, patios, and fences with safe, high-pressure cleaning.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/706/706178.png",
              title: "Gutter Cleaning",
              text: "Keep your gutters flowing freely. We clear debris and flush downspouts so rainwater drains properly.",
            },
          ].map((service, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 16px rgba(0,0,0,.1)",
                padding: 24,
                textAlign: "center",
                transition: "transform .2s",
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                  marginBottom: 10,
                }}
              />
              <h3 style={{ color: "#ff9f1c", marginBottom: 10 }}>{service.title}</h3>
              <p style={{ fontSize: 15 }}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ padding: "60px 20px", maxWidth: 1100, margin: "auto" }}>
        <h2
          style={{
            color: "#e63946",
            fontSize: "clamp(22px,4vw,32px)",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Before & After Gallery
        </h2>
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          }}
        >
          {[
            "https://images.unsplash.com/photo-1616627983823-3f6cb12f38f5?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1589394812473-1f98c2b17052?auto=format&fit=crop&w=800&q=60",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Project"
              style={{
                width: "100%",
                borderRadius: 10,
                boxShadow: "0 4px 16px rgba(0,0,0,.1)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Estimate Form */}
      <section id="estimate" style={{ padding: "60px 20px", maxWidth: 600, margin: "auto" }}>
        <h2
          style={{
            color: "#e63946",
            fontSize: "clamp(22px,4vw,32px)",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Request Your Free Estimate
        </h2>
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 16px rgba(0,0,0,.1)",
            padding: 24,
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 }}
            />
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 }}
            >
              <option value="">Select Service</option>
              <option>Window Cleaning</option>
              <option>Power Washing</option>
              <option>Gutter Cleaning</option>
              <option>Bundle (2 or more)</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your project (size, surfaces, etc.)"
              value={formData.message}
              onChange={handleChange}
              style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 15 }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg,#e63946,#ff9f1c)",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "14px 18px",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,.1)",
              }}
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <footer
        style={{
          background: "linear-gradient(135deg,#e63946,#ff9f1c)",
          color: "#fff",
          textAlign: "center",
          padding: "30px 20px",
          fontSize: 14,
        }}
      >
        <p>
          © {new Date().getFullYear()} Matt Hughes Windows & Power Washing | Licensed & Insured
        </p>
        <p>Serving Your City and Surrounding Areas</p>
      </footer>
    </div>
  );
}