import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import MotionComponent from './MotionComponent'

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

const SlideBox = (props) => {
  let { bgColor } = props;
  let width = `${props.width}%`;
  let style = {
    "background": bgColor,
    "flexBasis": width
  };

  return (
    <div className="box" style={style}></div>
  )
}

const ViewBox = (props) => {
  let { bgColor } = props;
  let width = `${props.width}%`;
  let style = {
    "background": bgColor,
    "flexBasis": width
  };

  return (
    <div className="view-box" style={style}>
        <div className="view-body">
          <MotionComponent />
        </div>
    </div>
  )
}

const StaggeredCSS = () => {

  return (
    <StaggeredMotion
      defaultStyles={[
        { width: 100 },
        { width: 100 },
        { width: 100 },
        { width: 100 },
        { width: 0 }
      ]}
      styles={(prevStyles) => [
        { width: spring(0) },
        { width: spring(prevStyles[0].width) },
        { width: spring(prevStyles[1].width) },
        { width: spring(prevStyles[2].width) },
        { width: spring(100-prevStyles[2].width) }
      ]}
    >
      {(styles) => (
        <div className="wrapper">
          <SlideBox bgColor={colors[0]} width={styles[0].width} />
          <SlideBox bgColor={colors[1]} width={styles[1].width} />
          <SlideBox bgColor={colors[2]} width={styles[2].width} />
          <SlideBox bgColor={colors[3]} width={styles[3].width} />
          <ViewBox bgColor={colors[4]} width={styles[4].width} />
        </div>
      )}
    </StaggeredMotion>
  )
}

export default StaggeredCSS;