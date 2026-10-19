import React from "react";
import { useState } from "react";
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js



import { Photo } from "../../../file.ts";

export default function Footer(): React.JSX.Element {
    return(
<>
<footer>
  <section className={styles.OrangeFut}>
      <div className={styles.OrangeBg}>
          <div className={styles.OrangeContent}>
              <p className={styles.OrangeContentTXT} >Let’s Build <img src={Photo.Vector3}/> Something Extraordinary Together</p>
              <a href="#Header" className={styles.OrangeContentBTN}>View our projects</a>
          </div>
      </div>
  </section>




  <section className={styles.BlackFut}>
    <div className={styles.BlackBg}>
      
      <div className={styles.leftColumn}>
        <div className={styles.logoPhoto}>
          <img src={Photo.Logo} alt="Pinnacle Logo" />
          <p>Pinnacle</p>
        </div>
        <div className={styles.subscribeForm}>
          <span className={styles.mailIcon}>✉</span>
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit" className={styles.sendBtn}>
          <img src={Photo.SandTG} alt="" />
          </button>
        </div>
      </div>

      <div className={styles.rightColumn}>
        
        <div className={styles.linksGroup}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ's</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h3>About Us</h3>
          <ul>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#values">Our Values</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h3>Properties</h3>
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h3>Services</h3>
          <ul>
            <li><a href="#residential">Residential Construction</a></li>
            <li><a href="#commercial">Commercial Construction</a></li>
            <li><a href="#management">Property Management</a></li>
            <li><a href="#development">Development Services</a></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#contact-form">Contact Form</a></li>
            <li><a href="#offices">Our Offices</a></li>
          </ul>
        </div>

      </div>

    </div>
  </section>

  <section className={styles.footerBottom}>
      <div className={styles.bottomContainer}>
          <p className={styles.copyright}>@2024 Pinnacle. All Rights Reserved.</p>
          
          <div className={styles.socials}>
          <a href="#facebook" className={styles.socialLink} aria-label="Facebook">
              <img src={Photo.Icon} alt="" />
          </a>
          <a href="#linkedin" className={styles.socialLink} aria-label="LinkedIn">
              <img src={Photo.Icon2} alt="" />

          </a>
          <a href="#twitter" className={styles.socialLink} aria-label="Twitter">
              <img src={Photo.Icon3} alt="" />

          </a>
          <a href="#youtube" className={styles.socialLink} aria-label="YouTube">
              <img src={Photo.Icon4} alt="" />

          </a>
          </div>
      </div>
  </section>
</footer>
</>
)
}