import { t } from "peacock9/src/locale";

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    },
  },
};
