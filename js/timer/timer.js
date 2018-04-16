export default (time) => {
  return {
    time,
    tick() {
      if (this.time > 1) {
        this.time -= 1;
        return this.time;
      } else {
        this.time = 0;
        return this.time;
      }
    }
  };
};
