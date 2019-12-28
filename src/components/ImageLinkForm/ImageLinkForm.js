import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='mt5 f5'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3'>
          <input className='f4 pa2 w-70 center shadow-5' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f6 link ph3 pv2 dib white bg-green shadow-5'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;