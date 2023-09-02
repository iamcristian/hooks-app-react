import ReactDOM from "react-dom/client";
// import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks"
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

import "./index.css";
import { TodoApp } from "./08-useReducer/TodoApp";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <TodoApp />
  // </React.StrictMode>
);
