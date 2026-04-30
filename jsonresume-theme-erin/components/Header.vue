<template>
  <div class="row header-row">
    <div class="col-xs-12">
      <div id="photo-header" class="text-center">
        <div id="photo">
          <img :src="avatar(resume)" alt="avatar">
        </div>
        <div id="text-header" >
          <h1>{{resume.basics.name}}</h1>
          <div class="contact">
            <a v-for="profile of resume.basics.profiles"
               rel="me"
               :href="profile.url"
            >
              <span :class="`fab fa-${profile.network.toLowerCase()}`"/>
            </a>
            <a href="../static/ErinBleiweissResume.pdf" target="_blank">
              <span class="fas fa-file-alt fa-fw"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import * as gravatar from 'gravatar';

const props = defineProps(['resume'])

onMounted(() => {})

const avatar = function(resume){
  if(resume.basics && resume.basics.email) {
    resume.basics.gravatar = gravatar.url(resume.basics.email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    }, 'https');
  }
  if (resume.basics.image || resume.basics.gravatar) {
    resume.basics.photo = resume.basics.image ? resume.basics.image : resume.basics.gravatar;
  }
  return resume.basics.photo
}

</script>
