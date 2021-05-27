import _ from 'lodash';

export const loadingReducer = (state = {}, {type}) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  }

  const [, name, status] = matches;
  return {
    ...state,
    [`${name}_REQUEST`]: status === 'REQUEST',
  };
};

/**
 * This function will trigger loader state if one of the action types passed will be dispatched.
 * @param {Array} requestNames - action types
 * @return Boolean
 */
export const loadingHandler = (requestNames) => (state) =>
  _(requestNames).some((requestName) => _.get(state, `loading.${requestName}`));
