// eslint-disable-next-line import/extensions,import/no-unresolved
import { User } from './User';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Company } from './Company';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

// eslint-disable-next-line no-new,no-undef
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
