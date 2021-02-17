<template>
  <div>
    <wrapper>
      <template v-slot:content>
        <h2 class="text-blue-600 font-extrabold">
          Can I Haz Dad Jokes?
        </h2>
        <h3 class="text-black mt-3">{{ joke }}</h3>
      </template>
    </wrapper>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 focus:outline-none"
      @click="addJoke"
    >
      Load Joke
    </button>
  </div>
</template>

<script>
import Wrapper from '@/components/Wrapper';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: { Wrapper },
  methods: {
    ...mapActions({ addJoke: 'setCurrentJoke' }),
  },
  computed: {
    ...mapGetters({ joke: 'getCurrentJoke' }),
  },
};
</script>

<style scoped>
h3 {
  font-size: 2rem;
}

@media screen and (max-width: 720px) {
  h2,
  h3 {
    font-size: 1rem;
  }
}
</style>
