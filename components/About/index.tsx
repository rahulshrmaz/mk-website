'use client';
import { Box, Typography, Container, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const About: React.FC = () => {
  const skills: string[] = [
    'Laravel', 'PHP', 'AI & Automation', 'Salesforce', 'Zoho CRM',
    'Power BI', 'Node.js', 'Next.js', 'React', 'MySQL', 'MongoDB', 'AWS'
  ];

  const journey = [
    { year: '2015', icon: <SchoolIcon />, title: 'Started Coding', desc: 'Began my journey with PHP & Laravel' },
    { year: '2018', icon: <CodeIcon />, title: 'Software Architect', desc: 'Building enterprise-grade applications' },
    { year: '2021', icon: <BusinessCenterIcon />, title: 'Tech Entrepreneur', desc: 'Launched multiple SaaS products' },
    { year: '2024', icon: <PsychologyIcon />, title: 'AI Enthusiast', desc: 'Helping businesses with AI & automation' },
  ];

  const achievements = [
    { icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />, num: '50+', label: 'Projects Delivered' },
    { icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />, num: '10+', label: 'Years Experience' },
    { icon: <BusinessCenterIcon sx={{ fontSize: 32 }} />, num: '30+', label: 'Happy Clients' },
    { icon: <PsychologyIcon sx={{ fontSize: 32 }} />, num: '15+', label: 'AI Solutions' },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 14 }, background: '#000', position: 'relative', overflow: 'hidden' }}>
      {/* ============ BACKGROUND DECORATIVE ELEMENTS ============ */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
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
              — ABOUT ME —
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
              The Story of{' '}
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
                Innovation
              </Box>
            </Typography>
            <Typography sx={{ color: '#aaa', maxWidth: 600, mx: 'auto', fontSize: '1.05rem' }}>
              Get to know the person behind the code, vision, and the journey of building intelligent digital businesses.
            </Typography>
          </Box>
        </motion.div>

        {/* ============ MAIN ABOUT SECTION ============ */}
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: 10, alignItems: 'center' }}>
          {/* IMAGE SIDE */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Decorative border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderRadius: '16px',
                    zIndex: 0,
                  }}
                />

                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 450, md: 550 },
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #333',
                    zIndex: 1,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <Image
                    src="/boss.png"
                    alt="Mahendra Kumar Pandey"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 25%',
                      filter: 'grayscale(20%) contrast(1.1)',
                    }}
                  />

                  {/* Gradient overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)',
                    }}
                  />

                  {/* Name tag overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: 20,
                      right: 20,
                      p: 2,
                      background: 'rgba(0,0,0,0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#fff',
                        fontFamily: 'var(--font-playfair), serif',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                      }}
                    >
                      Mahendra Kumar Pandey
                    </Typography>
                    <Typography sx={{ color: '#aaa', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                      FOUNDER • DEVELOPER • MENTOR
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* CONTENT SIDE */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                sx={{
                  color: '#888',
                  letterSpacing: '0.3em',
                  fontSize: '0.8rem',
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                WHO AM I
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Bridging the gap between{' '}
                <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                  technology
                </Box>{' '}
                & business growth.
              </Typography>

              <Typography sx={{ color: '#c0c0c0', mb: 3, fontSize: '1.05rem', lineHeight: 1.9 }}>
                I&apos;m <strong style={{ color: '#fff' }}>Mahendra Kumar Pandey</strong> — a Technology Entrepreneur,
                Software Architect, and AI Enthusiast with over a decade of experience helping businesses
                build scalable digital solutions. My passion lies at the intersection of{' '}
                <strong style={{ color: '#fff' }}>Code, AI & Innovation</strong>.
              </Typography>

              <Typography sx={{ color: '#aaa', mb: 4, fontSize: '1rem', lineHeight: 1.9 }}>
                From building enterprise-grade applications with Laravel to integrating cutting-edge AI
                solutions, I help companies transform their ideas into impactful digital products that
                drive real measurable business growth.
              </Typography>

              {/* QUOTE */}
              <Box
                sx={{
                  position: 'relative',
                  p: 3,
                  mb: 4,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderLeft: '3px solid #fff',
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: 15,
                    fontSize: 50,
                    color: 'rgba(255,255,255,0.1)',
                  }}
                />
                <Typography
                  sx={{
                    color: '#fff',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: '1.15rem',
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;Technology should simplify business, not complicate it. Every line of code should
                  create measurable business impact.&rdquo;
                </Typography>
              </Box>

              {/* TECH STACK */}
              <Typography
                sx={{
                  color: '#888',
                  letterSpacing: '0.2em',
                  fontSize: '0.75rem',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                TECH STACK & EXPERTISE
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Chip
                      label={skill}
                      sx={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#fff',
                        px: 1,
                        fontWeight: 500,
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: '#fff',
                          color: '#000',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* ============ ACHIEVEMENTS GRID ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ mb: 10 }}>
            <Typography
              sx={{
                color: '#888',
                letterSpacing: '0.3em',
                fontSize: '0.8rem',
                mb: 2,
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              — ACHIEVEMENTS —
            </Typography>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 5,
              }}
            >
              Numbers that{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                speak
              </Box>
            </Typography>

            <Grid container spacing={3}>
              {achievements.map((a, i) => (
                <Grid size={{ xs: 6, md: 3 }} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.05)',
                          borderColor: 'rgba(255,255,255,0.3)',
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Box sx={{ color: '#fff', mb: 1.5 }}>{a.icon}</Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: 'var(--font-playfair), serif',
                          fontSize: { xs: '2rem', md: '2.8rem' },
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        {a.num}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#888',
                          fontSize: '0.8rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {a.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* ============ JOURNEY TIMELINE ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box>
            <Typography
              sx={{
                color: '#888',
                letterSpacing: '0.3em',
                fontSize: '0.8rem',
                mb: 2,
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              — MY JOURNEY —
            </Typography>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 6,
              }}
            >
              From Coder to{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                Entrepreneur
              </Box>
            </Typography>

            <Grid container spacing={3}>
              {journey.map((j, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        p: 3,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        height: '100%',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: '#fff',
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 30px rgba(255,255,255,0.05)',
                        },
                      }}
                    >
                      {/* Year Badge */}
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 2,
                          py: 0.5,
                          mb: 2,
                          background: '#fff',
                          color: '#000',
                          borderRadius: '50px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {j.year}
                      </Box>

                      <Box sx={{ color: '#fff', mb: 2 }}>{j.icon}</Box>

                      <Typography
                        sx={{
                          color: '#fff',
                          fontFamily: 'var(--font-playfair), serif',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {j.title}
                      </Typography>
                      <Typography sx={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {j.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* ============ PHILOSOPHY SECTION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              mt: 10,
              p: { xs: 4, md: 6 },
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <FormatQuoteIcon
              sx={{
                position: 'absolute',
                top: 20,
                left: 30,
                fontSize: 80,
                color: 'rgba(255,255,255,0.05)',
              }}
            />
            <FormatQuoteIcon
              sx={{
                position: 'absolute',
                bottom: 20,
                right: 30,
                fontSize: 80,
                color: 'rgba(255,255,255,0.05)',
                transform: 'rotate(180deg)',
              }}
            />

            <Typography
              sx={{
                color: '#888',
                letterSpacing: '0.3em',
                fontSize: '0.8rem',
                mb: 3,
                fontWeight: 600,
              }}
            >
              MY PHILOSOPHY
            </Typography>
            <Typography
              sx={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: { xs: '1.5rem', md: '2.2rem' },
                fontStyle: 'italic',
                lineHeight: 1.5,
                color: '#fff',
                maxWidth: 800,
                mx: 'auto',
                mb: 3,
              }}
            >
              &ldquo;Technology should never exist just for innovation. It should create{' '}
              <Box component="span" sx={{ color: '#aaa' }}>
                measurable business impact
              </Box>
              .&rdquo;
            </Typography>
            <Typography
              sx={{
                color: '#aaa',
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
                fontWeight: 600,
              }}
            >
              — MAHENDRA KUMAR PANDEY
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;