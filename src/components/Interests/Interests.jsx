import React, { useState, useEffect } from 'react';
import '../../styles/Interests.css'; // import your CSS file

function Interests() {
  const [footballNews, setFootballNews] = useState([]);
  const [fitnessNews, setFitnessNews] = useState([]);

  useEffect(() => {
    // Fetch latest coding news articles from News API
    fetch('https://newsapi.org/v2/everything?q=Turkish%20football&sortBy=popularity&language=en&apiKey=3753aebf07f8476aaf06aff14b796b1d')
    .then(response => response.json())
    .then(data => {
      // Get only the first 2 articles
      const articles = data.articles.slice(2,4);
      
      // Fetch images for each article
      const imagePromises = articles.map(article => 
        fetch(article.urlToImage)
          .then(response => response.blob())
          .then(blob => URL.createObjectURL(blob))
          .catch(error => console.error(error))
      );
      
      // Wait for all image promises to resolve
      Promise.all(imagePromises)
        .then(images => {
          // Merge each article with its corresponding image
          const newsWithImages = articles.map((article, index) => ({
            ...article,
            image: images[index]
          }));
          
          setFootballNews(newsWithImages);
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
    
    // Fetch latest fitness news articles from News API
    fetch('')
      .then(response => response.json())
      .then(data => {
        // Get only the first 2 articles
        const articles = data.articles.slice(0, 2);
        
        // Fetch images for each article
        const imagePromises = articles.map(article => 
          fetch(article.urlToImage)
            .then(response => response.blob())
            .then(blob => URL.createObjectURL(blob))
            .catch(error => console.error(error))
        );
        
        // Wait for all image promises to resolve
        Promise.all(imagePromises)
          .then(images => {
            // Merge each article with its corresponding image
            const newsWithImages = articles.map((article, index) => ({
              ...article,
              image: images[index]
            }));
            
            setFitnessNews(newsWithImages);
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <div className='about__me_header' id='ILGILIALANLARIM'>
    <div className='about__me_header_alt mb-12'>
    <h1>
      Ilgili Alanlarım
    </h1>
    <h2>Fotball ile ilgileniyorum</h2>
    </div>
     <div className='about__me_container'>
     <div className='about__me_fotball'>
          <h3 className='mb-5'>Football Haberleri</h3>
          {footballNews.map(article => (
            <div key={article.url}>
              
              <div className='w-full h-full flex justify-center gap-20 mb-10'>
              <img src={article.image} alt={article.title} />
              <div className='w-full h-full flex justify-center items-center flex-col'>
              <h4 className='font-bold'>{article.title}</h4>
              <p className='leading-5'>{article.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
     </div>
    </div>
  );
}

export default Interests;
