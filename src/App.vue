<template>
  <!-- <div class="returnButton">
    <font-awesome-icon :icon="['fas', 'arrow-up']" class="returnButton__icon" />
  </div> -->
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost");
@import "./public/variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
input,
label,
select,
button,
textarea {
  font-size: 0.95rem;
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
}
input:focus {
  outline: 0;
}

#app {
  font-family: "Jost", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #cfcbba;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $primary-color;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #0c525a;
}

.returnButton {
  position: fixed;
  bottom: 5vh;
  right: 2vw;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.342);
  &__icon {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.705);
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
