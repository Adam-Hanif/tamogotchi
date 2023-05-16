const tamogotchi = {
  name: "isa",
  lastName: "musaev",
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus: function () {
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      return `[ ${this.name}] умер :(`;
    }

    const hasMeal =
      this.meal < 3
        ? `Я голоден (${this.meal})`
        : `Я не голоден (${this.meal})`;
    const hasEnergy =
      this.energy < 3
        ? `Я хочу спать (${this.energy})`
        : `Я не хочу спать (${this.energy})`;
    const hasMood =
      this.mood < 3 ? `Мне скучно (${this.mood})` : `Мне весело (${this.mood})`;
    const mealStatus = `Еда: ${hasMeal}`;
    const energyStatus = `Энергия: ${hasEnergy}`;
    const moodStatus = `Настроение: ${hasMood}`;

    const status = `Имя: ${this.name}, Фамилия: ${this.lastName}, ${mealStatus} , ${energyStatus}, ${moodStatus}`;

    return status;
  },

  setName: function (name, lastName) {
    this.name = name;
    this.lastName = lastName;
  },
  eat: function () {
    if (this.meal < 5) {
      this.meal++;
    }

    this.mood--;
  },
  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
    }
    this.meal--;
  },
  play: function () {
    if (this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },
};
