<template>
  <div id="app">
    <div>第{{ n }}手</div>
    <div class="chest">
      <Cell @click="onClickCell(0, $event)" :n="n" />
      <Cell @click="onClickCell(1, $event)" :n="n" />
      <Cell @click="onClickCell(2, $event)" :n="n" />

      <Cell @click="onClickCell(3, $event)" :n="n" />
      <Cell @click="onClickCell(4, $event)" :n="n" />
      <Cell @click="onClickCell(5, $event)" :n="n" />

      <Cell @click="onClickCell(6, $event)" :n="n" />
      <Cell @click="onClickCell(7, $event)" :n="n" />
      <Cell @click="onClickCell(8, $event)" :n="n" />
    </div>
    <div>{{ result === false ? "胜负未分" : `${result}胜` }}</div>
    <br>
    <button @click="restrat()">再来一局</button>
  </div>
</template>

<script>
import Cell from "./Cell.vue";
import { log } from "util";

export default {
  name: "app",
  components: {
    Cell
  },
  data() {
    return {
      n: 0,
      result: false,
      map: [[null, null, null], [null, null, null], [null, null, null]]
    };
  },
  methods: {
    onClickCell(i, text) {
      this.map[Math.floor(i / 3)][i % 3] = text;
      this.n = this.n + 1;
      this.tell();
    },
    tell() {
      const map = this.map;
      for (let i = 0; i < 2; i++) {
        if (
          map[i][0] !== null &&
          map[i][0] === map[i][1] &&
          map[i][2] === map[i][1]
        ) {
          this.result = map[i][0];
        }
      }
      for (let j = 0; j < 2; j++) {
        if (
          map[0][j] !== null &&
          map[0][j] === map[1][j] &&
          map[1][j] === map[2][j]
        ) {
          this.result = map[0][j];
        }
      }
      if (
        map[0][0] !== null &&
        map[0][0] === map[1][1] &&
        map[2][2] === map[1][1]
      ) {
        this.result = map[0][0];
      }
      if (
        map[0][2] !== null &&
        map[0][2] === map[1][1] &&
        map[2][0] === map[1][1]
      ) {
        this.result = map[0][2];
      }
    },
    restrat() {
      this.n = 0;
      this.map = [[null, null, null], [null, null, null], [null, null, null]];
      this.$children.forEach(item => {
        (item.a = false), (item.text = "");
      });
    }
  }
};
</script>

<style>
#app {
  display: grid;
  justify-content: center;
  justify-items: center;
  margin: 20px;
}
.chest {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 20px;
  min-width: 300px;
  min-height: 300px;
  width: 40vh;
  height: 40vh;
}
</style>
