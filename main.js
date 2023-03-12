import QRCode from 'qrcode'
import UAParser from 'ua-parser-js';
import './style.css'

const parser = new UAParser();
const result = parser.getResult();
const os = result.os;

// os.name = "Android";
// os.version = "11";

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

  ready = "You need at have least an iPhone 8 and update to iOS 16 to be ready for cell broadcast."

  if (major == 16) {
    ready = "Your iPhone can soon be updated to be ready for cell broadcast."
    if (minor >= 4) ready = "Your iPhone is ready for cell broadcast!"
  }

  if (major > 16) ready = "Your iPhone is ready for cell broadcast!"
}

if (!ready) {
  error = "Are you using a computer? Scan the QR code below with your mobile device to visit this page."

  QRCode.toDataURL('https://ath88.github.io/cell-broadcast-ready/')
  .then(url => {
    document.querySelector('#qr').innerHTML = `<img src=${url}>`;
  });
}

document.querySelector('#content').innerHTML = `
  <div id="header">
    <p>Your operating system is:</p>
    <h1>${osString}</h1>
    ${ ready ? `
    <h2 id="success">
      ${ready}
    </h2>
    ` : ''}
    ${ error ? `
    <h3 id="error">
      ${error}
    </h3>
    ` : ''}
    <div id="qr"></div>
  </div>
  <div id="data">${JSON.stringify(result, null, 4)}</div>
  <div id="footer">
    <p>
      Source: <a href="https://github.com/ath88/cell-broadcast-ready">github.com/ath88/cell-broadcast-ready</a><br>
      Detection based on <a href="https://github.com/faisalman/ua-parser-js">ua-parser-js</a>.
    </p>
  </div>
`
