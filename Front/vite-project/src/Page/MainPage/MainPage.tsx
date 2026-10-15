import React from "react";
import { useState } from "react";
import classes from './MainPage.module.scss';
import { NavLink } from 'react-router-dom';
// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js
import { Photo } from "../../file.ts";
import { useEffect } from 'react';

interface HouseDomType {
  id: number;
  title: string;
  text: string;
  adres: string; // Добавьте поля, которые реально приходят из таблицы housdom
  img: string;
  param: string;
}


interface Qualitiserves {
  id: number;
  title_text: string;
  text: string;
  img: string;
}

export default function MainPage(): React.JSX.Element {
  const [main, setMain] = useState<HouseDomType[] | null>(null);
  const [main2, setMain2] = useState<Qualitiserves[] | null>(null);
  useEffect(() => {
        const controller = new AbortController();
     Promise.all([
      fetch('http://localhost:3000/main', { signal: controller.signal })
        .then((r) => r.json() as Promise<HouseDomType[]>),
    ])
      .then(([mainRows]) => {
        setMain(mainRows);
      })


           Promise.all([
      fetch('http://localhost:3000/main2', { signal: controller.signal })
        .then((r) => r.json() as Promise<Qualitiserves[]>),
    ])
      .then(([mainRows]) => {
        setMain2(mainRows);
      })
      .catch((e) => {
        if ((e as Error).name !== 'AbortError') {
          console.error("Ошибка при получении данных:", e);
        }
      });

  return () => controller.abort();
}, []);

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
                    <p>We're <img src={Photo.shape} alt="" /> building communities.</p>
                </div>
                <div className={classes.DivTextLitle}>
                    <p>With a commitment to excellence and a focus on innovation, we've established ourselves as a leader in the real estate and construction industry.</p>
                </div>
            </div>
            <div className={classes.BotomGrop}>
                <div className={classes.LearnMoreUp}>
                    <button>Learn More About Us...</button>
                </div>
                <div className={classes.peoplbot}>
                    <div className={classes.popl}>
                        <div className={classes.LeftPeopl}>
                            <img src={Photo.ClientImages} alt="" />
                        </div>
                        <div className={classes.RightStar}>
                            <img src={Photo.Stars2} alt="" />
                            <p>4.3/5 Rated by 300+ Professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={classes.FeaturedProject}>
        <div className={classes.DivFeatured}>
                <div className={classes.DivUp}>
                    <div className={classes.UpText}>
                        <img src={Photo.VectorOrange} alt="" />
                        <p>Featured Projects</p>
                    </div>
                    <div className={classes.BotText}>
                        <p>we've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
                        <button>View all Projects</button>
                    </div>
                </div>
                <div className={classes.DivBotom}>
                    {main && main.map((project) => (  
                        <div key={project.id} className={classes.CardHous}>
                            {/* Контейнер для картинки */}
                            <div className={classes.ImageHous}>
                                <img src={project.img} />
                            </div>

                            {/* Текстовый контент */}
                            <div className={classes.CardText}>
                                    <h3>{project.title}</h3>
                                    <p>{project.text}</p>
                                    {/* Строка локации */}
                                <div className={classes.Location}>
                                    <img src={Photo.location} alt="Location" />
                                    <span>{project.adres}</span>
                                </div>
                                <div className={classes.Param}>
                                   <button>{project.param}</button>
                                </div>
                                <div className={classes.ViewButton}>
                                    <button className={classes.ViewPropertyBtn}>View Property</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={classes.BotBot}>
                        <div className={classes.LeftBot}>
                                <p>01/03</p>
                        </div>
                        <div className={classes.RightBot}>
                            <img src={Photo.ButtonsLeftright} alt="" />
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className={classes.QualitiServesMain}>
        <div className={classes.QualitiServesMainText}>
            <div className={classes.UpQualiti}>
                    <p>Quality service you get</p>
                    <img src={Photo.StarOrange} alt="" />
            </div>
            <div className={classes.BotQualiti}>
                    <p>At Pinnacle, we offer a wide range of services to cater to your unique needs. From residential construction to commercial development, we've got you covered.</p>
            </div>
            <div className={classes.BotDivButton}>
                <div className={classes.BotButton}>
                    <button>Residential</button>
                    <button>Property Management</button>
                    <button>Commercial</button>
                    <button>Development</button>
                </div>
            </div>
        </div>

    <div className={classes.QualitiServes}>
        {main2 && main2.map((project2) => (
            <div key={project2.id} className={classes.CardHous2}>
                            <div className={classes.ImageHous2}>
                                <img src={project2.img} />
                            </div>

                            {/* Текстовый контент */}
                            <div className={classes.CardText}>
                                <h3>{project2.title_text}</h3>
                                <p>{project2.text}</p>
                                    {/* Строка локации */}
                            <div className={classes.ViewButton}>
                                  <button className={classes.ViewPropertyBtn}>Learn more...</button>
                            </div>
                        </div>
            </div>

        ))}

    </div>
    </div>
</main>

</>
);
}
