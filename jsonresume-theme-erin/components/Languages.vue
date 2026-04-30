<template>
<div
    v-if="resume.languages && resume.languages.length > 0"
    class="languages-container"
>
  <Title value="Languages"/>
  <ul class="minimal">
    <li v-for="language of resume.languages">
      <h6>{{language}} <em v-if="language.fluency">{{fluency}}</em></h6>
    </li>
  </ul>
</div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";

const props = defineProps(['resume'])
</script>