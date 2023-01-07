const PersonalInfo = (name, title, phone, email, location, description) => {
  return {
    get name() {
      return name;
    },
    set name(val) {
      name = val;
    },
    get title() {
      return title;
    },
    set title(val) {
      title = val;
    },
    get phone() {
      return phone;
    },
    set phone(val) {
      phone = val;
    },
    get email() {
      return email;
    },
    set email(val) {
      email = val;
    },
    get location() {
      return location;
    },
    set location(val) {
      location = val;
    },
    get description() {
      return description;
    },
    set description(val) {
      description = val;
    },
  };
};
export default PersonalInfo;