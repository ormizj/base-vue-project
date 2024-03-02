<template>
  <ConfirmModal />
  <AlertModal />

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
import AlertModal from './components/ui/Modal/AlertModal';
import ConfirmModal from './components/ui/Modal/ConfirmModal';

export default {
  name: 'App',
  components: {
    AppHeader,
    MainContent,
    AppAside,
    AppFooter,

    ConfirmModal,
    AlertModal,
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
}
</style>
