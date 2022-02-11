/* Automatically generated by './build/bin/build-entry.js' */

import Upload from '../packages/upload/index.js';
import FileUpload from '../packages/fileUpload/index.js';
import SelectTable from '../packages/selectTable/index.js';
import Attachment from '../packages/attachment/index.js';
import locale from './locale';

const components = [
  Upload,
  FileUpload,
  SelectTable,
  Attachment,
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.1.42',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Upload,
  FileUpload,
  SelectTable,
  Attachment
};
