import React from 'react';
import { observer, inject } from "mobx-react";
 import RouterView from "../../router/RouterView"
@inject("homePage")
@observer
class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    a(){
    this.props.homePage.addNum()
    }
    render() {
        return (
            <div>
            <p>{this.props.homePage.homeNum}</p>
            <div onClick={this.a.bind(this)}>首页</div>
                {
                    this.props.homePage.homeNum==='这是我的moBx'?<div className='a'>现在是对的</div>:<div className='b'>这个是错的</div>
                }
                <RouterView routes={this.props.routes}></RouterView>
            </div>
        );
    }
}


export default home;


