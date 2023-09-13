export default function PM10GradeImage({ grade }) {
  switch (grade) {
    case '1':
      return <img src='images/good.gif' alt='좋음' />;
    case '2':
      return <img src='images/moderate.gif' alt='보통' />;
    case '3':
      return <img src='images/bad.gif' alt='나쁨' />;
    case '4':
      return <img src='images/very-bad.gif' alt='매우 나쁨' />;
    default:
      return <img src='images/error.gif' alt='통신장애' />;
  }
}
