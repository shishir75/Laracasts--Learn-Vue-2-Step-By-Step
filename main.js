Vue.component('task', {
    template: '<li>This come from component</li>'
});

Vue.component('slot', {
    template: '<li><slot></slot></li>'
});


// component in component
Vue.component('task-list', {

    template: `
        <div>
            <li v-for="task in tasks">{{ task.description }}</li>
        </div>
    
    `,

    data() {
        return {
            tasks: [
                { description: 'Description 1', complete: true},
                { description: 'Description 2', complete: true},
                { description: 'Description 3', complete: false},
                { description: 'Description 4', complete: false},
                { description: 'Description 5', complete: true},
            ],
        }
    }


});


new Vue({
    el: '#app',


});
