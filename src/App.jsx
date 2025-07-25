


import './App.css'
import headshot1 from '../headshot1.png'
import headshot2 from '../headshot2.png'
import headshot3 from '../headshot3.png'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/people/Alondra-Figueroa/pfbid0jHb3nhYSZN2YnS5FumFguFS58aq5BouHocQy9EMsxSWHXxLF8bAPH9W1QmT9c54kl/?mibextid=wwXIfr&rdid=WLv60stsglrrwNQ1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16cgNk4XTP%2F%3Fmibextid%3DwwXIfr' },
  { name: 'Instagram', url: 'https://www.instagram.com/amyalonndra/?igsh=MWF4ZzJqZ2psNzAwaw%3D%3D' },
]

function scrollToSection(e, href) {
  e.preventDefault();
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <div className="main-bg">
      <nav className="top-nav">
        <span className="logo-title">Portfolio</span>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} onClick={e => scrollToSection(e, link.href)}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="nav-menu-icon">&#9776;</div>
      </nav>
      <section id="home" className="portfolio-content section-scroll fade-in">
        <div className="profile-left">
          <h1 className="profile-name">Alondra F.</h1>
          <p className="profile-role">Skank / Hoe</p>
          <button className="contact-btn" onClick={e => scrollToSection(e, '#contact')}>Contact</button>
        </div>
        <div className="profile-right">
          <div className="profile-card-glass">
            <img src={headshot2} alt="Alondra F. Headshot" className="profile-card-headshot" />
          </div>
        </div>
      </section>
      <section id="about" className="section-scroll card-glass fade-in">
        <h2>About Me</h2>
        <p>
          Born in a cardboard box behind the local disco, I learned early that life is a dance—sometimes on broken glass, sometimes dodging the legendary chancla. As the oldest of four, I had two younger sisters to keep in line and a little brother who, let’s be real, is mom’s favorite (and yes, I secretly envy his VIP status). My childhood was a wild mix of escaping flying flip-flops (with abuela’s aim, you had to be quick), outsmarting the neighborhood raccoons, and perfecting the art of sneaking snacks past my siblings. By age seven, I was already running a lemonade stand with questionable accounting, a side hustle in glitter sales, and a reputation as the downest foo on the block.
        </p>
        <p>
          Through epic battles with homework-eating dogs, surviving the annual family karaoke showdown (where Selena covers were mandatory), and learning to never disrespect the tía’s mole, I built tenacity, strength, and a sense of humor that could withstand any roast. Every trial—from failed science fair volcanoes to the legendary slip-n-slide incident—shaped me into the certified skank hoe I am today: bold, unbreakable, and always ready to turn chaos into creativity. If you need someone who can laugh through adversity, stand firm in a family chisme circle, and bring a unique spark to any project, look no further—porque soy una down ass foo, for real!
        </p>
      </section>
      <section id="achievements" className="section-scroll card-glass fade-in">
        <h2>Personal Achievements</h2>
        <ul>
          <li>Survived 2,347 flying chanclas (and counting)</li>
          <li>Mastered the art of sneaking snacks past siblings and abuela</li>
          <li>Won the family karaoke showdown with a legendary Selena cover</li>
          <li>Successfully convinced my little brother to share his mom-favorite snacks (once)</li>
          <li>Built a lemonade empire with questionable accounting practices</li>
          <li>Officially crowned “Down Ass Foo” by the neighborhood</li>
          <li>Became a certified skank hoe—bold, unbreakable, and ready for anything!</li>
        </ul>
      </section>
      <section id="contact" className="section-scroll card-glass fade-in">
        <h2>Contact</h2>
        <p>Email: alondra.f@email.com</p>
        <div className="social-bar">
          <span className="social-label">SOCIAL</span>
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener" className="social-link-bar">{link.name}</a>
          ))}
        </div>
      </section>
      {/* ...existing code... */}
    </div>
  )
}

export default App
