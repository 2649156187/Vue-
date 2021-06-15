/** 插件的定义：是一个包含install方法的对象 **/

const plug = {
    install(Vue,options) {

        // 添加两个全局指令
        Vue.directive('upper-text',function (element,binding) {
            element.innerText = binding.value.toUpperCase()
        })

        Vue.directive('lower-text',function (element,binding) {
            element.innerText = binding.value.toLowerCase()
        })

        // 给vue自身添加属性
        Vue.projectName = "测试系统"
        Vue.getVersion = 'v1.1'
        Vue.showInfo = function () {
            console.log("测试插件")
        }

        // 给Vue原型上添加属性，给vm使用
        Vue.prototype.$random = function (min, max) {
            return Math.round(Math.random() * (max - min) + min)
        }
        // 向Vue原型追加一个$now属性，值为当前时间
        Vue.prototype.$now = new Date().toTimeString()

    },

}
