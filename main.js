Vue.component('task', {
    template: '<li>This come from component</li>'
});

Vue.component('slot', {
    template: '<li><slot></slot></li>'
});


new Vue({
    el: '#app',


});
