<template>
  <div class="center" id="button">
    <vs-button success @click="active = !active">
      Adicionar
      <template #animate> <UserPlus /> </template
    ></vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Adicionar usuário</h4>
      </template>

      <div id="colForm">
        <vs-input
          border
          type="text"
          v-model="name"
          placeholder="Name"
          class="input"
        />
        <vs-input
          border
          type="email"
          v-model="email"
          placeholder="Email"
          class="input"
        />
        <vs-input
          border
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Senha"
          class="input"
        />
        <div id="checkbox">
          <vs-checkbox type="text" v-model="showPassword">
            Mostrar senha
          </vs-checkbox>
          <vs-checkbox type="text" v-model="isActive">
            Membro ativo
          </vs-checkbox>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block success @click="onSubmit()"> Adicionar </vs-button>
        </div>
        <div class="footer-dialog">
          <vs-button block danger @click="active = !active"
            >Cancelar
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import UserPlus from "./icons/UserPlus.vue";
import { Axios } from "../config/axios";
import {
  errorMessage,
  successMessage,
  warnIncorrectPassword,
} from "./utils/messageProperties";

export default {
  data: () => ({
    active: false,
    email: "",
    password: "",
    name: "",
    isActive: false,
    showPassword: false,
  }),
  components: {
    UserPlus,
  },
  methods: {
    async onSubmit() {
      try {
        await Axios.post("/user", {
          name: this.name,
          email: this.email,
          password: this.password,
          status: this.isActive ? 1 : 0,
        });

        this.$vs.notification(successMessage);

        window.location.reload();
      } catch (error) {
        console.log(error);

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
#button {
  margin-top: 150px;
  margin-bottom: 30px;
  margin-left: 200px;
  align-self: flex-start;
  width: 100%;
}
#colForm {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
}
.input {
  width: 80%;
  margin: 4px;
}
#checkbox {
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: center;
}
</style>
