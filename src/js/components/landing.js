import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
import avatar from '../../assets/img/avatar.png' //for production build

export default class Landing extends Component {
    render() {
        return (
            <div className='container'>
                <div className='landing'>
                <Grid className="landing__grid">
                    <Cell col={12} className='landing__grid_cell'>
                        <img
                            src={avatar}/*'/assets/img/avatar.png'*/
                            alt="avatar"
                            className='landing__avatar'
                        />
                        <div>
                            <h1>
                                Fullstack Developer
                            </h1>
                        </div>
                        <div className="landing__social">
                            <a className="landing__social_link" href='https://github.com/valkov-artyom/' target='_blank'>
                                <i className='fab fa-github-square fa-4x' />
                            </a>
                            <a className='landing__social_link' href='https://www.linkedin.com/in/artem-valkov/' target='_blank'>
                                <i className="fab fa-linkedin fa-4x" />
                            </a>
                            <a className="landing__social_link" href='https://www.facebook.com/valkov.artjom' target='_blank'>
                                <i className='fab fa-facebook-square fa-4x' />
                            </a>
                        </div>
                    </Cell>

                </Grid>
            </div>
            </div>
        )
    }
}
