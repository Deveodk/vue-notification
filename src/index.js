var component = require('./components/notification.vue');
module.exports = (function () {

    return function install(Vue, options) {


        Vue.prototype.$vuenotification = function (type, header, content) {


            var Comp = Vue.extend(component);
            var vm = new Comp({
                data: {
                    type: type,
                    header: header,
                    content: content
                }
            }).$mount();
            vm.$appendTo('body')

            setTimeout(function () {
                vm.$remove();
            }, 5000);




        }


    }

})();
