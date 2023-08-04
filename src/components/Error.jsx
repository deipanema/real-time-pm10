export default function Error(error) {
  console.log(error);
  return (
    <div className='status-container'>
      <p className='emotion'>{emotions[Math.floor(Math.random() * 5)]}</p>
      <p className='error-message'>{error}</p>
    </div>
  );
}

const emotions = ['(⊙x⊙;)', '＞﹏＜', 'இ௰இ', 'ᕦ(ò_óˇ)ᕤ'];
