import axios from 'axios';

export const getPublicContentFromHost = async (filename: string) => {
  try {
    const origin = window.location.origin;
    const value = await axios.get(`${origin}/markdowns/${filename}.md`);
    return {
      value,
      error: null
    };
  } catch (e) {
    return {
      value: null,
      error: e
    };
  }
};
