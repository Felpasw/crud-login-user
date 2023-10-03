<template>
  <div class="center" id="table" striped>
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Name </vs-th>
          <vs-th> Status </vs-th>
          <vs-th> Id </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in users">
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.status === 1 ? "Ativo" : "Inativo" }}
          </vs-td>
          <vs-td>
            {{ tr.id }}
          </vs-td>

          <template #expand>
            <div class="con-content">
              <div>
                <p>
                  {{ tr.name }}
                </p>
              </div>

              <div id="expandButtons">
                <EditDialog :user="tr" />
                <ChangePassword :user="tr" />
                <ConfirmRemoveDialog :user="tr" />
              </div>
            </div>
          </template>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>
<script>
import ConfirmRemoveDialog from "./ConfirmRemoveDialog.vue";
import EditDialog from "./EditDialog.vue";
import { Axios } from "../config/axios";
import ChangePassword from "./ChangePassword.vue";

export default {
  async beforeMount() {
    try {
      const response = await Axios.get(`/user`);
      this.users = response.data.data;
    } catch (error) {
      window.location.href = "/";
    }
  },

  data() {
    return {
      id: null,
      users: [],
    };
  },
  components: {
    EditDialog,
    ConfirmRemoveDialog,
    ChangePassword,
  },
  methods: {
    editUser() {},
  },
};
</script>

<style>
#expandButtons {
  display: flex;
}
#table {
  width: 80%;
  align-self: center;
}
</style>
