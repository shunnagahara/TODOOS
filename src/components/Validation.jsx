const titleValidation = (title) => {
   if (title === 0) return 'Enter something';
   if (title > 12) return 'Enter using less than 12 bytes';
  return '';
};
class Validation {
  static formValidate = (type, value) => {
    switch (type) {
      case 'title':
        return titleValidation(value);
    }
  };
}

export default Validation;