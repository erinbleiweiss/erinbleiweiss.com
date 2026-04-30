<template>
<div class="about-container">
  <Title value="About"/>
  <table class="about-table">
    <InfoTag
        v-if="basics.location"
        :text="formatAddress(basics.location)"
        icon="fa fa-map-marker-alt"
    />
    <InfoTag
        v-if="basics.email"
        :text="basics.email"
        icon="fa fa-envelope"
    />
    <InfoTag
        v-if="basics.phone"
        :text="basics.phone"
        icon="fa fa-mobile-alt"
    />
    <InfoTag
        v-if="basics.website"
        :text="basics.website"
        icon="fa fa-desktop"
        url="basics.website"
    />
    <Social
        v-for="profile in basics.profiles"
        :profile="profile"
    />
    <InfoTag
        text="Resume (PDF)"
        icon="fas fa-file-alt fa-fw"
        url="./static/ErinBleiweissResume.pdf"
    />
  </table>
</div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import InfoTag from "../partials/InfoTag.vue";
import addressFormat from 'address-format';
import Social from "../partials/Social.vue";

const props = defineProps(['basics'])

// const format = addressFormatter.default || addressFormatter;
const formatAddress = function(location) {
  let addressList = addressFormat({
    address: location.address,
    city: location.city,
    subdivision: location.region,
    postalCode: location.postalCode,
    countryCode: location.countryCode
  })
  return addressList.join('<br/>');
}


</script>

<style lang="scss" scoped>
</style>