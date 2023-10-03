<template>
  <div id="cardLogin">
    <a href="https://softwaresul.com.br">
      <img
        src="https://softwaresul.com.br/wp-content/uploads/2022/12/logo-soft-1.png"
        id="logoImage"
      />
    </a>
    <vs-input placeholder="Usuário" primary v-model="email"></vs-input>
    <vs-input
      placeholder="Senha"
      primary
      v-model="password"
      type="password"
    ></vs-input>
    <vs-button @click="onSubmmit">
      Entrar
      <template #animate>
        <RightArrow />
      </template>
    </vs-button>
  </div>
</template>

<script>
import RightArrow from "../components/icons/RightArrow.vue";
import { Axios } from "../config/axios";
import { errorMessage } from "./utils/messageProperties";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmmit() {
      try {
        const response = await Axios.post(`/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 750);
      } catch (error) {
        console.log(error);
        this.openNotification();
      }
    },
    openNotification() {
      this.$vs.notification(errorMessage);
    },
  },
  components: {
    RightArrow,
  },
};
</script>

<style>
#cardLogin {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin: 0;
  margin-top: 300px;
}
#logoImage {
  width: 500px;
  margin-bottom: 40px;
  margin: 0;
  padding: 0;
  transition: all 0.75s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
