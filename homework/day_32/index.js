F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),
  template: `
  <h1>{{ title }}</h1>
  <h2>Đã đếm: {{ count }} lần</h2>
  <button v-on:click="count--" >-</button>
  <button v-on:click="count++">+</button>
  <button v-on:dblclick="title='Vũ Đức Tài'">Change title</button>
  <button v-on:mousemove="console.log('đang di chuột')">Test chuột</button>
  `,
});

F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});

F8.component("test-code", {
  data: () => ({
    isfocus: "Nhấn vào ô bên ⇓ để nhập",
  }),
  template: `
  <label style="display:block;margin-top:90px">{{ isfocus }}</label>
  <input style="display: block;margin-top:90px" v-on:focus="isfocus='Nhập đi'" v-on:blur="isfocus='Xong rồi à?'" v-on:mousemove="isfocus='Đúng rồi! Nhập ở ô đấy'" v-on:mouseout="isfocus='Nhấn vào ô bên ⇓ để nhập'">
  `,
});
