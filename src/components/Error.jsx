import { DataFetchError } from '../constants/networkErrors';
import StatusMessage from './StatusMessage';

export default function Error({ error = DataFetchError }) {
  return <StatusMessage message={error} />;
}
