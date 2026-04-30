<template>
<template v-if="profile.network && profile.username">
  <InfoTag
      v-if="profile.network.toLowerCase() === 'linkedin'"
      :text="`in/${profile.username}`"
      :url="profile.url"
      icon="fab fa-linkedin"
  />
  <InfoTag
      v-else
      :text="profile.username"
      :url="profile.url"
      :icon="`fab fa-${profile.network.toLowerCase()}`"
  />
</template>
</template>

<script lang="ts" setup>
import InfoTag from "./InfoTag.vue";

const props = defineProps(['profile'])
</script>
