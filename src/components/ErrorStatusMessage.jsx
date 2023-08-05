export default function ErrorStatusMessage({ message }) {
  const emotions = ['(⊙x⊙;)', '＞﹏＜', 'இ௰இ', '(⊙_⊙)？', '( ͠° ͟ʖ ͡°)', '(⓿_⓿)'];

  return (
    <div className='status-container'>
      <p className='emotion'>
        {emotions[Math.floor(Math.random() * emotions.length)]}
      </p>
      <p className='message'>{message}</p>
    </div>
  );
}
