<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading" color="#0856ab" :is-full-page="false"></loading>
        <div class="search-container" v-if="!isCompleted">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-center">ដើម្បីពិនិត្យដំណើរការឯកសារ ត្រូវបញ្ជូលលេខកូដចុះបញ្ជីសេវា​​​ បន្ទាប់មកចុកប៉ូតុងស្វែងរកខាងក្រោម។</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    <div class="input-search">
                        <input type="text" class="form-control" ref="code"
                            v-model="query.RegisterCode"
                            :placeholder="holder.code"
                            @focus="focus('code')"
                            @blur="blur('code', 'លេខកូដចុះបញ្ជីសេវា')"
                            @keypress.enter="search">
                    </div>
                    <div class="text-center" style="padding: 25px;">
                        <button type="button" class="btn btn-success btn-search" @click="search"><i class="fa fa-search" aria-hidden="true"></i> ស្វែងរក</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center" v-else>
            <div class="col-sm-12">
                <div class="alert alert-primary font-moul" style="padding: 8px 10px;">ដំណើរការឯកសារដល់៖ {{result.ProcessName}}</div>
                <h5 class="font-moul">ការចុះបញ្ជីសេវា</h5>
                <table class="table">
                    <tbody>
                        <tr>
                            <th style="padding-left: 0; width: 150px;">លេខកូដចុះបញ្ជីសេវា</th>
                            <td style="width: 15px;">:</td>
                            <td>{{result.RegisterCode}}</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 0">មុខសេវា</th>
                            <td>:</td>
                            <td>{{result.MstServiceName}}</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 0; width: 150px;">ថ្ងៃចុះបញ្ជីសេវា</th>
                            <td>:</td>
                            <td>{{$format(result.DateRegistered, 'DD/MM/YYYY HH:mm A')}}</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 0; width: 150px;">ថ្ងៃទទួលយក</th>
                            <td>:</td>
                            <td>{{$format(result.DateExpired, 'DD/MM/YYYY HH:mm A')}}</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 0; width: 150px;">ឈ្មោះនាមករណ៍</th>
                            <td>:</td>
                            <td>{{result.Name}}</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 0; width: 150px;">តម្លៃ</th>
                            <td>:</td>
                            <td>{{$money(result.MstServicePrice)}} រៀល</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 0; width: 150px;">ចំនួន</th>
                            <td>:</td>
                            <td>1 {{result.ServiceUnit}}</td>
                        </tr>
                        <tr>
                            <th style="padding-left: 0; width: 150px;">អាសយដ្ឋាន</th>
                            <td>:</td>
                            <td>{{result.Address}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
            <div class="col-sm-12">
                <button type="button" class="btn btn-outline-success" @click="reset">ស្វែងរកម្តងទៀត</button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            query: {
                RegisterCode: '',
            },
            holder: {
                code: 'លេខកូដចុះបញ្ជីសេវា',
            },
            isLoading: false,
            isCompleted: false,
            result: {}
        }
    },
    methods: {
        focus: function(field){
            this.holder[field] = '';
        },
        blur: function(field, value){
            this.holder[field] = value;
        },
        reset(){
            this.result = {};
            this.query = {
                RegisterCode: '',
            };
            this.isCompleted = false;
        },
        search(){
            if(this.query.RegisterCode == null || this.query.RegisterCode == ''){
                this.$toasted.show('សូមធ្វើការបញ្ជូលលេខកូដចុះបញ្ជីសេវា');
                this.$refs.code.focus();
                return;
            }
            this.isLoading = true;
            this.$api().post('search/register', this.query).then((res) => {
                if(this.$isValid(res)){
                    if(res.data.Json.Register != undefined && res.data.Json.Register != null){
                        this.result = res.data.Json.Register;
                        this.isCompleted = true;
                    }else{
                        this.$toasted.show('Resunt not found.');
                    }
                }
            }).catch(error => {
                this.$toasted.show(error);
            }).finally(() => { this.isLoading = false; });
        }
    }
}
</script>
<style scoped>
    .search-container{
        padding: 50px 10px;
    }
    .input-search {
        border: 1px solid #ddd;
        overflow: hidden;
        border-radius: 45px;
        margin-bottom: 10px;
    }
    .input-search .form-control{
        border-left: none;
        padding: 25px 5px;
        border: none;
        text-align: center;
    }
    .btn-search {
        padding: 10px 25px;
        background: #94c13d;
        border: none;
    }

    .vld-overlay.is-active{
        outline: none;
    }
</style>