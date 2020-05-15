import React from 'react';

//To Do
//implement a view more page
// Look into implementing log-in
// Implement Listing, deleting and editing own ads
// Add tags to the posts
// Look into implementing a search bar
// Deploy on Heroku

const CreateAdForm = () => {
  return (
    <>
      <div className='ui text container'>
        <h3 className='ui header'>Create a Post</h3>
        <div className='ui text container segment'>
          <form action='' className='ui form'>
            <div class='field'>
              <label>Title</label>
              <div class='field'>
                <input type='text' name='title' placeholder='Title'></input>
              </div>
            </div>
            <div class='field'>
              <label>Description</label>
              <textarea></textarea>
            </div>
            <div class='field'>
              <label>Image</label>
              <input type='text' name='img' placeholder='Image'></input>
            </div>
            <h4 class='ui dividing header'>Contact Information</h4>
            <div class='two fields'>
              <div class='field'>
                <label>Phone</label>
                <input type='text' name='phone' placeholder='Phone'></input>
              </div>
              <div class='field'>
                <label>E-mail</label>
                <input type='email' name='email' placeholder='E-mail'></input>
              </div>
            </div>

            <button class='ui button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAdForm;
