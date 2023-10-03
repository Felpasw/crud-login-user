<template>
  <div id="footer">
    <hr style="width: 100%" />

    <img
      src="https://softwaresul.com.br/wp-content/uploads/2022/12/logo-soft-1.png"
      id="footerImage"
    />
    <h3 id="footerSubtitle">Softwaresul | Todos os direitos reservados</h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
#footerSubtitle {
  color: gray;
  font-size: 10px;
}
#footerImage {
  width: 5%;
}
#footer {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  bottom: 60px;
  margin-top: 400px;
  height: 30px;
}
</style>
