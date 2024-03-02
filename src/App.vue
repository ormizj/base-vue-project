<template>
  <AppHeader />
  <MainContent />
  <AppAside />
  <AppFooter />
  {{ mockApi }}
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

  data() {
    return {
      mockApi: process.env.VUE_APP_MOCK_API_SECRET,
    }
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
}
</style>
