'use client';
import { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'AI & Automation', href: '#services' },
    { name: 'CRM Solutions', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Mentorship', href: '#services' },
  ];

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'YouTube', href: 'https://youtube.com/@mahendrakpandey_tech' },
    { name: 'Case Studies', href: '#' },
    { name: 'Free Resources', href: '#' },
  ];

  const socials = [
    { icon: <InstagramIcon />, href: 'https://instagram.com/mahendra_pandey_tech', label: 'Instagram' },
    { icon: <YouTubeIcon />, href: 'https://youtube.com/@mahendrakpandey_tech', label: 'YouTube' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub' },
    { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: '#000',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ============ BACKGROUND GLOW ============ */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ============ NEWSLETTER STRIP ============ */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          py: { xs: 5, md: 6 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={4} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  sx={{
                    color: '#888',
                    letterSpacing: '0.3em',
                    fontSize: '0.75rem',
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  — STAY UPDATED —
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: { xs: '1.6rem', md: '2.2rem' },
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.2,
                  }}
                >
                  Join the{' '}
                  <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                    newsletter
                  </Box>
                </Typography>
                <Typography sx={{ color: '#888', mt: 1, fontSize: '0.95rem' }}>
                  Weekly insights on AI, Tech & Business growth.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  component="form"
                  onSubmit={handleSubscribe}
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  <TextField
                    fullWidth
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '50px',
                        color: '#fff',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                      '& .MuiInputBase-input': {
                        color: '#fff',
                        py: 1.5,
                        px: 3,
                        '&::placeholder': { color: '#888', opacity: 1 },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      background: '#fff',
                      color: '#000',
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 10px 30px rgba(255,255,255,0.15)',
                      '&:hover': {
                        background: '#ddd',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    {subscribed ? '✓ Subscribed' : 'Subscribe'}
                  </Button>
                </Box>
                <Typography sx={{ color: '#666', fontSize: '0.8rem', mt: 1.5 }}>
                  No spam, unsubscribe anytime.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ============ MAIN FOOTER ============ */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {/* BRAND SECTION */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '2rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: '#fff',
                  mb: 2,
                }}
              >
                MAHENDRA
              </Typography>
              <Typography
                sx={{
                  color: '#aaa',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  mb: 3,
                  maxWidth: 350,
                }}
              >
                Building Intelligent Digital Businesses with Code, AI & Innovation.
                Technology Entrepreneur, Software Architect & Mentor.
              </Typography>

              {/* Quick Contact Info */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box
                  component="a"
                  href="mailto:contact@mahendrakpandey.com"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    color: '#aaa',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  <EmailIcon sx={{ fontSize: 18 }} />
                  contact@mahendrakpandey.com
                </Box>
                <Box
                  component="a"
                  href="tel:+917065373705"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    color: '#aaa',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 18 }} />
                  +91 7065373705
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    color: '#aaa',
                    fontSize: '0.9rem',
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 18 }} />
                  Prayagraj, India
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* QUICK LINKS */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  mb: 3,
                }}
              >
                NAVIGATE
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {quickLinks.map((link) => (
                  <Box
                    key={link.name}
                    component="a"
                    href={link.href}
                    sx={{
                      color: '#aaa',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      display: 'inline-block',
                      width: 'fit-content',
                      '&:hover': {
                        color: '#fff',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {link.name}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* SERVICES */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  mb: 3,
                }}
              >
                SERVICES
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {services.map((s) => (
                  <Box
                    key={s.name}
                    component="a"
                    href={s.href}
                    sx={{
                      color: '#aaa',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      display: 'inline-block',
                      width: 'fit-content',
                      '&:hover': {
                        color: '#fff',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {s.name}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* RESOURCES */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  mb: 3,
                }}
              >
                RESOURCES
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {resources.map((r) => (
                  <Box
                    key={r.name}
                    component="a"
                    href={r.href}
                    sx={{
                      color: '#aaa',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      display: 'inline-block',
                      width: 'fit-content',
                      '&:hover': {
                        color: '#fff',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {r.name}
                  </Box>
                ))}
              </Box>

              {/* SOCIAL ICONS */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  sx={{
                    color: '#888',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    mb: 1.5,
                  }}
                >
                  FOLLOW
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {socials.map((s, i) => (
                    <IconButton
                      key={i}
                      href={s.href}
                      target="_blank"
                      aria-label={s.label}
                      size="small"
                      sx={{
                        width: 36,
                        height: 36,
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#aaa',
                        background: 'rgba(255,255,255,0.03)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: '#fff',
                          color: '#000',
                          borderColor: '#fff',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      {s.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 5 }, borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* ============ BOTTOM BAR ============ */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography sx={{ color: '#666', fontSize: '0.85rem', textAlign: { xs: 'center', md: 'left' } }}>
            © {new Date().getFullYear()}{' '}
            <Box component="span" sx={{ color: '#fff', fontWeight: 600 }}>
              Mahendra Kumar Pandey
            </Box>
            . All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: '#666',
              fontSize: '0.85rem',
            }}
          >
            Crafted with{' '}
            <FavoriteIcon sx={{ fontSize: 14, color: '#ef4444', mx: 0.5 }} />
            using{' '}
            <Box component="span" sx={{ color: '#fff', fontWeight: 600, ml: 0.5 }}>
              Next.js & MUI
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box
              component="a"
              href="#"
              sx={{
                color: '#666',
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: '#fff' },
              }}
            >
              Privacy Policy
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: '#666',
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: '#fff' },
              }}
            >
              Terms
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ============ SCROLL TO TOP BUTTON ============ */}
      <IconButton
        onClick={scrollToTop}
        aria-label="Scroll to top"
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          width: 50,
          height: 50,
          background: '#fff',
          color: '#000',
          boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
          zIndex: 100,
          transition: 'all 0.3s',
          '&:hover': {
            background: '#fff',
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 40px rgba(255,255,255,0.3)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;