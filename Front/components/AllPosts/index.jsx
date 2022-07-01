import React from 'react';
import { Typography, Grid, Paper, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
function AllPosts({ posts, page, length, setPost, categories }) {
    const defaultProps = {
        options: categories,
        getOptionLabel: (option) => option.attributes.category,
    };
    const [value, setValue] = React.useState(null);
    const router = useRouter();
    const lastPage = Math.ceil(length / 6);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <motion.div
            className="container"
            key={page}
            variants={container}
            initial="hidden"
            animate="visible"

        >

            {posts.map((post, index) => {
                return (
                    <Grid item xs={12} key={index}>
                        <motion.div
                            key={page}
                            className="item" variants={item}
                            style={{
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '1rem',
                            }}
                            whileHover={{ scale: 1.05 }}

                        >
                            <Paper className="item" variants={item} sx={{
                                textAlign: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.30)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
                                userSelect: 'none',
                                borderRadius: '20px',
                                width: '90%',
                                height: 'auto',
                                cursor: 'pointer',
                                padding: '1rem',

                            }}
                                onClick={() => { setPost(post), window.scrollTo(0, 0) }}>

                                <Typography variant="h6">{post.attributes.Title}</Typography>
                                <Typography variant="h7">{post.attributes.Description}</Typography>
                            </Paper>
                        </motion.div >
                    </Grid>)
            })}


            <Grid item xs={12}>
                <motion.div
                    className="item" variants={item}
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '1rem',

                    }}
                >
                    <Paper sx={{
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.30)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
                        userSelect: 'none',
                        borderRadius: '20px',
                        width: '15rem',
                        height: 'auto',
                        padding: '1rem',
                    }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={2}>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <IconButton onClick={() => { router.push(`/?page=${page - 1}`, '/') }} disabled={page <= 1}>
                                        <ArrowBackIcon />
                                    </IconButton>
                                </motion.div>
                            </Grid>
                            <Grid item xs={2} >

                                <Typography variant="h6" sx={{ color: 'rgba(100, 50, 93, 0.9)' }}> <b>{page}</b></Typography>
                            </Grid>
                            {page === lastPage ? ('') : (<><Grid item xs={2} >
                                <Typography variant="h6" sx={{}}>/</Typography>
                            </Grid>
                                <Grid item xs={2} >
                                    <Typography variant="h6" sx={{ cursor: 'pointer', }} onClick={() => { router.push(`/?page=${lastPage}`, '/') }}> {lastPage}</Typography>
                                </Grid></>)}



                            <Grid item xs={2}>
                                <motion.div
                                    whileHover={page < lastPage ? { scale: 1.2 } : { scale: 1 }}
                                >
                                    <IconButton onClick={() => { router.push(`/?page=${page + 1}`, '/') }} disabled={page >= lastPage}>
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </motion.div>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Autocomplete
                                    {...defaultProps}
                                    id="Categorias"
                                    clearOnBlur
                                    renderInput={(params) => (
                                        <TextField {...params} label="Categorias" variant="standard" />
                                    )}
                                />
                            </Grid>*/}

                        </Grid>
                    </Paper>
                </motion.div>
            </Grid>

        </motion.div >
    )
};

export default AllPosts;
