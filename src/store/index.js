import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Tarefa 1', completed: false },
      { id: 2, title: 'Tarefa 2', completed: true },
      { id: 3, title: 'Tarefa 3', completed: false }
    ],
    newTask: '',
    filter: 'all'
  },
  getters: {
    filteredTasks(state) {
      if (state.filter === 'completed') {
        return state.tasks.filter(task => task.completed);
      } else if (state.filter === 'active') {
        return state.tasks.filter(task => !task.completed);
      } else {
        return state.tasks;
      }
    },
  },
  mutations: {
    addTask(state, newTask) {
      if (newTask.trim()) {
        const newId = state.tasks.length + 1;
        state.tasks.push({ id: newId, title: newTask, completed: false });
      }
    },
    editTask(state, { task, newTitle }) {
      task.title = newTitle;
    },
    completeTask(state, task) {
      task.completed = !task.completed;
    },
    deleteTask(state, task) {
      const index = state.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    setFilter(state, value) {
      state.filter = value;
    },
  },
});