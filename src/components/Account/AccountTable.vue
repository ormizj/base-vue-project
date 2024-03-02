<template>
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
import * as accountService from '../../api/accountService.js';
import { removeIndex } from '../../utils/arrayUtil.js';

export default {
    name: 'AccountTable',
    components: {
        AccountRow,
        AccountForm,
    },

    data() {
        return {
            accounts: [],
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
                //TODO modal error
            }
        },

        async handleAccountCreate(name, avatarUrl) {
            const res = await accountService.createAccount(name, avatarUrl);

            if (res.success) {
                this.accounts.unshift(res.data);
                // TODO success modal


            } else {
                //TODO modal error
            }
        },

        async handleAccountUpdate(id, name, avatarUrl, index) {
            const res = await accountService.updateAccount(id, name, avatarUrl);
            if (res.success) {
                this.accounts[index] = res.data;
                // TODO success modal


            } else {
                //TODO modal error
            }
        },

        async handleAccountDelete(id, index) {
            const res = await accountService.deleteAccount(id);
            //TODO confirm modal

            if (res.success) {
                removeIndex(this.accounts, index);
                // TODO success modal

            } else {
                //TODO modal error
            }
        },
    }

}
</script>

<style>
input:not([disabled]) {
    background-color: whitesmoke;
    color: black;
}
</style>
