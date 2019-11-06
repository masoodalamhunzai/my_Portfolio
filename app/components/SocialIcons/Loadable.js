/**
 *
 * Asynchronously loads the component for SocialIcons
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
