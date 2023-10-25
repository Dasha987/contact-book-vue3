import { createStore } from 'vuex'

export const store = createStore({
    state: {
        data: [{
            category: "colleagues",
            date: "22.09.23",
            email: "nelfeelingood@gmail.com",
            name: "Айтишник Данила",
            phone: "+7(987)654-78-09",
        },
        {
            category: "colleagues",
            date: "24.10.23",
            email: "nelfeelingood@gmail.com",
            name: "Айтишник Данила",
            phone: "+7(987)654-78-07",
        },
        {
            category: "colleagues",
            date: "24.10.23",
            email: "nelfeelingood@gmail.com",
            name: "Айтишник Данила",
            phone: "+7(987)654-78-08",
        }],
        dataSorted: [{
            category: "colleagues",
            date: "22.09.23",
            email: "nelfeelingood@gmail.com",
            name: "Айтишник Данила",
            phone: "+7(987)654-78-09",
        },
        {
            category: "colleagues",
            date: "24.10.23",
            email: "nelfeelingood@gmail.com",
            name: "Айтишник Данила",
            phone: "+7(987)654-78-07",
        },
        {
            category: "colleagues",
            date: "24.10.23",
            email: "nelfeelingood@gmail.com",
            name: "Айтишник Данила",
            phone: "+7(987)654-78-08",
        }],
        isModalContact: false,
        isModalAddContact: false,
        isNotification: "",
        nameContact: ''
    },
    getters: {
        getData(state) {
            return state.data
        },
        getDataSorted(state) {
            return state.dataSorted
        },
        getIsModalContact(state) {
            return state.isModalContact
        },
        getIsModalAddContact(state) {
            return state.isModalAddContact
        },
        getIsNotification(state) {
            return state.isNotification
        },
        getNameContact(state) {
            return state.nameContact
        }
    },
    mutations: {
        initializationData(state, localContacts) {
            if (localContacts) {
                state.data = localContacts
                state.dataSorted = localContacts
            }
        },
        setData(state, data) {
            state.data = data
        },
        setDataSorted(state, dataSorted) {
            state.dataSorted = dataSorted
        },
        setIsModalContact(state, isModalContact) {
            state.isModalContact = isModalContact
        },
        setIsModalAddContact(state, isModalAddContact) {
            state.isModalAddContact = isModalAddContact
        },
        setIsNotification(state, isNotification) {
            state.isNotification = isNotification
        },
        setNameContact(state, nameContact) {
            state.nameContact = nameContact
        }

    },
    actions: {
        initializationData({ commit }) {
            const localContacts = JSON.parse(localStorage.getItem('contacts'))
            commit('initializationData', localContacts)
        },
        setData({ commit, state }, contact) {
            const data = [...state.data]
            let isNotification = ""
            const date = new Date();
            contact.date = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + ('0' + date.getFullYear()).slice(-2)
            const index = data.findIndex(element => element.phone === contact.phone)
            if (index != -1) {
                isNotification = " изменен"
                data.splice(index, 1, contact)
            } else {
                isNotification = " добавлен"
                data.push(contact)
            }
            commit('setIsNotification', isNotification)
            commit('setData', data)
            commit('setDataSorted', data)
        },
        setDeleteContact({ commit, state }, contact) {
            const isNotification = " удален"
            const data = [...state.data]
            const index = data.findIndex(element => element.phone === contact.phone)
            if (index != -1) {
                data.splice(index, 1)
            }
            commit('setData', data)
            commit('setDataSorted', data)
            commit('setIsNotification', isNotification)
        },
        setDataSorted({ commit, state }, category) {
            const data = [...state.data]
            data.sort((item, itemNext) => {
                if (item.date > itemNext.date) return 1
                if (item.date < itemNext.date) return -1
                return 0
            })
            if (category == "all") {
                commit('setDataSorted', data)
            } else {
                const dataSorted = data.filter((contact) => {
                    return contact.category == category
                })
                commit('setDataSorted', dataSorted)
            }
        },
        setIsModalContact({ commit }, isModalContact) {
            commit('setIsModalContact', isModalContact)
        },
        setIsModalAddContact({ commit }, isModalAddContact) {
            commit('setIsModalAddContact', isModalAddContact)
        },
        setIsNotification({ commit }, isNotification) {
            commit('setIsNotification', isNotification)
        },
        setNameContact({ commit }, nameContact) {
            commit('setNameContact', nameContact)
        },
    },
})
store.subscribe((_, state) => {
    localStorage.setItem('contacts', JSON.stringify(state.data));
});