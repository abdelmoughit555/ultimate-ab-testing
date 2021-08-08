<template>
  <div>
    <router-link
      :to="`${expirement.slug}`"
      v-for="expirement in expirements"
      :key="expirement.id"
    >
      {{ expirement.name }}
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expirements: [],
    };
  },
  mounted() {
    this.getExpirements();
  },
  methods: {
    async getExpirements() {
      const {
        data: { data },
      } = await axios.get("/api/expirements-type");
      this.expirements = data;
    },
  },
};
</script>
