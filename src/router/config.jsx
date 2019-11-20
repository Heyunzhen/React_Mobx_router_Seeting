import Home from "../view/home/home"
import Two from "../view/html/index"
const list=[{
    path:'/',
    component:Home,
    children:[{
        path:'/html',
        component:Two,
    }]
}]

export default list
