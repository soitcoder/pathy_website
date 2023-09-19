import React from 'react'
import "./articles.css"
import Articles_card from './articles_card'



const Articles = () => {
  return (
    <>
    <div className='articlesEntry'> 
    <h3>{"< Migraine/Acupressure/Articles"}</h3>
    </div>

    <div className='article_container'>
        
        <div className='articles_name'>
            <div className='article_img'></div>
            <div className='article_heading'>Articles</div>
        </div>

        <div className='articles_para'>
        Our dedicated team members have cherry picked most important and exciting case histories and testimonials from huge and scattered data in Articles to save your time and energy
        </div>

        <div className='articles_card'>
        <Articles_card/>
        <Articles_card/>
        <Articles_card/>
        </div>

        <div className='articles_card2'>
        <Articles_card/>
        <Articles_card/>
        <Articles_card/>
        </div>

    </div>
    </>


  )
}

export default Articles