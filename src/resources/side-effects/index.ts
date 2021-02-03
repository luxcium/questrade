import {
  client,
  ech0,
  echo,
  errorlog,
  getHash,
  getHttpClient,
  getMyToken,
  infolog,
  makeTedis,
  setMyToken,
  tablelog,
  validateToken,
  warnlog,
  writeToken,
} from './default-behaviour';

export { sync } from './auth/mkdirp';
export {
  client,
  ech0,
  echo,
  errorlog,
  getHash,
  getHttpClient,
  getMyToken,
  infolog,
  makeTedis,
  setMyToken,
  sideEffects,
  tablelog,
  validateToken,
  warnlog,
  writeToken,
};

const sideEffects = {
  client,
  ech0,
  echo,
  errorlog,
  getHash,
  getHttpClient,
  getMyToken,
  infolog,
  makeTedis,
  setMyToken,
  tablelog,
  warnlog,
};
