import React, { Component } from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from "./src/js/components/main";
import About from "./src/js/components/about";
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
                        <Main/>
                    </Content>
                </Layout>
            </div>
        );
    }
}
export default MyComponent;