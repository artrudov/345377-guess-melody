const TimerWork = {
  TIME: 1,
  END: 0
};

export default (TIME) => {
  return {
    TIME,
    tick() {
      if (this.TIME > TimerWork.TIME) {
        this.TIME -= TimerWork.TIME;
        return this.TIME;
      } else {
        this.TIME = TimerWork.END;
        return this.TIME;
      }
    }
  };
};
