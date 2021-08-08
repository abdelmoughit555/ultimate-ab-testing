<template>
  <div>
    <button @click="submit">create</button>
  </div>
</template>
<script>
export default {
  methods: {
    async submit() {
      const data = await axios.post("/api/expirement-sessions");
      console.log(data);
    },
  },
};
</script>
