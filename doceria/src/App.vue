
<template>
  <HeaderSection />
  <router-view />
  <main>
  </main>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection
  }
}
</script>
