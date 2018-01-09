import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import logo from './../logo.svg';

export default class MotionComponent extends Component {
    constructor() {
        super();
        this.state = {
            last: 0,
            delta: 0,
        }
    }

    componentDidMount(){
        const animate = (timestamp) => {
            // console.log('running')

            if(timestamp - this.state.last >= 200){
                this.setState({
                    last: timestamp,
                    delta: this.state.delta < 360 ? this.state.delta + 5 : 0
                })
            }
            this.rafID = requestAnimationFrame(animate)
        }

        //call for first time
        this.rafID = requestAnimationFrame(animate)
    }

    componentWillUnmount(){
        cancelAnimationFrame(this.rafID)
    }

    
    render(){
        return (
            <div>
                <Motion defaultStyle={{ rotate: 0 }} style={{ rotate: spring(this.state.delta) }}>
                    { (style) => {
                        
                        return <img style={{transform: `rotate( ${style.rotate}deg )`}} className="logo" src={logo} alt="react logo"/>
                                     
                    }}
                </Motion>
            </div>
        )
    }
}