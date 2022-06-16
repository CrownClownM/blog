import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewUserContainer from '../pages/NewUserContainer'
import PostPageContainer from '../pages/PostPageContainer'
import HomePageContainer from '../pages/HomePageContainer'

const App =() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/newuser" component={NewUserContainer} />
            <Route exact path="/post" component={PostPageContainer} />
            <Route exact path="" component={HomePageContainer}/>
        </Switch>
    </BrowserRouter>
)

export default App