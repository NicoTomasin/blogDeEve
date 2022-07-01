import { Typography, Paper, Grid, Box } from '@mui/material';
import React from 'react';
import Markdown from 'markdown-to-jsx';
function PostSelected({ Title, Description, Body, Fecha }) {


    return (

        <Paper sx={{
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.30)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
            userSelect: 'none',
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            width: 'auto',
            height: '50rem',
            overflow: 'auto',

        }}>
            <Box sx={{
                padding: '2rem',

            }}>

                <Typography variant="h5"><b>{Title}</b></Typography>
                <Box sx={{ marginTop: '1rem' }}><Typography variant="h6">{Description}</Typography></Box>
                <Box sx={{ marginTop: '1rem' }}><Typography variant="h7" sx={{ marginTop: '1rem' }}>{Fecha}</Typography></Box>
                <Box sx={{ marginTop: '1rem' }}><Typography variant="h7" sx={{ marginTop: '1rem', textAlign: 'left' }}><Markdown>{Body}</Markdown></Typography></Box>
            </Box>

        </Paper>)
}
export default PostSelected;