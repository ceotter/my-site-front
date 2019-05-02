import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

//styles
import { PageStyleS, ContentS, LinkS } from './AppStyle'
import NewContent from './NewContent/new'
import BlogHome from './Main/main'

class App extends Component{
  render(){
    return(
      <Router>
          <PageStyleS>
            <ContentS>
            <header>
              <ul>
                <LinkS to='/NewContent/new'>New</LinkS>
                <br/>
                <LinkS to='/Main/main'>Home</LinkS>
              </ul>
            </header>
            <main>
              <Route path='/NewContent/new'component={NewContent}/>
              <Route path='/Main/main'component={BlogHome}/>
            </main>
            </ContentS>
        </PageStyleS>
     </Router>
    )
  }
}
 export default App;

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';
// import './App.css';
// import BlogHome from './Main/main';
// import NewContent from './NewContent/new';
// import * as ROUTES from './Routes/routes';
// import { PageStyleS, ContentS } from './AppStyle';

// const App = () => (
//     <PageStyleS>
//       <ContentS>
//         <Router>
//           {/* these Route tags are where the path defined in routes.js is given a destination, the component */}
//           <Route exact path={ROUTES.HOME} component={BlogHome} />
//           <Route path={ROUTES.NEW_CONTENT} component={NewContent} />
//         </Router>
//       </ContentS>
//     </PageStyleS>
// );


// export default App;
