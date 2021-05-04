<template>
  <!-- navbar -->
  <nav class="navigation">
        <div class="logo">Logo</div>
        <ul>
            <li><img class="profile" src="./assets/gresiandra.jpg" alt=""></li>
            <li><a class="name" href="#">Gresiandra</a></li>
            <li><img class="setting" src="./assets/settings.png" alt=""> </li>
        </ul>
  </nav> 

  <!-- pop-up modals -->
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
          <DatePicker v-model="dates"/>
        </label>
        <div class="buttons">
          <button @click="toggleModal">Cancel</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  </div>

  <!-- main content  -->
  <div class="container">

    <!-- side notification -->
    <div id="side">
      <div class="greeting">
        <img src="./assets/to-do-list.png" alt="">
        <div>
          <h3>Hallo Gresiandra</h3>
          <p>You currently have {{ countData }} todo(s) left. Already completed task today?</p>
        </div>
      </div>
      <div id="calendar">
        <Calendar />
        <!-- <DatePicker v-model="dates"/> -->
      </div>
    </div>

    <!-- main todo app -->
    <div id="todo">
      <h2>Task For Today</h2>
      <div class="new">
        <button class="create" @click="toggleModal">New Task</button>
        <input type="text" placeholder="Search Task" v-model="search">
      </div>
      <div>
        <div class="todos" v-for="todo in todoLoop" :key="todo.id">
          <div class="content">
            <div class="completeTodo">
              <h3>{{ todo.title }}</h3> 
              <span v-if="todo.done === false" @click="todo.done = !todo.done">Set as Complete</span>
              <span class="complete" v-if="todo.done" @click="todo.done = !todo.done">Complete</span>
            </div>
            <h4>{{ todo.date }}</h4>
            <p class="todoDesc">{{ todo.description }}</p>
          </div>
          <div class="delete fa fa-trash-o fa-lg" @click="deleteTask(todo.id)"></div>
        </div>
      </div>
      <div class="noTask" v-if="todoData.length === 0">
        <h2>No Task Available</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';

export default {
  name: 'App',
  components: { Calendar,DatePicker },
  data(){
    return {
      dates: new Date(),
      date: '',
      modals: false,
      done: false,
      todoData: [
        {
          id: 0,
          title: 'This is example todo',
          description: 'lorem ipsum sidolor amet Vestibulum maximus feugiat ipsum. Mauris aliquet in ipsum sit amet dignissim. Aliquam quis lacinia justo.',
          dates: '',
          date: 'Feb 02 2017',
          done: false
        },
        {
          id: 1,
          title: 'Another example todo',
          description: 'lorem ipsum sidolor amet Duis commodo massa sem. Praesent pellentesque, velit faucibus auctor sollicitudin, nisi arcu finibus ipsum, id tristique metus urna quis enim.',
          dates: '',
          date: 'Sep 11 2020',
          done: false
        },
      ],
      id: 2,
      title: '',
      description: '',
      countData: 2,
      search: '',
    }
  },
  computed: {
    todoLoop: function() {
      return this.todoData.filter(todo => {
        return todo.title.includes(this.search)
      })
    }
  },
  methods: {
    toggleModal(){
      this.modals = !this.modals
    },
    addData() {
      this.date = this.dates.toString().substr(4,12)
      console.log(this.date)

      if (this.title != '' && this.description != '') {
        let todo = {
          id: this.id++,
          title: this.title,
          description: this.description,
          dates: this.dates,
          date: this.date,
          done: this.done
        }
        this.todoData.push(todo)
        this.countData += 1

        this.title = ''
        this.description = ''
        this.dates = ''  
        this.date = ''  
      }
    },
    deleteTask(id){
      this.todoData = this.todoData.filter(data => data.id != id)
      this.countData -= 1
    },
  },
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
  cursor: pointer;
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

#calendar {
  margin-top: 70px;
}

#todo h2 {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
}

#todo .new {
  width: 100%;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  padding: 10px 0;
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

#todo .new input[placeholder="Search Task"] {
  text-align: center;
  color: #0442d0;
}

#todo .noTask h2{
  text-align: center;
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
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -70px;
  left: 0;
  width: 100vw;
  height: 150vh;
  z-index: 100;
  background: rgba(0,0,0,0.5);
}

.modal .forms form {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 100px;
  padding: 40px;
  min-width: 500px;
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
  margin-bottom: 20px;
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
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.2);
  margin-top: 10px;
  padding: 20px;
}

.modal .forms form .date {
  font-size: 1.1rem;
  font-weight: 700;
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

.todos .content .completeTodo {
  display: flex;
}

.todos .content .completeTodo h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-right: 10px;
}

.todos .content .completeTodo span {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  height: 25px;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.6rem;
  font-weight: 700;
  background: rgba(51, 51, 51, 0.3);
}

.todos .content .completeTodo span.complete {
  background: rgba(7, 168, 56, 0.5);
}

.todos .delete {
  flex-grow: 0.3;
  align-self: center;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
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

  #calendar {
  margin-top: 30px;
  margin-bottom: 30px;
}

  .todos {
    flex-direction: column;
  }

  .todos .delete {
    margin-top: 15px;
  }

  .todos .content {
    text-align: center;
    padding: 5px;
  }

  .todos .content .todoDesc {
    text-align: left;
  }

  .todos .content .completeTodo {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }

  .todos .content .completeTodo span {
    text-align: center;
    width: auto;
  }

  .todos .content .completeTodo h3 {
    margin-right: 5px;
  }

  .modal .forms form {
    min-width: 350px;
  }

}

</style>
