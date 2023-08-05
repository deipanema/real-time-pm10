import { networkErrorMessage } from '../utils/constants';

export default async function request(url, options = {}) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(networkErrorMessage);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(networkErrorMessage);
  }
}
