
WebApp Boilerplate with React JS
Open in Gitpod

<p align="center">
  <a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b">
    <img src="https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/img/how-to.png?raw=true" />
  </a>
</p>
Requirements:
Ensure you are using Node.js version 10.
Install the packages:

bash
Copy code
$ npm install
Create a .env file:

bash
Copy code
$ cp .env.example .env
Start coding! Use the webpack dev server with live reload for Windows, macOS, Linux, or Gitpod:

bash
Copy code
$ npm run start
Styles
You can update the styles/index.css or create new .css files inside styles/ and import them into your current SCSS or JS files depending on your needs.

Components
Add more files into your ./src/js/components or styles folder as needed and import them into your current files.

Note (New changes): Components have been converted into functions to support the use of hooks:

Instead of a class component, we're using a const function.
Class constructor and state have been replaced by useState() hooks.
componentDidMount() was replaced by useEffect({}, []) - It runs at mount thanks to the second parameter ([]).
Actions and Store still work the same way.
jsx
Copy code
// Previous "Class Oriented"
export class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState('code here');
  }
}

// New "Functional Oriented"
export const Demo = () => {
  const [state, setState] = getState('code here'); // using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)
};
💡Note: There is an example using the Context API inside views/demo.js.

Views (Components)
Add more files into your ./src/js/views and import them in ./src/js/layout.jsx.

Context
This boilerplate comes with a centralized general Context API. The file ./src/js/store/flux.js has a base structure for the store; we encourage you to change it and adapt it to your needs.

React Context docs
BreathCode Lesson view

The Provider is already set. You can consume from any component using the useContext hook to get the store and actions from the Context. Check /views/demo.js to see a demo.

jsx
Copy code
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  // here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>;
};
Publish your website!
Vercel: The FREE recommended hosting provider is vercel.com. Deploy in 1 minute by typing the following 2 commands:

Login (you need to have an account):

sh
Copy code
$ npm i vercel -g && vercel login
Deploy:

sh
Copy code
$ vercel --prod
✎ Note: If you don't have an account, go to vercel.com, create an account, and come back here.

Vercel example procedure to deploy

GitHub Pages: This boilerplate is 100% compatible with the free GitHub Pages hosting. To publish your website, push your code to your GitHub repository, and run the following command:

sh
Copy code
$ npm run deploy
Note: You will need to configure GitHub Pages for the branch gh-pages

Contributors
This template was built as part of the 4Geeks Academy Coding Bootcamp by Alejandro Sanchez and many other contributors. Find out more about our Full Stack Developer Course and Data Science Bootcamp.





