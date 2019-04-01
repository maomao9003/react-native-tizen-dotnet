// @flow
import fse from 'fs-extra';
import crypto from 'crypto';
import { execSync } from 'child_process';

import { format, config, appPath } from './utlis';

(function packagerBuild() {

    console.log(`[Info] Command: build project with dotnet SDK`);

    console.log(`[packagerBuild] appPath: ${appPath}`);

    //check tizen.dll hash
    checkHash(fse.readFileSync(format(`${appPath}/Tizen/ReactNativeTizen.dll`)));

    function checkHash(data) {
        let sha1 = crypto.createHash('sha1');
        sha1.update(data);
        let hash = sha1.digest('hex');
        console.log(`local ReactNativeTizen.dll sha1 hash check: ${hash}`);
        console.log(`The latest version of ReactNativeTizen.dll is e295ff62c9aa2bd0cc8aca188e206e3b2a82f985`);
    }

    let {mode} = config;

    //dotnet build
    const SPACE = ' ';
    execSync('dotnet restore ' + SPACE + format(`${appPath}/Tizen/`), { stdio: [0, 1, 2] });

    execSync('dotnet build -c ' + mode + SPACE +format(`${appPath}/Tizen/`), { stdio: [0, 1, 2] });

})();