
const titleValidation = (title) => {
   if (title.length === 0) return 'Enter something';
   if (title.length > 12) return 'Enter using less than 12 capital';
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