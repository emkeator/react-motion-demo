import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';



const colors = [
  '#dbf7ff',
  '#c9f3ff',
  '#9fe8fc',
  '#83dff7',
  '#66DBF9'
]

/* #66DBF9 */
/* #83dff7 */
/* #9fe8fc */
/* #c9f3ff */
/* #dbf7ff */

export default class MotionComponent extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 0,
            last: 0,
            width: 0,
            size: 30,
            fontLast: 0,
            delta: 0,
            sizeGoingUp: true,
            sizeGoingDown: false
        }
    }

    componentDidMount(){

        const animateFont = (timestamp) => {
            let { fontLast, size, sizeGoingDown, sizeGoingUp, opacity, delta } = this.state
            if(timestamp - fontLast >= 200){
                if(size >= 50) {
                    sizeGoingDown = true
                    sizeGoingUp = false
                } else if (size < 30){
                    sizeGoingDown = false
                    sizeGoingUp = true
                }

                if(sizeGoingDown){
                    size -= 0.5
                    opacity -= (0.025)
                    delta -= 9
                } else {
                    size += 0.5
                    opacity += (0.025)
                    delta += 9
                }

                fontLast = timestamp

                this.setState({
                    fontLast,
                    size,
                    sizeGoingDown,
                    sizeGoingUp,
                    opacity,
                    delta
                })
            }
            this.rafIDFont = requestAnimationFrame(animateFont)
            
        }
        this.rafIDFont = requestAnimationFrame(animateFont)        
    }

    
    render(){
        return (
            <div>
                <Motion defaultStyle={{ opacity: 0, fontSize: 30, rotate: 0 }} style={{ opacity: spring(this.state.opacity, { stiffness: 180, damping: 90 }), fontSize: spring(this.state.size, { stiffness: 180, damping: 90 }), rotate: spring(this.state.delta) }}>
                    { (style) => {
                        return <div style={{opacity: style.opacity, fontSize: style.fontSize, transform: `rotate( ${style.rotate}deg )`}} className="fadeInDiv">Can you see me?</div> 
                    }}
                </Motion>
            </div>
        )
    }
}