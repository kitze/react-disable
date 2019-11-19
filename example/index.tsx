import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Disable } from '../.';

const App = () => {
  const [disableForm, setDisableForm] = React.useState(false);
  const toggle = () => setDisableForm(d => !d);

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={toggle}>toggle disable form</button>
      <Disable disabled={disableForm}>
        <h3>Login form </h3>
        <input placeholder="username" type="text" />
        <input placeholder="password" type="text" />
        <button>submit</button>
      </Disable>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
