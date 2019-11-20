# 🙅‍♂️ react-disable

### Other projects by [@thekitze](https://twitter.com/thekitze)

- 💻 [Sizzy](https://sizzy.co) - A browser for developers and designers
- 🏫 [React Academy](https://reactacademy.io) - Interactive React and GraphQL workshops
- 💌 [Twizzy](https://twizzy.app) - A standalone app for Twitter DM
- 🤖 [JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps

---

## Demo
![demo](https://i.imgur.com/9D6Xeps.gif)

## Usage

`yarn add react-disable`

Just wrap any children with the `Disable` component in order to disable the section.
The disabled sections are also aware if a parent is disabled, so they will be disabled, but the styles won't be duplicated (the opacity won't be multiplied, etc.)

```jsx
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


