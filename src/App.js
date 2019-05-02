import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

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
