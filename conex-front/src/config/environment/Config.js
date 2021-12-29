import masterSite from './MasterSite';

const init = () => {
  const url = new URL(window.location.href).host.toString();

  const item = masterSite.find((item) => item.url === url);

  global.masterSite = item.masterSite;
  global.proxy = item.proxy;

  return item;
};

export default init;
