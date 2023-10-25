<template>
  <header>
    <div class="navbar navbar__header">
      <div class="navbar-content">
        <div class="navbar-items">
          <div
            v-show="!isModalAddContact && !isModalContact"
            class="navbar-title"
          >
            Книга контактов
          </div>
          <div v-show="isModalAddContact || isModalContact"></div>
          <div v-show="isModalAddContact" class="navbar-title-add">
            <img src="@/assets/image/IconAddContact.svg" alt="Icon add" />
            <span>Добавить контакт</span>
          </div>
          <div v-show="isModalContact" class="navbar-title-delete">
            <span class="navbar-title-circle">{{ firstLetterName }}</span>
            <span>{{ name }}</span>
          </div>
          <div
            v-show="isModalAddContact || isModalContact"
            class="button-close"
            @click="handleCloseModal"
          >
            <img src="@/assets/image/IconClose.svg" alt="Button close" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const isModalAddContact = ref(
      computed(() => {
        return store.getters.getIsModalAddContact
      })
    )
    const isModalContact = ref(
      computed(() => {
        return store.getters.getIsModalContact
      })
    )
    const handleCloseModal = () => {
      store.dispatch('setIsModalContact', false)
      store.dispatch('setIsModalAddContact', false)
    }
    const name = ref(
      computed(() => {
        return store.getters.getNameContact
      })
    )
    const firstLetterName = ref(
      computed(() => {
        return name.value[0]
      })
    )
    return {
      isModalAddContact,
      isModalContact,
      handleCloseModal,
      name,
      firstLetterName
    }
  }
}
</script>
