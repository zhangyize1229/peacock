<template>
  <div class="filter-item">
    <el-popover
        :visible-arrow="false"
        placement="bottom-start"
        popper-class="vm-popover popper-width"
        @hide="hide"
        trigger="click">
      <div slot="reference">
        <div class="filter-item-box">
          <div class="prefix">{{source.label}}</div>
          <div class="inner">
            <div v-if="value" class="value">{{value}}</div>
            <div v-else class="value placeholder">{{placeholder}}</div>
            <i class="el-icon-arrow-down icon"></i>
          </div>
          <div class="icon opt">
            <i v-if="value" class="el-icon-remove" @click.stop="reset"></i>
<!--            <i v-else class="el-icon-error" @click.stop="()=>{}"></i>-->
          </div>
        </div>
      </div>
      <div>
        <div class="filter-radio">
          <el-radio-group v-model="radio">
            <el-radio v-for="(item,index) in source.radioList" :key="index" :label="item.value">{{item.label}}</el-radio>
          </el-radio-group>
        </div>
        <div class="divider"></div>
        <template v-if="radio === source.radioList[0].value && source.userDic.length>0">
          <el-checkbox-group v-model="userChecked">
            <div v-for="(item, index) in source.userDic" :key="index" class="filter-option-item user">
              <el-checkbox :label="item.value" ><br /></el-checkbox>
              <Avatar :width="30" class="avatar" :src="item.src" fit="contain" :hide-btn="true" />
              <div class="name">{{item.label}}</div>
            </div>
          </el-checkbox-group>
<!--          </div>-->
        </template>
        <template v-if="radio=== source.radioList[1].value && source.postDic.length>0">
          <el-checkbox-group v-model="postChecked">
            <div v-for="(item, index) in source.postDic" :key="index" class="filter-option-item">
              <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </template>
      </div>
    </el-popover>
  </div>
</template>
<script>
import Avatar from "../../avatar/index"
export default  {
  props: {
    source: {
      type: Object,
      default: () => {
        return {
          label: '',
          userDic: [],
          postDic: [],
          userDefaultValue: [],
          postDefaultValue: [],
          radioList: [],
          radioValue: '',
        }
      }
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  components: { Avatar },
  data() {
    return {
      postChecked: [],
      userChecked: [],
      radio: '',
      userOld : [],
      postOld: []
    }
  },
  watch: {
    'source': {
      handler(v) {
        const { radioValue, userDefaultValue, postDefaultValue } = v;
        this.radio = radioValue;
        this.userChecked = this.userOld = userDefaultValue;
        this.postChecked = this.postOld = postDefaultValue;
      },
      immediate: true,
      deep: true,
    }
  },
  computed: {
    value() {
      const postLabels = this.source.postDic.filter(v=>this.postChecked.indexOf(v.value)!=-1);
      const userLabels = this.source.userDic.filter(v=>this.userChecked.indexOf(v.value)!=-1);
      const list = postLabels.concat(userLabels)
      return list && list.length>0 ? list.map(v=>v.label).join(';') : '';
    },
  },
  methods: {
    hide() {
      if(this.userOld.toString() !== this.userChecked.toString() || this.postOld.toString() !== this.postChecked.toString()) {
        this.userOld = this.userChecked;
        this.postOld = this.postChecked;
        this.$emit('getValue', {type: 'user', value: {userChecked: this.userChecked,postChecked: this.postChecked}});
      }
    },
    reset() {
      this.postChecked = [];
      this.userChecked = [];
      this.hide();
    },
  }
}
</script>