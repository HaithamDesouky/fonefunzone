import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import mysteryPhone from './../../images/mystery.png'
import { toast } from 'react-toastify';

const IndividualPhone = ({ phone, triggerEditPopover, handleDelete }) => {
  const addToFavourites = () => {
    toast.success('Added to favouries')
  }

  const share = () => {
    toast.success('Just imagine you shared it :)')
  }

  return ((phone
    && (<section className='individual-phone-section'>
      <h1>{phone.title}</h1>
      <img src={phone.photo ? phone.photo : mysteryPhone} alt={phone.title}>
      </img>
      <p className='phone-description'>
        {phone.description}
      </p>
      <div className="action-icons"><IconButton aria-label="add to favorites" onClick={addToFavourites}>
        <FavoriteIcon />
      </IconButton>
        <IconButton aria-label="share" onClick={share}>
          <ShareIcon />
        </IconButton>
      </div>
      <div className="phone-details">
        <p >Price:</p> {phone.price}
        <span >
        </span>
      </div>
      <div className="phone-details">
        <p >
          Ram:
        </p>
        <span >
          {phone.ram}
        </span></div>
      <div className="phone-details"><p >
        Color:
      </p>
        <span >
          {phone.color}
        </span></div>
      <div className="phone-details"><p>
        Manufacturer:
      </p>
        <span >
          {phone.manufacturer}
        </span></div>
      <button className='primary-button' label='edit phone' onClick={triggerEditPopover}>Edit Phone</button>
      <button className='warning-button' lable='delete' onClick={() => handleDelete(phone._id)}>Delete Phone</button>
    </section>))
    || (<h1> Sorry there has been a problem loading your phone </h1>))

}


export default IndividualPhone