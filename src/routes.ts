import {Router} from 'express'

import multer from 'multer';
import uploadConfig from './config/multer'

import { isAuthenticated } from './middlewares/isAuthenticated';

import { AuthUserController } from './controllers/user/AuthUserController';

import { CreateBrokerController } from './controllers/broker/CreateBrokerController';
import { DeleteBrokerController } from './controllers/broker/DeleteBrokerController';
import { GetSearchBrokerController } from './controllers/broker/GetSearchBrokerController';
import { ListBrokerController } from './controllers/broker/ListBrokerController';
import { UpdateBrokerController } from './controllers/broker/UpdateBrokerController';
import { DetailBrokerController } from './controllers/broker/DetailBrokerController';

import { CreateHouseController } from './controllers/house/CreateHouseController';
import { ListHouseController } from './controllers/house/ListHouseController';
import { UpdateHouseController } from './controllers/house/UpdateHouseController';
import { DeleteHouseController } from './controllers/house/DeleteHouseController';
import { DetailHouseController } from './controllers/house/DetailHouseController';
import { FilterHouseController } from './controllers/house/FilterHouseController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { GetSearchHouseController } from './controllers/house/GetSearchHouseController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp/thumbnail"));
 
// ---- Rotas User ----
router.post('/session',  new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// ---- Rotas Broker ----
router.get('/broker', isAuthenticated, new ListBrokerController().handle)
router.get('/broker/search', isAuthenticated, new GetSearchBrokerController().handle)
router.get('/detail/broker', isAuthenticated, new DetailBrokerController().handle)

router.post('/new/broker', isAuthenticated, new CreateBrokerController().handle)
router.put('/edit/broker', isAuthenticated, new UpdateBrokerController().handle)
router.delete('/broker/delete', isAuthenticated, new DeleteBrokerController().handle)

// ---- Rotas House ----
router.get('/houses', new ListHouseController().handle)
router.get('/detail/house', new DetailHouseController().handle)
router.get('/search/house', new GetSearchHouseController().handle)

router.post('/new/house', isAuthenticated, upload.single('file'), new CreateHouseController().handle)
router.put('/edit/house', isAuthenticated, upload.single('file'), new UpdateHouseController().handle)
router.delete('/delete/house', isAuthenticated, new DeleteHouseController().handle)

router.get('/filter/houses', new FilterHouseController().handle)

export { router };