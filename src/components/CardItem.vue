<template>
  <div class="card" @click="selectCard">
    <div class="card-image">
      <img :src="image" alt="Card Image" />
      <div class="card-text">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String, // URL of the card image
    title: String, // Title of the card
    description: String, // Description of the card
  },
  methods: {
    selectCard() {
      this.$emit('card-selected', this.$el);
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%; /* Fill the card grid cell horizontally */
  background-color: #f0f0f0;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  position: relative; /* Relative positioning for text container */
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%; /* Image covers the whole card width */
  height: 100%; /* Image covers the whole card height */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
}

.card-text {
  position: absolute; /* Absolute positioning for text container */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for text */
  color: #fff; /* Text color */
  padding: 10px;
}

.card-title {
  font-size: 1.2rem; /* Title font size adjusted for mobile */
  margin: 0;
  padding: 5px;
}

.card-description {
  font-size: 1rem; /* Description font size adjusted for mobile */
  margin: 0;
  padding: 5px;
}
</style>
