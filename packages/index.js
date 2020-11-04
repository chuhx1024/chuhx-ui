
import Button from './button.vue'

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
