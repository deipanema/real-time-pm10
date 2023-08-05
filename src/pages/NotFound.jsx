import ErrorStatusMessage from '../components/ErrorStatusMessage';

export default function NotFound() {
  return (
    <>
      <ErrorStatusMessage message={'페이지를 찾을 수 없습니다.'} />
    </>
  );
}
