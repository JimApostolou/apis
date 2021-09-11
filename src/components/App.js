import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import Bored from "./Bored";
import Currency from './Currency';
import Cocktails from "./Cocktails";
import Deck from "./Deck";

const App = () => {

    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Bored}/>
                    <Route path="/currency" exact component={Currency}/>
                    <Route path="/cocktails" exact component={Cocktails}/>
                    <Route path="/deck" exact component={Deck}/>
                </div>
            </BrowserRouter>            
        </div>
    )

}

export default App;