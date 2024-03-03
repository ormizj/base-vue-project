<template>
    <BaseModal :isOpen="isOpen" :message="message">
        <button @click="handleConfirm">Confirm</button>
    </BaseModal>
</template>

<script>
import BaseModal from './BaseModal';

export default {
    name: 'AlertModal',
    components: {
        BaseModal,
    },
    props: {
        message: String,
        isOpen: Boolean,
        modalCb: Function,
        isSuccessful: Boolean,
    },

    methods: {
        handleConfirm() {
            this.modalCb();
        }
    }
}
</script>

<style scoped></style>
