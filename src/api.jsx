import md5 from 'md5';


export const generateMarvelHash = (publicKey, privateKey) => {
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey);
  return { ts, hash };
};
