<script setup>
  import axios from 'axios'
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'
  import Navbar from '../components/Navbar.vue'
  import SideBar from '../components/SideBar.vue'

  const $router = useRouter()

  const url = 'https://secret-basin-09481.herokuapp.com/posts/'

  const content = ref('')
  const imageUrl = ref('')
  const errorBox = ref({})

  async function onPostAPI() {
    try {
      await axios.post(url, {
        "email": "harold@gmail.com",
        "name": "Harold",
        "content": content.value,
        'image': imageUrl.value
      })
      await $router.push({name: 'walls'})
    } catch (err) {
      errorBox.value.content = err.response.data
    }
  }


</script>

<template>
    <navbar></navbar>
    <div class="container mx-auto my-5 md:my-0">
        <div class="flex flex-row space-x-7">
            <div class="basis-3/5">

                <!--            最新貼文-->
                <section class="relative mb-4">
                    <div class="bg-white border-2 border-dark p-4.5 text-center font-bold font-azeret-mono text-xl">
                        張貼動態
                    </div>
                    <div class="bg-white border-2 border-dark p-4.5 absolute top-0 left-0 right-0 -z-10 -translate-x-1.5 translate-y-2.5 ">
                        張貼動態
                    </div>
                </section>
                <section class="bg-white border-2 border-dark p-8 rounded-lg shadow-x2 mb-4">
                    <div>
                        貼文內容
                    </div>
                    <div class="mb-4">
                        <textarea v-model="content" class="
                        mt-1
                        block
                        w-full
                        border-2
                        border-dark
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        placeholder-grey-3"
                      rows="5" placeholder="輸入您的貼文內容"></textarea>
                        <p :class="{'hidden': !errorBox?.content}" class="text-negative text-xs text-sm font-noto-sans-tc">
                            請輸入貼文內容！
                        </p>
                    </div>
                    <button type="button" class="
                    bg-dark
                    text-white
                    border
                    border-2
                    border-dark
                    mb-4
                    py-1
                    px-8
                    rounded
                    disabled:border-2
                    disabled:border-grey-4
                    disabled:bg-grey-2
                    disabled:shadow-none">
                        上傳圖片
                    </button>
                    <input v-model="imageUrl" type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="圖片網址">
                    <div v-if="imageUrl" class="mt-3">
                        <img :src="imageUrl" class="object-cover rounded h-36 w-full">
                    </div>
                    <div class="flex justify-center">
                        <button type="button"
                                @click="onPostAPI"
                                class="
                        bg-primary
                        text-white
                        border
                        border-2
                        border-dark
                        mt-8
                        mb-4
                        px-32
                        py-4
                        rounded
                        disabled:border-2
                        disabled:border-grey-4
                        disabled:bg-grey-2
                        disabled:shadow-none"
                        >
                            送出貼文
                        </button>
                    </div>
                </section>
            </div>
            <div class="basis-2/5 ">
                <!--            張貼動態-->
                <side-bar></side-bar>
            </div>
        </div>
    </div>
</template>
