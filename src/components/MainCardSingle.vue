<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person. fullName()
const firstname = faker.person. firstName()
const lastname = faker.person. lastName ()
const job_title = faker.person. jobTitle()
const bio = faker.lorem.lines(2)
const username = faker.internet.userName({firstName: firstname, lastName: lastname}).toLowerCase()

</script>

<template>
    <!-- ={{ fullname }} <br /> -->
    <div>
        <img :src="faker.image.urlLoremFlickr({category: 'dog'})" />
    </div>
</template>