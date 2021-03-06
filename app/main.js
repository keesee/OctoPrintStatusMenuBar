try { var ipcRenderer = require('electron').ipcRenderer } catch (e) { console.warn('Running outside of Electron environment') }

// Master list instance
const data = {
    Api: Api,
    job: {},
    progress: {},
    temperature: [],
    state: {},
    view: 'status',
    loading: true,
    loadingText: '',
    problem: false,
    problemText: '',
    tabs: [{
        name: 'status',
        label: 'Status',
        icon: 'fa-tasks'
    }, {
        name: 'files',
        label: 'Files',
        icon: 'fa-file'
    }, {
        name: 'setup',
        label: '',
        icon: 'fa-cog'
    }]
}


// Instantiate
const app = new Vue({ data, el: '#app' })

// Start polling
Api.poll()

function whatsup() {
    Vue.log(app.state)
    Vue.log(app.progress)
    Vue.log(app.job)
}
