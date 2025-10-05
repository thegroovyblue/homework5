<script setup>
import { faker } from '@faker-js/faker'

const firstName = faker.person.firstName()
const lastName  = faker.person.lastName()
const fullName  = faker.person.fullName({ firstName, lastName })
const jobTitle  = faker.person.jobTitle()
const bio       = faker.lorem.lines(2)
const username  = faker.internet.username({ firstName, lastName }).toLowerCase()
</script>

<template>
  <router-link :to="{ name: 'CardDetails', params: { id: username } }">
    <div class="border border-gray-400 rounded-lg shadow bg-gray-200 h-full">
      <img :src="faker.image.urlLoremFlickr({ category: 'cat' })" class="rounded-t-xl" alt="cat" />
      <div class="p-4">
        <p class="mb-2 text-2xl font-bold">{{ fullName }}</p>
        <p class="mb-3 font-normal text-gray-700">{{ jobTitle }}</p>
        <p class="mb-3 font-normal text-gray-700">{{ bio }}</p>
      </div>
    </div>
  </router-link>
</template>
