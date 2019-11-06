import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the personalDetail state domain
 */

const selectPersonalDetailDomain = state =>
  state.personalDetail || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PersonalDetail
 */

const makeSelectPersonalDetail = () =>
  createSelector(
    selectPersonalDetailDomain,
    substate => substate,
  );

export default makeSelectPersonalDetail;
export { selectPersonalDetailDomain };
