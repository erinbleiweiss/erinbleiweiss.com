<template>
  <div v-if="resume.references && resume.references.length > 0" class="references">
    <Title value="References"/>

    <section v-for="reference of resume.references" class="item clearfix">

      <i class="fa fa-quote-left pull-left" aria-hidden="true"></i>
      <blockquote>
        {{reference.reference}}
      </blockquote>

      <SectionHeader :name="reference.title" />

      <h5 v-if="reference.name" class="pull-right">
        - {{reference.name}}
      </h5>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import SectionHeader from "../partials/SectionHeader.vue";

const props = defineProps(['resume'])
</script>