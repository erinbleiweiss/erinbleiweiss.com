<template>
  <tr class="info-tag">
    <td>
      <i :class="icon"/>
    </td>
    <td>
      <h6 v-if="url"  class="info-text">
        <a :href="url" target="_blank">
          {{removeProtocol(text)}} <i class="fa fa-external-link" aria-hidden="true"></i>
        </a>
      </h6>
      <h6 v-else class="info-text">{{text}}</h6>
    </td>
  </tr>
</template>

<script lang="ts" setup>
const props = defineProps(['icon', 'url', 'text'])

const removeProtocol = function (url) {
  return url.replace(/.*?:\/\//g, '');
}

</script>

<style lang="scss" scoped>
</style>