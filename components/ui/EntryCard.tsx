import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>This is the description</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">Create 30 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
