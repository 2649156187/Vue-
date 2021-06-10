let p = {
    firstName:'张',
    lastName:'三'
}

Object.defineProperty(p,'fullName',{
    set(value) {
        const arr = value.split('-')
        this.firstName = arr[0]
        this.lastName = arr[1]
    },
    get() {
        return this.firstName + '-' + this.lastName
    }
})

p.fullName = '李-四'

console.log(p)
