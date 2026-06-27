'use client';
import { Box, Typography, Container, Grid } from '@mui/material';

interface Stat {
  num: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: Stat[] = [
    { num: '12.4K+', label: 'YouTube Subscribers' },
    { num: '186+', label: 'Videos Published' },
    { num: '352+', label: 'Instagram Posts' },
    { num: '50+', label: 'Businesses Helped' },
  ];

  return (
    <Box sx={{ py: 8, background: '#000', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((s, i) => (
            <Grid size={{ xs: 6, md: 3 }} key={i} sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
                {s.num}
              </Typography>
              <Typography sx={{ color: '#888', mt: 1 }}>{s.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;