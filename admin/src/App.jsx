import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [modalType, setModalType] = useState(null); // 'member', 'event', 'news', etc.

  const closeModal = () => setModalType(null);

  const Modal = ({ title, children }) => (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={closeModal}>&times;</button>
        </div>
        {children}
      </div>
    </div>
  );

  const AddMemberModal = () => (
    <Modal title="Add New Member">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" className="form-control" placeholder="e.g. Kagiso Phiri" />
      </div>
      <div className="form-group">
        <label>Ward Association</label>
        <select className="form-control">
          <option>Selebi-Phikwe East</option>
          <option>Gaborone Central</option>
          <option>Francistown West</option>
          <option>Kanye North</option>
        </select>
      </div>
      <div className="form-group">
        <label>User Role</label>
        <select className="form-control">
          <option>Community Member</option>
          <option>Ward Manager</option>
          <option>Admin</option>
        </select>
      </div>
      <div className="modal-actions">
        <button className="btn-outline" onClick={closeModal}>Cancel</button>
        <button className="btn-primary" onClick={closeModal}>Save Member</button>
      </div>
    </Modal>
  );

  const CreateEventModal = () => (
    <Modal title="Create Event">
      <div className="form-group">
        <label>Event Title</label>
        <input type="text" className="form-control" placeholder="Town Hall Meeting" />
      </div>
      <div style={{display:'flex', gap:'1rem'}}>
        <div className="form-group" style={{flex:1}}>
          <label>Event Category</label>
          <select className="form-control">
            <option>Community Meeting</option>
            <option>Social Event</option>
            <option>Educational</option>
            <option>Sports & Recreation</option>
          </select>
        </div>
        <div className="form-group" style={{flex:1}}>
          <label>Date & Time</label>
          <input type="datetime-local" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label>Location / Venue</label>
        <input type="text" className="form-control" placeholder="e.g. Town Square" />
      </div>
      <div className="form-group">
        <label>Ticketing / RSVP</label>
        <select className="form-control">
          <option>Free RSVP (Max 500)</option>
          <option>Paid Ticketing</option>
          <option>Open Attendance</option>
        </select>
      </div>
      <div className="modal-actions">
        <button className="btn-outline" onClick={closeModal}>Cancel</button>
        <button className="btn-primary" onClick={closeModal}>Publish Event</button>
      </div>
    </Modal>
  );

  const CreateNewsModal = () => (
    <Modal title="Compose News Article">
      <div className="form-group">
        <label>Headline</label>
        <input type="text" className="form-control" placeholder="Enter bold headline..." />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select className="form-control">
          <option>National</option>
          <option>Policy Updates</option>
          <option>Local Initiatives</option>
          <option>Press Release</option>
        </select>
      </div>
      <div className="form-group">
        <label>Article Content</label>
        <textarea className="form-control" style={{height:'150px'}} placeholder="Write the full article content here... (WYSIWYG editor placeholder)"></textarea>
      </div>
      <div className="modal-actions">
        <button className="btn-outline" onClick={closeModal}>Save as Draft</button>
        <button className="btn-primary" onClick={closeModal}>Publish Now</button>
      </div>
    </Modal>
  );

  const renderOverview = () => (
    <>
      <div className="page-title">
        <h1>Platform <span className="highlight">Command Center</span></h1>
        <p>Real-time analytics and content moderation for the BNF Digital Ecosystem.</p>
      </div>

      <section className="stats-grid">
        <div className="stat-card glass p-glow">
          <div className="stat-header">
            <h3>Active Members</h3>
            <span className="trend up">↗ +12.5%</span>
          </div>
          <div className="stat-value">152,491</div>
          <div className="stat-chart line-pattern"></div>
        </div>

        <div className="stat-card glass">
          <div className="stat-header">
            <h3>App Downloads</h3>
            <span className="trend up">↗ +8.2%</span>
          </div>
          <div className="stat-value">84,204</div>
          <div className="stat-chart bars"></div>
        </div>

        <div className="stat-card glass">
          <div className="stat-header">
            <h3>Daily Engagement</h3>
            <span className="trend down">↘ -2.1%</span>
          </div>
          <div className="stat-value">28.4k</div>
          <div className="stat-chart line-pattern dimmed"></div>
        </div>

        <div className="stat-card glass highlight-card">
          <div className="stat-header">
            <h3>Content Pending</h3>
            <span className="trend urgent">Action Req.</span>
          </div>
          <div className="stat-value">14</div>
          <p className="stat-desc">Articles & Events awaiting approval</p>
        </div>
      </section>

      <div className="content-grid">
        <section className="content-panel glass flex-2" style={{maxHeight:'550px', overflowY:'auto'}}>
          <div className="panel-header">
            <h2>Content Moderation <span className="highlight">Queue</span></h2>
            <button className="view-link">View All</button>
          </div>
          
          <div className="table-responsive">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Title / Item</th>
                  <th>Module</th>
                  <th>Submitted By</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="item-details">
                      <strong>Youth Manifesto 2027</strong>
                      <span>News Article</span>
                    </div>
                  </td>
                  <td><span className="tag news">News</span></td>
                  <td>T. Motsumi (Gaborone)</td>
                  <td>Today, 09:41</td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-approve">Approve</button>
                      <button className="btn-reject">Reject</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="item-details">
                      <strong>Francistown Ward Assembly</strong>
                      <span>Community Event</span>
                    </div>
                  </td>
                  <td><span className="tag event">Event</span></td>
                  <td>K. Phiri (North)</td>
                  <td>Yesterday, 16:30</td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-approve">Approve</button>
                      <button className="btn-reject">Reject</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="item-details">
                      <strong>Comment Flagged: Rule 4</strong>
                      <span>User Comment</span>
                    </div>
                  </td>
                  <td><span className="tag alert">Alert</span></td>
                  <td>System Auto-Mod</td>
                  <td>Yesterday, 14:12</td>
                  <td>
                    <button className="btn-review">Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="side-panel flex-1">
          <div className="panel glass">
            <div className="panel-header">
              <h2>Recent <span className="highlight">Registrations</span></h2>
            </div>
            
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-dot new"></div>
                <div className="activity-text">
                  <p><strong>L. Dithopo</strong> joined from Mahalapye.</p>
                  <span>2 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-text">
                  <p><strong>B. Setswana</strong> downloaded the app.</p>
                  <span>15 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-text">
                  <p><strong>K. Ramokgwebana</strong> renewed membership.</p>
                  <span>1 hour ago</span>
                </div>
              </div>
            </div>
            <button className="btn-full-width">View Demographics</button>
          </div>
        </section>
      </div>
    </>
  );

  const renderUsersWards = () => (
    <div className="page-title">
      <h1>Users & <span className="highlight">Wards</span></h1>
      <p>Manage membership data, ward associations, and activity demographics.</p>
      
      <div className="content-panel glass" style={{marginTop: '2rem'}}>
        <div className="panel-header">
          <h2>Member Directory</h2>
          <button className="btn-primary" onClick={() => setModalType('member')}>+ Add Member</button>
        </div>
        <div className="table-responsive">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Name / ID</th>
                <th>Ward / District</th>
                <th>Role</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>L. Dithopo</strong><br/><span style={{fontSize:'0.8rem', color:'#aaa'}}>#MBR-9281X</span></td>
                <td>Mahalapye (Central)</td>
                <td>Member</td>
                <td><span className="tag news">Active</span></td>
                <td>Oct 2026</td>
                <td><button className="btn-review">Profile</button></td>
              </tr>
              <tr>
                <td><strong>T. Motsumi</strong><br/><span style={{fontSize:'0.8rem', color:'#aaa'}}>#MBR-1452A</span></td>
                <td>Gaborone (South)</td>
                <td>Ward Manager</td>
                <td><span className="tag news">Active</span></td>
                <td>Jan 2025</td>
                <td><button className="btn-review">Profile</button></td>
              </tr>
              <tr>
                <td><strong>K. Phiri</strong><br/><span style={{fontSize:'0.8rem', color:'#aaa'}}>#MBR-1499Z</span></td>
                <td>Francistown West</td>
                <td>Admin</td>
                <td><span className="tag news">Active</span></td>
                <td>Dec 2024</td>
                <td><button className="btn-review">Profile</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderNewsModule = () => (
    <div className="page-title">
      <h1>News <span className="highlight">Module</span></h1>
      <p>Create, edit, and publish official articles across the ecosystem.</p>
      
      <div className="stats-grid" style={{marginTop: '2rem'}}>
        <div className="stat-card glass">
          <div className="stat-header"><h3>Total Articles</h3></div>
          <div className="stat-value">142</div>
        </div>
        <div className="stat-card glass">
          <div className="stat-header"><h3>Monthly Views</h3></div>
          <div className="stat-value">840k</div>
        </div>
        <div className="stat-card glass" style={{gridColumn:'span 2', display:'flex', alignItems:'center', justifyContent:'center'}}>
           <button className="btn-primary" onClick={() => setModalType('news')} style={{width: '60%', padding:'1rem', fontSize:'1.1rem'}}>✍️ Compose New Article</button>
        </div>
      </div>

      <div className="content-panel glass" style={{marginTop: '2rem'}}>
        <div className="panel-header">
          <h2>Published Content</h2>
        </div>
        <div className="table-responsive">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Headline</th>
                <th>Category</th>
                <th>Author</th>
                <th>Reads</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>President outlines economic framework...</strong></td>
                <td>National</td>
                <td>Media Team</td>
                <td>45.2k</td>
                <td><span className="tag event">Published</span></td>
              </tr>
              <tr>
                <td><strong>Youth Wing concludes Northern Tour</strong></td>
                <td>Grassroots</td>
                <td>K. Letlole</td>
                <td>12.8k</td>
                <td><span className="tag event">Published</span></td>
              </tr>
              <tr>
                <td><strong>Draft: New scholarship program...</strong></td>
                <td>Community</td>
                <td>T. Motsumi</td>
                <td>-</td>
                <td><span className="tag alert">Draft</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEventBooking = () => (
    <div className="page-title">
      <h1>Event <span className="highlight">Booking</span> & Calendar</h1>
      <p>Schedule town halls, assemblies, and manage ticketing and RSVPs.</p>
      
      <div className="stats-grid" style={{marginTop: '2rem'}}>
        <div className="stat-card glass">
          <div className="stat-header"><h3>Upcoming Events</h3></div>
          <div className="stat-value">6</div>
        </div>
        <div className="stat-card glass">
          <div className="stat-header"><h3>Total RSVPs</h3></div>
          <div className="stat-value">1,248</div>
        </div>
        <div className="stat-card glass" style={{gridColumn:'span 2', display:'flex', alignItems:'center', justifyContent:'center'}}>
           <button className="btn-primary" onClick={() => setModalType('event')} style={{width: '60%', padding:'1rem', fontSize:'1.1rem'}}>📅 Schedule New Event</button>
        </div>
      </div>

      <div className="content-panel glass" style={{marginTop: '2rem'}}>
        <div className="panel-header">
          <h2>Event Calendar List</h2>
        </div>
        <div className="table-responsive">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date & Time</th>
                <th>Category</th>
                <th>RSVPs / Cap</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>National Town Hall: Digital Future</strong></td>
                <td>Nov 02, 2026 - 18:00</td>
                <td>Community</td>
                <td>412 / 500</td>
                <td><button className="btn-review">Details</button></td>
              </tr>
              <tr>
                <td><strong>Women in Leadership Summit</strong></td>
                <td>Nov 15, 2026 - 10:00</td>
                <td>Educational</td>
                <td>800 / ∞</td>
                <td><button className="btn-review">Details</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="page-title">
      <h1>System <span className="highlight">Settings</span></h1>
      <p>Manage application configurations, API connections, and themes.</p>
      
      <div className="content-grid" style={{marginTop: '2rem'}}>
        <div className="panel glass flex-1" style={{padding:'2rem'}}>
          <h2>App Configuration</h2>
          <div className="form-group" style={{marginTop:'1.5rem'}}>
            <label>Maintenance Mode</label>
            <select className="form-control"><option>Off</option><option>On</option></select>
          </div>
          <div className="form-group">
            <label>Auto-Approve Community Posts</label>
            <select className="form-control"><option>Disabled (Requires Moderation)</option><option>Enabled</option></select>
          </div>
          <button className="btn-primary">Save Settings</button>
        </div>
        <div className="panel glass flex-1" style={{padding:'2rem'}}>
          <h2>Platform Integrations</h2>
          <div className="form-group" style={{marginTop:'1.5rem'}}>
            <label>SMS Gateway Config</label>
            <input type="text" className="form-control" defaultValue="API-KEY-XXX-1234" />
          </div>
          <div className="form-group">
            <label>Payment Processor (Donations/Tickets)</label>
            <input type="text" className="form-control" defaultValue="Enabled (Live Mode)" disabled />
          </div>
          <button className="btn-primary">Update Keys</button>
        </div>
      </div>
    </div>
  );

  const renderAccessControl = () => (
    <div className="page-title">
      <h1>Access <span className="highlight">Control</span></h1>
      <p>Manage role-based permissions to ensure security and compliance.</p>
      
      <div className="content-panel glass" style={{marginTop: '2rem'}}>
        <div className="panel-header">
          <h2>Role Definitions</h2>
        </div>
        <div className="table-responsive">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Role Identity</th>
                <th>Content Creation</th>
                <th>Moderation</th>
                <th>System Config</th>
                <th>User Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Super Admin</strong></td>
                <td><span className="tag news">Full</span></td>
                <td><span className="tag news">Full</span></td>
                <td><span className="tag news">Full</span></td>
                <td>3</td>
              </tr>
              <tr>
                <td><strong>Ward Manager</strong></td>
                <td><span className="tag alert">Local Only</span></td>
                <td><span className="tag alert">Local Only</span></td>
                <td><span className="tag event">None</span></td>
                <td>68</td>
              </tr>
              <tr>
                <td><strong>Media Team</strong></td>
                <td><span className="tag news">Global News</span></td>
                <td><span className="tag event">None</span></td>
                <td><span className="tag event">None</span></td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'Overview': return renderOverview();
      case 'Users & Wards': return renderUsersWards();
      case 'News Module': return renderNewsModule();
      case 'Event Booking': return renderEventBooking();
      case 'Access Control': return renderAccessControl();
      case 'System Settings': return renderSystemSettings();
      default: return (
        <div className="page-title">
          <h1>Module <span className="highlight">Coming Soon</span></h1>
          <p>This feature is in development.</p>
        </div>
      );
    }
  };

  return (
    <div className="admin-container">
      {modalType === 'member' && <AddMemberModal />}
      {modalType === 'event' && <CreateEventModal />}
      {modalType === 'news' && <CreateNewsModal />}

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-box"><img src="/logo.jpeg" alt="BNF Logo" className="logo" /></div>
          <span className="brand-name">BNF Core</span>
        </div>

        <nav className="sidebar-nav">
          <span className="nav-label">Main Menu</span>
          <button className={`nav-btn ${activeTab === 'Overview' ? 'active' : ''}`} onClick={() => setActiveTab('Overview')}>
            <span className="icon">⊞</span> Overview
          </button>
          <button className={`nav-btn ${activeTab === 'Users & Wards' ? 'active' : ''}`} onClick={() => setActiveTab('Users & Wards')}>
            <span className="icon">👥</span> Users & Wards
          </button>
          <button className={`nav-btn ${activeTab === 'News Module' ? 'active' : ''}`} onClick={() => setActiveTab('News Module')}>
            <span className="icon">📰</span> News Module
          </button>
          <button className={`nav-btn ${activeTab === 'Event Booking' ? 'active' : ''}`} onClick={() => setActiveTab('Event Booking')}>
            <span className="icon">📅</span> Event Booking
          </button>
          
          <span className="nav-label spacer">Administration</span>
          <button className={`nav-btn ${activeTab === 'Access Control' ? 'active' : ''}`} onClick={() => setActiveTab('Access Control')}>
            <span className="icon">🛡️</span> Access Control
          </button>
          <button className={`nav-btn ${activeTab === 'System Settings' ? 'active' : ''}`} onClick={() => setActiveTab('System Settings')}>
            <span className="icon">⚙️</span> System Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="admin-profile">
            <div className="avatar">A</div>
            <div className="admin-info">
              <span className="name">Super Admin</span>
              <span className="role">National Office</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search members, content, or settings..." />
          </div>
          <div className="top-actions">
            <button className="icon-btn notification">
              <span className="icon">🔔</span>
              <span className="badge">3</span>
            </button>
            <button className="btn-primary" onClick={() => setModalType('member')}>+ Rapid Actions</button>
          </div>
        </header>

        <div className="dashboard-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
