<template>
  <div class="command-control">
    <game-title />
    <switches-buttons @play="play" />
    <counter-display :turnCounter="turnCounter" :on="on" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import GameTitle from "./GameTitle";
import CounterDisplay from "./CounterDisplay";
import SwitchesButtons from "./SwitchesButtons";
export default {
  components: { GameTitle, CounterDisplay, SwitchesButtons },
  data() {
    return {
      target: [],
      flash: 0,
      turn: 1,
      compTurn: true,
      intervalId: 0,
      turnCounter: "-",
    };
  },
  watch: {
    on(val) {
      this.clearColors();
      this.setActive(val);
      this.turnCounter = "-";
    },
    shots(val) {
      if (val.length !== 0) this.check();
    },
  },
  computed: {
    ...mapState(["active", "shots", "rounds", "win", "on", "strict"]),
  },
  methods: {
    ...mapMutations([
      "setActive",
      "resetGame",
      "resetShots",
      "clearColors",
      "setOn",
      "setWin",
      "newShot",
    ]),
    ...mapActions(["blinkLight"]),

    play() {
      this.resetGame();
      this.target = [];
      this.flash = 0;
      this.intervalId = 0;
      this.turn = 1;
      this.turnCounter = 1;
      this.compTurn = true;

      for (let i = 0; i < this.rounds; i++) {
        this.target.push(Math.floor(Math.random() * 4) + 1);
      }
      this.intervalId = setInterval(this.gameTurn, 800);
    },

    gameTurn() {
      this.setActive(false);

      if (this.flash == this.turn) {
        clearInterval(this.intervalId);
        this.compTurn = false;
        this.clearColors();
        this.setActive(true);
      } else {
        this.clearColors();
        setTimeout(() => {
          if (this.target[this.flash] == 1) this.blinkLight("green");
          if (this.target[this.flash] == 2) this.blinkLight("red");
          if (this.target[this.flash] == 3) this.blinkLight("blue");
          if (this.target[this.flash] == 4) this.blinkLight("yellow");
          this.flash++;
        }, 200);
      }
    },

    check() {
      const lastShot =
        this.shots[this.shots.length - 1] ===
        this.target[this.shots.length - 1];

      console.log(this.shots.length);
      if (this.shots.length == this.rounds && lastShot) this.winGame();
      if (!lastShot) {
        this.blinkLight();
        this.turnCounter = "NO!";
        setTimeout(() => {
          this.turnCounter = this.turn;
          this.clearColors();

          if (this.strict) {
            this.play();
          } else {
            this.compTurn = true;
            this.flash = 0;
            this.resetShots();
            this.intervalId = setInterval(this.gameTurn, 800);
          }
        }, 800);
      }
      if (this.turn == this.shots.length && lastShot && !this.win) {
        this.turn++;
        this.resetShots();
        this.compTurn = true;
        this.flash = 0;
        this.turnCounter = this.turn;
        this.intervalId = setInterval(this.gameTurn, 800);
      }
    },

    winGame() {
      this.blinkLight();
      this.turnCounter = "WIN!";
      this.setActive(false);
      this.setWin(true);
    },
  },
};
</script>

<style>
</style>