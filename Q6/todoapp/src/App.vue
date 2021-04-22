<template>
  <nav class="navigation">
        <div class="logo">Logo</div>
        <ul>
            <li><img class="profile" src="./assets/gresiandra.jpg" alt=""></li>
            <li><a class="name" href="#">Gresiandra</a></li>
            <li><img class="setting" src="./assets/settings.png" alt=""> </li>
        </ul>
  </nav> 
  <div class="container">

    <div id="side">
      <div class="greeting">
        <img src="./assets/to-do-list.png" alt="">
        <div>
          <h3>Hallo Gresiandra</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, neque.</p>
        </div>
      </div>
    </div>

    <div id="todo">
      <h2>Task For Today</h2>
      <div class="new">
        <button class="create">+ Create New</button>
        <input type="text" placeholder="Cari">
      </div>
    </div>

  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Modal
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
  height: 30px;
  border-radius: 10px;
  background: #0442d0;
  border: none;
  color: beige;
  margin-right: 10px;
  flex-grow: 1;
}

#todo .new input {
  flex-grow: 5;
  border-radius: 10px;
  height: 30px;
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
  margin-bottom: 15px;
  color: #fabe2c;
}

.greeting div p {
  text-align: left;
  color: beige;
}

</style>
