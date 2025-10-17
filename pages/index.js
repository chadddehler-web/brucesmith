import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BRUCE THOMAS SMITH — Acoustic Site</title>
        <meta
          name="description"
          content="Bruce Thomas Smith • Acoustic Site • Songwriter • 4x GRAMMY member • Awards & Credits"
        />
        <meta property="og:title" content="BRUCE THOMAS SMITH — Acoustic Site" />
        <meta
          property="og:description"
          content="Songwriter • 4x GRAMMY member • 2022 & 2024 Nashville Music Awards • 2020 New York Acoustic Guitar Project (Portland) • 2018 Bose Las Vegas Producers Choice Award • 2008 Portland Music Awards"
        />
        <meta name="theme-color" content="#0f172a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Crimson+Text:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --bg: #0b1020;
            --bg-soft: #121931;
            --txt: #e6e9f2;
            --muted: #a9b1c6;
            --accent: #66e3c4;
            --accent-2: #b5a1ff;
            --ring: #66e3c4aa;
            --maxw: 1100px;
            --radius: 18px;
          }
          * { box-sizing: border-box; }
          html, body {
            margin: 0;
            height: 100%;
            background: radial-gradient(1200px 800px at 85% -10%, #1a2345 0%, transparent 55%),
                        radial-gradient(800px 600px at -10% 10%, #1f2b56 0%, transparent 60%),
                        var(--bg);
            color: var(--txt);
            font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans";
          }
          a { color: inherit; text-decoration: none; }
          .container { max-width: var(--maxw); margin-inline: auto; padding: clamp(16px, 4vw, 28px); }
          header { position: sticky; top: 0; backdrop-filter: saturate(140%) blur(10px);
                   background: linear-gradient(to bottom, #0b1020aa, #0b102000); z-index: 10; }
          .nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
          .brand { display: flex; align-items: center; gap: 14px; }
          .brand .logo { width: 40px; height: 40px; border-radius: 10px;
                         background: linear-gradient(135deg, var(--accent), var(--accent-2));
                         box-shadow: 0 10px 25px -10px var(--ring); }
          .brand .title { font-weight: 800; letter-spacing: .6px; }
          .hero { display: grid; grid-template-columns: 1.2fr .8fr; gap: clamp(20px, 5vw, 40px);
                  align-items: center; padding-top: clamp(24px, 5vw, 60px); }
          @media (max-width: 900px){ .hero{ grid-template-columns:1fr } }
          .tag { display:inline-flex; align-items:center; gap:8px; padding:8px 12px;
                 border-radius:999px; background:#0f1733; color:var(--muted); border:1px solid #253061; }
          .tag .dot{width:8px;height:8px;border-radius:50%;background:var(--accent);
                    box-shadow:0 0 0 4px #66e3c422;}
          h1{font-size:clamp(32px,6vw,54px);line-height:1.05;margin:16px 0 10px;font-weight:800;}
          .sub{font-family:"Crimson Text",serif;font-size:clamp(18px,2.5vw,24px);color:var(--muted);}
          .cta{margin-top:22px;display:flex;gap:12px;flex-wrap:wrap;}
          .btn{appearance:none;border:none;padding:12px 16px;border-radius:12px;font-weight:600;cursor:pointer;
               transition:transform .08s ease, box-shadow .2s ease;}
          .btn.primary{background:linear-gradient(135deg,var(--accent),#47c8ab);color:#04231e;
                        box-shadow:0 8px 24px -10px var(--ring);}
          .btn.ghost{background:#12193a;color:var(--txt);border:1px solid #22306a;}
          .btn:active{transform:translateY(1px);}
          .panel{background:linear-gradient(180deg,#0f1733,#0d1430);border:1px solid #202a59;
                 border-radius:var(--radius);box-shadow:0 30px 80px -40px #0008;}
          .panel.pad{padding:clamp(16px,3vw,28px);}
          .list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;}
          @media (max-width:800px){.list{grid-template-columns:1fr;}}
          .badge{display:flex;gap:10px;align-items:flex-start;padding:14px 16px;border-radius:14px;
                 background:#0f1738;border:1px dashed #2b3770;}
          .badge .icon{width:12px;height:12px;border-radius:50%;background:var(--accent-2);margin-top:6px;}
          .badge h3{margin:0 0 6px;font-size:16px;}
          .badge p{margin:0;color:var(--muted);font-size:14px;}
          .awards{margin-top:18px;display:grid;gap:12px;}
          .awards li{list-style:none;padding:12px 14px;border-radius:12px;border:1px solid #27336a;
                     background:#0f1736;color:var(--txt);}
          footer{margin:50px 0 30px;text-align:center;color:var(--muted);}
          footer small{opacity:.9;}
          img { border-radius:14px; border:1px solid #27336a; background:#0f1733; width:100%; height:auto; }
        `}</style>
      </Head>

      <header>
        <div className="container nav">
          <a className="brand" href="#top">
            <div className="logo" aria-hidden="true"></div>
            <div className="title">BRUCE THOMAS SMITH</div>
          </a>
          <nav>
            <a className="tag" href="#contact">
              <span className="dot" aria-hidden="true"></span> Booking & Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <div>
            <span className="tag">
              <span className="dot" aria-hidden="true"></span> ACOUSTIC SITE
            </span>
            <h1>BRUCE THOMAS SMITH</h1>
            <p className="sub">
              Songwriter • Performer • <strong>4× GRAMMY member</strong>
            </p>
            <div className="cta">
              <a className="btn primary" href="#contact">
                Request Booking
              </a>
            </div>

            <div className="panel pad" style={{ marginTop: "22px" }}>
              <div className="list">
                {/* Awards & Honors */}
                <div className="badge">
                  <span className="icon" aria-hidden="true"></span>
                  <div>
                    <h3>Awards & Honors</h3>
                    <ul className="awards">
                      <li>
                        2024 Nashville Music Awards
                        <div style={{ marginTop: "10px" }}>
                          <img
                            src="/recording-academy-logo.avif"
                            alt="Recording Academy Logo"
                          />
                        </div>
                      </li>
                      <li>2022 Nashville Music Awards</li>
                      <li>
                        2020 New York Acoustic Guitar Project — Portland Region
                      </li>
                      <li>
                        2018 BOSE Las Vegas — Producers Choice Award
                        <div style={{ marginTop: "10px" }}>
                          <img
                            src="/fame-las-vegas.jpg"
                            alt="F.A.M.E. Las Vegas feature"
                          />
                        </div>
                      </li>
                      <li>2008 Portland Music Awards</li>
                    </ul>
                  </div>
                </div>

                {/* Quick Bio */}
                <div className="badge">
                  <span className="icon" aria-hidden="true"></span>
                  <div>
                    <h3>Quick Bio</h3>
                    <p>
                      Bruce Thomas Smith is an American songwriter and acoustic
                      performer. This site highlights select achievements and
                      media. For booking or press, use the contact section
                      below.
                    </p>
                    <div style={{ marginTop: "16px" }}>
                      <img
                        src="/fb-promo-2020.jpg"
                        alt="Bruce Thomas Smith — live promo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ marginTop: "42px" }}>
          <div className="panel pad">
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "clamp(22px, 3.5vw, 32px)",
              }}
            >
              Booking & Contact
            </h2>
            <p className="sub" style={{ margin: "0 0 12px" }}>
              For casino, corporate, and listening-room bookings, please include
              desired dates, location, and tech specs.
            </p>
            <form name="contact" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                <label style={{ display: "grid", gap: "6px" }}>
                  <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                    Your Name
                  </span>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    style={{
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1px solid #27336a",
                      background: "#0f1736",
                      color: "var(--txt)",
                      outline: "none",
                    }}
                  />
                </label>
                <label style={{ display: "grid", gap: "6px" }}>
                  <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    style={{
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1px solid #27336a",
                      background: "#0f1736",
                      color: "var(--txt)",
                      outline: "none",
                    }}
                  />
                </label>
              </div>
              <label style={{ display: "grid", gap: "6px", marginTop: "12px" }}>
                <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                  Message
                </span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your event"
                  style={{
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #27336a",
                    background: "#0f1736",
                    color: "var(--txt)",
                    resize: "vertical",
                  }}
                ></textarea>
              </label>
              <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
                <button className="btn primary" type="submit">
                  Send Inquiry
                </button>
                <a className="btn ghost" href="#top">
                  Back to top
                </a>
              </div>
            </form>
          </div>
        </section>

        <footer>
          <small>© 2025 by BRUCE THOM • All rights reserved.</small>
        </footer>
      </main>
    </>
  );
}
