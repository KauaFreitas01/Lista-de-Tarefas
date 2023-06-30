<template>
  <v-app id="app">
    <nav>
      <router-link to="/"><h1>Lista de Tarefas</h1></router-link>
    </nav>

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
h1 {
  text-align: center;
  color: black;
  margin-top: 5%;
}
</style>
