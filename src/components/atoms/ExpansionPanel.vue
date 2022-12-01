<template>
  <div class="expansion-panel">
    <div class="expansion-panel-title">
      <button
        @click="togglePanel()"
        class="collapsible text-xl font-bold border-b-2 border-lime"
        :class="{ active: open, 'border-black': open }"
      >
        {{ title }}
      </button>
    </div>
    <div class="expansion-panel-content">
      <div v-if="specs.length > 0" class="content" :class="{ active: open }">
        <p v-for="(spec, index) in specs" :key="index">
          <strong>{{ spec.spec }}: </strong>{{ spec.value }}
        </p>
      </div>
      <div
        v-else
        class="content prose max-w-none"
        :class="{ active: open }"
        v-html="content"
      ></div>
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
    specs: {
      type: Array,
      default: () => [],
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
      cursor: pointer;
      padding: 18px 0px;
      width: 100%;
      text-align: left;
      transition: all 0.2s ease-out;
    }

    .active {
      border-color: #000 !important;
    }

    .collapsible:hover {
    }

    .collapsible:after {
      content: "\002B";

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
      strong {
        color: #000;
      }
    }
    .active {
      padding: 40px 18px;
      max-height: 200px;
    }
  }
}
</style>
