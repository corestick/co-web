const getMasterSite = () => {
  const url = new URL(window.location.href);

  if (url.host.toString().indexOf('smartfactorysystem') > -1) {
    const arr = url.host.toString().split('.');
    return arr[0].toUpperCase();
  }

  if (url.host.toString().indexOf('hiteco') > -1) {
    return 'MP';
  }

  switch (window.location.href) {
    case '':
    default:
      return 'CONEX';
  }
};

console.log('MasterSite', getMasterSite());

const info = {
  DEV: {
    apiSubUrl: '',
    subPath: '',
    masterSite: 'CONEX',
  },
  CONEX: {
    apiSubUrl: '../lms_back/',
    subPath: '/web/lms',
    masterSite: getMasterSite(),
  },
};

const Config = info['DEV'];

export default Config;
