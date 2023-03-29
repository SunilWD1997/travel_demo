import './footer.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {

  return (
    <div className="footer">

      <div className="top_div">

        <div className="footer_logo">
          <h2>Trippy</h2>
          <p>Choose your favourite destination</p>
        </div>

        <div className="social_icons">
          <a href="/" >
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href="/" >
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href="/" >
            <i className='fa-brands fa-behance-square'></i>
          </a>
          <a href="/" >
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>

      </div>

      <div className="bottom_div">

        <div className="section">
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div className="section">
          <h4>Community</h4>
          <a target='_blank' rel="noreferrer" href="https://github.com/SunilWD1997">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>

        <div className="section">
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <NavLink to='/contact'>Contact Us</NavLink>
        </div>

        <div className="section">
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>

      </div>

    </div>
  )
}

export default Footer