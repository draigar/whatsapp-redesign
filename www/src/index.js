import './bootstrap';
import Vue from 'vue';

// route information here
import Routes from './routes';
// Component file
import App from './components/App';

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;
