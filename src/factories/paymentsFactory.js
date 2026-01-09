const { default: PaymentsRepository } = require("../repositories/paymentsRepository");
const { default: PaymentsService } = require("../services/paymentsService");

const generateInstance = ({
    PaymentsDataBase
}) => {
    const paymentsRepository = new PaymentsRepository({
        dataPayments: PaymentsDataBase
    });

    const paymentsService = new PaymentsService({
        paymentsRepository
    });

    return paymentsService;
}

export { generateInstance };