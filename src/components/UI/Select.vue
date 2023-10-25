<template>
  <select
    @click="handleSelected"
    class="select"
    v-model="category"
    name="category"
  >
    <option
      class="option"
      :value="element.value"
      v-for="(element, index) in data"
      :key="index"
    >
      {{ element.text }}
    </option>
  </select>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    category: {
      type: String,
      default: 'all'
    },
    data: {
      type: Array,
      default: [
        {
          value: 'all',
          text: 'Все'
        },
        {
          value: 'relatives',
          text: 'Родственники'
        },
        {
          value: 'colleagues',
          text: 'Коллеги'
        }
      ]
    }
  },
  setup(props, { emit }) {
    const category = ref(props.category)
    const data = ref(props.data)
    const handleSelected = () => {
      emit('onSelected', category.value)
    }
    return {
      category,
      data,
      handleSelected
    }
  }
}
</script>
