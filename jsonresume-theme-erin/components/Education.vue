<template>
  <div
      v-if="education && education.length > 0"
      class="education-container"
  >
    <Title value="Education"/>
    <section
        v-for="edu of education"
        class="item"
    >
      <SectionHeader :name="edu.institution" :role="edu"/>
      <h5 v-if="edu.location" class="location">{{edu.location}}</h5>

      <h4>
        {{ edu.studyType ?  edu.studyType : ''}}
        {{ edu.area ?  edu.area : ''}}
      </h4>

      <h5 v-if="edu.gpa">{{edu.gpa}}</h5>

      <h5 v-if="edu.specialization" class="specialization">{{edu.specialization}}</h5>

      <ul v-if="edu.courses && edu.courses.length > 0" class="two-column">
        <li v-for="course of edu.courses">{{course}}</li>
      </ul>

      <vue-markdown v-if="edu.summary" :source="edu.summary" class="summary" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import SectionHeader from "../partials/SectionHeader.vue";
import Title from "../partials/Title.vue";
import VueMarkdown from 'vue-markdown-render'


const props = defineProps(['education'])
</script>