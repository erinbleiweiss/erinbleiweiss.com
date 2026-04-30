<template>
  <div v-if="resume.publications && resume.publications.length > 0" class="publications">
    <Title value="Publications"/>

    <section v-for="publication of resume.publications" class="item">
      <SectionHeader :name="publication.title" />

      <h5 v-if="publication.publisher" class="awarder">{{publication.publisher}}</h5>

      <p v-if="publication.summary" class="summary">{{publication.summary}}</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import SectionHeader from "../partials/SectionHeader.vue";

const props = defineProps(['resume'])
</script>