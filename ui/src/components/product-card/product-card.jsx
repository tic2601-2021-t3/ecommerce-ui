import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//var productId = windows.location.href;
//const id = productId.substring(productId.indexOf('=')+1); // to get product id

const ProductCard = () => {
  return(
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">Lizard</Typography> 
          <Typography gutterBottom variant="h6" component="div">$36</Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href='/productId=1'>More</Button>
          {/*<Button size="small" href='/productId={id}'>More</Button>*/}
        </CardActions>
      </Card>
    </div>
  )
};

export default ProductCard;
