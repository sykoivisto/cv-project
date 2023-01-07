const Experience = (id, company, title, dateStart, dateEnd, description) => {
  return {
    get id() {
      return id;
    },
    get company() {
      return company;
    },
    set company(val) {
      company = val;
    },
    get title() {
      return title;
    },
    set title(val) {
      title = val;
    },
    get dateStart() {
      return dateStart;
    },
    set dateStart(val) {
      dateStart = val;
    },
    get dateEnd() {
      return dateEnd;
    },
    set dateEnd(val) {
      dateEnd = val;
    },
    get description() {
      return description;
    },
    set description(val) {
      description = val;
    },
  };
};
export default Experience;