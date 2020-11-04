
import Button from './button.vue'
import './font/iconfont.js'
import './font/index.css'

const components = [
    Button,
]

const install = (Vue) => {
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}

export default {
    install,
}
