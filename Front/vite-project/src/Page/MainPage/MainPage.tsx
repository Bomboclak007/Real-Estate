import React from "react";
import { useState } from "react";
import classes from './MainPage.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js



import { Photo } from "../../file.ts";

export default function MainPage(): React.JSX.Element {
return (
<>
<main>
<section>
    <div className={classes.HeroSection}>
        <div className={classes.Left}>
            <div className={classes.top}>
            <p>Creating a Better Tomorrow, One Home at a Time</p>
            </div>
            <div className={classes.botom}>
            <p>We've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
            <div className={classes.button}>
                <button>Schedule a Call</button>
                <button>View Our Projucts</button>
            </div>
            </div>
        </div>
        <div className={classes.Right}>
                        <div className={classes.botomright}>
                <div className={classes.Otsivbot}>
                    <div className={classes.leftOtsiv}>
                        <img src={Photo.negr} alt="" />
                    </div>
                    <div className={classes.rightOtsiv}>
                        <img src={Photo.Stars2} alt="" />
                        <p>Pinnacle is my GO-TO when it comes to real estate</p>
                        <p>James | CEO of Crazy Bank</p>
                    </div>
                </div>
            </div>
            <div className={classes.topright}>
                <div className={classes.Otsivtop}>
                    <div className={classes.leftOtsiv}>
                        <img src={Photo.Voman} alt="" />
                    </div>
                    <div className={classes.rightOtsiv}>
                        <img src={Photo.Stars} alt="" />
                        <p>I highly recommend, My home exactly what I wanted</p>
                        <p>Amanda | Actor</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
    <div className={classes.building}>
        <div className={classes.bild}>
            <div className={classes.TopGroup}>
                <div className={classes.DivText}>
                    <p>We're <img src={Photo.shape} alt="" /> building <span>communities.</span></p>
                </div>
            </div>
            <div className={classes.BotomGrop}>

            </div>
        </div>
    </div>

</main>

</>
);
}
