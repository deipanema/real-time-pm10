import { networkErrorMessage } from '../utils/constants';
import ErrorStatusMessage from './ErrorStatusMessage';

export default function Error({ error = networkErrorMessage }) {
  return <ErrorStatusMessage message={error} />;
}
