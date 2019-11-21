import React from 'react';
import { observer, inject } from "mobx-react";
import RouterView from "../../router/RouterView"
@inject("detail")
@observer
class two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>这是我的路由页面
            </div>
        );
    }
}


export default two;
