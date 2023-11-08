import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);

  return (
    <div className='container'>
      <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder='Enter text here!'
        ></textarea>
          <p className='word-count'>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
