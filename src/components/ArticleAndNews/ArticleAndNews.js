import React from 'react'
import Classroom from '../../assets/images/classroom.jpg'
import Date25 from '../../assets/images/date25.png'
import Chatgpt from '../../assets/images/chatgpt.jpg'
import Date17 from '../../assets/images/date17.png'
import Book from '../../assets/images/book.jpg'
import Date13 from '../../assets/images/date13.png'

const ArticleAndNews = () => {
  return (
    <section class="container article-news-section">
    <p class="article-news-paragraph">Article & News</p>
    <div class="article-news-title">
        <h2>Get Every Single Article & News</h2>
        <a class="btn-transparent" href="articles-news.html">Browse Services <i class="fa-solid fa-square-arrow-up-right"></i></a>
    </div>

    <div class="article-wrapper">

        <div class="article-column">
            <div class="image-wrapper">
                <a href="#">
                <img src={Classroom} alt="Beskrivning av bild 1" class="grid-item" />
                <img src={Date25} alt="Calendar 25 mars" class="calendar-image" />
                </a>
            </div>
                <p class="grid-item">Business</p>
                <h3 class="grid-item">How To Use Digitalization In The Classroom</h3>
                <p class="grid-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>

        <div class="article-column">
            <div class="image-wrapper">
                <a href="#">
                <img src={Chatgpt} alt="Beskrivning av bild 2" class="grid-item" />
                <img src={Date17} alt="Calendar 25 mars" class="calendar-image" />
                </a>
            </div>
                <p class="grid-item">Business</p>
                <h3 class="grid-item">How To Implement Chat GPT In Your Projects</h3>
                <p class="grid-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>

        <div class="article-column">
            <div class="image-wrapper">
                <a href="#">
                <img src={Book} alt="Beskrivning av bild 3" class="grid-item" />
                <img src={Date13} alt="Calendar 25 mars" class="calendar-image" />
                </a>
            </div>
                <p class="grid-item">Business</p>
                <h3 class="grid-item">The Guide To Support Modern CSS Design</h3>
                <p class="grid-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>
    </div>
    <div class="five-dots">
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