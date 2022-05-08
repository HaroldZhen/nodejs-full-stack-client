<script setup>
  import {useRouter} from 'vue-router'

  const $router = useRouter()
</script>

<template>
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
                    "
                    @click="$router.push({ name: 'post'})"
            >
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
</template>

<style scoped>

</style>
