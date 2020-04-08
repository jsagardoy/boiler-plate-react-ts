import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClientsContainer } from 'layout';
import { ClientDetailComponent } from 'pods/clients';



ReactDOM.render(<><ClientsContainer />
    <ClientDetailComponent clientId={1}/></>
    , document.getElementById('root'));
