### Adding Pinia to the project:
do this by installing pinia using ```npm install pinia```

### Registering Pinia as a Store
do this by adding the following line ```app.use(createPinia())``` 
to your main.js/main.ts 

final code: 
```
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
```

### Creating a store
define a new `store` folder inside your `src` folder and add your stores in there

to create a new store, create a new ts/js file and import `defineStore` function from pinia

then, inside there you start by defining your store

we defined only the state so far, check `src/store/TasksStore.ts` for an example