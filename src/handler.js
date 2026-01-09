import { parse } from 'url';
import HandlerRouteError from './util/handlerRouteError.js';
import { DEFAULT_HEADER } from './util/defaultHeader.js';
import { generateInstance } from './factories/paymentsFactory.js';

const dbPayments = "Conectar o banco de dados aqui";

const paymentsService = generateInstance({
    PaymentsDataBase: dbPayments
});
const allRoutes = {
    ...paymentsRoutes,
    default: (req, res) => {
        response.writeHead(404, DEFAULT_HEADER)
        response.write("Route not found!");
        response.end();
    }
}

function handler(req, res) {
    const { method, url } = req;

    const { pathname } = parse(url, true);

    const key = `${pathname}:${method.toLowerCase()}`;
    const routeChosen = allRoutes[key] || allRoutes.default;

    return Promise.resolve(routeChosen(req, res)).catch(HandlerRouteError(res));
}

export default handler;