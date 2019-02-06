import { loadPublishers } from './publishers/publisherController';
import './styles/index.scss';

function validate() {
  alert('never give up');
}

document.getElementById('submitForm').onsubmit = validate();

//document.addEventListener('DOMContentLoaded', loadPublishers(), false);
//document.addEventListener('submit', validate(), false);


// function init(){
//   document.getElementById('form').onsubmit = validate;
// }
// window.onload = init;
