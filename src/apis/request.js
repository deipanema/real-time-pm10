import { DataFetchError } from '../constants/networkErrors';

export default async function request(url, options = {}) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(DataFetchError);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
