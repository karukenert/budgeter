import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// TODO: add eslint

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAEiZykPI3GUhLE5VsdgF0S75YJwydGqF8",
	authDomain: "budgeter-d30d8.firebaseapp.com",
	projectId: "budgeter-d30d8",
	storageBucket: "budgeter-d30d8.appspot.com",
	messagingSenderId: "643317707559",
	appId: "1:643317707559:web:f56240fabf0f33890e2f02",
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
