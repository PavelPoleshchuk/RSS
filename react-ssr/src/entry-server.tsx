import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { Router } from "./router";

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>
  );
};

//entry-server.tsx  в котором мы собираемся экспортировать вызываемую функцию render(), 
//которая получит местоположение (путь) в аргументах, затем визуализирует запрошенную страницу 
//и завершает рендеринг в строку (чтобы быть позже добавлен на index.html сервер узла).