import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const goTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); 
  };

  const Navbar = () => (
    <nav className="glass-header">
      <div className="nav-container">
        <div className="logo-section" onClick={() => goTo('home')}>
          <img src="/logo.jpeg" alt="BNF Logo" className="logo" />
          <div className="brand-text">
            <span className="brand-title">BNF</span>
            <span className="brand-subtitle" style={{display: 'none'}}>Official Platform</span>
          </div>
        </div>
        
        <div className="desktop-menu">
          <button onClick={() => goTo('manifesto')} className="nav-link">Our Vision</button>
          <button onClick={() => goTo('news')} className="nav-link">News Hub</button>
          <button onClick={() => goTo('events')} className="nav-link">Events</button>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="btn-outline" onClick={() => goTo('login')}>Log In</button>
          <button className="btn-solid glow-btn" onClick={() => goTo('register')}>Join BNF</button>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="advanced-footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="logo-section" onClick={() => goTo('home')} style={{cursor: 'pointer', marginBottom: '1rem'}}>
            <img src="/logo.jpeg" alt="BNF Logo" className="logo" />
            <span className="brand-title" style={{fontSize: '1.8rem'}}>BNF</span>
          </div>
          <p>Preserving our heritage, uniting our citizens, and pioneering the digital future of Botswana.</p>
          <div className="social-icons" style={{marginTop:'1.5rem'}}>
             <a href="#" className="social-icon">X</a>
             <a href="#" className="social-icon">f</a>
             <a href="#" className="social-icon">in</a>
          </div>
        </div>
        
        <div className="footer-links-col">
          <h4>Organization</h4>
          <a href="#" onClick={(e) => {e.preventDefault(); goTo('manifesto');}}>Our Vision / Manifesto</a>
          <a href="#">Leadership Directory</a>
          <a href="#">Constituency Map</a>
          <a href="#">Youth Wing</a>
        </div>

        <div className="footer-links-col">
          <h4>Resources</h4>
          <a href="#" onClick={(e) => {e.preventDefault(); goTo('news');}}>Press Releases</a>
          <a href="#">Policy Documents</a>
          <a href="#">Membership FAQ</a>
          <a href="#">Contact Support</a>
        </div>

        <div className="footer-links-col">
          <h4>Legal</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Data Protection</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Botswana National Front. All Rights Reserved.</p>
        <div style={{display: 'flex', alignItems: 'center', gap:'1rem'}}>
           <button className="theme-toggle-btn" onClick={toggleTheme}>
             {theme === 'dark' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
           </button>
        </div>
      </div>
    </footer>
  );

  const HomeView = () => (
    <>
      <main className="main-content">
        <section className="hero-section">
          {/* Stunning background image of Botswana */}
          <div className="hero-bg-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80')"}}></div>
          <div className="hero-text-content">
            <div className="badge">New Era of Digital Governance</div>
            <h1 className="hero-headline">
              Shaping the Future <br /> of <span className="highlight-text">Botswana</span>
            </h1>
            <p className="hero-subtext">
              Join the movement that champions social democracy, equality, and national unity. We are building Africa's most technologically advanced political organization, starting right here.
            </p>
            <div className="hero-cta-group">
              <button className="btn-solid glow-btn large" onClick={() => goTo('register')}>Get Involved Today</button>
              <button className="btn-ghost large" onClick={() => goTo('manifesto')}>View Our Manifesto</button>
            </div>
            
            <div className="stats-row">
              <div className="stat-item">
                <h2>150k+</h2>
                <p>Active Members</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h2>45</h2>
                <p>Constituencies</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h2>100%</h2>
                <p>Committed</p>
              </div>
            </div>
          </div>
          
          <div className="hero-visual-content">
            <div className="logo-art-container">
               <img src="/logo.jpeg" alt="Background Element" className="logo-art-bg" />
               <img src="/logo.jpeg" alt="BNF Official Emblem" className="logo-art-foreground" />
            </div>
          </div>
        </section>

        {/* Feature Section with Fixed Image Link */}
        <section className="feature-section" style={{maxWidth: '1300px', margin: '0 auto', padding: '2rem'}}>
           <div className="glass-card" style={{display:'flex', overflow:'hidden', alignItems:'center'}}>
              {/* Used a stunning image of African people/culture */}
              <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80" alt="Beautiful Botswana" style={{width:'50%', alignSelf:'stretch', objectFit:'cover'}} />
              <div style={{padding:'4rem', width:'50%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <h2 style={{fontSize:'2.5rem', marginBottom:'1rem', color:'var(--text-primary)'}}>Preserving Our Heritage, <span className="highlight-text">Pioneering</span> Our Future</h2>
                <p style={{color:'var(--text-secondary)', fontSize:'1.1rem', marginBottom:'2rem'}}>From the majestic Okavango Delta to the bustling innovations in Gaborone, the Botswana National Front is committed to ensuring sustainable growth that honors our land and empowers every citizen.</p>
                <button className="btn-outline" onClick={() => goTo('manifesto')} style={{alignSelf:'flex-start'}}>Read Our Policy Book</button>
              </div>
           </div>
        </section>

        {/* App Download Section Using Img 0599 */}
        <section className="app-download-section" style={{maxWidth: '1300px', margin: '0 auto', padding: '2rem'}}>
          <div className="app-download-card">
             <div className="app-download-text">
                <h2>Take the Movement <span className="highlight-text">Anywhere</span></h2>
                <p>Download the official BNF mobile app to access your digital membership card, engage in ward forums, pay dues securely, and get breaking news delivered instantly to your device.</p>
                <div className="store-buttons">
                  <button className="store-btn">Download on App Store</button>
                  <button className="store-btn">Get it on Google Play</button>
                </div>
             </div>
             {/* Using the image specified by the user */}
             <img src="/IMG_0599.PNG" alt="BNF Mobile App Screen" className="app-phone-mockup" />
          </div>
        </section>

        <section id="news" className="news-section">
          <div className="section-header align-left">
            <h2>Latest <span className="highlight-text">News & Updates</span></h2>
            <button className="view-link" onClick={() => goTo('news')} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize:'1rem'}}>View All Articles &rarr;</button>
          </div>

          <div className="news-grid">
            <article className="news-card feature-article" onClick={() => goTo('news')}>
              <div className="news-image-placeholder primary" style={{backgroundImage: "url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=80')", backgroundSize:'cover'}}></div>
              <div className="news-content">
                <span className="news-category">National Address</span>
                <h3>President outlines economic revitalization framework for 2027</h3>
                <p>A comprehensive look at the new policies aimed at sustainable growth and empowering local businesses across all wards.</p>
                <div className="news-meta">
                  <span>By Media Team</span>
                  <span>• Oct 25, 2026</span>
                </div>
              </div>
            </article>

            <div className="secondary-news-grid">
              <article className="news-card secondary" onClick={() => goTo('news')}>
                <div className="news-content">
                  <span className="news-category">Grassroots</span>
                  <h3>Youth Wing successfully concludes Northern Tour</h3>
                  <div className="news-meta">
                    <span>Oct 23, 2026</span>
                  </div>
                </div>
              </article>
              <article className="news-card secondary" onClick={() => goTo('news')}>
                <div className="news-content">
                  <span className="news-category">Policy</span>
                  <h3>Digital Governance Bill passed to community review phase</h3>
                  <div className="news-meta">
                    <span>Oct 21, 2026</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );

  const LoginView = () => (
    <div className="auth-page">
      <div className="glass-card auth-card">
        <img src="/logo.jpeg" alt="BNF Logo" className="logo" />
        <h2 style={{color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '2rem'}}>Welcome Back</h2>
        
        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); goTo('home'); }}>
          <div className="form-group">
            <label>Membership ID or Email</label>
            <input type="text" placeholder="Enter your ID" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn-solid glow-btn" style={{width: '100%', marginTop: '1rem'}}>Access Portal</button>
        </form>
        
        <div className="auth-links">
          <span style={{color: 'var(--text-secondary)'}}>Not a member yet?</span>
          <button onClick={() => goTo('register')}>Join the Movement</button>
        </div>
      </div>
    </div>
  );

  const RegisterView = () => (
    <div className="auth-page">
      <div className="glass-card auth-card" style={{maxWidth: '600px'}}>
        <img src="/logo.jpeg" alt="BNF Logo" className="logo" />
        <h2 style={{color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '2rem'}}>Become a Member</h2>
        
        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); goTo('home'); }}>
          <div style={{display: 'flex', gap: '1rem'}}>
            <div className="form-group" style={{flex: 1}}>
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group" style={{flex: 1}}>
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Select Ward</label>
            <input type="text" placeholder="e.g. Gaborone Central" />
          </div>
          <div className="form-group">
            <label>Create Password</label>
            <input type="password" placeholder="Min 8 characters" />
          </div>
          <button type="submit" className="btn-solid glow-btn" style={{width: '100%', marginTop: '2rem'}}>Complete Registration</button>
        </form>

        <div className="auth-links">
          <span style={{color: 'var(--text-secondary)'}}>Already registered?</span>
          <button onClick={() => goTo('login')}>Log In</button>
        </div>
      </div>
    </div>
  );

  const ManifestoView = () => (
    <div className="page-wrapper">
      <div className="page-header" style={{backgroundImage: "url('https://images.unsplash.com/photo-1547471080-7fc2caa6944a?auto=format&fit=crop&w=1600&q=80')", backgroundSize:'cover', position:'relative', minHeight:'300px', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.7)'}}></div>
        <div style={{position:'relative', zIndex:2}}>
          <h1 style={{fontSize: '4rem', margin: '0 0 1rem', color: '#FFF'}}>Our <span className="highlight-text">Vision</span></h1>
          <p style={{fontSize:'1.2rem', color:'#ffd700'}}>The Official Manifesto of the Botswana National Front</p>
        </div>
      </div>
      <div className="page-container manifesto-body glass-card" style={{marginTop:'-50px', position:'relative', zIndex:3, padding:'4rem', background:'var(--bg-dark)'}}>
        <h2 style={{color: 'var(--primary-yellow)', marginBottom: '2rem', fontSize:'2rem'}}>A New Dawn for Botswana</h2>
        <p style={{color: 'var(--text-primary)'}}>The Botswana National Front represents the future of our great nation. We believe in building a robust digital governance framework that supports every citizen, from the bustling streets of Gaborone to our rural communities.</p>
        <p style={{color: 'var(--text-primary)'}}>Our goal is to ensure 100% digital inclusion by 2030, offering free educational portals, tele-medicine capabilities for remote wards, and complete transparency in local governance funding.</p>
        
        <h3 style={{marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>Core Pillars</h3>
        <ul style={{listStyle:'none', padding:0}}>
          <li style={{marginBottom:'1rem', padding:'1rem', background:'rgba(255,207,0,0.05)', borderLeft:'4px solid var(--primary-yellow)', borderRadius:'4px', color:'var(--text-secondary)'}}><strong style={{color:'var(--text-primary)'}}>Economic Independence:</strong> Structuring a self-sustaining economy powered by local business growth.</li>
          <li style={{marginBottom:'1rem', padding:'1rem', background:'rgba(255,207,0,0.05)', borderLeft:'4px solid var(--primary-yellow)', borderRadius:'4px', color:'var(--text-secondary)'}}><strong style={{color:'var(--text-primary)'}}>Social Equality:</strong> Eradicating disparities in healthcare and education across all districts.</li>
          <li style={{marginBottom:'1rem', padding:'1rem', background:'rgba(255,207,0,0.05)', borderLeft:'4px solid var(--primary-yellow)', borderRadius:'4px', color:'var(--text-secondary)'}}><strong style={{color:'var(--text-primary)'}}>Technological Leadership:</strong> Launching Africa's premier citizen digital hub.</li>
        </ul>
        <button className="btn-outline" style={{marginTop: '3rem'}} onClick={() => goTo('home')}>&larr; Back Home</button>
      </div>
    </div>
  );

  const NewsView = () => (
    <div className="page-wrapper">
      <div className="page-header" style={{paddingBottom: '2rem'}}>
        <h1 style={{fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>News <span className="highlight-text">Hub</span></h1>
        <p style={{color:'var(--text-secondary)'}}>Stay informed with the latest updates from the Botswana National Front.</p>
      </div>
      <div className="page-container" style={{maxWidth: '1200px'}}>
        
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'2rem', marginBottom:'3rem'}}>
           <div className="glass-card" style={{padding:'2rem'}}>
              <span className="news-category">Policy Updates</span>
              <h3 style={{fontSize:'1.8rem', margin:'1rem 0', color: 'var(--text-primary)'}}>Agricultural Support Fund Expansion Approved</h3>
              <p style={{color:'var(--text-secondary)', marginBottom:'1.5rem'}}>Over 500 local farmers are set to receive new digital farming analytics tools under the expanded BNF sustainable framework.</p>
              <div style={{color:'var(--text-secondary)', fontSize:'0.85rem'}}>Published Oct 28, 2026 • 5 min read</div>
           </div>

           <div className="glass-card" style={{padding:'2rem'}}>
              <span className="news-category">Community Voice</span>
              <h3 style={{fontSize:'1.8rem', margin:'1rem 0', color: 'var(--text-primary)'}}>Gaborone Tech Hub records high youth turnout</h3>
              <p style={{color:'var(--text-secondary)', marginBottom:'1.5rem'}}>Hundreds of young innovators gathered to showcase prototypes built through the new educational pipeline.</p>
              <div style={{color:'var(--text-secondary)', fontSize:'0.85rem'}}>Published Oct 26, 2026 • 3 min read</div>
           </div>
           
           <div className="glass-card" style={{padding:'2rem'}}>
              <span className="news-category">National Address</span>
              <h3 style={{fontSize:'1.8rem', margin:'1rem 0', color: 'var(--text-primary)'}}>President outlines economic revitalization</h3>
              <p style={{color:'var(--text-secondary)', marginBottom:'1.5rem'}}>A comprehensive look at the new policies aimed at sustainable growth and empowering local businesses.</p>
              <div style={{color:'var(--text-secondary)', fontSize:'0.85rem'}}>Published Oct 25, 2026 • 12 min read</div>
           </div>
        </div>

        <div style={{textAlign:'center'}}>
          <button className="btn-solid" onClick={() => goTo('home')}>Load More Articles</button>
        </div>
      </div>
    </div>
  );

  const EventsView = () => (
    <div className="page-wrapper">
      <div className="page-header" style={{paddingBottom: '2rem'}}>
        <h1 style={{fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>Event <span className="highlight-text">Calendar</span></h1>
        <p style={{color: 'var(--text-secondary)'}}>Register for upcoming Town Halls, Meetings, and Summits.</p>
      </div>
      <div className="page-container" style={{maxWidth: '1000px'}}>
        
        <div className="events-container">
            <div className="event-card glass-card">
              <div className="event-date">
                <span className="month">NOV</span>
                <span className="day">02</span>
              </div>
              <div className="event-details">
                <h3 style={{fontSize:'1.6rem', marginBottom:'0.5rem'}}>National Town Hall: Digital Future</h3>
                <p style={{color:'var(--text-primary)'}}>Gaborone International Convention Centre</p>
                <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', margin:'1rem 0'}}>Join the top leadership team in discussing the roadmap for digital infrastructure rollout.</p>
                <div className="event-tags">
                  <span className="tag">Community</span>
                  <span className="tag outline">In-Person</span>
                </div>
              </div>
              <button className="btn-register glow-btn" onClick={() => goTo('register')}>RSVP Now</button>
            </div>

            <div className="event-card glass-card">
              <div className="event-date">
                <span className="month">NOV</span>
                <span className="day">15</span>
              </div>
              <div className="event-details">
                <h3 style={{fontSize:'1.6rem', marginBottom:'0.5rem'}}>Women in Leadership Summit</h3>
                <p style={{color:'var(--text-primary)'}}>Virtual Broadcast via BNF Mobile App</p>
                <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', margin:'1rem 0'}}>A dedicated summit prioritizing female empowerment and political involvement.</p>
                <div className="event-tags">
                  <span className="tag" style={{background: 'rgba(168, 85, 247, 0.1)', color: '#A855F7'}}>Educational</span>
                  <span className="tag outline">Virtual</span>
                </div>
              </div>
              <button className="btn-register" onClick={() => goTo('register')} style={{background:'var(--text-primary)', color:'var(--bg-dark)'}}>Register Link</button>
            </div>
            
          </div>

        <div style={{textAlign:'center', marginTop:'3rem'}}>
           <button className="btn-outline" onClick={() => goTo('home')}>&larr; Back to Dashboard</button>
        </div>
      </div>
    </div>
  );

  // Router
  let renderApp = <HomeView />;
  switch(currentPage) {
    case 'login': renderApp = <LoginView />; break;
    case 'register': renderApp = <RegisterView />; break;
    case 'manifesto': renderApp = <ManifestoView />; break;
    case 'news': renderApp = <NewsView />; break;
    case 'events': renderApp = <EventsView />; break;
    default: renderApp = <HomeView />; break;
  }

  return (
    <div className="app-wrapper" data-theme={theme}>
      <div className="bg-glow top-left"></div>
      <div className="bg-glow bottom-right"></div>
      
      {currentPage !== 'login' && currentPage !== 'register' && <Navbar />}
      {renderApp}
      {currentPage !== 'login' && currentPage !== 'register' && <Footer />}
    </div>
  );
}

export default App;
