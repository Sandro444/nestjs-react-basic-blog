export const lengthError = (field, minMax, length) =>
  `${field} should be ${minMax? 'maximum' : 'minimum'} ${length} strings long`;
