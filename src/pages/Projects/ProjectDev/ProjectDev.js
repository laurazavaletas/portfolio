import React, { Children } from 'react';

import { Carousel } from 'react-responsive-carousel'; 

import classes from './ProjectDev.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Bolivar images
import BLogo from '@internal/assets/images/projectdev/bolivar_logo.jpg';
import Bimg1 from '@internal/assets/images/projectdev/bolivar_1.jpg';
import Bimg2 from '@internal/assets/images/projectdev/bolivar_2.jpg';

//Star Project images
import SLogo from '@internal/assets/images/projectdev/star_logo.png';
import Simg1 from '@internal/assets/images/projectdev/star_1.jpg';
import Simg2 from '@internal/assets/images/projectdev/star_2.jpg';
import Simg3 from '@internal/assets/images/projectdev/star_3.jpg';
import Simg4 from '@internal/assets/images/projectdev/star_4.jpg';
import Simg5 from '@internal/assets/images/projectdev/star_5.jpg';
import Simg6 from '@internal/assets/images/projectdev/star_6.jpg';
import Simg7 from '@internal/assets/images/projectdev/star_7.jpg';
import Simg8 from '@internal/assets/images/projectdev/star_8.jpg';
import Simg9 from '@internal/assets/images/projectdev/star_9.jpg';

//Why Sugar images
import WLogo from '@internal/assets/images/projectdev/why_logo.png';
import Wimg1 from '@internal/assets/images/projectdev/why_1.jpg';
import Wimg2 from '@internal/assets/images/projectdev/why_2.jpg';
import Wimg3 from '@internal/assets/images/projectdev/why_3.jpg';
import Wimg4 from '@internal/assets/images/projectdev/why_4.jpg';
import Wimg5 from '@internal/assets/images/projectdev/why_5.jpg';
import Wimg6 from '@internal/assets/images/projectdev/why_6.jpg';
import Wimg7 from '@internal/assets/images/projectdev/why_7.jpg';
import Wimg8 from '@internal/assets/images/projectdev/why_8.jpg';
import Wimg9 from '@internal/assets/images/projectdev/why_9.jpg';
import Wimg10 from '@internal/assets/images/projectdev/why_10.jpg';

//Techo Images
import TLogo from '@internal/assets/images/projectdev/techo_logo.png';
import Timg1 from '@internal/assets/images/projectdev/techo_1.jpg';
import Timg2 from '@internal/assets/images/projectdev/techo_2.jpg';
import Timg3 from '@internal/assets/images/projectdev/techo_3.jpg';
import Timg4 from '@internal/assets/images/projectdev/techo_4.jpg';
import Timg5 from '@internal/assets/images/projectdev/techo_5.jpg';

const projects = [
    {
        id: "bolivar",
        title: "Bolivar",
        logo: BLogo,
        images: [Bimg1, Bimg2],
        text: (<>
            <p>
                It is a project developed with the aim of experimenting with brands with a specific audience that are outside of what we normally work. The company selected was the project developer, Bolívar, whose target audience are the new investors in El Salvador.
            </p>
            <p>
                The campaign was divided into three phases.
            </p>
            <ol>
                <li> EXPECTATION </li>
                <li> LOYALTY </li>
                <li> INFORMATION </li>
            </ol>
        </>)
    },
    {
        id: "start-project",
        title: "Star Project",
        logo: SLogo,
        images: [Simg1, Simg2, Simg3, Simg4, Simg5, Simg6, Simg7, Simg8, Simg9],
        text: (<>
            <p>
                As an initiative to support small social projects, Star Project is created. It is an application in which there are different social and environmental projects and initiatives, this in order to provide a space for their cooperation and development in municipalities throughout El Salvador. It can be used both as natural persons or private companies to support these projects.
            </p>
        </>)
    },
    {
        id: "why-sugar",
        title: "Why Sugar",
        logo: WLogo,
        images: [Wimg1, Wimg2, Wimg3, Wimg4, Wimg5, Wimg6, Wimg7, Wimg8, Wimg9, Wimg10],
        text: (<>
            <p>
                It is an awareness project for young people and adults who consume excess sugar. The data used are based on research and dissertations made by students from the University of Valladolid, Mexico, the Catholic University of Chile and the World Health Organization (WHO).
            </p>
        </>)
    },
    {
        id: "familia-techo",
        title: "Familia Techo",
        logo: TLogo,
        images: [Timg1, Timg2, Timg3, Timg4, Timg5],
        text: (<>
            <p>
                Familia de TECHO is a project that searches for the constant donation of ordinary people to initiatives or different projects TECHO is developing.
            </p>
        </>)
    },
];

const ProjectDev = props => {
    return (
        <section>
            { projects.map(project => (
                <Post
                    title={project.title}
                    logo={project.logo}
                    images={project.images}
                    key={project.id}>
                    { project.text }
                </Post>
            )) }
        </section>
    );
}

const Post = ({ logo, images, title, children }) => (
    <article className={classes.post}>
        <div className={classes.content}>
            <figure className={classes["header-img"]}>
                <img src={logo} alt={`Logo ${title}`} />
            </figure>
            <div className={classes["text-container"]}>
                { children }
            </div>
        </div>
        <div className={classes.carousel}>
            <Carousel swipeable showArrows={false}>
                {images.map((image, i) => (
                    <figure key={`${title}_${i}`} className={classes["carousel-img"]}>
                        <img src={image} alt={`${title}_${i}`}/>
                    </figure>
                )) }
            </Carousel>
        </div>
    </article>
);

export default ProjectDev;