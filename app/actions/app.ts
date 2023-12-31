/**
 * @author Dmitry Malakhov
 */

'use strict';

import { createAction } from 'redux-act';

export const redirectToPath = createAction<string>('ROUTE_TO_PATH');
