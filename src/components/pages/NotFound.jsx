import useTypewriter from '../../utils/useTypewriter.js';
import { Link } from 'react-router-dom';
import '../../style/notFoundPage.css';

const NotFoundPage = () => {

  const code0Ref = useTypewriter('this_page.not_found = true;', 0);
  const code1Ref = useTypewriter('if (you_spelt_it_wrong) {try_again();}', 600);
  const code2Ref = useTypewriter(
    'else if (we_screwed_up) {alert("We\'re really sorry about that."); window.location = home;}',
    1300
  );

  return (
    <div id='not-found-page'>
      <div className='colorSchematic'>
        <p className='colorSchematic'>
          HTTPS: <span className='span'>404</span>
        </p>
        <code ref={code0Ref} className='code'>
          <span className='span'>this\_page</span>.
          <em className='em'>not\_found</em> = true;
        </code>
        <code ref={code1Ref} className='code'>
          <span className='span'>if</span> (
          <b className='b'>you\_spelt\_it\_wrong</b>) &#123;
          <span className='span'>
            try\_again()
          </span>
          ;&#125;
        </code>
        <code ref={code2Ref} className='code'>
          <span className='span'>
            else if (<b className='b'>we\_screwed\_up</b>)
          </span>{' '}
          &#123;
          <em className='em'>alert</em>(
          <i className='i'>&quot;We&apos;re really sorry about that.&quot;</i>
          );{' '}
          <span className='span'>
            window.location = home;
          </span>
          &#125;
        </code>
      </div>
      <div className='mt'>
        <Link to={'/'} className='btn-back-home'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
