<template>
    <main>
        <section>
            Content
        </section>
    </main>
</template>

<script>
import * as Person from '@/utils/api';

export default {
    name: 'MainContent',
    mounted() {
        console.log(Person.getAllPerson());
    }
}
</script>

<style></style>
