import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Estanislao Ran-Jel I. Estanislao',
  shortName: 'Ran-Jel Estanislao',
  role: 'Junior Developer',
  email: 'ranjelestanislao03@gmail.com',
  phone: '09930017809',
  location: 'Rodriguez, Rizal, Philippines',
  resumeUrl: '/Estanislao_Resume.pdf',
  linkedin: 'https://www.linkedin.com/in/ran-jel-estanislao-829487263/',
  github: 'https://github.com/DASH1324',
  summary:
    'I am a Cum Laude Information Technology graduate and Junior Developer at Helix Software Technologies. I build full-stack business software, from React interfaces and Java features to APIs, database logic, and production-ready workflows.',
};

const contactFormEndpoint = '3375c069ac2125ec3ff49654e0e40946';

const stats = [
  ['Junior Developer', 'Current Role'],
  ['React / Java', 'Current Stack'],
  ['Full-Stack', 'Development Focus'],
  ['Cum Laude', 'BSIT Graduate · 2026'],
];

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['education', 'Education'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

const projects = [
  {
    title: 'GreenLane',
    type: 'Helix Software Technologies · Full-Stack Developer',
    brand: 'GreenLane',
    period: '2026',
    liveUrl: 'https://staging.greenlane.ph/',
    stack: ['TSX (React)', 'Java'],
    description: 'BIR EIS compliance readiness platform for PEZA Registered Business Enterprises.',
    highlights: ['Built PMO admin console screens for dashboards, orientation, assessments, consultations, clients, invoices, and admin users.', 'Extended Java back-end features to support front-end functionality.'],
  },
  {
    title: 'Helix CAS',
    type: 'Helix Software Technologies · Front-End Developer',
    brand: 'Helix CAS',
    period: '2026',
    liveUrl: 'https://app.helixcas.com/',
    stack: ['TSX (React)', 'Java'],
    description: 'BIR EIS-compliant ERP and computerized accounting system for Philippine corporations and agencies.',
    highlights: ['Built Sales, Inventory, Dashboard, Customer, Staff, and Invoice screens.', 'Integrated front-end screens with the Java back-end.'],
  },
  {
    title: 'PawFolio',
    type: 'Full-Stack Project',
    image: '/images/pawfolio-project.png',
    period: 'Live Project',
    liveUrl: 'https://pawfolio-five.vercel.app/',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'Deployed pet health record platform for pet profiles, vaccination records, medications, medical history, reminders, and shared records.',
    impact: 'Shows full-stack implementation, record management, and production deployment.',
  },
  {
    title: 'MyFleet',
    type: 'Backend Developer Intern',
    image: '/images/myfleet-client-fleet.png',
    period: '2026',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    description:
      'Contributed to a client fleet management module with client records, fleet unit counts, search, filtering, navigation, and administrative workflows.',
    impact: 'Built backend modules and REST API workflows that supported real fleet operations.',
  },
  {
    title: 'Integrated Coffee Shop System',
    type: 'Backend Developer',
    image: '/images/bleu-bean-pos.png',
    period: '2024 - 2025',
    liveUrl: 'https://bleu-ums-zeta.vercel.app/',
    stack: ['FastAPI', 'Python', 'MSSQL', 'React.js'],
    description:
      'Capstone system connecting point-of-sale, inventory management, and online ordering modules through structured backend services.',
    impact: 'Designed API flows and database operations for staff-facing business processes.',
  },
  {
    title: 'Recipe Generator',
    type: 'Full-Stack Project',
    image: '/images/recipe-generator-hero.png',
    period: 'Live Project',
    liveUrl: 'https://recipe-no-db.vercel.app/',
    stack: ['React', 'JavaScript', 'CSS', 'Vercel'],
    description:
      'Deployed recipe planning interface that helps users generate recipe ideas from preferences and dietary needs.',
    impact: 'Demonstrates responsive UI delivery, guest access flow, and live deployment.',
  },
  {
    title: 'StepSync Inventory',
    type: 'Backend Developer',
    image: '/images/stepsync-inventory.jpg',
    period: '2024',
    stack: ['FastAPI', 'MSSQL', 'React.js', 'REST APIs'],
    description:
      'Inventory and purchasing module integrating an internal IMS with an external vendor system.',
    impact: 'Implemented REST API synchronization, stock updates, order management, and authentication.',
  },
  {
    title: 'Vista Hermosa Hotel',
    type: 'Backend Development Project',
    image: '/images/vista-hermosa-hotel.jpg',
    period: '2023',
    stack: ['C#', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Room reservation system with availability management, guest booking records, and hotel transaction workflows.',
    impact: 'Implemented backend logic and database operations using C# and SQLite.',
  },
  {
    title: 'Dental Appointment System',
    type: 'Backend Development Project',
    image: '/images/dental-appointment.jfif',
    period: '2023',
    stack: ['C# MVC', 'MSSQL', 'React.js', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Clinic management system for appointment scheduling, patient records, and structured clinic workflows.',
    impact: 'Applied MVC architecture with C# and MSSQL for organized backend logic and data handling.',
  },
];

const skillGroups = [
  {
    title: 'Languages and Frameworks',
    items: ['Python', 'FastAPI', 'C#', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'SQL'],
  },
  {
    title: 'Databases and Backend',
    items: ['MS SQL Server', 'SQLite', 'MongoDB', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Tools and Delivery',
    items: ['React.js', 'Git', 'FlutterFlow', 'Vercel', 'Cloud Hosting', 'Production Setup'],
  },
  {
    title: 'Core Competencies',
    items: ['Backend Development', 'Database Management', 'System Analysis', 'Web Development', 'Quality Assurance', 'Data Analytics'],
  },
];

const timeline = [
  {
    label: 'Junior Developer',
    place: 'Helix Software Technologies',
    detail: 'Developing GreenLane and Helix CAS, building React interfaces and extending Java back-end features for business software.',
    date: '2026 - Present',
    type: 'Experience',
    tags: ['React', 'TypeScript', 'Java', 'ERP', 'BIR EIS'],
  },
  {
    label: 'Backend Developer Intern',
    place: 'MyFleet Philippines Inc.',
    detail:
      'Worked on internal operations modules for fleet, vehicle, driver, and trip management using the MERN stack. Contributed to backend API design and database schema planning.',
    date: '2026',
    type: 'Experience',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Bachelor of Science in Information Technology',
    place: 'Polytechnic University of the Philippines Quezon City',
    detail:
      'Graduated Cum Laude with a Bachelor of Science in Information Technology.',
    date: '2022 - 2026 · Cum Laude',
    type: 'Education',
    tags: ['Database Management', 'Web Development', 'System Analysis', 'QA', 'Data Analytics'],
  },
  {
    label: 'STEM Strand with Honors',
    place: 'Kasiglahan Village Senior High School',
    detail:
      'Science, Technology, Engineering, and Mathematics track. Graduated with honors, building a strong foundation in analytical and problem-solving skills.',
    date: '2020 - 2022',
    type: 'Education',
    tags: ['Science', 'Technology', 'Engineering', 'Mathematics'],
  },
];

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: 'Location',
    value: profile.location,
    href: 'https://www.google.com/maps/search/?api=1&query=Rodriguez%2C%20Rizal%2C%20Philippines',
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: profile.github,
    icon: Github,
  },
  {
    label: 'Resume',
    href: profile.resumeUrl,
    icon: Download,
    download: true,
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <figure className="project-media">
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} />
        ) : (
          <div className={`project-brand project-brand-${project.title === 'GreenLane' ? 'greenlane' : 'helix'}`}>
            <strong>{project.brand}</strong>
            <span>{project.period} · Helix Software Technologies</span>
          </div>
        )}
        <figcaption>{project.type}</figcaption>
      </figure>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        )}
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.liveUrl && (
          <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
            Open live project
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [gridBursts, setGridBursts] = React.useState([]);
  const [contactStatus, setContactStatus] = React.useState('Open to opportunities');
  const [isSendingMessage, setIsSendingMessage] = React.useState(false);

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const senderEmail = formData.get('email')?.toString().trim();
    const subject = formData.get('subject')?.toString().trim() || 'Portfolio inquiry';
    const message = formData.get('message')?.toString().trim();

    setIsSendingMessage(true);
    setContactStatus('Sending message...');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactFormEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email: senderEmail,
          subject,
          message,
          _subject: `Portfolio message: ${subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Message request failed.');
      }

      form.reset();
      setContactStatus('Message sent. Check your email.');
    } catch (error) {
      setContactStatus('Could not send. Email me directly.');
    } finally {
      setIsSendingMessage(false);
    }
  };

  React.useEffect(() => {
    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  React.useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;

      if (pageBottom) {
        setActiveSection('contact');
        return;
      }

      const currentSection = navItems.reduce((current, [id]) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          return id;
        }

        return current;
      }, 'home');

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleAboutCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty('--tilt-x', `${(-y * 9).toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${(x * 9).toFixed(2)}deg`);
    card.style.setProperty('--photo-x', `${(x * 12).toFixed(2)}px`);
    card.style.setProperty('--photo-y', `${(y * 12).toFixed(2)}px`);
  };

  const resetAboutCardMove = (event) => {
    const card = event.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--photo-x', '0px');
    card.style.setProperty('--photo-y', '0px');
  };

  const handleBackgroundClick = (event) => {
    const interactiveTarget = event.target.closest(
      'a, button, input, textarea, select, .project-card, .skill-card, .timeline-item, .about-card, .contact-card'
    );

    if (interactiveTarget) {
      return;
    }

    const gridSize = 56;
    const gridX = Math.round(event.clientX / gridSize) * gridSize;
    const gridY = Math.round(event.clientY / gridSize) * gridSize;
    const id = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
    const burst = {
      id,
      x: gridX,
      y: gridY,
    };

    setGridBursts((currentBursts) => [...currentBursts, burst]);
    window.setTimeout(() => {
      setGridBursts((currentBursts) => currentBursts.filter((item) => item.id !== id));
    }, 2200);
  };

  return (
    <div className="app-shell" onPointerDown={handleBackgroundClick}>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grid-burst-layer" aria-hidden="true">
        {gridBursts.map((burst) => (
          <span
            className="grid-burst"
            key={burst.id}
            style={{
              '--burst-x': `${burst.x}px`,
              '--burst-y': `${burst.y}px`,
            }}
          >
            <span className="grid-burst-line grid-burst-line-left" />
            <span className="grid-burst-line grid-burst-line-right" />
            <span className="grid-burst-line grid-burst-line-up" />
            <span className="grid-burst-line grid-burst-line-down" />
          </span>
        ))}
      </div>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to portfolio home">
          <span className="brand-mark">ER</span>
          <span>
            <strong>{profile.shortName}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <a
              className={activeSection === id ? 'active' : undefined}
              href={`#${id}`}
              key={id}
              onClick={() => setActiveSection(id)}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-art" aria-hidden="true">
            <div className="portrait-slab">
              <img src="/images/profile.png" alt="" />
            </div>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Application Portfolio</p>
            <h1>
              Junior Developer building <span>business software</span> and web applications.
            </h1>
            <p className="summary">
              I build practical software for business workflows: Java features, React interfaces,
              APIs, and database-backed systems. I currently work on electronic invoicing and
              accounting platforms at Helix Software Technologies.
            </p>
            <div className="actions">
              <a className="button primary" href={profile.resumeUrl} download>
                <Download size={18} aria-hidden="true" />
                Resume
              </a>
              <a className="button secondary" href="#projects">
                <ArrowDownRight size={18} aria-hidden="true" />
                View Works
              </a>
            </div>
          </div>

        </section>

        <section className="section intro-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">About Me</p>
            <h2>
              Hi, I'm <span className="typing-name">Ran-Jel.</span>
            </h2>
            <p>
              A <strong>Junior Developer at Helix Software Technologies</strong> and Cum Laude BSIT
              graduate from <strong>PUP Quezon City</strong>. I build web systems that support real
              business workflows.
            </p>
            <div className="about-info" aria-label="About profile details">
              <div>
                <span>Full Name</span>
                <strong>Ran-Jel Estanislao</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>Full-Stack Developer</strong>
              </div>
              <div>
                <span>Degree</span>
                <strong>BSIT - PUP Quezon City</strong>
              </div>
              <div>
                <span>Graduated</span>
                <strong>2026 · Cum Laude</strong>
              </div>
            </div>
          </div>

          <div
            className="about-card"
            onPointerMove={handleAboutCardMove}
            onPointerLeave={resetAboutCardMove}
          >
            <div className="about-photo">
              <img src="/images/profile.png" alt="Ran-Jel Estanislao" />
            </div>
            <div>
              <strong>Ran-Jel Estanislao</strong>
              <span>Junior Developer</span>
            </div>
            <small>Junior Developer · Helix Software Technologies</small>
          </div>
        </section>

        <section className="section timeline-section" id="education">
          <div className="timeline-heading">
            <p className="eyebrow">Education and Experience</p>
            <h2>
              My <span>background.</span>
            </h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.label}>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-date">{item.date}</span>
                    <span className="timeline-type">{item.type}</span>
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.place}</p>
                  <small>{item.detail}</small>
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <h2>Featured <span>Projects</span></h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="skills-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>
              Technical <span>strengths.</span>
            </h2>
            <p>
              Languages, tools, and competencies I bring to every project, from backend systems
              to production delivery.
            </p>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{group.title.replace(' and ', ' & ')}</h3>
                <div className="stack-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>
              Get in <span>touch.</span>
            </h2>
            <p>
              Open to developer roles, freelance projects, and technical interviews. Let's talk.
            </p>

            <div className="contact-list" aria-label="Contact information">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a className="contact-row" href={item.href} key={item.label}>
                    <span className="contact-icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </span>
                  </a>
                );
              })}
            </div>

            <span className="availability-pill">Open to opportunities</span>

            <div className="social-block">
              <small>Find me on</small>
              <div className="social-links">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      aria-label={item.label}
                      download={item.download}
                      href={item.href}
                      key={item.label}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      title={item.label}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form className="contact-card" onSubmit={handleContactSubmit}>
            <div className="form-heading">
              <strong>Send a message</strong>
              <span>I typically respond within 24 hours.</span>
            </div>

            <div className="form-grid">
              <label>
                <span>Full name</span>
                <input name="name" placeholder="e.g. Juan dela Cruz" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" placeholder="you@example.com" required type="email" />
              </label>
            </div>

            <label>
              <span>Subject</span>
              <input name="subject" placeholder="Job opportunity, project, interview..." required />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell me about what you have in mind..."
                required
                rows="5"
              />
            </label>

            <div className="form-footer">
              <span className="form-status">{contactStatus}</span>

              <button className="button primary contact-submit" type="submit" disabled={isSendingMessage}>
                <Send size={16} aria-hidden="true" />
                {isSendingMessage ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className="site-footer">
        <p>&copy; 2026 Ran-Jel Estanislao. All rights reserved.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
