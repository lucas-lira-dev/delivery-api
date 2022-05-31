import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/client/authenticate/', authenticateClientController.handler)
routes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handler)

routes.post('/client/', createClientController.handler)
routes.post('/deliveryman/', createDeliverymanController.handler)

export { routes }
