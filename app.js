import React, { Component } from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import {Link} from "react-router-dom";
import Main from "./src/js/components/main";
class MyComponent extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title="Portfolio" scroll>
                        <Navigation>
                            <Link to='/about'>About</Link>
                            <Link to='/resume'>Resume</Link>
                            <Link to='/projects'>Projects</Link>
                            <Link to='/contacts'>Contacts</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Menu">
                        <Navigation>
                            <Link to='/about'>About</Link>
                            <Link to='/resume'>Resume</Link>
                            <Link to='/projects'>Projects</Link>
                            <Link to='/contacts'>Contacts</Link>
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