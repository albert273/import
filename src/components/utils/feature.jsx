const { Card, Box, Typography, CardContent } = require("@mui/material");

function FeatureCard({ icon, text, bg }) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: bg,
        height: '100%',
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Box sx={{ mb: 1 }}>{icon}</Box>
        <Typography fontWeight={600}>{text}</Typography>
      </CardContent>
    </Card>
  );
}
