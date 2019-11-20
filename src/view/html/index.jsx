import React from 'react';
import { observer, inject } from "mobx-react";
@inject("detail")
@observer
class two extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {};
    }

    render() {
        return (
            <div>这是我的路由页面</div>
        );
    }
}


export default two;
