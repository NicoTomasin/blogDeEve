import { Typography, Grid, IconButton } from '@mui/material';

import { createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
    const theme = createTheme({});
    return (
        <footer>
            <Grid container direction="row" justifyContent="center" alignItems="center"

                sx={{
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.050)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
                    userSelect: 'none',
                    width: '100%',
                    height: '8rem',

                    bottom: '0',
                }}
            >

                <Grid item xs={12}>
                    <IconButton href="https://www.instagram.com/evelynnquinteros/" target="_blank" sx={{ color: '#3B3B3B' }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton href="https://ar.linkedin.com/in/evelyn-nadina-quinteros-r%C3%ADos-8892a31aa" target="_blank" sx={{ color: '#3B3B3B' }}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href="https://wa.me/5491133838123?text=Hola!%20Vi%20tu%20Blog%20y%20quer%C3%ADa%20comentarte%3A" target="_blank" sx={{ color: '#3B3B3B' }}>
                        <WhatsAppIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ color: '#3B3B3B' }}>Mail: quinterosriosevelyn@gmail.com</Typography>
                </Grid>

            </Grid>
        </footer >
    )
};

export default Footer;
