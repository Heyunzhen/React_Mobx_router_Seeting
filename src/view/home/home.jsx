import React from 'react';
import { observer, inject } from "mobx-react";
//  import RouterView from "../../router/RouterView"
@inject("homePage")
@observer
class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
            <div>首页</div>
            </div>
        );
    }
}


export default home;
