<template>
  <AppHeader />
  <MainContent />
  <AppAside />
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader';
import MainContent from './components/MainContent';
import AppAside from './components/AppAside';
import AppFooter from './components/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    MainContent,
    AppAside,
    AppFooter,
  },
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}
</style>
