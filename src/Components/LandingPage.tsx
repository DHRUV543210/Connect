import '../App.css'
import { Link } from 'react-router-dom'

// Icons
import { PiPlugsConnectedFill } from 'react-icons/pi'

function LandingPage() {
    return (
        <div className="app-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <div className='gitConnectedIcon'>
                        <PiPlugsConnectedFill />
                    </div>
                    Connect
                </div>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className='signInOrSignUp'>
                    <Link to="/accounts">
                        <button>Log In / Sign Up</button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Seamless Video Conferencing</h1>
                    <p>Connect, collaborate, and communicate with ease. Experience high-quality video meetings from anywhere, anytime.</p>
                    <button className="cta-btn">Get Started</button>
                </div>
                <div className="hero-image">
                    <img src="/Images/videoconferencing01.jpg" alt="Video Conference" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <h2>Features</h2>
                <div className="features-cards">
                    <div className="feature-card scroll-animate">
                        <h3>HD Video & Audio</h3>
                        <p>Crystal clear video and audio for all your meetings.</p>
                    </div>
                    <div className="feature-card scroll-animate">
                        <h3>Screen Sharing</h3>
                        <p>Share your screen with a single click for better collaboration.</p>
                    </div>
                    <div className="feature-card scroll-animate">
                        <h3>Secure & Reliable</h3>
                        <p>End-to-end encryption and reliable connections every time.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <h2>About Connect</h2>
                <p>Connect is designed to make remote meetings effortless and productive. Our platform is built with the latest technology to ensure your conversations are private, secure, and high quality.</p>
            </section>

            {/* Contact Section */}
            <section className="contact" id="contact">
                <h2>Contact Us</h2>
                <p>Have questions? Reach out to our team and we’ll be happy to help!</p>
                <button className="contact-btn">Contact Support</button>
            </section>
        </div>
    )
}

export default LandingPage;