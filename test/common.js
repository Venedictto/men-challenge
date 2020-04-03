import chai from 'chai';

const { assert } = chai;

export const assertHasFieldErrors = (err, field) => {
  const emailErrors = err.response.data.errors.filter((e) => e.param === field);
  assert.isNotEmpty(emailErrors);
};

export default { assertHasFieldErrors };
