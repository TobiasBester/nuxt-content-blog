<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All articles</h1>
        <p class="font-medium text-lg">Here's a list of all articles</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />
      <ContentList
          path="/blog"
          :query="{ only: ['title', 'description', 'tags', '_path', 'img'], sort: [{ date: -1 }] }"
      >
        <template v-slot="{ list }">
          <ul class="article-list">
            <li v-for="article in list" :key="article._path" class="article-item">
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-32">
                    <img
                        :src="`/${article.img}`"
                        :alt="article.title"
                        class="rounded-lg max-h-[8rem]"
                    />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
