<template>
  <div>
    <vs-button @click="active = !active">
      Mudar senha
      <template #animate>
        <LockComponent />
      </template>
    </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Mudar senha de {{ user.name }}</h4>
      </template>
      <div id="confirmPasswordDiv">
        <vs-input
          label-placeholder="Country"
          type="text"
          v-model="password"
          placeholder="Nova senha"
          class="inputEdit"
        ></vs-input>
        <vs-input
          label-placeholder="Country"
          type="text"
          v-model="confirmPassword"
          placeholder="Confirme a nova senha"
          class="inputEdit"
        ></vs-input>
      </div>

      <div id="buttonsChangePassword">
        <vs-button @click="onSubmmit()"> Editar </vs-button>
        <vs-button @click="active = !active" danger> Cancelar </vs-button>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import { Axios } from "../config/axios";
import LockComponent from "./icons/LockComponent.vue";

export default {
  components: {
    LockComponent,
  },
  props: {
    user: Object,
  },
  data() {
    return {
      active: false,
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async onSubmmit() {
      try {
        if (this.password != this.confirmPassword) {
          this.$vs.notification({
            progress: "auto",
            color: "danger",
            position: "bottom-right",
            title: "oops! 😨",
            text: `As senhas não coincidem!`,
          });
          return;
        }
        await Axios.patch(`/user/${this.user.id}`, {
          password: this.password,
        });
        this.$vs.notification({
          progress: "auto",
          color: "success",
          position: "bottom-right",
          title: "Deu boa! 😀",
          text: `Senha alterada com sucesso!`,
        });

        this.active = !this.active;
      } catch (error) {
        if (error.response.status === 400) {
          this.$vs.notification({
            progress: "auto",
            color: "warn",
            position: "bottom-right",
            title: "Formato de senha inválido! 😑",
            text: `A senha deve ter no mínimo 8 caracteres, um caracter especial, uma letra maiúscula, uma letra minúscula e um número!`,
          });
        }
        console.log(error);
      }
    },
  },
};
</script>

<style>
#buttonsChangePassword {
  display: flex;
  gap: 3px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}

#confirmPasswordDiv {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
