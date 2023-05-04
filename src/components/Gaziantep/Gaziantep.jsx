import React, { useEffect, useRef } from "react";
import '../../styles/anime.scss'

function handleScroll(event) {
    event.preventDefault();
    const scrollSpeed = 40;
    const container = event.currentTarget;
    const scrollDistance = event.type === "mousewheel" ? -event.deltaY : event.detail;
    container.scrollLeft += scrollDistance > 0 ? scrollSpeed : -scrollSpeed;
  }
  
  const Gaziantep = () => {
  const scrollRef = useRef(null);

  const heroes = [
    { name: "Zeugma Mozaik Müzesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ce/99/97/ana-giris.jpg?w=400&h=300&s=1", type: "strength", range: 'melee' },
    { name: "Rumkale", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/14/69/75/rum-kale.jpg?w=400&h=-1&s=1", type: "agility", range: 'Kale' },
    { name: "Gaziantep Kalesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/84/ac/89/photo1jpg.jpg?w=400&h=-1&s=1", type: "intelligence", range: 'Kale' },
    { name: "Gaziantep Hayvanat Bahçesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f0/fc/f4/hayvanat-bahcesi.jpg?w=400&h=300&s=1", type: "agility", range: 'melee' },
    { name: "Gaziantep Oyun ve Oyuncak Müzesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1f/85/d1/gaziantep-oyuncak-muzesi.jpg?w=400&h=-1&s=1", type: "intelligence", range: 'range' },
    { name: "Gaziantep Müzesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/3b/05/df/gaziantep-mozakik-muzesi.jpg?w=400&h=-1&s=1", type: "intelligence", range: 'Müze' },
    { name: "Gaziantep Arkeoloji Müzesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b4/0f/bf/gaziantep-arkeoloji-muzesi.jpg?w=400&h=300&s=1", type: "strength", range: 'melee' },
    { name: "Emine Göğüş Mutfak Müzesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/58/06/ab/emine-gogus-mutfak-muzesi.jpg?w=400&h=-1&s=1", type: "intelligence", range: 'range' },
    { name: "Dulukbaba Tabiat Parki", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ae/26/49/antepte-muhakkak-gidilmesi.jpg?w=400&h=-1&s=1", type: "agility", range: 'melee' },
    { name: "Gaziantep Kültür Tarihi Müzesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/49/c7/1f/gaziantep-kultur-tarihi.jpg?w=300&h=300&s=1", type: "strength", range: 'melee' },
    { name: "Tarihi Gümrük Hanı", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f0/c6/e5/getlstd-property-photo.jpg?w=300&h=300&s=1", type: "intelligence", range: 'range' },
    { name: "Bayazhan Gaziantep Kent Müzesi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d4/ea/af/20171001-105554-largejpg.jpg?w=300&h=300&s=1", type: "agility", range: 'melee' },
    { name: "Zetin Han", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a8/a9/e3/zeytinhan-giris.jpg?w=300&h=300&s=1", type: "strength", range: 'melee' },
  ];

    return (
      <div>
        <div>
<div className="main-content">
    <div className="options__wrapper">
      <h1>
        <span>Gezilecek</span>
        <br />
        <span>YERLER</span>
      </h1>
      <div id="scroll-event" className="options" onWheel={handleScroll} ref={scrollRef}>
        {heroes.map((val, idx) => (
          <div className="options__item" data-type={val.type} key={idx}>
            <img src={val.image} height="100%" />
            <div className="options__item__info">
              <p>{val.name}</p>
              <span>{val.type}</span>
              <span>{val.range}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
  
  export default Gaziantep