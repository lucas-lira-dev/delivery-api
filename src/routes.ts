import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvaliable/FindAllAvailableController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliverymanController = new CreateDeliverymanController()

const deliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()

routes.post('/client/authenticate/', authenticateClientController.handler)
routes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handler)

routes.post('/client/', createClientController.handler)
routes.post('/deliveryman', createDeliverymanController.handler)

routes.post('/delivery', ensureAuthenticateClient, deliveryController.handler)
routes.get('/delivery/available', findAllAvailableController.handler)

export { routes }
