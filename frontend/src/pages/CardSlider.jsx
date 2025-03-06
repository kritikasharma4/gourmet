import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, IconButton } from '@mui/material';
import GourmetCard from './Card'; // Import your Gourmet Card
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CardSlider() {
  const cards = [
    { 
      id: 1, image: '/dp.webp', rank: 1, username: 'gourmet_chef', name: 'John Doe', 
      stats: 'Top Rated Chef', foodieLevel: 'Master', coins: 1500 
    },
    { 
      id: 2, image: '/dp.webp', rank: 2, username: 'foodlover', name: 'Emma Brown', 
      stats: 'Best Dessert Artist', foodieLevel: 'Expert', coins: 1200 
    },
    { 
      id: 3, image: '/dp.webp', rank: 3, username: 'mastercook', name: 'Liam Wilson', 
      stats: 'Culinary Innovator', foodieLevel: 'Pro', coins: 1100 
    },
    { 
      id: 4, image: '/dp.webp', rank: 4, username: 'spiceguru', name: 'Sophia Patel', 
      stats: 'Spice King', foodieLevel: 'Intermediate', coins: 950 
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', py: 4, position: 'relative' }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next'
        }}
        style={{ paddingBottom: '30px' }} 
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <GourmetCard 
              image={card.image} 
              rank={card.rank} 
              username={card.username} 
              name={card.name} 
              stats={card.stats} 
              foodieLevel={card.foodieLevel}
              coins={card.coins}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <IconButton className="custom-prev"
        sx={{
          position: 'absolute',
          top: '50%',
          left: -40,
          transform: 'translateY(-50%)',
          bgcolor: '#718664',
          color: 'white',
          '&:hover': { bgcolor: '#388E3C' },
          boxShadow: 2,
          zIndex: 10
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton className="custom-next"
        sx={{
          position: 'absolute',
          top: '50%',
          right: -40,
          transform: 'translateY(-50%)',
          bgcolor: '#718664',
          color: 'white',
          '&:hover': { bgcolor: '#388E3C' },
          boxShadow: 2,
          zIndex: 10
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
