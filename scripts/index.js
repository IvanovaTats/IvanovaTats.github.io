import ApiClient from './modules/ApiClient.js';

let apiClient = new ApiClient();

document.addEventListener('DOMContentLoaded', apiClient.LoadSources, false);

