import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: -25,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        color: 'primary.main'
      }}
      aria-label="previous slide"
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: -25,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        color: 'primary.main'
      }}
      aria-label="next slide"
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

const GithubRepos = () => {
  const [githubData, setGithubData] = useState([]);

  const fetchGitHubData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/TamtungOS/repos');
      const data = await response.json();
      setGithubData(data);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', my: 4, position: 'relative', px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        GitHub Repositories
      </Typography>
      <Slider {...settings}>
        {githubData.map((repo) => (
          <Box key={repo.id} sx={{ p: 1 }}>
            <Card sx={{ mx: 'auto', maxWidth: 350, minHeight: 150 }}>
              <CardContent>
                <Typography variant="h6" noWrap>
                  {repo.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {repo.description || "No description available."}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GithubRepos;