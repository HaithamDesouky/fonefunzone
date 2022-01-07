/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import mysteryPhone from './../../images/mystery.png'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PhoneCard({ phone, expandDisabled, width }) {
  const [expanded, setExpanded] = React.useState(false);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history = useHistory();


  const addToFavourites = () => {
    toast.success('Added to favouries')
  }

  const share = () => {
    toast.success('Just imagine you shared it :)')
  }

  return (
    <Card sx={{ width: width }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#d7b065' }} aria-label="phone">
            {phone.creator[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={phone.title}
        subheader={new Date(phone.creationDate).toLocaleDateString('en-US', options)}
      />
      <CardMedia
        component="img"
        height="194"
        image={phone.photo ? phone.photo : mysteryPhone}
        alt={phone.title}
        onClick={() => history.push(`/phone/${phone._id}`)}></CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {phone.description.substring(0, 41) + '...'}
        </Typography>
        <Typography >
          <Link className="phone-card-link" to={`/phone/${phone._id}`}> Read more</Link>
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
