/**
 *
 * Asynchronously loads the component for Experience
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
