<template>
  <div class="section-header clearfix">
    <h3 v-if="name" class="bold pull-left">
      <a v-if="role && role.website" :href="role.website" target="_blank">
        {{role.company}} <i class="fa fa-external-link" aria-hidden="true"></i>
      </a>
      <template v-else>
        {{name}}
      </template>
    </h3>
    <h5 v-if="role" class="italic pull-right">
      <span v-if="role.startDate" class="startDate">{{formatDate(role.startDate)}}</span>
      <span v-if="role.endDate" class="endDate"> - {{formatDate(role.endDate)}}</span>
      <span v-else class="endDate"> - Present</span>
      <template v-if="!role.startDate && role.releaseDate">
        {{formatDate(role.releaseDate)}}
      </template>
    </h5>
  </div>

</template>

<script lang="ts" setup>
import moment from 'moment'

const props = defineProps(['role', 'name'])

const formatDate = function (date) {
  return moment(date).format('YYYY');
}

</script>