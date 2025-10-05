<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person.firstName()
const firstname = faker.person.lastName()
const lastname = faker.person.fullName({firstName: firstname, lastName: lastname})
const job_title = faker.person.jobTitle()
const bio = faker.lorem.lines(2)
const username = faker.internet.username({firstName: firstname, lastName: lastname}).toLowerCase()

</script>

<template>
    <!-- {{ fullname }} <br /> -->
    <RouterLink :to="{name: 'CardDetails', params: {id: username}}">
        <div class="border border-gray-400 rounded-lg shadow bg-gray-200-h-full">
            <img :src="faker.image.urlLoremFlickr({ category: 'cat' })" class="rounded-t-x" />
            <div class=":p-4">
                <p class="mb-2 text 2x1 font-bold">{{ fullname }}</p>
                <p class="mb-3 font-normal text-gray-700">{{ job_title }}</p>
                <p class="mb-3 font-normal text-gray-700">{{ bio }}</p>
            </div>
        </div>
    </RouterLink>
</template>