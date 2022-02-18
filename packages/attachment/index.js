import Attachment from "./src";

/* istanbul ignore next */
Attachment.install = function (Vue) {
  Vue.component(Attachment.name, Attachment);
};

export default Attachment;
