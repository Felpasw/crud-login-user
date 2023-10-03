<template>
  <div>
    <vs-button danger @click="active = !active">
      Remover usuário
      <template #animate>
        <UserX />
      </template>
    </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Deseja remover {{ user.name }}?</h4>
      </template>
      <div id="buttonsConfirm">
        <vs-button success id="buttonSuccess" @click="removeUser()">
          Sim</vs-button
        >
        <vs-button danger id="buttonCancel" @click="active = !active">
          Não</vs-button
        >
      </div>
      <template #footer>
        <div class="footer-dialog"></div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import { Axios } from "../config/axios";
import UserX from "./icons/UserX.vue";
import { errorMessage, successMessage } from "./utils/messageProperties";

export default {
  props: {
    user: Object,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    async removeUser() {
      try {
        await Axios.delete(`user/${this.user.id}`);

        this.$vs.notification(successMessage);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log(error);
        this.$vs.notification(errorMessage);
      }
    },
  },
  components: {
    UserX,
  },
};
</script>
<style>
#buttonsConfirm {
  display: flex;
  align-items: center;
  width: 100%;
}

#buttonSuccess {
  width: 50%;
}
#buttonCancel {
  width: 50%;
}
</style>
