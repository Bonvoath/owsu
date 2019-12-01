<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-cus">
                <li class="breadcrumb-item font-kulen">
                    <a href="javascript:void(0)" @click="back" v-if="sector.Name!=undefined">តារាងវិស័យថ្នាក់ឃុំ-សង្កាត់</a>
                    <span v-else>តារាងវិស័យថ្នាក់ឃុំ-សង្កាត់</span>
                </li>
                <li class="breadcrumb-item font-kulen" v-if="sector.Name!=undefined">{{sector.Name}}</li>
            </ol>
        </nav>
        <loading :active.sync="isLoading" color="#0856ab" :is-full-page="false"></loading>
        <table class="table kh" v-if="!isDetail">
            <thead>
                <tr class="font-kulen">
                    <td style="width: 20px;">ល.រ</td>
                    <td>វិស័យ</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ret,index) in list" :key="index">
                    <td>{{index+1}}</td>
                    <td><a href="javascript:void(0)" class="link-select" @click="select(ret)">{{ret.Name}}</a></td>
                </tr>
            </tbody>
        </table>
        <component :is="component" v-else></component>
    </div>
</template>
<script>
    import ReportForm01 from '../webreports/01.ReportForm'
    import ReportForm02 from '../webreports/02.ReportForm'
    export default {
        components: {
            ReportForm01,
            ReportForm02
        },
        data: function(){
            return {
                list: [],
                sector: {},
                isDetail: false,
                isLoading: false
            }
        },
        created: function(){
            this.isLoading = true;
            this.$api().post('api/service/getservicetype', { ServiceTypeId: 3}).then(res => {
                if(res.data.StatusCode == 200){
                    this.list = res.data.Data;
                    this.isLoading = false;
                }
            });
        },
        methods: {
            back(){
                this.$store.state.services = [];
                this.isDetail = false;
                this.sector = {};
            },
            select(item){
                this.isLoading = true;
                this.$api().post('api/service/list', { SectorId: item.Id }).then(res => {
                    if(res.data.StatusCode == 200){
                        this.$store.state.services = res.data.Data;
                        this.isLoading = false;
                        this.sector = item;
                        this.isDetail = true;
                    }
                });
            }
        },
        computed: {
            component: function(){
                let renderComponent = 'ReportForm01';
                if(this.sector.Id != undefined){
                    if(this.sector.Id == 16){
                        renderComponent = 'ReportForm02';
                    }
                }
                return renderComponent;
            }
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