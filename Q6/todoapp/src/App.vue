<template>
  <nav class="navigation">
        <div class="logo">Logo</div>
        <ul>
            <li><img class="profile" src="./assets/gresiandra.jpg" alt=""></li>
            <li><a class="name" href="#">Gresiandra</a></li>
            <li><img class="setting" src="./assets/settings.png" alt=""> </li>
        </ul>
  </nav> 
  <div class="modal" v-if="modals">
    <div class="forms">
      <form method="get" @submit.prevent="addData">
        <h4>New Task</h4>
        <label class="title">Title
          <input type="text" v-model="title" placeholder="Fill Title">
        </label>
        <label class="description">Description
          <input type="text" v-model="description" placeholder="Fill Description">
        </label>
        <label class="date">Date
          <input type="date" v-model="date">
        </label>
        <div class="buttons">
          <button @click="toggleModal">Cancel</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  </div>
  <div class="container">

    <div id="side">
      <div class="greeting">
        <img src="./assets/to-do-list.png" alt="">
        <div>
          <h3>Hallo Gresiandra</h3>
          <p>You have several todos that has to be done</p>
        </div>
      </div>
    </div>

    <div id="todo">
      <h2>Task For Today</h2>
      <div class="new">
        <button class="create" @click="toggleModal">+ Create New</button>
        <input type="text" placeholder="Cari" @keypress="search">
      </div>
      <div v-if="todoData" @click="deleteTask" @dblclick="taskDone">
        <div class="todos" v-for="todo in todoData" :key="todo.title">
          <div class="content">
            <h3>{{ todo.title }}</h3>
            <h4>{{ todo.date }}</h4>
            <p>{{ todo.description }}</p>
          </div>
          <div class="delete">X</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      modals: false,
      done: false,
      todoData: [
        {
          title: 'Meeting A Client',
          description: 'Meeting with hospital manager to talk about business',
          date: '2020-01-01',
        },
        {
          title: 'Jogging',
          description: 'Do a Jog in the park area until iftar',
          date: '2020-04-25',
        },
        {
          title: 'Iftar',
          description: 'Iftar at Rudi house today at 6',
          date: '2020-03-21',
        },
      ],
      title: '',
      description: '',
      date: '',
    }
  },
  methods: {
    toggleModal(){
      this.modals = !this.modals
    },
    addData() {
      if (this.title != '' && this.description != '') {
        let todo = {
          title: this.title,
          description: this.description,
          date: this.date
        }
        this.todoData.push(todo)

        this.title = ''
        this.description = ''
        this.date = '' 
      }

      console.log(this.todoData[0].title)
    },
    deleteTask(){
      document.addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
          e.target.parentNode.remove()
        }
      })
    },
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navigation {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    background-color: #0442d0;
    z-index: 100;
}

.logo {
    color: beige;
    font-size: 1.1rem;
    font-weight: 700;
}

nav ul {
    display: flex;
    align-items: center;
}

nav ul li {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 10px;
    height: 100%;
}

.name {
  text-decoration: none;
  font-weight: 700;
  color: beige;
  font-size: 0.9rem;
}

.setting {
  width: 20px;
  height: 20px;
}

.profile {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.container {
  margin: 10px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

#side {
  min-height: 100vh;
  padding: 10px;
}

#todo {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px;
}

#todo h2 {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
  /* border: 1px solid black; */
}

#todo .new {
  width: 100%;
  text-align: left;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  /* border: 1px solid black; */
}

#todo .new .create {
  height: 35px;
  border-radius: 10px;
  background: #0442d0;
  border: none;
  color: beige;
  margin-right: 10px;
  flex-grow: 1.5;
  cursor: pointer;
}

#todo .new input {
  flex-grow: 5;
  border-radius: 10px;
  height: 35px;
  border: 1px solid #0442d0;
}

#todo .new input[placeholder="Cari"] {
  text-align: center;
  color: #0442d0;
}

.greeting {
  margin: 0 20px 20px 20px;
  display: flex;
  background: #0442d0;
  padding: 20px;
  border-radius: 10px;
}

.greeting img {
  width: 60px;
  height: 60px;
  margin: 15px;
}

.greeting div {
  margin: 5px;
}

.greeting div h3 {
  text-align: left;
  margin-bottom: 5px;
  color: #fabe2c;
}

.greeting div p {
  text-align: left;
  font-size: 1rem;
  color: beige;
}

.modal {
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
}

.modal .forms form {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 100px;
  padding: 40px;
  width: 400px;
  min-height: 400px;
  background: ghostwhite;
  z-index: 1;
  border-radius: 10px;
}

.modal .forms form label {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.modal .forms form h4 {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.modal .forms form .title {
  font-size: 1.1rem;
  font-weight: 700;
}

.modal .forms form .title input {
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.2);
  margin-top: 10px;
  padding: 20px;
}

.modal .forms form .description {
  font-size: 1.1rem;
  font-weight: 700;
}

.modal .forms form .description input {
  height: 100px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.2);
  margin-top: 10px;
  padding: 20px;
}

.modal .forms form .date {
  font-size: 1.1rem;
  font-weight: 700;
}

.modal .forms form .date input {
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.2);
  margin-top: 10px;
  padding: 15px 20px 30px; 
}

.modal .buttons {
  align-self: flex-end;
  margin: 20px 0 0;
}

.modal .buttons button:last-child {
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background: #0442d0;
  border: none;
  color: beige;
  margin-right: 10px;
  flex-grow: 1;
  cursor: pointer;
}

.modal .buttons button:first-child {
  width: 100px;
  height: 30px;
  border-radius: 10px;
  color: #0442d0;
  border: none;
  background: white;
  margin-right: 10px;
  flex-grow: 1;
  cursor: pointer;
}

.todos {
  display: flex;
  padding: 20px;
  text-align: left;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin-bottom: 25px;
}

.todos .content {
  flex-grow: 10;
  padding: 20px 20px 20px 0;
}

.todos .delete {
  flex-grow: 0.3;
  align-self: center;
  background: crimson;
  text-align: center;
  color: beige;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.todos h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.todos h4 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: rgb(4, 65, 208, 0.5);
}

.todos p {
  font-size: 0.8rem;
}

@media screen and (max-width: 750px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  #side {
    min-height: 100px;
  }
}

</style>
