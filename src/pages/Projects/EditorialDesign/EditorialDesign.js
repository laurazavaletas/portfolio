import React from 'react';

import classes from './EditorialDesign.module.css';

const projects = [
    {
        id: "cultural-rhythm",
        title: "CULTURAL RHYTHM",
        description: "CULTURAL RHYTHM is more than a magazine, it is your companion on an international journey. It is a brand that involves the community, researchers and professionals in different dances and culture to bring you a unique and innovative dance experience at your fingertips. Rhythm, dance, forms, history and culture seen from a new perspective. In each edition, the background and meaning of the most important and curious dances and dances around the world will be explored, motivating users to explore their limits and learn a little more about other cultures.",
        book: "https://cdn.flipsnack.com/widget/v2/widget.html?hash=cn0xqw23f2"
    },
    {
        id: "bellifortis",
        title: "BELLIFORTIS",
        description: "BELLIFORTIS is a magazine dedicated to the dissemination of information on feminist issues. Between its pages it tries to report on what is happening around the world.",
        book: "https://cdn.flipsnack.com/widget/v2/widget.html?hash=um0xqw23f2"
    },
    {
        id: "jim-mckenzine",
        title: "JIM MCKENZINE",
        description: "The project consisted in creating a fanzine with a free theme, on occasion it was decided to use this format to publicize different designers. The objective is to give a pocket collection to the new members of the design school of the Dr. José Matías Delgado University. For the first edition, it was decided to present the American illustrator Jim Mckenzie. Among the pages we can find his best-known works and part of his creative process.",
        book: "https://cdn.flipsnack.com/widget/v2/widget.html?hash=xnq1e4wilw"
    },
    {
        id: "gaia-i-ii-iii",
        title: "GAIA I II III",
        description: "The project consisted in transforming the students’ favorite album into a book. On this occasion, the Gaia series by the Spanish band Mägo de Oz was resumed. Each album tells a story and in each song on the albums we can hear how it evolves until it converges on the Atlantia song from the third and last album of this trilogy, Gaia III: Atlantia.",
        book: "https://cdn.flipsnack.com/widget/v2/widget.html?hash=c3s65slcjl"
    },
]

const EditorialDesign = props => {
    return (
        <section className={classes.container}>
            {
                projects.map(project => <Post key={project.id} title={project.title} description={project.description} widgetURL={project.book}/>)
            }
        </section>
    );
}

const Post = ({ title, description, widgetURL }) => (
    <article>
        <iframe src={widgetURL} width="100%" height="450px" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen />
        <div>
            <h3> {title} </h3>
            <p>
                {description}
            </p>
        </div>
    </article>
);

export default EditorialDesign ;