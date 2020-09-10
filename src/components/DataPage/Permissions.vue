
<template>
  <div class="center con-switch">
    <h1>Permissions</h1>
    <hr />
    <ul>
      <li>
        <p>Email messages</p>
        <vs-switch v-model="active1" />
      </li>
      <li>
        <p>Change theme</p>
        <vs-switch v-model="active2">
          <template #circle>
            <IconMoon v-if="!active2" />
            <IconSun v-else />
          </template>
        </vs-switch>
      </li>
      <li>
        <p>Desktop notifications</p>
        <vs-switch v-model="active3">
          <IconComment />
        </vs-switch>
      </li>
      <li>
        <p>Type of user</p>
        <vs-switch v-model="active4">
          <template #on>Admin</template>
          <template #off>Default</template>
        </vs-switch>
      </li>
      <li>
        <p>Allow to send test data to improve this product</p>
        <vs-switch success v-model="active5">
          <template #off>
            <IconClose />
          </template>
          <template #on>
            <IconCheck class="check-icon" />
          </template>
        </vs-switch>
      </li>
    </ul>
    <div class="center con-selects">
      <vs-select label="Admins" multiple placeholder="Filter" v-model="value">
        <vs-option label="Vuesax" value="1">Vuesax</vs-option>
        <vs-option label="Vue" value="2">Vue</vs-option>
        <vs-option label="Javascript" value="3">Javascript</vs-option>
        <vs-option label="Sass" value="4">Sass</vs-option>
        <vs-option label="Typescript" value="5">Typescript</vs-option>
        <vs-option label="Webpack" value="6">Webpack</vs-option>
        <vs-option label="Nodejs" value="7">Nodejs</vs-option>
      </vs-select>
      <vs-select class="options" label="Options" placeholder="Placeholder" v-model="value3">
        <vs-option label="Vuesax" value="1">Vuesax</vs-option>
        <vs-option label="Vue" value="2">Vue</vs-option>
        <vs-option label="Javascript" value="3">Javascript</vs-option>
        <vs-option label="Sass" value="4">Sass</vs-option>
        <vs-option label="Typescript" value="5">Typescript</vs-option>
        <vs-option label="Webpack" value="6">Webpack</vs-option>
        <vs-option label="Nodejs" value="7">Nodejs</vs-option>
      </vs-select>
    </div>
  </div>
</template>
<script>
import IconMoon from "../../icons/Moon.svg";
import IconSun from "../../icons/Sun.svg";
import IconComment from "../../icons/Comment.svg";
import IconCheck from "../../icons/Check.svg";
import IconClose from "../../icons/Close.svg";

export default {
  components: {
    IconMoon,
    IconSun,
    IconComment,
    IconCheck,
    IconClose
  },
  data: () => ({
    active1: true,
    active2: false,
    active3: false,
    active4: true,
    active5: true,
    value: ["1", "2", "3"],
    value1: "",
    value2: "",
    value3: ""
  })
};
</script>
  <style lang="postcss" scoped>
.con-switch {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border: 1px solid rgba(31, 45, 65, 0.125);
  @media (--t) {
  }
  @media (--tl) {
    padding: 10px;
  }
  ul {
    width: 100%;
    padding: 0px;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px;
      margin-top: 20px;

      p {
        margin: 0px;
      }
    }
  }

  >>> .vs-switch {
    margin: 5px;
  }
}
svg {
  width: 15px;
  height: 15px;
}
.check-icon {
  color: #fff;
}
.con-selects {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (--tl) {
    flex-direction: column;
    gap: 50px;
  }
}
</style>
        