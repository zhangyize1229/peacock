<style lang="scss" scoped>
@import "../element-variables.scss";
.headerWrapper {
  height: 80px;
}

#v3-banner {
  background-color: $--color-primary;
  min-height: 30px;
  padding: 5px 60px;
  z-index: 19;
  box-sizing: border-box;
  text-align: center;
  color: #eee;
}

#v3-banner a {
  color: #fff;
  font-weight: bold;
}

.header {
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;

  .container {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
  }

  .nav-lang-spe {
    color: #888;
  }

  h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: normal;

    a {
      color: #333;
      text-decoration: none;
      display: block;
    }

    span {
      font-size: 12px;
      display: inline-block;
      width: 34px;
      height: 18px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      text-align: center;
      line-height: 18px;
      vertical-align: middle;
      margin-left: 10px;
      border-radius: 3px;
    }
  }

  .nav {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      display: table;
      content: "";
    }
    &::after {
      clear: both;
    }
  }

  .nav-gap {
    position: relative;
    width: 1px;
    height: 80px;
    padding: 0 20px;

    &::before {
      content: "";
      position: absolute;
      top: calc(50% - 8px);
      width: 1px;
      height: 16px;
      background: #ebebeb;
    }
  }

  .nav-logo,
  .nav-logo-small {
    vertical-align: sub;
  }

  .nav-logo-small {
    display: none;
  }

  .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;

    &.nav-algolia-search {
      cursor: default;
    }

    &.lang-item,
    &:last-child {
      cursor: default;
      margin-left: 34px;

      span {
        opacity: 0.8;
      }

      .nav-lang {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        color: #888;

        &:hover {
          color: $--color-primary;
        }
        &.active {
          font-weight: bold;
          color: $--color-primary;
        }
      }
    }

    a {
      text-decoration: none;
      color: #1989fa;
      opacity: 0.5;
      display: block;
      padding: 0 22px;

      &.active,
      &:hover {
        opacity: 1;
      }

      &.active::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: calc(50% - 15px);
        width: 30px;
        height: 2px;
        background: $--color-primary;
      }
    }
  }
}

.nav-dropdown {
  margin-bottom: 6px;
  padding-left: 18px;
  width: 100%;

  span {
    display: block;
    width: 100%;
    font-size: 16px;
    color: #888;
    line-height: 40px;
    transition: 0.2s;
    padding-bottom: 6px;
    user-select: none;

    &:hover {
      cursor: pointer;
    }
  }

  i {
    transition: 0.2s;
    font-size: 12px;
    color: #979797;
    transform: translateY(-2px);
  }

  .is-active {
    span,
    i {
      color: $--color-primary;
    }
    i {
      transform: rotateZ(180deg) translateY(3px);
    }
  }

  &:hover {
    span,
    i {
      color: $--color-primary;
    }
  }
}

.nav-dropdown-list {
  width: auto;
}

@media (max-width: 850px) {
  .header {
    .nav-logo {
      display: none;
    }
    .nav-logo-small {
      display: inline-block;
    }
    .nav-item {
      margin-left: 6px;

      &.lang-item,
      &:last-child {
        margin-left: 10px;
      }

      a {
        padding: 0 5px;
      }
    }
    .nav-theme-switch,
    .nav-algolia-search {
      display: none;
    }
  }
}

@media (max-width: 700px) {
  .header {
    .container {
      padding: 0 12px;
    }
    .nav-item {
      a {
        font-size: 12px;
        vertical-align: top;
      }

      &.lang-item {
        height: 100%;

        .nav-lang {
          display: flex;
          align-items: center;

          span {
            padding-bottom: 0;
          }
        }
      }
    }
    .nav-dropdown {
      padding: 0;
      span {
        font-size: 12px;
      }
    }
    .nav-gap {
      padding: 0 8px;
    }
    .nav-versions {
      display: none;
    }
  }
}
</style>
<template>
  <div class="headerWrapper">
    <div id="v3-banner" v-if="isHome">
      <template v-if="lang === 'zh-CN'">
        ????????????????????? Vue 2.x ??? Element UI ??????;
        <a href="https://element-plus.org/#/zh-CN">????????????</a> ?????? Vue 3.x
        ???????????????
      </template>
      <template v-else>
        You???re browsing the documentation of Element UI for Vue 2.x version.
        <a href="https://element-plus.org">Click here</a> for Vue 3.x version
      </template>
    </div>
    <header class="header" ref="header">
      <div class="container">
        <!-- <h1>
          <router-link :to="`/${lang}`">
            <slot>
              <img
                src="../assets/images/element-logo.svg"
                alt="element-logo"
                class="nav-logo"
              />
              <img
                src="../assets/images/element-logo-small.svg"
                alt="element-logo"
                class="nav-logo-small"
              />
            </slot>
          </router-link>
        </h1> -->

        <!-- nav -->
        <ul class="nav">
          <li class="nav-item">
            <router-link active-class="active" :to="`/${lang}/component`"
              >{{ langConfig.components }}
            </router-link>
          </li>
          <!-- ??????????????? -->
          <li class="nav-item lang-item">
            <el-dropdown
                trigger="click"
                class="nav-dropdown nav-lang"
                :class="{ 'is-active': langDropdownVisible }">
              <span>
                {{ displayedLang }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
                  slot="dropdown"
                  class="nav-dropdown-list"
                  @input="handleLangDropdownToggle">
                <el-dropdown-item
                    v-for="(value, key) in langs"
                    :key="key"
                    @click.native="switchLang(key)">
                  {{ value }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
import compoLang from "../i18n/component.json";
import { i18n } from "../i18n"
import Element from "main/index.js";

const { version } = Element;

export default {
  data() {
    return {
      active: "",
      versions: [],
      version,
      verDropdownVisible: true,
      langDropdownVisible: true,
      langs: {
        "zh-CN": "??????",
        "en-US": "English",
      },
    };
  },

  computed: {
    lang() {
      return this.$route.path.split("/")[1] || "zh-CN";
    },
    displayedLang() {
      return this.langs[this.lang] || "??????";
    },
    langConfig() {
      return compoLang.filter((config) => config.lang === this.lang)[0][
        "header"
      ];
    },
    isComponentPage() {
      return /^component/.test(this.$route.name);
    },
    isHome() {
      return /^home/.test(this.$route.name);
    },
  },
  methods: {
    switchVersion(version) {
      if (version === this.version) return;
      location.href = `${location.origin}/${this.versions[version]}/${location.hash} `;
    },

    switchLang(targetLang) {
      if (this.lang === targetLang) return;
      localStorage.setItem("PEACOCK_LANGUAGE", targetLang);
      i18n.locale = targetLang=='zh-CN' ? 'zh' : 'en';
      this.$router.push(this.$route.path.replace(this.lang, targetLang));
    },

    handleVerDropdownToggle(visible) {
      this.verDropdownVisible = visible;
    },

    handleLangDropdownToggle(visible) {
      this.langDropdownVisible = visible;
    },
  },
};
</script>
