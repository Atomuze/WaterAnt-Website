<script>
import { reactive, ref } from "vue";

const charctor = Vue.createApp({
  data() {
    return {
      a: [
        {
          maxHealth: 100,
          health: 100,
          attack: 10,
          defense: 5,
        },
      ],
      b: [
        {
          maxHealth: 100,
          health: 100,
          attack: 8,
          defense: 3,
        },
      ],
    };
  },
});

charctor.component('my-component', {
	props: ['maxHealth', 'health', 'attack', 'defense'],
});

export default charctor;
</script>
