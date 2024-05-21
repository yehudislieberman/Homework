import { useState } from 'react';

function SetDetails() {
  const [bgColor, setBgColor] = useState(localStorage.getItem('bgColor') || '');
  const [textColor, setTextColor] = useState(localStorage.getItem('textColor') || '');
  const [font, setFont] = useState(localStorage.getItem('font') || 'Cursive');

  function handleChange(e, setState, storageKey) {
    const value = e.target.value;
    setState(value);
    localStorage.setItem(storageKey, value);
  }

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, fontFamily: font }}>
      <h1>Homework 97</h1>
      <div>
        <label>Background Color:</label>
        <input id="bgColor" type="color" value={bgColor} onChange={(e) => handleChange(e, setBgColor, 'bgColor')} />
      </div>
      <div>
        <label>Text Color:</label>
        <input id="textColor" type="color" value={textColor} onChange={(e) => handleChange(e, setTextColor, 'textColor')} />
      </div>
      <div>
        <label>Font:</label>
        <select id="font" value={font} onChange={(e) => handleChange(e, setFont, 'font')}>
          <option>Arial</option>
          <option>Times New Roman</option>
          <option>Courier New</option>
          <option>Cursive</option>
        </select>
      </div>
    </div>
  );
}

export default SetDetails;
