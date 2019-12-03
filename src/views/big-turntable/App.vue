<template>
  <div class="container">
    <div class="bg">
      <div class="turntable-bg" ref="turntableBg"></div>
      <div class="turntable-pointer" @click="onTurn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigTurntable',
  data () {
    return {
      everyAward: 51.4,
      isTurn: false,
      timer: null,
      rdm: 0,
      speed: 200,
      diff: 15,
      time: 0
    }
  },
  methods: {
    onTurn () {
      if (!this.isTurn) {
        this.isTurn = true
        this.rdm += Math.floor(Math.random() * 3600)
        this.time = Date.now()
        this.ratating()
      }
    },
    ratating () {
      this.timer = setTimeout(() => {
        this.$refs.turntableBg.style.transform = `rotate(${this.rdm}deg)`
        this.$refs.turntableBg.style.transition = '4s'
        if ((Date.now() - this.time) / 1000 > 2) {
          this.speed += this.diff
          if ((Date.now() - this.time) / 1000 > 4) {
            clearTimeout(this.timer)
            this.isTurn = false
            if (this.rdm % 360 < this.everyAward * 1) {
              alert('4999元')
            } else if (this.rdm % 360 < this.everyAward * 2) {
              alert('50元')
            } else if (this.rdm % 360 < this.everyAward * 3) {
              alert('10元')
            } else if (this.rdm % 360 < this.everyAward * 4) {
              alert('5元')
            } else if (this.rdm % 360 < this.everyAward * 5) {
              alert('免息服务')
            } else if (this.rdm % 360 < this.everyAward * 6) {
              alert('提交白金')
            } else if (this.rdm % 360 < this.everyAward * 7) {
              alert('未中奖')
            }
            return
          }
        } else {
          this.speed -= this.diff
        }
        this.ratating()
      }, this.speed)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;

  .bg {
    position: absolute;
    width: 7rem;
    height: 7rem;
    background-color: crimson;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .turntable-bg {
      position: absolute;
      width: 5rem;
      height: 5rem;
      background: url("./static/turntable-bg.png") no-repeat;
      background-size: 100% 100%;
    }

    .turntable-pointer {
      position: absolute;
      width: 1.8rem;
      height: 2.3rem;
      background: url("./static/turntable-pointer.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
