import User from './User';
import { colorModel } from './Color';
import { colorCollectionModel } from './ColorCollection';

export default { 
    user: { model: User },
    color: { model: colorModel },
    colorCollection: { model: colorCollectionModel }
};
