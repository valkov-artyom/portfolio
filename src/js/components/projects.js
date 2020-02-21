import React, { Component } from "react";
import { Grid, Cell, Tabs , Tab, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from "react-mdl";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab : 0 };
    }
    toggleTabs() {
        if(this.state.activeTab === 1) {
            return(
                <div className='projects__grid'>
                    <div className='projects__card'>
                        <Card  shadow={5} style={{minWidth: '500', padding: '20'}}>
                            <CardTitle style={{color: '#fff', height: '160px', background:
                                    'url(https://cdn6.aptoide.com/imgs/1/b/a/1ba69fc8a958146768979bb3828bc09a_icon.png?w=256) center / cover'}}
                            > Bicycle Mockup</CardTitle>
                            <CardActions>
                                <Button href='https://github.com/valkov-artyom/bicycle-mockup' target='_blank'>Source Code</Button>
                                <Button href='https://valkov-artyom.github.io/bicycle-mockup/' target='_blank'>Live Demo</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        }
        else if(this.state.activeTab === 0) {
            return(
                <div className='projects__grid'>
                    <div className='projects__card'>
                <Card  shadow={5} style={{minWidth: '500', padding: '20'}}>
                    <CardTitle style={{color: '#fff', height: '160px', background:
                            'url(https://hsto.org/files/26e/c52/350/26ec52350e284332a1a4d6d09aedff7e.png) center / cover'}}
                    > SpaceX</CardTitle>
                    <CardActions>
                        <Button href='https://github.com/valkov-artyom/spacex-app' target='_blank'>Source Code</Button>
                        <Button href='https://valkov-spacex-app.herokuapp.com/' target='_blank'>Live Demo</Button>
                    </CardActions>
                </Card>
                    </div>
                    <div className='projects__card'>
                    <Card  shadow={5} style={{minWidth: '500'}}>
                        <CardTitle style={{color: '#fff', height: '160px', background:
                                'url(https://hsto.org/files/26e/c52/350/26ec52350e284332a1a4d6d09aedff7e.png) center / cover'}}
                        > Portfolio</CardTitle>
                        <CardActions>
                            <Button href='https://github.com/valkov-artyom/portfolio' target='_blank'>Source Code</Button>
                            <Button href=' https://valkov-artyom.github.io/portfolio/' target='_blank'>Live Demo</Button>
                        </CardActions>
                    </Card>
                    </div>

                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return (
                <div className='projects__grid'>
                    <div className='projects__card'>
                        <Card  shadow={5} style={{minWidth: '500', padding: '20'}}>
                            <CardTitle style={{color: '#fff', height: '160px', background:
                                    'url(https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png) center / cover'}}
                            > SpaceX</CardTitle>
                            <CardActions>
                                <Button href='https://github.com/valkov-artyom/spacex-app' target='_blank'>Source Code</Button>
                                <Button href='https://valkov-spacex-app.herokuapp.com/' target='_blank'>Live Demo</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            <div className='container'>
                <div className="projects">
                    <Tabs
                        className="projects__tabs"
                        activeTab={this.state.activeTab}
                        onChange={(tabId) => this.setState({activeTab: tabId})}
                        ripple>
                        <Tab>ReactJS</Tab>
                        <Tab>HTML/CSS</Tab>
                        <Tab>NodeJS</Tab>
                    </Tabs>
                    <section className='container'>
                        <Grid className='projects__grid'>
                            <cell col={6}>
                                <div className='content'>{this.toggleTabs()}</div>
                            </cell>
                        </Grid>
                    </section>
                </div>
            </div>
        )
    }
}

