<template>
  <Navigation />
  <div class="container">
    <div class="contacts-list">
      <div class="contacts-list__wrapper">
        <div class="contact-name">Контакт</div>
        <div class="phone-email">
          <div class="contact-phone">Телефон&nbsp</div>
          <div class="contact-email">E-mail</div>
        </div>
        <div class="contact-date">Создан</div>
      </div>
      <Contact
        @click="handleOpenModal(element)"
        :contact="element"
        v-for="(element, index) in data"
        :key="index"
      />
    </div>
  </div>
  <Modal v-if="isModalContact" :title="title">
    <Form
      :name="name"
      :phone="phone"
      :email="email"
      :date="date"
      :category="category"
    />
  </Modal>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Modal from '@/components/UI/Modal.vue'
import Form from '@/components/contacs/ContactForm.vue'
import Contact from '@/components/contacs/Contact.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Contact,
    Modal,
    Form,
    Navigation
  },
  setup() {
    const title = 'Контакт'
    //Получение данных из localStorage
    const store = useStore()
    const initializationData = () => {
      store.dispatch('initializationData')
    }
    onMounted(() => {
      initializationData()
    })
    //Получение данных контактов
    const data = ref(
      computed(() => {
        return store.getters.getDataSorted
      })
    )

    //Данные для модального окна
    const name = ref('')
    const phone = ref('')
    const email = ref('')
    const date = ref('')
    const category = ref('')
    const handleOpenModal = element => {
      store.dispatch('setIsModalContact', true)
      const contact = { ...element }
      name.value = contact.name
      phone.value = contact.phone
      email.value = contact.email
      date.value = contact.date
      category.value = contact.category
    }
    //Открыто/закрыто модальное окно
    const isModalContact = ref(
      computed(() => {
        return store.getters.getIsModalContact
      })
    )
    return {
      data,
      handleOpenModal,
      isModalContact,
      title,
      name,
      phone,
      email,
      date,
      category
    }
  }
}
</script>
