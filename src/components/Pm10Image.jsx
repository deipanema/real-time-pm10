export default function Pm10Image({ grade }) {
  switch (grade) {
    case '1':
      return (
        <img
          src='https://i.giphy.com/media/PmuLLvty3SDOIaEh77/giphy.webp'
          alt='좋음'
        />
      );
    case '2':
      return (
        <img
          src='https://i.giphy.com/media/WtDLxQWQWLtw3oIXTy/giphy.webp'
          alt='보통'
        />
      );
    case '3':
      return (
        <img
          src='https://i.giphy.com/media/IbaaxVxgaZAZx9ddJ4/giphy.webp'
          alt='나쁨'
        />
      );
    case '4':
      return (
        <img
          src='https://i.giphy.com/media/ZF8tKLJ3PQefJAEqij/giphy.webp'
          alt='매우 나쁨'
        />
      );
    default:
      return (
        <img src='https://giphy.com/static/img/shrug.gif' alt='통신장애' />
      );
  }
}
