import logo from './logo.svg';
import './App.css';
import { Inicio } from './Inicio';
import { Admnistrador } from './Admnistrador';
import { Editar } from './Editar';
import { Agregar } from './Agregar';

import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";


function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact={true} component={Inicio}></Route>
        <Route path="/administrador" exact={true} component={Admnistrador}></Route>
        <Route path="/editar/:id" exact={true} component={Editar}></Route>
        <Route path="/agregar" exact={true} component={Agregar}></Route>

      </HashRouter>

      {/* <Inicio></Inicio> */}
    </>
  );
}

export default App;
