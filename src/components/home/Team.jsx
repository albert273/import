import TeamMemberCard from "../teamCard/TeamCard";
import { Box, Typography, Grid, Container } from "@mui/material";
import img from "../../../public/home/Experience/customer.png";

const teamData = [
  {
    id: 1,
    name: "Aryan Kakadiya",
    role: "Project Leader",
    imageUrl: img, // Replace with a real path/URL
    socialLinks: [
      { platform: "Instagram"},
      { platform: "linkedin"},
      { platform: "GitHub"},

    ],
  },
  // Add more team members here...
  {
    id: 2,
    name: "Aryan Kakadiya",
    role: "Project Leader",
    imageUrl: img, // Replace with a real path/URL
    socialLinks: [
      { platform: "Instagram"},
      { platform: "linkedin"},
      { platform: "GitHub" },
    ],
  },
  {
    id: 3,
    name: "Aryan Kakadiya",
    role: "Project Leader",
    imageUrl: img, // Replace with a real path/URL
    socialLinks: [
      { platform: "Instagram"},
      { platform: "linkedin"},
      { platform: "GitHub"},

    ],
  },
];

export default function Team() {
  return (
    <Box
      sx={{
        // Mimic the blue gradient background
        background: "linear-gradient(to right, #03045E, #0178fe)",
        minHeight: "100vh",
        py: 8, // Vertical padding
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            color: "white",
            fontWeight: "900",
            mb: 6,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          TEAM
        </Typography>

        {/* Team Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {teamData.map((member) => (
            <Grid
              item
              key={member.id}
              xs={12} // Full width on small screens
              sm={6} // Half width on medium screens
              md={4} // One-third width on large screens (to show 3 in a row)
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TeamMemberCard {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
