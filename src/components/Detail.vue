<template>
    <div>
      <!-- Detail page content for the selected card -->
    </div>
  </template>
  
  <script>
  export default {
    created() {
    // Use this.$route.params.id to access the selected card's ID
    const cardId = this.$route.params.id;
    // Fetch card details based on the cardId and display them
  },  };
  </script>