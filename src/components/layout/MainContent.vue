<template>
    <main>
        <section>
            <AccountTable />
        </section>
    </main>
</template>

<script>
import AccountTable from '../Account/AccountTable'

export default {
    name: 'MainContent',
    components: {
        AccountTable,
    }
}
</script>

<style scoped></style>
