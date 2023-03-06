<template lang="">
  <div>
    <template v-for="post in appPosts">
      <div :key="post.id" class="d-flex justify-content-center">
        <PostCard :key="post.id" :post="post">
          <!-- <template #post-link>
            <router-link exact :to="{ name: 'Post', params: { id: post.id } }">See Post</router-link>
          </template> -->
        </PostCard>
      </div>
    </template>
  </div>
</template>
<script>
export default {
    name:'author-posts',
    computed:{
        
    }
}
</script>
<style lang=""></style>
