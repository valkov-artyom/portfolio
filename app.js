import React, { Component } from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import {Link} from "react-router-dom";
import Main from "./src/js/components/main";
class MyComponent extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className='header' title="Portfolio" scroll>
                        <Navigation className='header__navbar'>
                            <Link
                                to='/portfolio/'
                                className='header__navbar_link'
                            >
                                Login
                            </Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Menu">
                        <Navigation className='header__navbar'>
                            <Link exact to='/portfolio/'>Home!!!</Link>
                            <Link to='/portfolio/about'>About</Link>
                            <Link to='/portfolio/resume'>Resume</Link>
                            <Link to='/portfolio/projects'>Projects</Link>
                            <Link to='/portfolio/contacts'>Contacts</Link>
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