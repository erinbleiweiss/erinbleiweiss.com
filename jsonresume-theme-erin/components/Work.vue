<template>
<div
    v-if="resume.work && resume.work.length > 0"
    class="work-container"
>
  <Title value="Experience" />
  <section
      v-for="work of resume.work"
      class="item"
      :class="work.company ? '' : 'continuation'"
  >
    <SectionHeader :name="work.company" :role="work"/>

    <h4 v-if="work.position">{{work.position}}</h4>

    <vue-markdown v-if="work.summary" :source="work.summary" class="summary" />

    <ul v-if="work.highlights && work.highlights.length > 0">
      <li v-for="highlight of work.highlights">
        {{highlight}}
      </li>
    </ul>

  </section>
</div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import SectionHeader from "../partials/SectionHeader.vue";
import VueMarkdown from 'vue-markdown-render'

const props = defineProps(['resume'])
</script>
