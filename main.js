import UAParser from 'ua-parser-js';
import './style.css'

const parser = new UAParser();
const result = parser.getResult();
const os = result.os;

let osString = os.name;
if (os.version) osString += ` ${os.version}`;


let ready;
let error;

if (os.name === 'Android') {
  const version = Number(os.version);

  ready = 'Your device is not ready for cell broadcast.';
  if (version >= 4) ready = 'Your device might be ready for cell broadcast.';
  if (version >= 9) ready = 'Your device is probably ready for cell broadcast.';
  if (version >= 11) ready = 'Your device is ready for cell broadcast!';
}

if (os.name === 'iOS') {
  const [major, minor] = os.version.split('.').map(Number);
  ready = "You need to update your iPhone to the iOS 16 to be ready for cell broadcast."
  if (major === 16) ready = "Your iPhone can soon be updated to be ready for cell broadcast."
  if (minor >= 4) ready = "Your iPhone is ready for cell broadcast!"
}

if (!ready) {
  error = "Your device was not recognized. Are you using a computer? If so, visit this site with your mobile device."
}

document.querySelector('#content').innerHTML = `
  <div id="headers">
    <p>
      Your operating system is
    </p>
    <h1>
      ${osString}
    </h1>
    ${ ready ? `
    <h2 id="success">
      ${ready}
    </h2>
    ` : ''}
    ${ error ? `
    <h4 id="error">
      ${error}
    </h4>
    ` : ''}
  </div>
  <div>
    <div id="data">${JSON.stringify(result, null, 4)}</div>
  </div>
`
