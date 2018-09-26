export function validationHelper(values, validationLookUp) {
  const errors = {};
  const keys = Object.keys(validationLookUp);
  keys.forEach((key) => {
    const error = validationLookUp[key](values[key], values);
    if (error) {
      errors[key] = error;
    }
  });
  return errors;
}

export class ApiError extends Error {
  constructor(errors) {
    super();
    const keys = Object.keys(errors);
    this.errors = {};
    keys.forEach((key) => {
      this.errors[`${key}Remote`] = errors[key];
    });
  }
}
