const Education = (id, institution, title, dateStart, dateEnd) => {
  return {
    get id() {
      return id;
    },
    get institution() {
      return institution;
    },
    set institution(val) {
      institution = val;
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
  };
};
export default Education;