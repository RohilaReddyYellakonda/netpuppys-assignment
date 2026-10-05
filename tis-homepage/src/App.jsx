import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Moon,
  Play,
  Sun,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="progress"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      {/* ================= NAVBAR ================= */}
      <nav className="nav">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">T</span>

          <span>
            TULAS
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#academics" onClick={closeMenu}>
            ACADEMICS
          </a>
          <a href="#campus" onClick={closeMenu}>
            CAMPUS LIFE
          </a>
          <a href="#admissions" onClick={closeMenu}>
            ADMISSIONS
          </a>

          <a href="#admissions" className="mobile-cta" onClick={closeMenu}>
            ENQUIRE
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="theme"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a href="#admissions" className="nav-cta">
            ENQUIRE
            <ArrowUpRight size={15} />
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <main id="home">
        <section className="hero">
          <div
            className="hero-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85)",
            }}
          />

          <div className="hero-shade" />

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="eyebrow light">
              EDUCATION • CHARACTER • EXCELLENCE
            </div>

            <h1>
              Learn.
              <br />
              <em>Lead.</em>
            </h1>

            <p>
              A learning environment where curiosity becomes confidence,
              knowledge becomes character, and every student is prepared to
              make a meaningful difference.
            </p>

            <div className="hero-buttons">
              <a href="#admissions" className="button button-lime">
                EXPLORE ADMISSIONS
                <ArrowRight size={16} />
              </a>

              <a href="#about" className="play-link">
                <span>
                  <Play size={13} fill="currentColor" />
                </span>
                DISCOVER TIS
              </a>
            </div>
          </motion.div>

          <div className="hero-stamp">
            EST.
            <br />
            TULAS
            <br />
            SCHOOL
          </div>

          <div className="hero-note">
            <span>DEHRADUN • INDIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <motion.section
          className="section intro"
          id="about"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <div className="eyebrow">WELCOME TO TIS</div>

            <h2>
              Education that
              <br />
              <em>shapes futures.</em>
            </h2>
          </div>

          <div className="intro-right">
            <p className="lead">
              At Tulas International School, learning goes beyond classrooms.
            </p>

            <p>
              We create an environment where students are encouraged to
              question, explore, collaborate and grow into confident,
              responsible individuals.
            </p>

            <a href="#academics" className="text-link">
              OUR APPROACH
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.section>

        {/* ================= STATS ================= */}
        <section className="stats">
          <div>
            <strong>
              15<span>+</span>
            </strong>
            <p>YEARS OF EXCELLENCE</p>
          </div>

          <div>
            <strong>
              1<span>:</span>8
            </strong>
            <p>FACULTY TO STUDENT RATIO</p>
          </div>

          <div>
            <strong>
              25<span>+</span>
            </strong>
            <p>ACTIVITIES & SPORTS</p>
          </div>

          <div>
            <strong>
              100<span>%</span>
            </strong>
            <p>STUDENT-CENTRIC LEARNING</p>
          </div>
        </section>

        {/* ================= ACADEMICS ================= */}
        <motion.section
          className="section feature"
          id="academics"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="feature-photo">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Students learning in a classroom"
            />

            <div className="photo-label">LEARNING IN ACTION</div>
          </div>

          <div className="feature-copy">
            <div className="eyebrow">ACADEMICS</div>

            <h2>
              Think
              <br />
              <em>beyond.</em>
            </h2>

            <p>
              Our academic approach combines strong fundamentals with
              creativity, critical thinking and real-world learning.
            </p>

            <div className="feature-list">
              <div>
                <b>01</b>

                <div>
                  <strong>PERSONALISED LEARNING</strong>
                  <small>Every learner is seen, heard and supported.</small>
                </div>
              </div>

              <div>
                <b>02</b>

                <div>
                  <strong>EXPERIENTIAL EDUCATION</strong>
                  <small>Learning through projects, exploration and practice.</small>
                </div>
              </div>

              <div>
                <b>03</b>

                <div>
                  <strong>FUTURE-READY SKILLS</strong>
                  <small>Communication, collaboration and problem solving.</small>
                </div>
              </div>
            </div>

            <a href="#admissions" className="text-link">
              DISCOVER OUR PROGRAMMES
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.section>

        {/* ================= CAMPUS LIFE ================= */}
        <section className="section life" id="campus">
          <div className="life-heading">
            <div>
              <div className="eyebrow">BEYOND THE CLASSROOM</div>

              <h2>
                Campus
                <br />
                <em>life.</em>
              </h2>
            </div>

            <p>
              A vibrant campus designed to give students the space to discover
              their interests, build friendships and create lasting memories.
            </p>
          </div>

          <div className="life-grid">
            <motion.article
              className="life-card large"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
                alt="Students on campus"
              />

              <div className="card-overlay">
                <span>COMMUNITY</span>
                <h3>Grow together.</h3>
                <a href="#admissions">
                  EXPLORE
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>

            <motion.article
              className="life-card"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85"
                alt="Students playing sports"
              />

              <div className="card-overlay">
                <span>SPORTS</span>
                <h3>Play with purpose.</h3>
              </div>
            </motion.article>

            <motion.article
              className="life-card"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85"
                alt="Students doing creative activities"
              />

              <div className="card-overlay">
                <span>CREATIVITY</span>
                <h3>Make something new.</h3>
              </div>
            </motion.article>
          </div>

          <div className="sports-strip">
            <span>ACTIVITIES</span>

            <div>
              <b>Football</b>
              <b>Basketball</b>
              <b>Badminton</b>
              <b>Music</b>
              <b>Art</b>
              <b>Dance</b>
              <b>Robotics</b>
            </div>
          </div>
        </section>

        {/* ================= QUOTE ================= */}
        <section className="quote">
          <div className="eyebrow light">OUR BELIEF</div>

          <blockquote>
            “The purpose of education is not simply to prepare students for
            exams, but to prepare them for life.”
          </blockquote>

          <div className="quote-by">TULAS INTERNATIONAL SCHOOL</div>
        </section>

        {/* ================= ADMISSIONS ================= */}
        <motion.section
          className="section admissions"
          id="admissions"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="admission-copy">
            <div className="eyebrow">ADMISSIONS</div>

            <h2>
              Begin their
              <br />
              <em>next chapter.</em>
            </h2>

            <p>
              Take the first step towards a learning experience designed to
              help your child grow academically, personally and socially.
            </p>

            <a href="mailto:admissions@example.com" className="button button-dark">
              START AN ENQUIRY
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="admission-card">
            <div className="eyebrow">LET'S TALK</div>

            <h3>Have questions?</h3>

            <p>
              Our admissions team would be happy to help you understand the
              school, programmes and admissions process.
            </p>

            <div className="contact-row">
              <span>EMAIL</span>

              <strong>
                admissions@example.com
                <ArrowUpRight size={15} />
              </strong>
            </div>

            <div className="contact-row">
              <span>PHONE</span>

              <strong>
                +91 00000 00000
                <ArrowUpRight size={15} />
              </strong>
            </div>
          </div>
        </motion.section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="footer-top">
          <div className="brand footer-brand">
            <span className="brand-mark">T</span>

            <span>
              TULAS
              <small>INTERNATIONAL SCHOOL</small>
            </span>
          </div>

          <p>
            Learn with purpose.
            <br />
            Lead with confidence.
          </p>

          <a href="#admissions" className="footer-cta">
            GET IN TOUCH
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 TULAS INTERNATIONAL SCHOOL</span>

          <div>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#admissions">ADMISSIONS</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;