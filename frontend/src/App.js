import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AttendeePayment from './components/attendee-payment-component/attendee-payment-component';
import Approve from './components/Approving-component/approving';
<<<<<<< Updated upstream
=======
import Create from './components/create-component/create';
import Edit from './components/edit-component/edit';
import Index from './components/index-component/index';
import Landing from './components/landing-component/landing';
import DocumentUpload from './components/document-upload-component/DocumentUpload';
import Index1 from './components/retrieveeditordetailstable-component/fetcheditortable';

>>>>>>> Stashed changes

function App() {
  return (

    <Router>
      //kaveena
      <Route exact path="/attendee-payment-component" component={AttendeePayment} />
    
    
    
    
    
<<<<<<< Updated upstream
=======

      {/* //nethmi     */}
      <Route exact path = '/approve' component = {Approve} />
      <Route exact path = '/retrieve' component = {Index1} />
    
    
>>>>>>> Stashed changes
    
      //nethmi    
      <Route exact path = '/approve' component = {Approve} />

    </Router>
    
  );
}





export default App;
