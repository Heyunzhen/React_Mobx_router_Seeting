import Home from "../view/home/home"
import Two from "../view/html/index"
import Therr from "../view/three/index"
const list = [{
    path: '/html',
    component:Home,
    children: [{
        path: '/html/a',
        component: Therr,

    }]
}]

export default list
