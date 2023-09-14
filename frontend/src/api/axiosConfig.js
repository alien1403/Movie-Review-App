import axios from "axios";

export default axios.create({
    baseURL: '', // add your ngrok url
    headers: {"ngrok-skip-browser-warning": "true"}
});