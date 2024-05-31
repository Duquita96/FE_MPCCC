import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter, FaSquareInstagram } from 'react-icons/fa6';
import { MdOutlineReviews } from 'react-icons/md';
import { ImPriceTags } from 'react-icons/im';
import { PiCubeTransparentLight } from 'react-icons/pi';
import '../style/footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-social'>
        <a
          className='ft-social-icon pointer'
          href='https://www.facebook.com'
          target='_blank'>
          <FaFacebookSquare size={20} />
        </a>
        <a
          className='ft-social-icon pointer'
          href='https://www.linkedin.com'
          target='_blank'>
          <FaLinkedin size={20} />
        </a>
        <a
          className='ft-social-icon pointer'
          href='https://twitter.com'
          target='_blank'>
          <FaXTwitter size={20} />
        </a>
        <a
          className='ft-social-icon pointer'
          href='https://www.instagram.com'
          target='_blank'>
          <FaSquareInstagram size={20} />
        </a>
      </div>
      <div className='footer-main'>
        <div className='ft-box'>
          <ImPriceTags size={40} color={'var(--clr-light1)'} />
          <p className='ft-text'>
            Easy. Searching for the best deal? Whether you&apos;re shopping for
            books, tours, games or pc-parts, we&apos;ve got everything you need.
            It&apos;s incredibly straightforward.
          </p>
        </div>
        <div className='ft-box'>
          <PiCubeTransparentLight size={40} color={'var(--clr-light1)'} />
          <p className='ft-text'>
            Clear. By providing clear information, we help you make the best
            choices tailored to your needs. Our main focus is to assist you in
            your shopping journey.
          </p>
        </div>
        <div className='ft-box'>
          <MdOutlineReviews size={40} color={'var(--clr-light1)'} />
          <p className='ft-text'>
            Smart. Dive into our detailed reviews and confidently find products
            tailored to your needs. With PMC&#179; marketplace you&apos;re
            making smarter choices.
          </p>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>
          Copyright &#169; {new Date().getFullYear()} by PMC&#179; Marketplace
        </p>
      </div>
    </div>
  );
};

export default Footer;
