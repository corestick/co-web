//const ENV = import('./' + process.argv[2] || 'development');
import conex from './conex';
import dev from './development';

export default process.argv[2] ? dev : conex;
