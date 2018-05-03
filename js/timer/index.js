const TimerWork = {
  TIME: 1,
  END: 0
};

export default (time) => {
  return {
    time,
    tick() {
      if (this.time > TimerWork.TIME) {
        this.time -= TimerWork.TIME;
        return this.time;
      } else {
        this.time = TimerWork.END;
        return this.time;
      }
    }
  };
};
