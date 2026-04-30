<template>
  <div id="resume" class="container">
    <Header :resume="resume" />

    <div class="resume-content row">
      <div class="left-column col-sm-3">
        <About :basics="resume.basics" />
        <Skills :resume="resume"/>
        <Languages :resume="resume"/>
        <Interests :resume="resume"/>
      </div>
      <div class="right-column col-sm-9">
        <Summary :basics="resume.basics" />
        <Work :resume="resume" />
        <Volunteer :resume="resume"/>
        <Education :education="resume.education"/>
        <Awards :resume="resume"/>
        <Publications :resume="resume"/>
        <References :resume="resume"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Languages from "./components/Languages.vue";
import Interests from "./components/Interests.vue";
import Summary from "./components/Summary.vue";
import Work from "./components/Work.vue";
import Volunteer from "./components/Volunteer.vue";
import Education from "./components/Education.vue";
import Awards from "./components/Awards.vue";
import Publications from "./components/Publications.vue";
import References from "./components/References.vue";
const props = defineProps(['resume'])
</script>

<style lang="scss">
@use "styles/main.scss" as *;
</style>