import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Box, Avatar } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Trophy Icon
import PersonIcon from '@mui/icons-material/Person'; // Profile Icon
import FastfoodIcon from '@mui/icons-material/Fastfood'; // Foodie Level Icon
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; // Coins Earned Icon

export default function GourmetCard({ image, rank, username, name, stats, foodieLevel, coins }) {
  return (
    <Card sx={{ 
      width: 400, 
      borderRadius: 4, 
      boxShadow: 6,
      mx: 'auto', 
      textAlign: 'center',
      background: "linear-gradient(to bottom, #5A3E2B, #3E2723)", // Dark gradient background
      color: '#EDE0D4', // Light text for contrast
      transition: "transform 0.2s ease-in-out",
      '&:hover': { transform: "scale(1.05)" } // Slight hover effect
    }}>
      <CardMedia
        component="img"
        height="120"
        image={image}
        alt="Dish Image"
        sx={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
      />
      <CardContent>
        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', mb: 1 }}>
          <Avatar sx={{ bgcolor: '#A52A2A', width: 40, height: 40 }}>
            <PersonIcon sx={{ color: 'white' }} />
          </Avatar>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#EDE0D4' }}>
              {name}
            </Typography>
            <Typography variant="caption" sx={{ color: '#D4A373' }}>
              @{username}
            </Typography>
          </Box>
        </Box>

        {/* Rank */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 1,
            color: '#FFD700' 
          }}
        >
          <EmojiEventsIcon sx={{ color: '#FFD700' }} /> Rank {rank}
        </Typography>

        {/* Stats */}
        <Typography variant="body2" sx={{ color: '#EDE0D4', mt: 1 }}>
          {stats}
        </Typography>

        {/* Foodie Level */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 1 }}>
          <FastfoodIcon sx={{ color: '#FF5722' }} />
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#D4A373' }}>
            Foodie Level: {foodieLevel}
          </Typography>
        </Box>

        {/* Coins Earned */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 1 }}>
          <MonetizationOnIcon sx={{ color: '#FFD700' }} />
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#D4A373' }}>
            Coins Earned: {coins}
          </Typography>
        </Box>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button 
          size="small" 
          variant="contained" 
          sx={{ bgcolor: '#DDC79F', color: 'white',marginBottom:'10px', fontWeight: 'bold', '&:hover': { bgcolor: '#8B0000' } }}
        >
          See Profile
        </Button>
      </CardActions>
    </Card>
  );
}
