import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { red } from '@mui/material/colors';
import img1 from '../imgages/image_1.jpg';
import img2 from '../imgages/image_2.jpg';
import img3 from '../imgages/image_3.jpg';
import img4 from '../imgages/image_4.jpg';



const GridLayout = () => {
    return (
        <div>
            <Grid container spacing={3} >
                <Grid
                    item xs={3}
                    style={{ minHeight: '100vh' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            </IconButton>
                            <IconButton aria-label="share">
                            </IconButton>

                        </CardActions>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item xs={3}
                    style={{ minHeight: '100vh' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img2}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            </IconButton>
                            <IconButton aria-label="share">
                            </IconButton>

                        </CardActions>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item xs={3}
                    style={{ minHeight: '100vh' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img3}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            </IconButton>
                            <IconButton aria-label="share">
                            </IconButton>

                        </CardActions>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item xs={3}
                    style={{ minHeight: '100vh' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img4}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            </IconButton>
                            <IconButton aria-label="share">
                            </IconButton>

                        </CardActions>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default GridLayout;