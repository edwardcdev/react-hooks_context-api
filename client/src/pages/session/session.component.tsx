import React from 'react';
import './session.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Session: React.FC = () => (
  <div className="session">
    <SignIn/>
    <SignUp/>
  </div>
)

export default Session;