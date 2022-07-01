import { Typography, Grid } from '@mui/material';
import { useRouter } from 'next/router';
function Navbar() {
    const router = useRouter();
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.050)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
                    height: '5rem',
                    paddingBottom: '6rem',
                }}
            >


                <Grid item > <Typography id="navBar" variant="h3" sx={{ marginTop: '1rem', textAlign: 'center' }}>Evelyn</Typography></Grid>

            </Grid>


        </>
    )
};

export default Navbar;
