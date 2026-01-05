import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Box,
} from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsVolleyballSharpIcon from '@mui/icons-material/SportsVolleyballSharp';
import LogoDevSharpIcon from '@mui/icons-material/LogoDevSharp';

// Define a type for the member data
const TeamMemberCard = ({ name, role, imageUrl, socialLinks }) => {

  // Helper function to render an icon for a given social platform
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <GitHubIcon fontSize="medium" />;
      case 'instagram':
        return <InstagramIcon fontSize="medium" />;
      case 'linkedin':
        return <LinkedInIcon fontSize="medium" />;
      default:
        return null;
    }
  };

  return (
    // The main container for the card, matching the rounded white box look
    <Card
      sx={{
        width: 300,
        height: 400,
        borderRadius: 4, // More rounded corners
        textAlign: 'center',
        padding: 3, // Inner padding to space content from edges
        boxShadow: "0px 15px 35px rgba(255, 255, 255, 0.5)",
        backgroundColor: 'background.paper', // White background
        // Optional: Adding a slight 'lift' effect on hover
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <CardContent>
        {/* 1. Avatar Image */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 2,
            // Styling for the blue circular border around the image
            '& .MuiAvatar-root': {
              width: 160,
              height: 160,
              border: `4px solid #0077B6`, // Primary color border
              boxSizing: 'content-box', // Ensure border adds to size
              p: 0.5, // Padding inside the border
            },
          }}
        >
          <Avatar alt={name} src={imageUrl} />
        </Box>

        {/* 2. Name and Role */}
        <Typography 
          variant="h5" 
          component="div" 
          fontWeight="bold" 
          sx={{ mt: 1, color: '#03045E' }}
        >
          {name}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 3 }}
        >
          {role}
        </Typography>

        {/* 3. Social Icons */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1, // Space between icons
            // Style for the social icons (smaller and dark)
            '& .MuiIconButton-root': {
              color: '#03045E', // Darker icon color
              padding: '8px',
              fontSize: "40px" 
            }
          }}
        >
          {/* Map through the social links to render IconButtons */}
          {socialLinks.map((link) => (
            <IconButton
              key={link.platform}
            >
              {getSocialIcon(link.platform)}
            </IconButton>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;