import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const audios = [
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
]

export default new Vuex.Store({
    state: {
        title: 'e-SIMON',
        active: false,
        on: false,
        win: false,
        strict: false,
        shots: [],
        green: false,
        red: false,
        blue: false,
        yellow: false,
        rounds: 3,
    },
    actions: {
        blinkLight({ commit }, color) {
            switch (color) {
                case 'green':
                    commit('setGreen', true)
                    audios[0].play();
                    setTimeout(() => commit('setGreen', false), 300)
                    break;
                case 'red':
                    commit('setRed', true)
                    audios[1].play();
                    setTimeout(() => commit('setRed', false), 300)
                    break;
                case 'blue':
                    commit('setBlue', true)
                    audios[2].play();
                    setTimeout(() => commit('setBlue', false), 300)
                    break;
                case 'yellow':
                    commit('setYellow', true)
                    audios[3].play();
                    setTimeout(() => commit('setYellow', false), 300)
                    break;
                default:
                    commit('setGreen', true)
                    commit('setRed', true)
                    commit('setBlue', true)
                    commit('setYellow', true)
                    setTimeout(() => {
                        commit('setGreen', false)
                        commit('setBlue', false)
                        commit('setRed', false)
                        commit('setYellow', false)
                    }, 300)
                    break
            }
        },
    },
    mutations: {
        newShot(state, value) {
            state.shots.push(value)
        },
        setWin(state, value) {
            state.win = value
        },
        setOn(state, value) {
            state.on = value
        },
        setStrict(state, value) {
            state.strict = value
        },
        setTurnCounter(state, value) {
            state.turnCounter = value
        },
        resetGame(state) {
            state.shots = [];
            state.win = false;
        },
        clearColors(state) {
            state.blue = false;
            state.red = false;
            state.green = false;
            state.yellow = false;
        },
        setTarget(state, target) {
            state.target = target
        },
        setActive(state, value) {
            state.active = value
        },
        resetShots(state) {
            state.shots = []
        },

        setGreen(state, value) {
            state.green = value
        },
        setRed(state, value) {
            state.red = value
        },
        setBlue(state, value) {
            state.blue = value
        },
        setYellow(state, value) {
            state.yellow = value
        }
    }
})