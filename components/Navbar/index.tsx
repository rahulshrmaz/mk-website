'use client';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const Navbar: React.FC = () => {
  const links: string[] = ['Home', 'About', 'Services', 'Contact'];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              letterSpacing: '0.15em',
            }}
          >
            MAHENDRA
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {links.map((link) => (
              <Button
                key={link}
                href={`#${link.toLowerCase()}`}
                sx={{ color: '#fff', '&:hover': { color: '#aaa' } }}
              >
                {link}
              </Button>
            ))}
          </Box>

          <Button
            variant="outlined"
            href="#contact"
            sx={{
              borderColor: '#fff',
              color: '#fff',
              '&:hover': { background: '#fff', color: '#000', borderColor: '#fff' },
            }}
          >
            Get in Touch
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;