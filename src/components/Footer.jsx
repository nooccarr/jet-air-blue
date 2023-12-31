import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const contactInfo = () => (
    <div>
      <h3 className='footer-section-title'>jet air blue</h3>
      <div className='footer-section-contact-us-container'>

        <ul className='footer-section-icon-container'>
          <li className='footer-contact-info'>
            <span className='footer-contact-info-icon'>
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </li>
          <li className='footer-contact-info'>
            <span className='footer-contact-info-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </li>
          <li className='footer-contact-info'>
            <span className='footer-contact-info-icon'>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </li>
        </ul>

        <ul className='footer-section-info-container'>
          <li className='footer-contact-info'>
            <a href='tel:+1-718-359-1070'>718-359-1070</a>
          </li>
          <li className='footer-contact-info'>
            <a href='mailto: test@test.com'>jouncpark@gmail.com</a>
          </li>
          <li className='footer-contact-info'>
            <a href='https://maps.app.goo.gl/fc9EKkDM2yR1QnMQ7' target='_blank' rel=''>
              <address>
                Republic Airport<br/>
                7150 Republic Airport<br/>
                Farmingdale, NY 11735
              </address>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  const quickLinks = () => (
    <div>
      <h3 className='footer-section-title'>quick links</h3>
      <ul className='footer-section-quick-links-container'>
        <li className='footer-quick-links'>
          <Link to='/'>home</Link>
        </li>
        <li className='footer-quick-links'>
          <Link to='/classic-manhattan-plane-tour'>classic manhattan plane tour</Link>
        </li>
        <li className='footer-quick-links'>
          <Link to='/montauk-plane-tour'>montauk plane tour</Link>
        </li>
        <li className='footer-quick-links'>
          <Link to='/faq'>frequently asked questions</Link>
        </li>
        <li className='footer-quick-links'>
          <Link to='/contact-us'>contact us</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <footer>
      <section className='footer-container'>
        {contactInfo()}
        {quickLinks()}
      </section>
    </footer>
  );
};

export default Footer;