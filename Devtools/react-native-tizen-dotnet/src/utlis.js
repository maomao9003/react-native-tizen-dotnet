// 
import path from 'path';

const _log = (mod, type, str) => console.log(`[${Date()}][${mod}][${type}]: ${str}`)

const appPath = path.dirname(require.main.filename).split('node_modules')[0];
_log('Util','INFO', `App current path : ${appPath}`);

const appName = path.basename(appPath);
_log('Util','INFO', `App Name : ${appName}`);

const pkgPath = path.normalize(appPath + 'package.json');
_log('Util','INFO', `Loading config file from : ${pkgPath}`);

let {config} = require(pkgPath);
const format = str => path.normalize(str);

export {
    appPath,
    appName,
    config,
    format,
    _log
};