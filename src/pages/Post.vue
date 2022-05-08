<script setup>
  import axios from 'axios'
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

  const $router = useRouter()

  const url = 'https://secret-basin-09481.herokuapp.com/posts/'

  const content = ref('')
  const imageUrl = ref('')

  async function onPostAPI() {
    await axios.post(url, {
      "email": "harold@gmail.com",
      "name": "Harold",
      "content": content.value,
      'image': imageUrl.value
    })
    await $router.push({name: 'walls'})
  }


</script>

<template>
    <nav class="bg-white border-b-3 border-dark mb-12">
        <div class="container mx-auto px-0 sm: px-5">
            <div class="flex items-center py-3">
                <h1 class="text-2.5xl font-paytone-one">MetaWall</h1>
                <div class="block ml-auto font-azeret-mono">
                    <div class="flex items-center">
                        <img src="../assets/images/user_default.png" class="mr-2.5" width="30" height="30">
                        <a href="#" class="border-b-2 border-dark font-bold">Member</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container mx-auto my-5 md:my-0">
        <div class="flex flex-row space-x-7">
            <div class="basis-3/5">

                <!--            最新貼文-->
                <section class="bg-white border-2 border-dark p-6 shadow-x2 mb-4">
                    張貼動態
                </section>
                <section class="bg-white border-2 border-dark p-8 rounded-lg shadow-x2 mb-4">
                    <div>
                        貼文內容
                    </div>
                    <textarea v-model="content" class="
                    mt-1
                    block
                    w-full
                    border-2
                    border-dark
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    placeholder-grey-3
                    mb-4
                  " rows="5" placeholder="輸入您的貼文內容"></textarea>
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
                <div class="bg-white border-2 border-dark">
                    <div class="py-8 px-6">
                        <button class="
                    bg-primary
                    text-white
                    border
                    border-2
                    border-dark
                    py-4
                    rounded-lg
                    shadow-x1
                    mb-4
                    w-full
                    disabled:border-2
                    disabled:border-grey-4
                    disabled:bg-grey-2
                    disabled:shadow-none
                    ">
                            張貼動態
                        </button>
                        <ul class="space-y-6">
                            <li class="flex items-center ">
                                <div class="mr-3">
                                    <img src="../assets/images/user_default.png" width="50px" height="50px">
                                </div>
                                <div class="font-noto-sans-tc font-bold leading-normal">Harold</div>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-3">
                                    <img src="../assets/images/user_default.png" width="50px" height="50px">
                                </div>
                                <div class="font-noto-sans-tc font-bold leading-normal">追蹤名單</div>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-3">
                                    <img src="../assets/images/user_default.png" width="50px" height="50px">
                                </div>
                                <div class="font-noto-sans-tc font-bold leading-normal">我按讚的文章</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
