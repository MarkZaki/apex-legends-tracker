<template>
  <section class="search">
    <h1>Track Player Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="origin">Origin(PC)</option>
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <input
          type="text"
          name="text"
          id="gamertag"
          v-model="gamertag"
          placeholder="Origin ID, Xbox Live gamertag, PSN ID, etc"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Search" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      platform: "origin",
      gamertag: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.$toasted.show("Please enter a Gamertag", {
          duration: 3000,
          icon: "exclamation"
        });
      } else {
        this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
      }
    }
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  }
};
</script>