import React, { Component } from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
class MyComponent extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title="Portfolio" scroll>
                        <Navigation>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Menu">
                        <Navigation>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                            <a href="/">Link</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                    </Content>
                </Layout>
            </div>
        );
    }
}
export default MyComponent;