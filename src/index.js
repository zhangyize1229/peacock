/* Automatically generated by './build/bin/build-entry.js' */

import Upload from '../packages/upload/index.js';
import FileUpload from '../packages/fileUpload/index.js';
import SelectTable from '../packages/selectTable/index.js';
import Attachment from '../packages/attachment/index.js';
import Table from '../packages/table/index.js';
import Form from '../packages/form/index.js';
import Preview from '../packages/preview/index.js';
import Diff from '../packages/diff/index.js';
import Compare from '../packages/compare/index.js';
import Input from '../packages/input/index.js';
import Avatar from '../packages/avatar/index.js';
import Pagination from '../packages/pagination/index.js';
import locale from './locale';

const components = [
  Upload,
  FileUpload,
  SelectTable,
  Attachment,
  Table,
  Form,
  Preview,
  Diff,
  Compare,
  Input,
  Avatar,
  Pagination,
];
import highlight from "./directive/highlight"

const install = function(Vue, opts = {}) {
  Vue.prototype.$OPTS = opts;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  Vue.use(highlight)
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
  version: '0.2.3',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Upload,
  FileUpload,
  SelectTable,
  Attachment,
  Table,
  Form,
  Preview,
  Diff,
  Compare,
  Input,
  Avatar,
  Pagination
};
