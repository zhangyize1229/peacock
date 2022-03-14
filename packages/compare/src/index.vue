<template>
  <div class="wm-compare">
    <div class="compare-title">
      <div>{{ this.t('wm.compare.file_compare') }}</div>
      <i @click="close" class="el-icon-close compare-title-icon"></i>
    </div>
    <div class="compare-main">
      <div class="compare-setting">
        <div class="compare-select-wrapper">
          <div class="compare-select-label">
            <span>{{ this.t('wm.compare.version') }}：</span>
            <el-select style="width: 120px;" v-model="leftFile[props.version]" @change="(e)=>changeType(e,'left')">
              <el-option
                v-for="(item, index) in fileList"
                :key="index"
                :label="item[props.version]"
                :value="item[props.version]"
                :disabled="rightFile[props.version] == item[props.version]"
              >
                <div style="display: flex; align-items: center; justify-content: space-between">
                  <div>{{item[props.version]}}</div>
                  <div v-show="item[props.isCurrent]==1">{{ t('wm.compare.current_version') }}</div>
                </div>
              </el-option>
            </el-select>
            <span style="color: #1890FF; font-size: 14px; margin-left: 8px;">{{show(this.fileList, this.leftFile)}}</span>
          </div>
          <div class="compare-select-label" style="margin-left:20px;">
            <span>{{ this.t('wm.compare.version') }}：</span>
            <el-select style="width: 120px;" v-model="rightFile[props.version]" @change="(e)=>changeType(e,'right')">
              <el-option
                v-for="(item, index) in fileList"
                :key="index"
                :label="item[props.version]"
                :value="item[props.version]"
                :disabled="leftFile[props.version] == item[props.version]"
              >
                <div style="display: flex; align-items: center; justify-content: space-between">
                  <span>{{item[props.version]}}</span>
                  <span  v-show="item[props.isCurrent]==1">{{ t('wm.compare.current_version') }}</span>
                </div>
              </el-option>
            </el-select>
            <span style="color: #1890FF; font-size: 14px; margin-left: 8px;">{{show(this.fileList, this.rightFile)}}</span>
          </div>
        </div>
          <div class="compare-setting-button" @click="setVersion">{{this.t('wm.compare.set_version')}}</div>
      </div>
      <div class="compare-content">
        <template v-if="!same">
          <wm-diff :oldString="leftStr" :newString="rightStr" @customRender="customRender" />
        </template>
        <div class="compare-con" v-if="same">

          <div class="compare-content-left compare-content-item"><div style="overflow-x: auto; border-right: 1px solid #d8d8d8;">{{leftStr}}</div></div>
          <div class="compare-content-right compare-content-item"><div style="overflow-x: auto">{{rightStr}}</div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WmDiff from "../../diff/index"
import Locale from "../../../src/mixins/locale";
export default {
  name: "WmCompare",
  mixins: [Locale],
  components: {
    WmDiff
  },
  data() {
    return {
      leftStr: '',
      rightStr: '',
    }
  },
  props: {
    leftFile: {
      required: true,
      type: Object,
    },
    rightFile: {
      required: true,
      type: Object,

    },
    fileList: {
      required: true,
      type: Array,
      default: () => [],
    },
    props: {
      type: Object,
      default: () => {
        return {
          version: "versionDesc",
          objectKey: "objectKey",
          content: "content",
          isCurrent: "isCurrent"
        };
      },
    }
  },
  computed: {
    same() {
      return this.leftStr === this.rightStr;
    },
    leftFileBlob(){
      console.log(this.fileList)
      return this.leftFile[this.props.content]
    },
    rightFileBlob() {
      return this.rightFile[this.props.content]
    }
  },
  watch: {
    leftFileBlob: {
      handler(data){
        if(data) {
          this.read(data, 'left')
        }
      },
      deep: true,
      immediate: true,
    },
    rightFileBlob: {
      handler(data){
        if(data) {
          this.read(data, 'right')
        }
      },
      deep: true,
      immediate: true
    },
  },
  methods: {
    close() {
      this.$emit('onClose');
    },
    customRender(bool) {
      this.same= bool;
    },
    isNotNull(obj) {
      return obj && Object.keys(obj).length > 0
    },
    setVersion() {
     const obj =this.fileList.find(v=>v[this.props.version]==this.rightFile[this.props.version])
      if(this.isNotNull(obj) ) {
        this.$emit('setVersion',obj )
      }
    },
    show(array, data) {
      const f =array.find(v=>v[this.props.version] === data[this.props.version])
      if(f[this.props.isCurrent]===1){
        return this.t('wm.compare.current_version')
      }
    },
    read (content, type) {
      let reader = new FileReader();
      reader.readAsText(content, 'UTF-8');
      reader.onload = (e) => {
        if (type === 'left') {
          this.leftStr = reader.result
        } else {
          this.rightStr = reader.result
        }
      };
    },
    changeType(e,type) {
      const obj =this.fileList.find(v=>v[this.props.version]==e)
      if(this.isNotNull(obj) ) {
        this.$emit('onChange', {type,data:obj} )
      }
    }
  }
};
</script>