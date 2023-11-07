# Contact book

### Описание проекта

В данном проекте пользователь имеет возможность хранить данные своих контактов.

В этом приложении:

- Vue CLI с Vue 3;
- хранение контактов в localStorage;
- применение глобального хранилища VueX;
- Composition API;
- валидация формы;
- фильтрация данных;
- SCSS;
- создание глобальных конфигов;
- идентификация контакта по номеру телефона.

### Просмотр проекта

https://github.com/Dasha987/contact-book-vueX-vue3/assets/33686892/d1538baf-e672-46db-9125-d277915292c1

## Project setup

Чтобы была возможность использовать проект под свои нужды, необходимо в файле "vue.config.js" закомментировать строчку "roductionSourceMap: false". Она служит для корректного билдинга приложения, благодаря ей в папку "dist" не попадут файлы с расширением .map, поэтому при билдинге строчку рекомендую раскомментировать.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
