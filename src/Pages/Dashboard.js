import { Box, Container, Grid, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import '@fontsource/lato/300.css';

import React from 'react'

const Dashboard = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid container md={3} bgcolor={"primary.main"} direction="column" paddingLeft={5} paddingTop={5}
                    justifyContent="start"
                    alignItems="start"
                    height="100vh"
                    sx={{
                        // custom css
                    }}
                >

                    <Box>
                        <item>button 1</item>
                    </Box>
                    <Box>
                        <item>button 2</item>
                    </Box>
                    <Box>
                        <item>button 3</item>
                    </Box>
                    <Box>
                        <item>button 4</item>
                    </Box>
                    <Box>
                        <item>button 5</item>
                    </Box>
                    <Paper>
                        <item>button 5</item>
                    </Paper>
                    <Paper>
                        <item>button 5</item>
                    </Paper>
                </Grid>

                <Grid item md={9}>
                    <Box>
                        <Typography variant="h1" component="h1">
                            Helicopter
                        </Typography>
                    </Box>
                    <Grid item xs={8}>
                        <item>XS=8</item>
                    </Grid>
                    <Grid item xs={4}>
                        <item>XS=8</item>
                    </Grid>
                    <Grid item xs={4}>
                        <item>XS=8</item>
                    </Grid>
                    <Grid item xs={8}>
                        <item>XS=8</item>
                    </Grid>
                    <Box />
                    <Box />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard