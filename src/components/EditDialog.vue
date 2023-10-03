<template>
  <div>
    <vs-button @click="active = !active">
      Editar
      <template #animate>
        <EditAlt />
      </template>
    </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Editar {{ user.name }}</h4>
      </template>
      <div id="editForm">
        <vs-input
          label-placeholder="Country"
          type="text"
          v-model="name"
          placeholder="Name"
          class="inputEdit"
        />
        <vs-input
          label-placeholder="Country"
          type="email"
          v-model="email"
          placeholder="Email"
          class="inputEdit"
        />
        <vs-checkbox type="text" v-model="isActive"> Membro ativo </vs-checkbox>
        <div id="bottomButtons">
          <vs-button @click="onSubmmit()"> Editar </vs-button>
          <vs-button @click="active = !active" danger> Cancelar </vs-button>
        </div>
      </div>
    </vs-dialog>
  </div>
</template>
<script>
import { Axios } from "../config/axios";
import EditAlt from "./icons/EditAlt.vue";
import {
  errorMessage,
  successMessage,
  warnIncorrectPassword,
} from "./utils/messageProperties";

export default {
  props: {
    user: Object,
  },
  data() {
    return {
      active: false,
      email: this.user.email,
      name: this.user.name,
      showPassword: false,
      isActive: this.user.status == 1 ? true : false,
    };
  },
  components: {
    EditAlt,
  },
  methods: {
    async onSubmmit() {
      try {
        await Axios.patch(`/user/${this.user.id}`, {
          name: this.name,
          email: this.email,
          status: this.isActive ? 1 : 0,
        });

        this.$vs.notification(successMessage);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        if (error.response.status === 400) {
          this.$vs.notification(warnIncorrectPassword);
        } else {
          this.$vs.notification(errorMessage);
        }
      }
    },
  },
};
</script>
<style>
#editForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
#bottomButtons {
  display: flex;
}
</style>
