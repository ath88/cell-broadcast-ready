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

  if (os.version >= 6) ready = 'Your device is not ready.';
  if (os.version >= 6) ready = 'Your device might be ready.';
  if (os.version >= 9) ready = 'Your device is probably ready.';
  if (os.version >= 11) ready = 'Your device is ready!';
}

if (os.name === 'iOS') {

}

if (!ready) {
  error = "Your device was not recognized. Perhaps you are using a desktop device? Visit this site with your mobile device."
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
    <h2>
      ${ready}
    </h2>
    ` : ''}
    ${ error ? `
    <h4>
      ${error}
    </h4>
    ` : ''}
  </div>
  <div>
    <div id="data">${JSON.stringify(result, null, 4)}</div>
  </div>
`
