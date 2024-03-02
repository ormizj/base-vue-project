<template>
  <AppHeader />
  <MainContent />
  <AppAside />
  <AppFooter />
</template>

<script>
import AppHeader from './components/layout/AppHeader';
import MainContent from './components/layout/MainContent';
import AppAside from './components/layout/AppAside';
import AppFooter from './components/layout/AppFooter';

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
