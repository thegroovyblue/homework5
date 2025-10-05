<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person. fullName()
const firstname = faker.person. firstName()
const lastname = faker.person. lastName()
const job_title = faker.person. jobTitle()
const bio = faker.lorem.lines(2)
const username = faker.internet.username({firstName: firstname, lastName: lastname}).toLowerCase()

</script>

<template>

    <div>
        <img class="object-fill h-480 w-960" v-bind:src="faker.image.urlLoremFlickr({category: 'dog', height: 480, width: 960})" />
    </div>
</template>