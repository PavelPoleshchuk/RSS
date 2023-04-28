import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

//единственный файл входа entry-client.tsx будет отвечать за то, 
//что он будет точкой входа в пакет браузера и будет обеспечивать гидратацию страницы.