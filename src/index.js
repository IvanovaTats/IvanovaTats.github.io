import { loadPublishers } from './publishers/publisherController';
import { userAuthenticate } from './authentication/authCoontroller';
import './styles/index.scss';


document.getElementById('submitForm').onsubmit = (function() {
  return function(evt) {
    evt.preventDefault();
    console.log('onsubmit');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    userAuthenticate(username, password);
  };
})();


document.addEventListener('DOMContentLoaded', loadPublishers(), false);
