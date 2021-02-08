import React from 'react';
import { Helmet } from 'react-helmet';

import bg from '@internal/assets/images/backgrounds/about.jpg';
import photo from '@internal/assets/images/about/photo.jpg';

import classes from './AboutMe.module.css';

import NavPage from '@internal/components/NavPage/NavPage';
import PageFooter from '@internal/components/PageFooter/PageFooter';

const AboutMe = props => {
    return (
        <NavPage about bgimage={bg} className={classes.page}>
            <Helmet>
                <title> Laura Zavaleta || About me </title>
            </Helmet>
            <section className={classes.container}>
                <h1> About me </h1>
                <div className={classes.main}>
                    <div>
                        <p>
                            We are taught that the purpose of design is problem solving whether it is visual or material and I believe faithfully in this statement. Only I would add the phrase "looking for human quality as well." And that is precisely what I always seek with my projects, to create solutions with a human quality, with my human quality. My name is Laura Zavaleta. I am a graphic design student at Dr. José Matías Delgado University.  
                        </p>
                        <p>
                            In my free time I am a scout leader, I practice pole dance and lyre. I like fantasy and science fiction and it is in the combination of all these areas of my life that I take the greatest inspiration for my projects.
                        </p>
                        <p>
                            My portfolio is a journey through me, you will know my three great areas and how they are related to three great celestial bodies that personally fill me with inspiration, because it is not so much them physically but their scope and how we have been shaped by they. This time I will take you through the sun, the moon to end our journey on earth. Branding, projects and editorial.
                        </p>
                    </div>
                    <figure>
                        <img src={photo} alt="Laura Zavaleta"/>
                    </figure>
                </div>
                <div className={classes.iframe}>
                    <iframe title="Reel" width="100%" height="720" src="https://www.youtube.com/embed/bPo8VKuLF5o?autoplay=1&loop=1&playlist=bPo8VKuLF5o" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{borderRadius: "1.5rem"}}/>
                </div>
                <PageFooter scrollTo={()=>0}/>
            </section>
        </NavPage>
    );
}

export default AboutMe;