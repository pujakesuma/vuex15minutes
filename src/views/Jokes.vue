<template>
  <wrapper>
    <template v-slot:content>
    <h2 class="text-blue-600 font-extrabold">
      This is all the jokes you've retrieved
    </h2>
    <ul class="mt-3">
      <li v-for="(joke, idx) in jokes" :key="idx" class="text-left text-black mt-2">
        <span>{{ idx + 1 }}.</span>
        {{ joke }}
      </li>
    </ul>
    </template>
  </wrapper>
</template>
<script>
import { mapGetters } from 'vuex';
import Wrapper from '@/components/Wrapper';

export default {
  components: {
    Wrapper
  },
  computed: {
    ...mapGetters({
      jokes: 'getAllJokes',
    }),
  },
};
</script>
<style scoped>
h2 {
  font-size: 2rem;
}

@media screen and (max-width: 720px) {
  h2,
  li {
    font-size: 1rem;
  }
}
</style>
