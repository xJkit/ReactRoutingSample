// handle all routes
import React from 'react'
import {Router, Route, browserHistory, IndexRedirect, IndexRoute} from 'react-router'

// Components
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Teachers from './components/Teachers'
import NotFound from './components/NotFound'
import Featured from './components/Featured'

//sub-component under Courses
import Course from './components/courses/Course'
// import CSS from './components/courses/CSS'
// import HTML   from './components/courses/HTML'
// import JavaScript from './components/courses/JavaScript'

// Data & container
import CourseList from './data/courses'
import CourseContainer from './components/courses/CourseContainer'

//routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} title="the About" />
      <Route path="courses" component={Courses} >
        <IndexRedirect to="css" />
        <Route path="html" component={CourseContainer} data={CourseList.HTML}/>
        <Route path="css" component={CourseContainer} data={CourseList.CSS}/>
        <Route path="javascript" component={CourseContainer} data={CourseList.JS}/>
      </Route>
      <Route path="teachers" component={Teachers} />
      <Route path="featured(/:topic)(/:teacher)" component={Featured} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

module.exports = routes
