<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="todos"
      :fixed-header="true"
      :sort-options="{
        enabled: false,
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        nextLabel: 'next',
        prevLabel: 'prev',
      }"
    ></vue-good-table>
  </div>
</template>

<script>
import http from "./config/http-common.js";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      columns: [
        {
          label: "ID",
          field: "id",
        },
        {
          label: "Title",
          field: "title",
        },
        {
          label: "UserId",
          field: "userId",
        },
        {
          label: "Completed",
          field: "completed",
        },
      ],
    };
  },
  mounted() {
    http.get("/todos").then((response) => {
      this.todos = response.data;
    });
  },
};
</script>

<style>
.green {
  color: green;
}
.red {
  color: red;
}
</style>
