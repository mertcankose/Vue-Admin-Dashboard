
<template>
  <div class="center">
    <vs-table v-model="selected">
      <template #header>
        <vs-input v-model="search" border placeholder="Search" />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == users.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, users)"
            />
          </vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">Id</vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">Customers</vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">Email</vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'status')">Status</vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)"
          :data="tr"
          :is-selected="!!selected.includes(tr)"
          not-click-selected
          open-expand-only-td
        >
          <vs-td checkbox>
            <vs-checkbox :val="tr" v-model="selected" />
          </vs-td>
          <vs-td>{{ tr.id }}</vs-td>
          <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">{{ tr.name }}</vs-td>
          <vs-td>{{ tr.email }}</vs-td>
          <vs-td>
            <vs-button
              v-if="tr.status === 'Process'"
              border
              danger
              :active="active == 0"
              @click="active = 0"
            >{{ tr.status }}</vs-button>
            <vs-button
              v-if="tr.status === 'On Hold'"
              border
              primary
              :active="active == 0"
              @click="active = 0"
            >{{ tr.status }}</vs-button>
            <vs-button
              v-if="tr.status === 'Open'"
              border
              success
              :active="active == 0"
              @click="active = 0"
            >{{ tr.status }}</vs-button>
          </vs-td>

          <template #expand>
            <div class="con-content">
              <div>
                <vs-avatar>
                  <img src="https://picsum.photos/50" alt />
                </vs-avatar>
                <p>{{ tr.name }}</p>
              </div>
              <div>
                <vs-button flat icon>
                  <i class="bx bx-lock-open-alt"></i>
                </vs-button>
                <vs-button flat icon>Send Email</vs-button>
                <vs-button border danger>Remove User</vs-button>
              </div>
            </div>
          </template>
        </vs-tr>
      </template>
      <template #footer>
        <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(users, search), max)" />
      </template>
    </vs-table>

    <vs-dialog v-model="editActive">
      <template #header>Change Prop {{ editProp }}</template>
      <vs-input
        @keypress.enter="editActive = false"
        v-if="editProp == 'email'"
        v-model="edit[editProp]"
      />
      <vs-select
        @change="editActive = false"
        block
        v-if="editProp == 'name'"
        placeholder="Select"
        v-model="edit[editProp]"
      >
        <vs-option label="Mertcan Kose" value="Mertcan Kose">Mertcan Kose</vs-option>
        <vs-option label="Michael Esto" value="Vuejs">Vue</vs-option>
        <vs-option label="Angela Yu" value="Javascript">Javascript</vs-option>
        <vs-option disabled label="Ahmet" value="Ahmet">Ahmet</vs-option>
        <vs-option label="Adem" value="Adem">Adem İlter</vs-option>
        <vs-option label="Fatih Acet" value="Fatih">Fatih Acet</vs-option>
        <vs-option label="Johnson" value="Johnson">Johnson</vs-option>
      </vs-select>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    editActive: false,
    edit: null,
    editProp: {},
    search: "",
    allCheck: false,
    page: 1,
    max: 6,
    active: 0,
    selected: [],
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
        status: "Process"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
        status: "Open"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
        status: "On Hold"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
        status: "Process"
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
        status: "Open"
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
        status: "Process"
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
        status: "On Hold"
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
        status: "Open"
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
        status: "Process"
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Process"
      },
      {
        id: 11,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
        status: "Process"
      },
      {
        id: 12,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
        status: "On Hold"
      },
      {
        id: 13,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Open"
      },
      {
        id: 14,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
        status: "Process"
      },
      {
        id: 15,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
        status: "On Hold"
      },
      {
        id: 16,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Process"
      },
      {
        id: 17,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
        status: "Process"
      },
      {
        id: 18,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
        status: "On Hold"
      },
      {
        id: 19,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Process"
      },
      {
        id: 20,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Open"
      },
      {
        id: 21,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Open"
      },
      {
        id: 22,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Open"
      },
      {
        id: 23,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Open"
      },
      {
        id: 24,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
        status: "Open"
      }
    ]
  })
};
</script>

        