<template>
    <div class="card-grid">
      <CardItem
        v-for="card in cards"
        :key="card.id"
        :image="card.image"
        :title="card.title"
        :description="card.description"
        @card-selected="handleCardSelected"
      />
    </div>
  </template>
  
  <script>
  import CardItem from './CardItem.vue';
  
  export default {
    name: 'CardGrid',
    components: {
      CardItem,
    },
    data() {
      return {
        cards: [
          {
            id: 1,
            image: 'https://cdn1.mtggoldfish.com/images/h/Myr-Enforcer-MM2-745.jpg',
            title: 'Affinity for artefacts',
            description: 'Deck #1',
          },
          {
            id: 2,
            image: 'https://cdn1.mtggoldfish.com/images/gf/Delver%2Bof%2BSecrets%2B%255BMID%255D.jpg',
            title: 'Mono-Blue Delver',
            description: 'Deck #2',
          },
          {
            id: 3,
            image: 'https://cdn1.mtggoldfish.com/images/gf/Lagonna-Band%2BTrailblazer%2B%255BJOU%255D.jpg',
            title: 'Mono White Heroic',
            description: 'Deck #3',
          },
          {
            id: 4,
            image: 'https://cdn1.mtggoldfish.com/images/gf/Gray%2BMerchant%2Bof%2BAsphodel%2B%255BTHS%255D.jpg',
            title: 'Mono Black Control',
            description: 'Deck #4',
          },
          {
            id: 5,
            image: 'https://cdn1.mtggoldfish.com/images/h/Monastery-Swiftspear-BRO-672.jpg',
            title: 'Red Burn',
            description: 'Deck #5',
          },
          {
            id: 6,
            image: 'https://cdn1.mtggoldfish.com/images/gf/Basilisk%2BGate%2B%255BCLB%255D.jpg',
            title: 'Hawk Gates',
            description: 'Deck #6',
          },
          {
            id: 7,
            image: 'https://cdn1.mtggoldfish.com/images/h/Exhume-JMP-745.jpg',
            title: 'Golgari Exhume',
            description: 'Deck #7',
          },
          {
            id: 8,
            image: 'https://cdn1.mtggoldfish.com/images/h/Slippery-Bogle-EVE-745.jpg',
            title: 'Bogles',
            description: 'Deck #8',
          },
          {
            id: 9,
            image: 'https://cdn1.mtggoldfish.com/images/h/Ulamogs-Crusher-CMM-672.jpg',
            title: 'Tron',
            description: 'Deck #9',
          },
          // Add more card data objects as needed
        ],
      };
    },
    methods: {
      handleCardSelected(cardElement) {
        // Handle the card selection here, if needed
        console.log('Card selected:', cardElement);
      },
    },
  };
  </script>
  
  <style scoped>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    grid-template-rows: repeat(3, 1fr); /* 3 rows */
    gap: 5px; /* Reduce the gap between cards to 5px (adjust as needed) */
    height: 60vh; /* Fill the whole viewport height */
    width: 100vw; /* Fill the whole viewport width */
    padding: 5px;
    justify-items: center; /* Center cards horizontally */
    align-items: center; /* Center cards vertically */
  
    /* Optionally, you can add styles for background or more specific styling */
    text-align: center;
  }
  </style>
  
  