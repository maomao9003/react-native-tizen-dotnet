// @flow
import fse from 'fs-extra';
import crypto from 'crypto';
import { execSync } from 'child_process';

import { format, config, appPath, _log } from './utlis';
const llog = str => _log('Package','INFO', str);

(function packagerBuild() {

    llog(`Command: build project with dotnet SDK`);

    const dotnetPath = `${appPath}/Tizen`;
    llog(`Tizen dotnet Project Path: ${dotnetPath}`);

    //check tizen.dll hash
    checkHash(fse.readFileSync(format(`${appPath}/Tizen/ReactNativeTizen.dll`)));

    function checkHash(data) {
        let sha1 = crypto.createHash('sha1');
        sha1.update(data);
        let hash = sha1.digest('hex');
        llog(`local ReactNativeTizen.dll sha1 hash check: ${hash}`);
        llog(`The latest version of ReactNativeTizen.dll is e295ff62c9aa2bd0cc8aca188e206e3b2a82f985`);
    }

    let {mode} = config;

    //dotnet build
    const SPACE = ' ';
    execSync('dotnet restore ' + SPACE + format(`${dotnetPath}`), { stdio: [0, 1, 2] });

    execSync('dotnet build -c ' + mode + SPACE +format(`${dotnetPath}`), { stdio: [0, 1, 2] });

})();