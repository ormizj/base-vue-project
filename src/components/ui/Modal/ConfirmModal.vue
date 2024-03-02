<template>
    <BaseModal>
        <div>CONFIRM MODAL</div>
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
    }
}
</script>

<style scoped></style>
