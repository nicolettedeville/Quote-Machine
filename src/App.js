import { useState, useEffect } from 'react';

function QuoteBox() {
  const quotesList = [
    {
      quote: `"I'm a peacock Captain, you gotta let me fly!"`,
      author: '~Mark Wahlberg',
    },
    { quote: `"I love you Simon DeVille."`, author: '~Nicolette DeVille' },
    { quote: `"I love you Nicolette DeVille."`, author: '~Simon DeVille' },
    {
      quote: `"A necromancer is simply a healer with bad timing."`,
      author: '~Unknown',
    },
    {
      quote: `"My code doesn't work, I don't know why."`,
      author: '~Unknown programmer',
    },
    {
      quote: `"My code works, I don't know why."`,
      author: '~Unknown programmer',
    },
    {
      quote: `"Bona Na Croin!"`,
      author: '~A Celtic Saying',
    },
    {
      quote: `"Look my program works! That makes me so happy!"`,
      author: '~Nicolette DeVille',
    },
    {
      quote: `"Whoops, I'm in trouble!"`,
      author: '~Simon DeVille',
    },
    {
      quote: `"The brakes don't work, we're going to hell!"`,
      author: '~Simon DeVille',
    },
    {
      quote: `"That old story?"`,
      author: '~Charitee Pirone',
    },
    {
      quote: `"Don't stress, this is Hanning time."`,
      author: '~Mark Hanning',
    },
    {
      quote: `"Practical application is the most important part of any coding journey."`,
      author: '~Nicolette DeVille',
    },
    {
      quote: `"A user interface is like a good joke. If you have to explain it, it's not that good."`,
      author: '~Martin LeBlanc',
    },
  ];

  let randStart = Math.floor(Math.random() * quotesList.length);
  const [text, setText] = useState(quotesList[randStart].quote);
  const [author, setAuthor] = useState(quotesList[randStart].author);
  const [color, setColor] = useState('purple');
  const shareTweet = () => {
    document
      .getElementById('tweet-quote')
      .setAttribute(
        'href',
        `https://twitter.com/intent/tweet?text=${text}%0D${author}`
      );
  };
  const changeQuote = () => {
    let randColor1 = Math.floor(Math.random() * 256);
    let randColor2 = Math.floor(Math.random() * 256);
    let randColor3 = Math.floor(Math.random() * 256);
    let randAlpha = Math.random() + 0.1;
    let rand = Math.floor(Math.random() * quotesList.length);
    if (text !== quotesList[rand].quote) {
      setText(quotesList[rand].quote);
      setAuthor(quotesList[rand].author);
    } else {
      changeQuote();
    }
    setColor(
      'rgba(' +
        randColor1 +
        ',' +
        randColor2 +
        ',' +
        randColor3 +
        ',' +
        randAlpha +
        ')'
    );
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.getElementById('tweet-quote').style.color = color;
  }, [color]);

  return (
    <div id="quote-box">
      <div class="quote-container">
        <p id="text">{text}</p>
        <p id="author">{author}</p>
      </div>
      <button
        id="new-quote"
        type="button"
        className="quote-button"
        onClick={() => changeQuote()}
      >
        Generate a Quote
      </button>
      <div className="socialBox">
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          onClick={() => shareTweet()}
          target="_blank"
          rel="noreferrer"
          aria-roledescription="share to twitter"
        >
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
    </div>
  );
}

export default QuoteBox;
