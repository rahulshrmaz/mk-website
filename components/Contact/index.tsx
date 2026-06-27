'use client';
import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Fake API call simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form Data:', formData);
    setOpen(true);
    setFormData({ name: '', email: '', subject: '', budget: '', message: '' });
    setLoading(false);
  };

  const services = [
    'Web Development',
    'AI / Machine Learning',
    'Mobile App Development',
    'CRM / Enterprise Solution',
    'Mentorship / Consulting',
    'Other',
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    "Let's Discuss",
  ];

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'contact@mahendrakpandey.com',
      href: 'mailto:contact@mahendrakpandey.com',
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+91 7065373705',
      href: 'tel:+917065373705',
    },
    {
      icon: <LocationOnIcon />,
      label: 'Location',
      value: 'Prayagraj, India',
      href: '#',
    },
    {
      icon: <ScheduleIcon />,
      label: 'Available',
      value: 'Mon - Fri, 10AM - 7PM',
      href: '#',
    },
  ];

  const socials = [
    { icon: <InstagramIcon />, href: 'https://instagram.com/mahendra_pandey_tech', label: 'Instagram' },
    { icon: <YouTubeIcon />, href: 'https://youtube.com/@mahendrakpandey_tech', label: 'YouTube' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub' },
    { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <LanguageIcon />, href: 'https://mahendrakpandey.com', label: 'Website' },
  ];

  // Custom TextField styles
  const inputSx = {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '12px',
      color: '#fff',
      '& fieldset': {
        borderColor: 'rgba(255,255,255,0.1)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255,255,255,0.3)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#888',
      '&.Mui-focused': {
        color: '#fff',
      },
    },
    '& .MuiInputBase-input': {
      color: '#fff',
    },
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 14 },
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ============ BACKGROUND DECORATIVE ELEMENTS ============ */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* ============ SECTION TITLE ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                color: '#888',
                letterSpacing: '0.3em',
                fontSize: '0.85rem',
                mb: 2,
                fontWeight: 600,
              }}
            >
              — GET IN TOUCH —
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Let&apos;s build something{' '}
              <Box
                component="span"
                sx={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(90deg, #fff 0%, #888 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                amazing
              </Box>
            </Typography>
            <Typography sx={{ color: '#aaa', maxWidth: 600, mx: 'auto', fontSize: '1.05rem' }}>
              Have a project in mind? Drop a message and let&apos;s discuss how we can transform your idea into reality.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* ============ LEFT SIDE — CONTACT INFO ============ */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  height: '100%',
                }}
              >
                <Typography
                  sx={{
                    color: '#888',
                    letterSpacing: '0.2em',
                    fontSize: '0.75rem',
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  CONTACT INFORMATION
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Reach out{' '}
                  <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                    directly
                  </Box>
                </Typography>
                <Typography sx={{ color: '#aaa', mb: 4, lineHeight: 1.7 }}>
                  Prefer a direct conversation? Find me on any of these channels — I respond within 24 hours.
                </Typography>

                {/* CONTACT INFO LIST */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 4 }}>
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Box
                        component="a"
                        href={info.href}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          '&:hover': {
                            background: 'rgba(255,255,255,0.05)',
                            borderColor: 'rgba(255,255,255,0.2)',
                            transform: 'translateX(5px)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            flexShrink: 0,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '0.7rem',
                              letterSpacing: '0.2em',
                              color: '#888',
                              fontWeight: 600,
                              mb: 0.3,
                            }}
                          >
                            {info.label}
                          </Typography>
                          <Typography sx={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                {/* SOCIAL LINKS */}
                <Typography
                  sx={{
                    color: '#888',
                    letterSpacing: '0.2em',
                    fontSize: '0.75rem',
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  FOLLOW ME ON
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {socials.map((s, i) => (
                    <IconButton
                      key={i}
                      href={s.href}
                      target="_blank"
                      aria-label={s.label}
                      sx={{
                        width: 44,
                        height: 44,
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#fff',
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

                {/* AVAILABILITY BADGE */}
                <Box
                  sx={{
                    mt: 4,
                    p: 2,
                    background: 'rgba(74, 222, 128, 0.08)',
                    border: '1px solid rgba(74, 222, 128, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    component={motion.div}
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: '#4ade80',
                      boxShadow: '0 0 12px #4ade80',
                    }}
                  />
                  <Box>
                    <Typography sx={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: 600 }}>
                      Currently Available
                    </Typography>
                    <Typography sx={{ color: '#888', fontSize: '0.75rem' }}>
                      Open for new projects & collaborations
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* ============ RIGHT SIDE — CONTACT FORM ============ */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 4 },
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                }}
              >
                <Typography
                  sx={{
                    color: '#888',
                    letterSpacing: '0.2em',
                    fontSize: '0.75rem',
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  SEND A MESSAGE
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 700,
                    mb: 4,
                  }}
                >
                  Tell me about your{' '}
                  <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                    project
                  </Box>
                </Typography>

                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      select
                      required
                      label="Service Needed"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={inputSx}
                      slotProps={{
                        select: {
                          MenuProps: {
                            slotProps: {
                              paper: {
                                sx: {
                                  background: '#0a0a0a',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  color: '#fff',
                                  '& .MuiMenuItem-root': {
                                    '&:hover': { background: 'rgba(255,255,255,0.05)' },
                                    '&.Mui-selected': { background: 'rgba(255,255,255,0.1)' },
                                  },
                                },
                              },
                            },
                          },
                        },
                      }}
                    >
                      {services.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      select
                      label="Budget Range"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      sx={inputSx}
                      slotProps={{
                        select: {
                          MenuProps: {
                            slotProps: {
                              paper: {
                                sx: {
                                  background: '#0a0a0a',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  color: '#fff',
                                  '& .MuiMenuItem-root': {
                                    '&:hover': { background: 'rgba(255,255,255,0.05)' },
                                    '&.Mui-selected': { background: 'rgba(255,255,255,0.1)' },
                                  },
                                },
                              },
                            },
                          },
                        },
                      }}
                    >
                      {budgetOptions.map((b) => (
                        <MenuItem key={b} value={b}>
                          {b}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={5}
                      label="Tell me about your project..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={loading ? undefined : <SendIcon />}
                    disabled={loading}
                    sx={{
                      background: loading 
                        ? 'rgba(255,255,255,0.2)' 
                        : 'linear-gradient(135deg, #fff 0%, #e5e5e5 100%)',
                      color: loading ? '#888' : '#000',
                      px: 5,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: '50px',
                      boxShadow: loading ? 'none' : '0 10px 30px rgba(255,255,255,0.2)',
                      '&:hover': {
                        background: loading ? 'rgba(255,255,255,0.2)' : '#fff',
                        transform: loading ? 'none' : 'translateY(-3px)',
                        boxShadow: loading ? 'none' : '0 15px 40px rgba(255,255,255,0.3)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                  <Typography sx={{ color: '#888', fontSize: '0.85rem' }}>
                    I&apos;ll get back to you within 24 hours.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* ============ BOTTOM CTA STRIP ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              mt: 8,
              p: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#fff',
                  mb: 1,
                }}
              >
                Prefer a quick call?
              </Typography>
              <Typography sx={{ color: '#aaa' }}>
                Book a free 30-minute consultation to discuss your project.
              </Typography>
            </Box>
            <Button
              href="mailto:contact@mahendrakpandey.com"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                '&:hover': {
                  background: '#fff',
                  color: '#000',
                  borderColor: '#fff',
                },
              }}
            >
              Schedule a Call →
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* ============ SUCCESS SNACKBAR ============ */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          icon={<CheckCircleIcon />}
          severity="success"
          sx={{
            background: '#fff',
            color: '#000',
            fontWeight: 600,
            '& .MuiAlert-icon': { color: '#000' },
          }}
        >
          Message sent successfully! I&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;