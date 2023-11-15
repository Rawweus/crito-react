import React from 'react'
import Classroom from '../../assets/images/classroom.jpg'
import Date25 from '../../assets/images/date25.png'
import Chatgpt from '../../assets/images/chatgpt.jpg'
import Date17 from '../../assets/images/date17.png'
import Book from '../../assets/images/book.jpg'
import Date13 from '../../assets/images/date13.png'
import Button from '../Generics/Button'

const ArticleAndNews = () => {
  return (
    <section className="container article-news-section">
    <p className="article-news-paragraph">Article & News</p>
    <div className="article-news-title">
        <h2>Get Every Single Article & News</h2>
        <Button text="Browse Articles" url="/news" />
    </div>

    <div className="article-wrapper">

        <div className="article-column">
            <div className="image-wrapper">
                <a href="#">
                <img src={Classroom} alt="Beskrivning av bild 1" className="grid-item" />
                <img src={Date25} alt="Calendar 25 mars" className="calendar-image" />
                </a>
            </div>
                <p className="grid-item">Business</p>
                <h3 className="grid-item">How To Use Digitalization In The Classroom</h3>
                <p className="grid-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>

        <div className="article-column">
            <div className="image-wrapper">
                <a href="#">
                <img src={Chatgpt} alt="Beskrivning av bild 2" className="grid-item" />
                <img src={Date17} alt="Calendar 25 mars" className="calendar-image" />
                </a>
            </div>
                <p className="grid-item">Business</p>
                <h3 className="grid-item">How To Implement Chat GPT In Your Projects</h3>
                <p className="grid-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>

        <div className="article-column">
            <div className="image-wrapper">
                <a href="#">
                <img src={Book} alt="Beskrivning av bild 3" className="grid-item" />
                <img src={Date13} alt="Calendar 25 mars" className="calendar-image" />
                </a>
            </div>
                <p className="grid-item">Business</p>
                <h3 className="grid-item">The Guide To Support Modern CSS Design</h3>
                <p className="grid-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>
    </div>
    <div className="five-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</section>
  )
}

export default ArticleAndNews