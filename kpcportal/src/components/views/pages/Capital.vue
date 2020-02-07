<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-cus">
                <li class="breadcrumb-item font-kulen">
                    <span>ថ្នាក់រាជធានី-ខេត្ត</span>
                </li>
            </ol>
        </nav>
        <loading :active.sync="isLoading" color="#0856ab" :is-full-page="false"></loading>
        <table class="table kh">
            <thead>
                <tr class="font-kulen">
                    <td style="width: 20px;">ល.រ</td>
                    <td>វិស័យ</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ret,index) in list" :key="index">
                    <td>{{index+1}}</td>
                    <td><router-link :to="{name:'capital_detail',params:{id:ret.Id}}" class="link-select" @click="select(ret.Id)">{{ret.Name}}</router-link></td>
                    <td class="text-right" style="width: 150px; padding: 10px 0;">
                        <router-link :to="{name:'capital_detail',params:{id:ret.Id}}" class="btn btn-outline-secondary btn-sm link-select no-margin">មើលតារាងតម្លៃ</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                list: [],
                isLoading: false
            }
        },
        created: function(){
            this.isLoading = true;
            this.$api().post('api/service/getservicetype', { ServiceTypeId: 1}).then(res => {
                if(res.data.StatusCode == 200){
                    this.list = res.data.Data;
                }
            }).catch(error => {
                this.$toasted.show(error);
            }).finally(() => { this.isLoading = false; });
        }
    }
</script>
<style scoped>
    .link-select{
        text-decoration: none !important;
        color: rgba(0,0,0,0.7) !important;
    }
    .link-select:hover{
        color: #94c13d !important;
    }
    .vld-overlay{
        text-align: center;
    }
</style>