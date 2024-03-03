<template>
    <BaseModal :isOpen="isOpen" :message="message">
        <button @click="handleConfirm">Confirm</button>
        <button @click="handleCancel">Cancel</button>
    </BaseModal>
</template>

<script>
import BaseModal from './BaseModal';

export default {
    name: 'ConfirmModal',
    components: {
        BaseModal,
    },

    props: {
        message: String,
        isOpen: Boolean,
        modalCb: Function,
    },

    methods: {
        handleConfirm() {
            this.modalCb(true);
        },
        handleCancel() {
            this.modalCb(false)
        }
    }
}
</script>

<style scoped></style>
