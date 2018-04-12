export default (time) => {
  let endTimeMessage = `Таймер достиг нуля`;

  return {
    time,
    tick() {
      if (this.time > 1) {
        this.time -= 1;
      } else {
        this.time = endTimeMessage;
      }
    }
  };
};
