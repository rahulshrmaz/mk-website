'use client';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PosterCard {
  title: ReactNode;
  subtitle: string;
  image: string;
  tags: string[];
}

const Services: React.FC = () => {
  const posters: PosterCard[] = [
    {
      title: (
        <>
          AI
          <br />
          <Box component="span" sx={{ fontSize: '0.5em', fontWeight: 400 }}>
            is not the
            <br />
            future.
            <br />
            It&apos;s the
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>now.</Box>
          </Box>
        </>
      ),
      subtitle: 'ARTIFICIAL INTELLIGENCE',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
      tags: ['OpenAI', 'Python'],
    },
    {
      title: (
        <>
          LARAVEL
          <br />
          <Box component="span" sx={{ fontSize: '0.45em', fontWeight: 400 }}>
            is more than
            <br />
            a framework.
            <br />
            <br />
            It&apos;s an
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>ecosystem.</Box>
          </Box>
        </>
      ),
      subtitle: 'BACKEND DEVELOPMENT',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      tags: ['PHP', 'Laravel'],
    },
    {
      title: (
        <>
          NEXT.JS
          <br />
          <Box component="span" sx={{ fontSize: '0.45em', fontWeight: 400 }}>
            builds the
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>web of</Box>
            <br />
            tomorrow.
          </Box>
        </>
      ),
      subtitle: 'MODERN FRONTEND',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
      tags: ['React', 'Next.js'],
    },
    {
      title: (
        <>
          NODE.JS
          <br />
          <Box component="span" sx={{ fontSize: '0.5em', fontWeight: 400 }}>
            powers
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>scalable</Box>
            <br />
            backends.
          </Box>
        </>
      ),
      subtitle: 'API & MICROSERVICES',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
      tags: ['Node.js', 'NestJS'],
    },
    {
      title: (
        <>
          PYTHON
          <br />
          <Box component="span" sx={{ fontSize: '0.45em', fontWeight: 400 }}>
            speaks the
            <br />
            language of
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>machines.</Box>
          </Box>
        </>
      ),
      subtitle: 'AI / ML / AUTOMATION',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
      tags: ['Python', 'AI Agents'],
    },
    {
      title: (
        <>
          Salesforce
          <br />
          + Zoho
          <br />
          <Box component="span" sx={{ fontSize: '0.45em', fontWeight: 400 }}>
            Powering
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>Business.</Box>
          </Box>
        </>
      ),
      subtitle: 'CRM & ENTERPRISE',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
      tags: ['Salesforce', 'Zoho'],
    },
    {
      title: (
        <>
          DATA
          <br />
          <Box component="span" sx={{ fontSize: '0.5em', fontWeight: 400 }}>
            Without
            <br />
            insight is
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>noise.</Box>
          </Box>
        </>
      ),
      subtitle: 'DATA & ANALYTICS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      tags: ['Power BI', 'MongoDB'],
    },
    {
      title: (
        <>
          CLOUD
          <br />
          <Box component="span" sx={{ fontSize: '0.5em', fontWeight: 400 }}>
            scales
            <br />
            without
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>limits.</Box>
          </Box>
        </>
      ),
      subtitle: 'AWS / DEVOPS',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
      tags: ['AWS', 'Docker'],
    },
    {
      title: (
        <>
          MOBILE
          <br />
          <Box component="span" sx={{ fontSize: '0.5em', fontWeight: 400 }}>
            apps that
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>connect.</Box>
          </Box>
        </>
      ),
      subtitle: 'MOBILE DEVELOPMENT',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      tags: ['React Native', 'Flutter'],
    },
    {
      title: (
        <>
          API
          <br />
          <Box component="span" sx={{ fontSize: '0.5em', fontWeight: 400 }}>
            the bridge
            <br />
            of modern
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>software.</Box>
          </Box>
        </>
      ),
      subtitle: 'API DEVELOPMENT',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
      tags: ['REST', 'GraphQL'],
    },
    {
      title: (
        <>
          AUTOMATE
          <br />
          <Box component="span" sx={{ fontSize: '0.45em', fontWeight: 400 }}>
            today.
            <br />
            <Box component="span" sx={{ fontStyle: 'italic' }}>Scale tomorrow.</Box>
          </Box>
        </>
      ),
      subtitle: 'WORKFLOW AUTOMATION',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&q=80',
      tags: ['n8n', 'Zapier'],
    },
    {
      title: (
        <>
          Mentor.
          <br />
          Guide.
          <br />
          <Box component="span" sx={{ fontStyle: 'italic' }}>Inspire.</Box>
        </>
      ),
      subtitle: 'MENTORSHIP',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80',
      tags: ['1-on-1', 'Strategy'],
    },
  ];

  return (
    <Box id="services" sx={{ py: { xs: 8, md: 14 }, background: '#000', position: 'relative', overflow: 'hidden' }}>
      {/* ============ BACKGROUND GLOW ============ */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 500,
          height: 500,
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
              — WHAT I DO —
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
              Services &{' '}
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
                Expertise
              </Box>
            </Typography>
            <Typography sx={{ color: '#aaa', maxWidth: 600, mx: 'auto', fontSize: '1.05rem' }}>
              End-to-end digital solutions powered by modern technologies, AI, and a deep understanding of business needs.
            </Typography>
          </Box>
        </motion.div>

        {/* ============ POSTER GRID — 4 PER ROW ============ */}
        <Grid container spacing={2}>
          {posters.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 300,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#0a0a0a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'rgba(255,255,255,0.3)',
                      boxShadow: '0 15px 40px rgba(255,255,255,0.08)',
                      '& .poster-image': {
                        transform: 'scale(1.1)',
                        filter: 'grayscale(100%) contrast(1.2) brightness(0.95)',
                      },
                      '& .poster-overlay': {
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)',
                      },
                    },
                  }}
                >
                  {/* BACKGROUND IMAGE — FORCED BLACK & WHITE */}
                  <Box
                    className="poster-image"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%) contrast(1.15) brightness(0.85)',
                      transition: 'all 0.6s ease',
                    }}
                  />

                  {/* DARK OVERLAY — top to bottom fade */}
                  <Box
                    className="poster-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)',
                      transition: 'background 0.4s',
                    }}
                  />

                  {/* CONTENT */}
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      p: 2.5,
                    }}
                  >
                    {/* TOP — Category Label */}
                    <Typography
                      sx={{
                        color: '#ccc',
                        fontSize: '0.6rem',
                        letterSpacing: '0.25em',
                        fontWeight: 600,
                      }}
                    >
                      {p.subtitle}
                    </Typography>

                    {/* MIDDLE — Big Headline */}
                    <Box
                      sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-playfair), serif',
                          fontSize: '1.8rem',
                          fontWeight: 700,
                          color: '#fff',
                          lineHeight: 1.1,
                          textShadow: '0 4px 20px rgba(0,0,0,0.9)',
                        }}
                      >
                        {p.title}
                      </Typography>
                    </Box>

                    {/* BOTTOM — Tech Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                      {p.tags.map((tag) => (
                        <Box
                          key={tag}
                          sx={{
                            px: 1.2,
                            py: 0.3,
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '50px',
                            fontSize: '0.65rem',
                            color: '#fff',
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* CORNER DECORATIONS */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      width: 20,
                      height: 20,
                      borderTop: '1px solid rgba(255,255,255,0.3)',
                      borderRight: '1px solid rgba(255,255,255,0.3)',
                      zIndex: 3,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      left: 12,
                      width: 20,
                      height: 20,
                      borderBottom: '1px solid rgba(255,255,255,0.3)',
                      borderLeft: '1px solid rgba(255,255,255,0.3)',
                      zIndex: 3,
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* ============ CTA BANNER ============ */}
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
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '24px',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 2,
                color: '#fff',
              }}
            >
              Ready to build something{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                extraordinary?
              </Box>
            </Typography>
            <Typography sx={{ color: '#aaa', mb: 4, maxWidth: 600, mx: 'auto', fontSize: '1.05rem' }}>
              Let&apos;s collaborate and turn your vision into a powerful digital reality.
            </Typography>
            <Box
              component="a"
              href="#contact"
              sx={{
                display: 'inline-block',
                px: 5,
                py: 1.8,
                background: '#fff',
                color: '#000',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                '&:hover': {
                  background: '#ddd',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 15px 40px rgba(255,255,255,0.3)',
                },
              }}
            >
              Let&apos;s Talk →
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;