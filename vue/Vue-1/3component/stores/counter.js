import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => ({ userid: 'kim', grade: "admin" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    setUserId(userid) {
      this.userid = userid;
    },
  },
})