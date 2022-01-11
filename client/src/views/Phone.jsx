import { Component } from 'react';
import { loadPhone } from '../services/phone';
import EditPopover from '../components/EditPopover'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import mysteryPhone from './../images/mystery.png'
import { confirmAlert } from 'react-confirm-alert';
import { phoneDelete } from '../services/phone';
import { phoneEdit } from '../services/phone';
import { toast } from 'react-toastify';

class PhoneView extends Component {
  constructor() {
    super();
    this.state = {
      phone: null,
      editing: false,
      expanded: false
    };
  }

  componentDidMount() {
    loadPhone(this.props.match.params.id)
      .then((phone) => {
        this.setState({ phone });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  triggerEditPopover = () => {
    this.setState({ editing: !this.state.editing });
  }

  deletePhone = (id) => {
    phoneDelete(id)
      .then((phone) => {
        this.props.history.push({ pathname: `/` });
      })
      .catch((error) => {
        alert('There was an error creating phone.');
        console.log(error);
      });
  }

  handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to delete this phone?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deletePhone(id)
        },
        {
          label: 'No',
        }
      ]
    });

  }

  handleEditPhoneSubmission = (data) => {
    const { title, description, price,
      photo, manufacturer, ram, screen, color, _id } = data;

    phoneEdit(_id, {
      title, description, price, photo,
      manufacturer, ram, screen, color
    })
      .then((phone) => {
        this.setState({ phone, editing: false });
      })
      .catch((error) => {
        alert('There was an error creating your phone.');
        console.log(error);
      })

  }

  addToFavourites = () => {
    toast.success('Added to favouries')
  }

  share = () => {
    toast.success('Just imagine you shared it :)')
  }

  render() {
    return (
      <div className="individual-phone-section">
        {this.state.editing &&
          <EditPopover
            phone={this.state.phone}
            handleEditPhoneSubmission={data => this.handleEditPhoneSubmission(data)}
            editingActive={this.state.editing}
            triggerEditPopover={this.triggerEditPopover} />}


        {this.state.phone && (
          <section className='individual-phone-section'>
            <h1>{this.state.phone.title}</h1>
            <img src={this.state.phone.photo ? this.state.phone.photo : mysteryPhone} alt={this.state.phone.title}>
            </img>
            <p class='phone-description'>
              {this.state.phone.description}
            </p>
            <div className="action-icons"><IconButton aria-label="add to favorites" onClick={this.addToFavourites}>
              <FavoriteIcon />
            </IconButton>
              <IconButton aria-label="share" onClick={this.share}>
                <ShareIcon />
              </IconButton>
            </div>
            <div class="phone-details">
              <p >Price:</p> {this.state.phone.price}
              <span >
              </span>
            </div>
            <div class="phone-details">
              <p >
                Ram:
              </p>
              <span >
                {this.state.phone.ram}
              </span></div>
            <div class="phone-details"><p >
              Color:
            </p>
              <span >
                {this.state.phone.color}
              </span></div>
            <div class="phone-details"><p>
              Manufacturer:
            </p>
              <span >
                {this.state.phone.manufacturer}
              </span></div>
            <button className='primary-button' onClick={this.triggerEditPopover}>Edit Phone</button>
            <button className='warning-button' onClick={() => this.handleDelete(this.state.phone._id)}>Delete Phone</button>
          </section>
        )}
      </div>
    );
  }
}

export default PhoneView;
