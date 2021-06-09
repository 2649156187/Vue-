let _data = {msg:'测试'}

let vm = {}
// 数据代理
Object.defineProperty(vm,'msg',{
    set(value) {
        _data.msg = value
    },
    get() {
        return _data.msg
    }
})

console.log(vm)
