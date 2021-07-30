import { BrowserRouter, Route, Switch} from "react-router-dom";

import home from './pages/home';

const Routes = () => {
  <BrowserRouter>
    <switch>
      <Route exact path="/" component={home} />
    </switch>
  </BrowserRouter>
}

export default Routes;