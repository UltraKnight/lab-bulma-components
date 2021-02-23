import React from 'react';
import SignUp from './signUp/SignUp';
import Container from './container/Container';
import Message from './message/Message';
import 'bulma/css/bulma.css';

const App = () => {
  return <div className="App">
    <Container>
      <SignUp />
      <Message isInfo>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
      Vestibulum rhoncus ac ex sit amet fringilla.
      </Message>
    </Container>
  </div>;
};

export default App;
