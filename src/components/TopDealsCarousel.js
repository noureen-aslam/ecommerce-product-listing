// src/components/TopDealsCarousel.js
import React from 'react';
import './TopDealsCarousel.css';

const topDeals = [
  {
    id: 1,
    title: '50% Off on Summer Dresses',
    image: 'https://res.cloudinary.com/dp38hoelm/image/upload/v1751724900/Floral_Frenzy_Summer_Dress_vitodj.jpg'
  },
  {
    id: 2,
    title: 'Trendy Watches Sale!',
    image: 'https://res.cloudinary.com/dp38hoelm/image/upload/v1751724898/Luxe_Dial_Women_s_Watch_xktbkc.jpg'
  },
  {
    id: 3,
    title: 'Ethnic Collection Live',
    image: 'https://res.cloudinary.com/dp38hoelm/image/upload/v1751724900/Pastel_Bliss_Kurti_Set_pu8920.jpg'
  }
];

const TopDealsCarousel = () => {
  return (
    <div className="top-deals-carousel">
      {topDeals.map((deal) => (
        <div className="carousel-item" key={deal.id}>
          <img src={deal.image} alt={deal.title} />
          <p>{deal.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TopDealsCarousel;
