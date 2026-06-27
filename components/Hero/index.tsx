'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* ============ ANIMATED GRID BACKGROUND ============ */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          zIndex: 0,
        }}
      />

      {/* ============ BIG SPOTLIGHT GLOW BEHIND BOSS ============ */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '50%', md: '15%' },
          transform: 'translate(50%, -50%)',
          width: { xs: 500, md: 900 },
          height: { xs: 500, md: 900 },
          background:
            'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.02) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ============ ANIMATED PULSE GLOW ============ */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '50%', md: '20%' },
          transform: 'translate(50%, -50%)',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          background:
            'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ============ BACKGROUND BOSS IMAGE (SMOOTHLY BLENDED) ============ */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 0, md: 100 },
          bottom: 0,
          right: 0,
          width: { xs: '100%', md: '55%' },
          height: { xs: '100%', md: 'calc(100% - 100px)' },
          zIndex: 1,
          opacity: { xs: 0.25, md: 1 },
          maskImage: {
            xs: 'none',
            md: 'radial-gradient(ellipse 80% 90% at 70% 50%, black 30%, transparent 75%)',
          },
          WebkitMaskImage: {
            xs: 'none',
            md: 'radial-gradient(ellipse 80% 90% at 70% 50%, black 30%, transparent 75%)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src="/boss.png"
            alt="Mahendra Kumar Pandey"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 35%',
              filter: 'grayscale(15%) contrast(1.2) brightness(1.15)',
            }}
            priority
          />

          {/* RIM LIGHT (RIGHT EDGE GLOW) */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              background:
                'radial-gradient(ellipse at right center, rgba(255,255,255,0.12) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* TOP HAIR HIGHLIGHT */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: '20%',
              right: '20%',
              height: '40%',
              background:
                'radial-gradient(ellipse at top, rgba(255,255,255,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </Box>
      </Box>

      {/* ============ DECORATIVE QUOTE (RIGHT SIDE) ============ */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        sx={{
          position: 'absolute',
          right: 40,
          top: '50%',
          transform: 'translateY(-50%)',
          maxWidth: 260,
          display: { xs: 'none', lg: 'block' },
          color: '#aaa',
          fontStyle: 'italic',
          fontFamily: 'var(--font-playfair), serif',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          zIndex: 3,
          padding: '20px 24px',
          background: 'rgba(10,10,10,0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderLeft: '2px solid rgba(255,255,255,0.5)',
          borderRadius: '0 12px 12px 0',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        }}
      >
        <Box sx={{ fontSize: '3.5rem', lineHeight: 0.4, color: '#fff', mb: 1, fontFamily: 'serif' }}>
          &ldquo;
        </Box>
        Technology should never exist just for innovation. It should create measurable business impact.
        <Box
          sx={{
            mt: 2,
            pt: 2,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '0.85rem',
            fontStyle: 'normal',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          — Mahendra Kumar Pandey
        </Box>
      </Box>

      {/* ============ MAIN CONTENT (TEXT) ============ */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
            {/* SMALL BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 1,
                  mb: 3,
                  borderRadius: '50px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#4ade80',
                    boxShadow: '0 0 12px #4ade80',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  AVAILABLE FOR PROJECTS
                </Typography>
              </Box>
            </motion.div>

            <Typography
              variant="h1"
              sx={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
                fontWeight: 700,
                lineHeight: 1.05,
                mb: 3,
                color: '#fff',
                textShadow: '0 4px 30px rgba(0,0,0,0.8)',
              }}
            >
              CODE.
              <br />
              CREATE.
              <br />
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
                TRANSFORM.
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#c0c0c0',
                mb: 4,
                maxWidth: 480,
                fontWeight: 300,
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.7,
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              Building Intelligent Digital Businesses with{' '}
              <Box component="span" sx={{ color: '#fff', fontWeight: 500 }}>
                Code, AI & Innovation.
              </Box>
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
              <Button
                variant="contained"
                size="large"
                href="#contact"
                sx={{
                  background: 'linear-gradient(135deg, #fff 0%, #e5e5e5 100%)',
                  color: '#000',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 10px 40px rgba(255,255,255,0.25)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s',
                  },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #fff 0%, #ddd 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 50px rgba(255,255,255,0.4)',
                    '&::before': { transform: 'translateX(100%)' },
                  },
                  transition: 'all 0.3s',
                }}
              >
                Hire Me →
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#services"
                sx={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255,255,255,0.05)',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.1)',
                    borderColor: '#fff',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                View Work
              </Button>
            </Box>

            {/* TAGS / EXPERTISE */}
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 4 },
                flexWrap: 'wrap',
                pt: 3,
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {['SOFTWARE DEVELOPMENT', 'AI & AUTOMATION', 'CRM & ENTERPRISE', 'MENTORSHIP'].map(
                (tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        letterSpacing: '0.2em',
                        color: '#888',
                        fontWeight: 500,
                        cursor: 'default',
                        transition: 'color 0.3s',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      {tag}
                    </Typography>
                  </motion.div>
                )
              )}
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* ============ BOTTOM SCROLL INDICATOR ============ */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: '#666' }}>
          SCROLL
        </Typography>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Box
            sx={{
              width: 24,
              height: 40,
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '20px',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 4,
                height: 8,
                background: '#fff',
                borderRadius: '2px',
              },
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;