# Contact book

### Описание проекта

В данном проекте пользователь имеет возможность хранить данные своих контактов.

В этом приложении:

- Vue CLI с Vue 3;
- хранение контактов в localStorage;
- применение глобального хранилища VueX;
- Composition API;
- разделение логики по компонентам;
- валидация формы;
- фильтрация данных;
- SCSS;
- создание глобальных конфигов.

---

### Просмотр проекта

---

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
