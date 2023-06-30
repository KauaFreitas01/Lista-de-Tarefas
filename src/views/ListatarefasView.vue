<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <v-form @submit.prevent="addTask">
            <v-text-field
              v-model="newTask"
              label="Nova Tarefa"
              outlined
            ></v-text-field>
            <v-btn type="submit">Adicionar Tarefa</v-btn>
          </v-form>
          <v-text-field
            v-model="taskFilter"
            label="Filtrar Tarefas"
            outlined
            class="mt-10"
            color="red"
          ></v-text-field>
          <v-list>
            <v-list-item-group v-model="filter">
              <v-list-item v-for="task in filteredTasks" :key="task.id">
                <v-list-item-action>
                  <v-checkbox
                    v-model="task.completed"
                    @change="completeTask(task)"
                  ></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-text-field
                    v-model="task.title"
                    @change="editTask(task, task.title)"
                    outlined
                    dense
                    class="mt-6"
                  ></v-text-field>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="deleteTask(task)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      newTask: "",
      taskFilter: "",
    };
  },

  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    filteredTasks() {
      return this.tasks.filter((task) =>
        task.title.toLowerCase().includes(this.taskFilter.toLowerCase())
      );
    },
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("setFilter", value);
      },
    },
  },

  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$store.commit("addTask", this.newTask);
        this.newTask = "";
      }
    },
    editTask(task, newTitle) {
      this.$store.commit("editTask", { task, newTitle });
    },
    completeTask(task) {
      this.$store.commit("completeTask", task);
    },
    deleteTask(task) {
      this.$store.commit("deleteTask", task);
    },
  },
};
</script>
