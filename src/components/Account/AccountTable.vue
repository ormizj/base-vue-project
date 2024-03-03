<template>
    <ConfirmModal :isOpen="isConfirmModalOpen" :message="modalMessage" :modalCb="modalCb" />
    <AlertModal :isOpen="isAlertModalOpen" :message="modalMessage" :modalCb="modalCb"
        :isSuccessful="isAlertModalSuccess" />

    <AccountForm :onAccountCreate="handleAccountCreate" />
    <table>
        <tr>
            <th title="Avatar">Avatar</th>
            <th title="Number">#</th>
            <th title="Name">Name</th>
            <th title="Creation Date">Creation Date</th>
            <th title="Update">Update</th>
            <th title="Delete">Delete</th>
        </tr>
        <AccountRow v-for="(account, index) in accounts" :key="account.id" :index="index" :account="account"
            :onAccountUpdate="handleAccountUpdate" :onAccountDelete="handleAccountDelete" />
    </table>
</template>

<script>
import AccountRow from './AccountRow';
import AccountForm from './AccountForm';
import ConfirmModal from '../ui/Modal/ConfirmModal.vue';
import AlertModal from '../ui/Modal/AlertModal.vue';
import * as accountService from '../../api/accountService.js';
import { removeIndex } from '../../utils/arrayUtil.js';

export default {
    name: 'AccountTable',
    components: {
        AccountRow,
        AccountForm,
        ConfirmModal,
        AlertModal,
    },

    data() {
        return {
            accounts: [],
            isConfirmModalOpen: false,
            isAlertModalOpen: false,
            isAlertModalSuccess: false,
            modalMessage: '',
            modalCb: null,
        }
    },

    created() {
        this.initializeAccounts();
    },

    methods: {
        async initializeAccounts() {
            const res = await accountService.getAllAccount();
            if (res.success) {
                this.accounts = res.data;

            } else {
                this.openAlertUnexpectedError(res.data);
            }
        },

        async handleAccountCreate(name, avatarUrl) {
            const res = await accountService.createAccount(name, avatarUrl);
            if (res.success) {
                this.accounts.unshift(res.data);
                this.openAlertModal('Account Created Successfully');


            } else {
                this.openAlertUnexpectedError(res.data);
            }
        },

        async handleAccountUpdate(id, name, avatarUrl, index) {
            const res = await accountService.updateAccount(id, name, avatarUrl);
            if (res.success) {
                this.accounts[index] = res.data;
                this.openAlertModal('Account Updated Successfully');

            } else {
                this.openAlertUnexpectedError(res.data);
            }
        },

        async handleAccountDelete(id, index) {
            this.openConfirmModal('Are you sure you want to delete this account?', async (isConfirm) => {
                this.closeModals();
                if (!isConfirm) return;

                const res = await accountService.deleteAccount(id);
                if (res.success) {
                    removeIndex(this.accounts, index);
                    this.openAlertModal('Account Deleted Successfully');

                } else {
                    this.openAlertUnexpectedError(res.data);
                }
            });
        },

        openConfirmModal(message, modalCb) {
            this.isConfirmModalOpen = true;
            this.openModalHelper(message, modalCb);
        },

        openAlertModal(message, isSuccess = true, modalCb) {
            this.isAlertModalSuccess = isSuccess;
            this.isAlertModalOpen = true;
            this.openModalHelper(message, modalCb);
        },

        openModalHelper(message, modalCb = this.closeModals) {
            this.modalMessage = message;
            this.modalCb = modalCb;
        },

        openAlertUnexpectedError(errMsg) {
            this.openAlertModal(false, `Unexpected error has occurred: ${errMsg}`);
        },

        closeModals() {
            this.isConfirmModalOpen = false;
            this.isAlertModalOpen = false;
        }
    }

}
</script>

<style></style>
