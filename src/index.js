import {load, loadPublishers} from './publishers/publisherController.js';
import './../styles/index.scss'

document.addEventListener('DOMContentLoaded', loadPublishers(), false);