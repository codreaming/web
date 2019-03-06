<template>
  <footer>
    <div class='copyright'>&copy;2019 Codreaming</div>
    <a href="https://github.com/codreaming" target='_blank' class="link">
      <img src="../assets/github.svg" alt="github" width="30" height="30">
    </a>
  </footer>
</template>

<style>
  footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    padding: 30px 0 20px;
  }

  .copyright {
    color:#fff;
    margin-right: 30px;
    font-weight: 600;
  }

  .link, .link img {
    width: 30px;
    height: 30px;
  }
</style>
