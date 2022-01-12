/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import mysteryPhone from './../../images/mystery.png';
import { Tooltip } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tooltip: {
    fontSize: '14px',
    background: 'rgb(0,0,0,0.85)',
    color: '#d7b065'
  }
});

export default function PhoneCard({ phone, width }) {
  const classes = useStyles();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const history = useHistory();

  const addToFavourites = () => {
    toast.success('Added to favouries');
  };

  const share = () => {
    toast.success('Just imagine you shared it :)');
  };

  return (
    <Card sx={{ width: width }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '$tertiary-gold-color' }} aria-label="phone">
            {phone.creator[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={phone.title}
        subheader={new Date(phone.creationDate).toLocaleDateString(
          'en-US',
          options
        )}
      />
      <Tooltip
        title="Click to find out more"
        placement="bottom"
        classes={{ tooltip: classes.tooltip }}
      >
        <CardMedia
          component="img"
          height="194"
          image={phone.photo ? phone.photo : mysteryPhone}
          alt={phone.title}
          onClick={() => history.push(`/phone/${phone._id}`)}
        ></CardMedia>
      </Tooltip>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {phone.description.substring(0, 41) + '...'}
        </Typography>
        <Typography>
          <Link className="phone-card-link" to={`/phone/${phone._id}`}>
            {' '}
            Read more
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToFavourites}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={share}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
