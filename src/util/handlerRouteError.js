import { DEFAULT_HEADER } from "./defaultHeader";

function HandlerRouteError(response) {
    return error => {
        console.log("An error occurred while handling the route: ", error.stack);
        response.writeHead(500, DEFAULT_HEADER);
        response.write(JSON.stringify({
            error: "Problem with server",
        }));

        return response.end();
    }
}

module.exports = HandlerRouteError;