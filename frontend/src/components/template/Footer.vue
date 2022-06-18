<template>
  <footer class="footer">
    <span class="m-auto">Copyright <strong>Knowledge</strong> © 2022</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #434d67;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
