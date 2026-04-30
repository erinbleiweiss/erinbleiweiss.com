<template>
  <div v-if="resume.awards && resume.awards.length > 0" class="awards-container">
    <Title value="Awards"/>

    <section v-for="award of resume.awards" class="item">
      <SectionHeader :name="award.title" />

      <h5 v-if="award.awarder" class="awarder">{{award.awarder}}</h5>

      <p v-if="award.summary" class="summary">{{award.summary}}</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import SectionHeader from "../partials/SectionHeader.vue";

const props = defineProps(['resume'])
</script>