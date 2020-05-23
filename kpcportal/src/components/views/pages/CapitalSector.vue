<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-cus">
                <li class="breadcrumb-item font-kulen">
                    <router-link to="/price/capital">ថ្នាក់រាជធានី-ខេត្ត</router-link>
                </li>
                <li class="breadcrumb-item font-kulen">តារាងតម្លៃ{{sector.Sector}}</li>
            </ol>
        </nav>
        <loading :active.sync="isLoading" color="#0856ab" :is-full-page="false"></loading>
        <TableListService></TableListService>
    </div>
</template>
<script>
    import TableListService from '../pages/TableListService'
    export default {
        components: {
            TableListService
        },
        data: function(){
            return {
                list: [],
                sector: {},
                isLoading: false
            }
        },
        created: function(){
            let id = this.$route.params.id;
            this.select(id);
        },
        methods: {
            select(id){
                this.isLoading = true;
                this.$api().post('services', { SectorId: id }).then(res => {
                    if(res.data.StatusCode == 200){
                        var data = res.data.Data;
                        if(data.length > 0){
                            this.sector = data[0].Sector;
                            this.$store.state.services = data;
                        }
                    }
                }).finally(() => { this.isLoading = false; });
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