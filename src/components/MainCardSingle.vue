<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person. fullName()
const firstname = faker.person. firstName()
const lastname = faker.person. lastName ()
const job_title = faker.person. jobTitle()
const bio = faker.lorem.lines(2)
const username = faker.internet.userName({firstName: firstname, lastName: lastname}).toLowerCase()
faker.image.urlPicsumPhotos({ width: 640, height: 480 })
</script>

<template>
    <article class="card">
    <img :src="imgUrl" alt="random dog" />
    <h3>{{ fullName }}</h3>
  </article>
</template>

<style scoped>
.card{padding:8px}
img{width:100%;display:block;border-radius:.5rem}
</style>