import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import axios from 'axios'

const newData = {
  "id": "5",
  "name": "Kalle Anka",
  "email": "kalle.anka@gmail.com",
  "number": "09033332933"
}

const replaceData = {
  "id": "2",
  "name": "Jerry Williams",
  "email": "jerrywilliams@gmail.com",
  "number": "08111111111"
}

const patchData = {
  "number": "1234567890"
}

try {
  let response;
  let updatedData;
  const data = await axios.get("http://localhost:8000/users/");
  console.log("data", data);
  response = await axios.post("http://localhost:8000/users/", newData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log("response", response);

  response = await axios.put("http://localhost:8000/users/2", replaceData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log("response", response);

  response = await axios.patch("http://localhost:8000/users/3", patchData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log("response", response);
  
  updatedData = await axios.get("http://localhost:8000/users/");
  console.log("updatedData", updatedData);

  response = await axios.delete("http://localhost:8000/users/5");

  updatedData = await axios.get("http://localhost:8000/users/");
  console.log("updatedData", updatedData);

} catch (error) {
  console.error("Error fetching data", error);
}


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
