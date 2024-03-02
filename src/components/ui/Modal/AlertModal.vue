<template>
    <BaseModal>
        <div>ALERT MODAL</div>
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
        isSuccessful: Boolean,
        message: String,
    }
}
</script>

<style scoped></style>
