<template>
<div
    v-if="resume.interests && resume.interests.length > 0"
    class="interests-container"
>
  <Title value="Interests"/>
  <section
      v-for="interest of resume.interests"
      class="item"
  >
    <h4 v-if="interest.name" class="bold">{{interest.name}}</h4>
    <ul v-if="interest.keywords && interest.keywords.length > 0">
      <li v-for="keyword of interest.keywords">{{keyword}}</li>
    </ul>
  </section>
</div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";

const props = defineProps(['resume'])
</script>