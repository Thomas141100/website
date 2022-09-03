<template>
    <footer class="footer has-background-white" :class="{'has-background-black-ter': this.$root.$children[0].darkTheme}">
        <div class="content has-text-centered">
            <p :class="{'has-text-white-ter': this.$root.$children[0].darkTheme}">
                © TheLegend27 {{ date }}
            </p>
        </div>
    </footer>
</template>

<script>
export default {
  components: {},
  data() {
      return {
          date: new Date().getFullYear()
      }
  }
}
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 90dvh;
    z-index: 1000;
}
.content > a {
    font-size: 1.3em;
}
.content > p {
    position: relative;
    z-index: 1000;
}
</style>
