<template>
    <form @submit.prevent="handleSubmit" @reset.prevent="handleReset">
        <label title="Account Name">Account Name</label><input v-model="name" :title="name" />
        <label title="Avatar Url">Avatar Url</label><input v-model="avatarUrl" :title="avatarUrl" />
        <button type="submit">Confirm</button>
        <button type="reset">Reset</button>
    </form>
</template>

<script>
export default {
    name: 'AccountForm',
    props: {
        onAccountCreate: Function,
    },

    data() {
        return {
            name: '',
            avatarUrl: '',
        }
    },

    methods: {
        handleSubmit() {
            this.onAccountCreate(this.name, this.avatarUrl);
            this.resetForm();
        },

        handleReset() {
            this.resetForm();
        },

        resetForm() {
            this.name = '';
            this.avatarUrl = '';
        },
    }
}
</script>

<style scoped></style>
