<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="left-icon" @click="$router.push({ name:isEdit?'myactive':'active' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="map-header-title">{{$route.meta.title}}</div>
    </div>
    <div class="map-content">
      <div class="form-item">
        <input v-model="title" placeholder="Please enter a title" />
      </div>
      <div class="form-item">
        <input v-model.number="max" @change="onMaxChange" placeholder="Please enter a max number" type="tel" />
      </div>
      <div class="form-item">
        <input @click="onShowDate('startDate')" readonly :value="startDate | dateFormat" placeholder="Please select start date" />
      </div>
      <div class="form-item">
        <input @click="onShowDate('endDate')" readonly :value="endDate | dateFormat" placeholder="Please select end date" />
      </div>
      <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"></quill-editor>
      <div class="post-btn" @click="onSubmit">SUBMIT</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Quill from 'quill'
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
Quill.register('modules/container', container)
Quill.register('modules/ImageExtend', ImageExtend)
Quill.register('modules/QuillWatch', QuillWatch)
Vue.use(VueQuillEditor, {
  placeholder: 'Please enter content'
})
export default {
  data () {
    return {
      content: '',
      title: '',
      max: 5,
      startDate: +new Date(),
      endDate: +new Date() + 24 * 3600 * 1000,
      editorOption: {
        modules: {
          ImageExtend: {
            name: 'file',
            size: 50,
            action: this.$api.upload,
            response: res => {
              return res.url
            }
          },
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
              [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
              [{ direction: 'rtl' }], // text direction
              [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],
              ['image']
            ],
            handlers: {
              image: function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          }
        }
      }
    }
  },
  computed: {
    isEdit () {
      return this.$route.name === 'editActive'
    },
    _id () {
      return this.$route.query._id
    }
  },
  created () {
    if (this.isEdit) {
      this.getInfo()
    }
  },
  mounted () { },
  methods: {
    async getInfo () {
      const { data } = await this.$http({
        url: this.$api.active_info,
        params: {
          _id: this._id
        }
      })
      this.content = data.content
      this.title = data.title
      this.startDate = +new Date(data.startDate)
      this.endDate = +new Date(data.endDate)
      this.max = data.max
    },
    onMaxChange () {
      this.max = ~~this.max
      if (this.max <= 1) {
        this.max = 1
      }
    },
    onShowDate (key) {
      const params = {}
      if (key === 'endDate') {
        params['min-date'] = new Date(this.startDate)
      } else {
        params['min-date'] = new Date()
      }
      this.$datetime.show({
        type: "datetime",
        value: new Date(this[key]),
        ...params,
        confirm: e => {
          this[key] = +e;
          if (key === 'startDate' && this.startDate > this.endDate) {
            this.endDate = this.startDate
          }
        }
      });
    },
    async onSubmit () {
      if (!this.title) {
        return this.$toast('Please enter a title')
      }
      if (!this.content) {
        return this.$toast('Please enter content')
      }
      try {
        this.$toast.loading({
          duration: 0
        })
        //创建
        if (!this.isEdit) {
          const { data } = await this.$http({
            url: this.$api.active_create,
            method: 'post',
            data: {
              title: this.title,
              content: this.content,
              max: this.max,
              startDate: this.startDate,
              endDate: this.endDate
            }
          })
          this.$router.replace({ name: 'activeInfo', query: { _id: data._id } })
          setTimeout(() => {
            this.$toast('Create success')
          })
        } else {
          //更新
          const { data } = await this.$http({
            url: this.$api.active_update,
            method: 'post',
            data: {
              _id: this._id,
              update: {
                title: this.title,
                content: this.content,
                max: this.max,
                startDate: this.startDate,
                endDate: this.endDate
              }
            }
          })
          setTimeout(() => {
            this.$toast('Update success')
          })
        }

      } finally {
        this.$toast.clear(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../home/header.less";
/deep/ .ql-toolbar button.ql-video {
  display: none;
}
/deep/ .ql-toolbar.ql-snow,
/deep/ .ql-container.ql-snow {
  border: none;
  border-bottom: 1px solid #e0e0e0;
}
/deep/ .ql-container {
  height: 300px;
}
.map-wrap {
  background-color: #f0f3f6;
  .map-content {
    overflow-y: auto;
    background: #fff;
    padding-top: 15px;
    padding-bottom: 30px;
  }
  .map-header {
    height: 54px;
  }
  .form-item {
    border-bottom: 1px solid #e0e0e0;
  }
  .form-item input {
    height: 40px;
    line-height: 1;
    font-size: 14px;
    display: block;
    padding: 0 15px;
  }
  .post-btn {
    height: 40px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0084ff;
    font-size: 16px;
    width: 345px;
    margin: 0 auto;
    margin-top: 15px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
    &:active {
      opacity: 0.7;
    }
  }
}
</style>
