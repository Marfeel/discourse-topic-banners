export default {
  setupComponent(args, component) {
    if (settings.plugin_outlet == "after-topic-list-body") {
      this.set("beforeTopicList", true);
    } else {
      this.set("beforeTopicList", false);
    }
  },
};
