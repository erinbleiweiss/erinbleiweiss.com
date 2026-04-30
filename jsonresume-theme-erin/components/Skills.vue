<template>
<div v-if="resume.skills" class="skills">
  <section
      v-for="skill of resume.skills"
      class="skills-child-container"
  >
    <Title
        v-if="skill.name"
        :value="skill.name"
    />
    <h4 v-if="skill.level" class="bold">
      {{skill.level}}
    </h4>
    <ul
        v-if="skill.keywords && skill.keywords.length > 0"
        class="minimal"
    >
      <li v-for="keyword in skill.keywords">
        <h6>{{keyword}}</h6>
      </li>
    </ul>
  </section>

</div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";

const props = defineProps(['resume'])
</script>

<style lang="scss" scoped>
</style>