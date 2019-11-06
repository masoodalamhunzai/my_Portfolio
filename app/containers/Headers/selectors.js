import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the headers state domain
 */

const selectHeadersDomain = state => state.headers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Headers
 */

const makeSelectHeaders = () =>
  createSelector(
    selectHeadersDomain,
    substate => substate,
  );

export default makeSelectHeaders;
export { selectHeadersDomain };
