<template>
  <div class="hidden">
    <vs-navbar id="teste" shadow square center-collapsed v-model="active">
      <template #left>
        <vs-button id= "menuButton" @click="activeSidebar = !activeSidebar" flat icon>
          <MenuIcon />
        </vs-button>
        <img
          src="https://softwaresul.com.br/wp-content/uploads/2020/02/logo_softwaresul_300.png"
          id="logo"
        />
      </template>

      <template #right >
        <vs-button dark>
          Perfil
          <template #animate>
            <UserCircle />
          </template>
        </vs-button>
        <vs-button primary>
          Ajuda
          <template #animate>
            <QuestionMark />
          </template>
        </vs-button>
        <vs-button danger @click="Logout" id="leftMenu">
          Sair
          <template #animate>
            <LeftArrow />
          </template>
        </vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <img
          src="https://softwaresul.com.br/wp-content/uploads/2020/02/logo_softwaresul_300.png"
          id="logo"
        />
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <UserSample />
        </template>
        Usuários
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <GroupUser />
        </template>
        Grupos
      </vs-sidebar-item>

      <vs-sidebar-item id="donate">
        <template #icon>
          <WindowsComponent />
        </template>
        Telas
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <GearComponent />
        </template>
        Opções
      </vs-sidebar-item>
      <vs-sidebar-item>
        <template #icon>
          <MessageRounded />
        </template>
        Chat
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>
<script>
import UserCircle from "./icons/UserCircle.vue";
import LeftArrow from "./icons/LeftArrow.vue";
import QuestionMark from "./icons/QuestionMark.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import GroupUser from "./icons/GroupUser.vue";
import UserSample from "./icons/UserSample.vue";
import MessageRounded from "./icons/MessageRounded.vue";
import GearComponent from "./icons/GearComponent.vue";
import WindowsComponent from "./icons/WindowsComponent.vue";

import { Axios } from "../config/axios";
import { errorMessage } from "./utils/messageProperties";

export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
  }),
  components: {
    UserCircle,
    LeftArrow,
    QuestionMark,
    MenuIcon,
    UserSample,
    GroupUser,
    MessageRounded,
    GearComponent,
    WindowsComponent,
  },

  methods: {
    async Logout() {
      try {
        await Axios.post("/logout");
        window.location.href = "/";
      } catch (error) {
        console.log(error);
        this.$vs.notification(errorMessage);
      }
    },
  },
};
</script>
<style>
#logo {
  filter: invert(1);
}
#teste{
  padding: 20px;
  display: flex;
  gap: 32px;
}
#menuButton{
  margin-right: 60px;
  margin-left: 180px;
}
#leftMenu{
  margin-right: 170px;
}


</style>
