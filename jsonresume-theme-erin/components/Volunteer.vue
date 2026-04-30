<template>
  <div
      v-if="resume.volunteer && resume.volunteer.length > 0"
      class="volunteer-container"
  >
    <Title value="Volunteer"/>

    <section
        v-for="volunteer of resume.volunteer"
        class="item"
    >
      <SectionHeader :name="volunteer.organization"/>
      <h5 v-if="volunteer.position">{{volunteer.position}}</h5>

      <vue-markdown v-if="volunteer.summary" :source="volunteer.summary" class="summary" />

      <ul v-if="volunteer.highlights && volunteer.highlights.length > 0">
        <li v-for="highlight of volunteer.highlights">
          {{highlight}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
import SectionHeader from "../partials/SectionHeader.vue";
import Title from "../partials/Title.vue";

const props = defineProps(['resume'])
</script>