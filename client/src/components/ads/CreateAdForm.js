import React, { useState } from 'react';
import { createAd, useAdDispatch } from '../../context/ads/adContext';

//To Do
//implement a view more page                        // DONE
// Look into implementing log-in
// Implement Listing, deleting and editing own ads
// Add tags to the posts
// Look into implementing a search bar
// Deploy on Heroku

const CreateAdForm = (props) => {
  const adDispatch = useAdDispatch();

  const [newAd, setNewAd] = useState({
    title: '',
    desc: '',
    img: '',
    phone: '',
    email: '',
  });

  const { title, desc, img, phone, email } = newAd;

  const onChange = (e) => {
    setNewAd({ ...newAd, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createAd(adDispatch, newAd);
    props.history.push('/');
  };

  return (
    <>
      <div className='ui text container'>
        <h3 className='ui header'>Create a Post</h3>
        <div className='ui text container segment'>
          <form onSubmit={onSubmit} className='ui form'>
            <div className='field'>
              <label>Title</label>
              <div className='field'>
                <input
                  type='text'
                  name='title'
                  placeholder='Title'
                  value={title}
                  onChange={onChange}
                ></input>
              </div>
            </div>
            <div className='field'>
              <label>Description</label>
              <textarea name='desc' value={desc} onChange={onChange}></textarea>
            </div>
            <div className='field'>
              <label>Image</label>
              <input
                type='text'
                name='img'
                placeholder='Image'
                value={img}
                onChange={onChange}
              ></input>
            </div>
            <h4 className='ui dividing header'>Contact Information</h4>
            <div className='two fields'>
              <div className='field'>
                <label>Phone</label>
                <input
                  type='text'
                  name='phone'
                  placeholder='Phone'
                  value={phone}
                  onChange={onChange}
                ></input>
              </div>
              <div className='field'>
                <label>E-mail</label>
                <input
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={onChange}
                ></input>
              </div>
            </div>

            <button className='ui button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAdForm;
