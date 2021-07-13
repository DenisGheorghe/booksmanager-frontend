<template>
  <footer>
    <b-container class="bv-example-row" fluid="xl">
      <b-row>
        <b-col>
          <br />
          <h4>Made With 💖 and care by Denis using:</h4>
        </b-col>
        <b-col class="align-items-center test">
          <br />
          <img src="../assets/logo.png" width="30%" alt="" />
        </b-col>
        <b-col>
          <br />
          <img src="../assets/1280px-Node.js_logo.svg.png" width="50%" alt="" />
        </b-col>
        <b-col class="test2">
          <br />
          <img
            src="../assets/1280px-Docker_(container_engine)_logo.svg.png"
            width="95%"
            alt=""
          />
        </b-col>
        <b-col>
          <br />
          <img
            src="../assets/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png.svg"
            width="100%"
            alt=""
          />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<style scoped>
footer {
  background-color: #212529;

  color: white;
  left: 0;
  top: 100%;
  min-height: 120px;
  max-height: 131px;
  width: 100%;
  overflow: hidden;
}
img {
  margin: 3%;
  max-width: 100%;
  max-height: 100%;
}
.test {
  -ms-transform: translate(-50%);
  transform: translate(20%);
}
.test2 {
  -ms-transform: translate(-50%);
  transform: translate(-20%);
}
</style>