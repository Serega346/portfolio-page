import React from 'react'
import {useSpring, animated} from 'react-spring'
import './style.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10}0px,0)`
const trans3 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`

export const Parallax = () => {
    const [props, set] = useSpring(() => ({xy: [0, 0], config: {mass: 10, tension: 550, friction: 140}}))
    return (
        <div className="parallaxContainer" onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
            <animated.div className="card1" style={{transform: props.xy.interpolate(trans1)}}/>
            <animated.div className="card2" style={{transform: props.xy.interpolate(trans2)}}/>
            <animated.div className="card3" style={{transform: props.xy.interpolate(trans3)}}/>
            <animated.div className="card4" style={{transform: props.xy.interpolate(trans4)}}/>
            <animated.div className="card5" style={{transform: props.xy.interpolate(trans1)}}/>
            <animated.div className="card6" style={{transform: props.xy.interpolate(trans2)}}/>
            <animated.div className="card7" style={{transform: props.xy.interpolate(trans3)}}/>
            <animated.div className="card8" style={{transform: props.xy.interpolate(trans4)}}/>
            <animated.div className="card9" style={{transform: props.xy.interpolate(trans1)}}/>
            <animated.div className="card10" style={{transform: props.xy.interpolate(trans2)}}/>
            <animated.div className="card11" style={{transform: props.xy.interpolate(trans3)}}/>
        </div>
    )
}
