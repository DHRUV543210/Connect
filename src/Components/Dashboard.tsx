import React, { useState } from 'react';
import '../Css/Dashboard.css';
import { FaVideo, FaCalendarPlus, FaSignOutAlt, FaBell, FaCogs, FaLock, FaPlus, FaSearch, FaUser, FaChevronLeft, FaChevronRight, FaUsers, FaCalendarAlt, FaUserCog } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('quick');

  // Mock user and meeting data
  const user = { name: 'John Doe', email: 'john@example.com' };
  const notifications = [
    { id: 1, text: 'Your meeting "Team Sync" starts in 10 minutes.' },
    { id: 2, text: 'You have a new contact request.' },
  ];
  const recentMeetings = [
    { id: 1, title: 'Team Sync', time: 'Today, 3:00 PM', status: 'upcoming' },
    { id: 2, title: 'Project Kickoff', time: 'Yesterday, 11:00 AM', status: 'completed' },
  ];
  const contacts = [
    { id: 1, name: 'Alice', online: true },
    { id: 2, name: 'Bob', online: false },
    { id: 3, name: 'Charlie', online: true },
  ];

  // Sidebar sections
  const sidebarSections = [
    { key: 'quick', label: 'Quick Actions', icon: <FaVideo /> },
    { key: 'contacts', label: 'Contacts', icon: <FaUsers /> },
    { key: 'meetings', label: 'Meetings/Schedule', icon: <FaCalendarAlt /> },
    { key: 'profile', label: 'Profile & Settings', icon: <FaUserCog /> },
  ];

  // Main content for each section
  const renderMainContent = () => {
    switch (activeSection) {
      case 'quick':
        return (
          <div className="main-section quick-main">
            <h2><FaVideo /> Quick Actions</h2>
            <div className="quick-actions-main">
              <button className="action-btn start"><FaVideo /> Start New Call</button>
              <button className="action-btn schedule"><FaCalendarPlus /> Schedule Call</button>
              <button className="action-btn join"><FaVideo /> Join Call</button>
            </div>
            <div className="notifications-main">
              <h3><FaBell /> Notifications</h3>
              <ul>
                {notifications.map(n => <li key={n.id}>{n.text}</li>)}
              </ul>
            </div>
          </div>
        );
      case 'contacts':
        return (
          <div className="main-section contacts-main">
            <h2><FaUsers /> Contacts</h2>
            <div className="contacts-search-main">
              <FaSearch /> <input type="text" placeholder="Search contacts..." />
              <button className="add-contact"><FaPlus /></button>
            </div>
            <ul className="contacts-list-main">
              {contacts.map(c => (
                <li key={c.id} className={c.online ? 'online' : 'offline'}>
                  <FaUser className="contact-avatar" /> {c.name} <span className="status-dot"></span>
                  <button className="remove-btn">Remove</button>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'meetings':
        return (
          <div className="main-section meetings-main">
            <h2><FaCalendarAlt /> Meetings & Schedule</h2>
            <div className="calendar-placeholder">Calendar integration coming soon.</div>
            <h3>Recent & Upcoming Meetings</h3>
            <ul>
              {recentMeetings.map(m => (
                <li key={m.id} className={m.status}>{m.title} <span>{m.time}</span></li>
              ))}
            </ul>
            <div className="join-meeting-section-main">
              <h3>Join a Meeting</h3>
              <input type="text" placeholder="Meeting ID or Invite Link" />
              <button className="join-btn">Quick Join</button>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="main-section profile-main">
            <h2><FaUserCog /> Profile & Settings</h2>
            <div className="profile-card-main">
              <div className="profile-avatar-main"><FaUser /></div>
              <div className="profile-info-main">
                <div><strong>Name:</strong> {user.name}</div>
                <div><strong>Email:</strong> {user.email}</div>
                <button>Edit Profile</button>
              </div>
            </div>
            <div className="security-main">
              <h3><FaLock /> Account & Security</h3>
              <ul>
                <li>Two-factor authentication: <span className="status-off">Off</span></li>
                <li>Logged-in devices: 2</li>
                <li><button>Sign out of all sessions <FaSignOutAlt /></button></li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`dashboard-layout${sidebarOpen ? '' : ' collapsed'}`}>
      <aside className={`sidebar${sidebarOpen ? '' : ' collapsed'}`}>
        <div className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </div>
        <div className="sidebar-sections">
          {sidebarSections.map(section => (
            <div
              key={section.key}
              className={`sidebar-section${activeSection === section.key ? ' active' : ''}`}
              onClick={() => setActiveSection(section.key)}
              title={section.label}
            >
              <span className="sidebar-icon">{section.icon}</span>
              {sidebarOpen && <span className="sidebar-label">{section.label}</span>}
            </div>
          ))}
        </div>
        {sidebarOpen && (
          <div className="sidebar-profile">
            <div className="sidebar-avatar"><FaUser /></div>
            <div className="sidebar-username">{user.name}</div>
          </div>
        )}
      </aside>
      <main className="dashboard-main-content">
        {renderMainContent()}
      </main>
    </div>
  );
};

export default Dashboard;
