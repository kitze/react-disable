# 🙅‍♂️ react-disable

### 🙋‍♂️ Made by [@thekitze](https://twitter.com/thekitze)

### Other projects:

- 💻 [Sizzy](https://sizzy.co) - A browser for developers and designers
- 🏫 [React Academy](https://reactacademy.io) - Interactive React and GraphQL workshops
- 💌 [Twizzy](https://twizzy.app) - A standalone app for Twitter DM
- 🤖 [JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps

---

## Usage

`yarn add react-disable`

Just wrap any children with the `Disable` component in order to disable the section.

```
import { Disable } from 'react-disable';

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
```
