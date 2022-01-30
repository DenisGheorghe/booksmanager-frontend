<template>
  <footer>
    <b-container class="bv-example-row" fluid="xl">
      <b-row>
        <b-col>
          <br />
          <h4>Made With 💖 and care by Denis using:</h4>
        </b-col>
        <b-col class="align-items-center move">
          <br />
          <img src="../assets/logo.png" alt="" />
        </b-col>
        <b-col>
          <br />
          <img src="../assets/1280px-Node.js_logo.svg.png" alt="" />
        </b-col>
        <b-col class="move2">
          <br />
          <img
            src="../assets/1280px-Docker_(container_engine)_logo.svg.png"
            alt=""
          />
        </b-col>
        <b-col>
          <br />
          <img
            src="../assets/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png.svg"
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
  min-height: 100px;
  max-height: 111px;
  width: 100%;
  overflow: hidden;
}
img {
  margin: 3%;
  max-width: 65%;
  max-height: 30%;
}
.move {
  -ms-transform: translate(-50%);
  transform: translate(20%);
}
.move2 {
  -ms-transform: translate(-50%);
  transform: translate(-20%);
}
</style>
