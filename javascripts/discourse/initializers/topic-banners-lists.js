import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "topic-banners-lists",

  initialize() {
    withPluginApi("0.8", (api) => {
      api.decorateWidget("topic-banners-lists:after", (helper) => {
        helper.widget.appEvents.on("page:changed", () => {
          helper.widget.scheduleRerender();
        });
      });
    });
  },
};
