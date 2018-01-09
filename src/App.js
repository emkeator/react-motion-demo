import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import StaggeredTransition from './Components/StaggeredTransition'
import StaggeredTransition2 from './Components/StaggeredTransition2'
import StaggeredHome from './Components/StaggeredHome'
import LogoSpin from './Components/MotionComponent2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LogoSpin/>
          <h1 className="App-title">React Motion Demo</h1>
          <h2 className="nav">
            <Link to="/">Home</Link>
            <Link to="/wheee">Whee</Link>
            <Link to="/whooo">Whoo</Link>
          </h2>
        </header>
        <Switch>
          <Route path="/wheee" component={StaggeredTransition}/>
          <Route path="/whooo" component={StaggeredTransition2}/>
          <Route path="/" exact component={StaggeredHome}/>
        </Switch>
      </div>
    );
  }
}

export default App;



// class App extends Component {
//   render() {
//     return (
//       <div className="app">
//         <h1>React Motion - Basic Transitions</h1>
//         <ul>
//           <Link to="/stagger1"><li>Staggered Transition (styled components)</li></Link>
//           <Link to="/stagger2"><li>Staggered Transition (css/custom styling)</li></Link>
//           <Link to="/motion1"><li>Slide Transition (styled components)</li></Link>
//           <Link to="/motion2"><li>Slide Transition (css/custom styling)</li></Link>
//         </ul>
//         <Switch>
//           <Route path="/stagger1" component={StaggeredStyledComp} />
//           <Route path="/stagger2" component={StaggeredCSS} />
//           <Route path="/motion1" component={MotionStyledComp} />
//           <Route path="/motion2" component={MotionCSS} />
//         </Switch>
//       </div>
//     );
//   }
// }
