<template>
  <div class="expansion-panel">
    <div class="expansion-panel-title">
      <button
        @click="togglePanel()"
        class="collapsible"
        :class="{ active: open }"
      >
        {{ title }}
      </button>
    </div>
    <div class="expansion-panel-content">
      <div class="content" :class="{ active: open }">
        <p>
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//todo : update style
export default {
  name: "ExpansionPanel",
  props: {
    title: {
      type: String,
      default: "No title",
    },
    content: {
      type: String,
      default: "No description",
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    togglePanel() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.expansion-panel {
  .expansion-panel-title {
    .collapsible {
      background-color: #777;
      color: white;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 15px;
    }

    .active,
    .collapsible:hover {
      background-color: #555;
    }

    .collapsible:after {
      content: "\002B";
      color: white;
      font-weight: bold;
      float: right;
      margin-left: 5px;
      transition: transform 0.2s ease-out;
      font-size: 22px;
    }

    .active:after {
      transform: rotateZ(45deg);
    }
  }
  .expansion-panel-content {
    .content {
      padding: 0px 18px;
      max-height: 0;
      overflow: hidden;
      transition: all 0.2s ease-out;
      background-color: #f1f1f1;
    }
    .active {
      padding: 20px 18px;
      max-height: 200px;
    }
  }
}
</style>
