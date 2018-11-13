import ApiClient from './Modules/ApiClient.js';

let apiClient = new ApiClient();

document.addEventListener('DOMContentLoaded', apiClient.LoadSources, false);

let element = document.getElementById("BBCNews");
element.addEventListener("click", apiClient.LoadNewsBySource);



