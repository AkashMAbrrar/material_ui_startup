import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { green } from '@mui/material/colors';


const GridLayout = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016">

                </CardHeader>
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default GridLayout;