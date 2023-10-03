<template>
  <main>
    <div id="topContent">
      <NewUserDialog />
    </div>
    <SideMenuBar />
    <TableUsers />
    <FooterComponent />
  </main>
</template>

<script>
import TableUsers from "../components/TableUsers.vue";
import SideMenuBar from "../components/SideMenuBar.vue";
import NewUserDialog from "../components/NewUserDialog.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    TableUsers,
    SideMenuBar,
    NewUserDialog,
    FooterComponent,
  },
};
</script>

<style>
#topContent {
  display: flex;
  flex-direction: row-reverse;
}
main {
  display: flex;
  flex-direction: column;
  
}
</style>
