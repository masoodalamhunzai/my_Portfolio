/**
 *
 * Asynchronously loads the component for AboutMe
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
