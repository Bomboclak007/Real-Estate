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

interface gridType {
  id: number;
  title_text: string;
  text: string;
  img: string;
}

interface main4Type {
  id: number;
  param: string;
  title_text: string;
  data: string;
  img: string;
}

export default function MainPage(): React.JSX.Element {
  const [main, setMain] = useState<HouseDomType[] | null>(null);
  const [main2, setMain2] = useState<Qualitiserves[] | null>(null);
  const [main3, setMain3] = useState<gridType[] | null>(null);
  const [main4, setMain4] = useState<main4Type[] | null>(null);
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

        Promise.all([
        fetch('http://localhost:3000/main3', { signal: controller.signal })
            .then((r) => r.json() as Promise<gridType[]>),
    ])
        .then(([main3Rows]) => {
            setMain3(main3Rows);
        })
        Promise.all([
        fetch('http://localhost:3000/main4', { signal: controller.signal })
            .then((r) => r.json() as Promise<main4Type[]>),
    ])
        .then(([main4Rows]) => {
            setMain4(main4Rows);
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


<section className={classes.services_section}>
  <div className={classes.services_section_container}>
    
    <h2 className={classes.services_section_title}>
      Quality service you get <span className={classes.services_section_asterisk}>*</span>
    </h2>
    
    <p className={classes.services_section_description}>
      At Pinnacle, we offer a wide range of services to cater to your unique needs. From residential construction to commercial development, we've got you covered.
    </p>
    
    <div className={classes.services_section_tabs}>
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
</section>



<section className={classes.OurClientsSay}>
    <div className={classes.OurClientsSayGrid}>
        {main3 && main3.map((project) => (  
            <article key={project.id} className={classes.OurClientsCard}>
                <img src={project.img} />
                <div className={classes.OurClientsP}>
                    <p>{project.title_text}</p>                        
                    <p>{project.text}</p>                        
                </div>
            </article>
        ))}
    </div>
 </section>
    <div className={classes.FeaturedProject2}>
        <div className={classes.DivFeatured}>
                <div className={classes.DivUp}>
                    <div className={classes.UpText}>
                        <img src={Photo.Vector2} alt="" />
                        <p>Latest News</p>
                    </div>
                    <div className={classes.BotText}>
                        <p>We've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
                        <button>View all blog post</button>
                    </div>
                </div>
                <section className={classes.DivBotom2}>
                    {main4 && main4.map((project) => (  
                        <div key={project.id} className={classes.CardHous}>
                            
                            <div className={classes.ImageHous}>
                                <img src={project.img} />
                            </div>
                            <div className={classes.CardText}>
                                <p>{project.param}</p>
                                <h3>{project.title_text}</h3>
                                <div >
                                    <div className={classes.CardTextdiv}>
                                        <img src={Photo.calendar} alt="" />
                                        <p className={classes.data}> {project.data} </p>
                                    </div>
                                    <a href="">Read more...</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
        </div>       
    </div>

</main>
</>
);
}
