import { launchTarget } from 'tizen-tv-dev-cli';
import { config, format, _log } from './utlis';

const llog = str => _log('Launch','INFO', str);

function targetIP() {
    if (!config.tvip) {
        throw('[Error] Can not launch without remote TV IP address...');
    }
    return config.tvip;
};

function tpkPath(flag) {
    let mode;
    if (!flag || flag.toLowerCase() === 'release') {
        mode = 'Release';
    } else {
        mode = 'Debug';
    }
    let appPath = format(`/Tizen/bin/${mode}/netcoreapp2.0/`);
    llog(`Mode: ${mode}`);
    llog(`Catch App file from path:${appPath}`);

    return appPath;
}


launchTarget.handleCommand(targetIP(), tpkPath(config.mode));