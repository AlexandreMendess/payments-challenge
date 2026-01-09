import { once } from "..";
import { DEFAULT_HEADER } from "../util/defaultHeader";

const routes = ({
    paymentsService,
}) => {
    '/payments:post': async (req, res) => {
        
    },
    '/payments-summary:get': async (req, res) => {
        const data = await once(request, 'data');
        const paymentData = JSON.parse(data);
        
    },
}