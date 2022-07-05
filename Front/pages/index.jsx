import React from 'react';
import Head from 'next/head';
import { Paper, Grid } from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar';
import PostSelected from '../components/PostSelected';
import { motion } from 'framer-motion';
import AllPosts from '../components/AllPosts';
import Footer from '../components/Footer';
import { createTheme } from '@mui/material/styles';

function Home({ posts, page, last, length, categories }) {
  const [post, setPost] = React.useState(last);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1950,
      },
    },
  });
  console.log('');
  return (<>
    <Head>
      <title>Evelyn Quinteros Rios</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <motion.div>
      <Navbar />
    </motion.div>
    <motion.div>
      <Paper sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(50, 50, 93, 0.0)',
        boxShadow: 'none',
        marginTop: '8rem',
        [theme.breakpoints.down('xl')]: {
          marginTop: '0rem',
        },
      }}>


        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{

          }}>

          <Grid item xs={12} sm={6} sx={{
            padding: '1rem',
            [theme.breakpoints.up('sm')]: {
              paddingLeft: '5rem',
            },
          }}>

            <motion.div
              key={post}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1
              }}
            >
              <PostSelected Title={post.attributes.Title} Description={post.attributes.Description} Body={post.attributes.body} Fecha={post.attributes.creation} />
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} sx={{
            padding: '1rem',
          }}>

            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >

              <AllPosts posts={posts} page={page} last={last} length={length} setPost={setPost} categories={categories} />

            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </motion.div>
    <motion.div>
      <Footer />
    </motion.div>
  </>
  );
}
export default Home;

export async function getServerSideProps({ query: { page = 1 } }) {
  const qs = require('qs');
  const query = qs.stringify({
    sort: ['Creation:desc'],
    pagination: {
      page: page,
      pageSize: 6,
    },
  }, {
    encodeValuesOnly: true,
  });

  const postsRes = await axios.get(`http://34.196.77.42:1337/api/posts?${query}`);
  const categories = await axios.get(`http://34.196.77.42:1337/api/categories`);
  return {
    props: {
      posts: postsRes.data.data,
      page: +page,
      last: postsRes.data.data[0],
      length: postsRes.data.meta.pagination.total,
      categories: categories.data.data,
    },
  };
}