import React from 'react';
import styles from '../../style/NotFoundPage/NotFound.module.css';
import useTypewriter from '../../typewritter/useTypewriter.js';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const handleTryAgain = () => {

  };

  const handleGoHome = () => {
    // Implement window.location = home; logic here
  };

  const code0Ref = useTypewriter("this_page.not_found = true;", 0);
  const code1Ref = useTypewriter("if (you_spelt_it_wrong) {try_again();}", 600);
  const code2Ref = useTypewriter('else if (we_screwed_up) {alert("We\'re really sorry about that."); window.location = home;}', 1300);

  return (
    <div>
      <div className="colorSchematic">
        <p className={styles.colorSchematic}>
          HTTPS: <span className={styles.span}>404</span>
        </p>
        <code ref={code0Ref} className={styles.code}>
          <span className={styles.span}>this\_page</span>.<em className={styles.em}>not\_found</em> = true;
        </code>
        <code ref={code1Ref} className={styles.code}>
          <span className={styles.span}>if</span> (<b className={styles.b}>you\_spelt\_it\_wrong</b>) &#123;
          <span className={styles.span} onClick={handleTryAgain}>try\_again()</span>;&#125;
        </code>
        <code ref={code2Ref} className={styles.code}>
          <span className={styles.span}>else if (<b className={styles.b}>we\_screwed\_up</b>)</span> &#123;
          <em className={styles.em}>alert</em>(<i className={styles.i}>"We're really sorry about that."</i>); <span className={styles.span} onClick={handleGoHome}>window.location = home;</span>&#125;
        </code>
      </div>
      <center>
        <Link to={"/"} className="homeButtonError">Home</Link>
      </center>
    </div>
  );
};

export default NotFoundPage;