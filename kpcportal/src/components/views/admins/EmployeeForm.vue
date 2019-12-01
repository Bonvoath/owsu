<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page">
                    <router-link to="/admin">ផ្ទាំងគ្រប់គ្រង</router-link>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                    <router-link to="/admin/employee">និយោជិក</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">បញ្ជូលអតិថិជនថ្មី</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-x">
                <div class="card-header">
                    <div class="toolbar">
                        <button type="button" class="btn btn-outline-primary btn-sm" @click="save"><i class="fa fa-plus-circle" aria-hidden="true"></i> រក្សាទុក</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <h5 class="font-moul" style="font-size: 14px;">ព័ត៌មានសាមីខ្លួន</h5>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ឈ្មោះខ្មែរ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.KhmerName"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ឈ្មោះឡាតាំង</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.LatinName"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ថ្ងៃខែឆ្នាំកំណើត</label>
                                        <div>
                                            <input type="date" class="form-control form-control-sm kh" v-model="date.dob"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">ភេទ</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.Sex">
                                                <option value="1">ប្រុស</option>
                                                <option value="2">ស្រី</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">សញ្ជាតិ</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.Nationality">
                                                <option value="">ជ្រើសរើស</option>                                                
                                                <option v-for="ret in nationals" :value="ret.Id" :key="ret.Id">{{ret.Name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">សាសនា</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.Religion">
                                                <option value="">ជ្រើសរើស</option>
                                                <option v-for="ret in religions" :value="ret.Name" :key="ret.Id">{{ret.Name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">លេខទូរស័ព្ទ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.Phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">អ៊ីម៉ែល</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.Email"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control">Facebook</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.Facebook"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">អត្តសញ្ញាណប័ណ្ណ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.IdCard"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ចុះថ្ងៃខែឆ្នាំ</label>
                                        <div>
                                            <input type="date" class="form-control form-control-sm kh" v-model="date.idCreated"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ធ្វើនៅ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.IdCardAt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ភិនភាគ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.IdCardIdentity"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">កំពស់(គិតជាសង់ទីម៉ែត្រ)</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.Height"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px;">ទីកន្លែងកំណើត</h5>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ផ្ទះលេខ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.HomeNo"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ផ្លូវលេខ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.StreetNo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="text" class="form-control form-control-sm kh" v-model="model.Address" disabled/>
                            <div style="padding: 5px 0;">
                                <button type="button" class="btn btn-success btn-sm kh" @click="showLoc(2)">ជ្រើសរើស</button>  &nbsp;
                                <button type="button" class="btn btn-danger btn-sm kh">សំអាត</button>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <h5 class="font-moul" style="font-size: 14px;">កម្រិតវប្បធម៌ ឬកម្រិតការសិក្សា</h5>
                            <div class="form-group">
                                <label class="label-control kh">កម្រិតវប្បធម៌</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.Education"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">កំរិតវិជ្ជាជីវៈ</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.EduLevel" />
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px;">ព័ត៌មានគ្រួសារ</h5>
                            <div class="form-group">
                                <label class="label-control kh">ឪពុកឈ្មោះ</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.FatherName"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">ម្ដាយឈ្មោះ</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.MotherName"/>
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px;">ព័ត៌មានការងារ</h5>
                            <div class="form-group">
                                <label class="label-control kh">មុខរបរបច្ចុប្បន្ន</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.Job"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ថ្ងៃខែឆ្នាំចូលធ្វើការ</label>
                                        <div>
                                            <input type="date" class="form-control form-control-sm kh" v-model="date.join"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ប្រាក់បៀវត្តប្រចាំខែ</label>
                                        <div>
                                            <input type="number" class="form-control form-control-sm kh" v-model="model.Salary"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px;">អាសយដ្ឋានបច្ចុប្បន្ន</h5>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ផ្ទះលេខ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.PobHome"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ផ្លូវលេខ</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.PobStreet"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="text" class="form-control form-control-sm kh" v-model="model.Pod" disabled/>
                            <div style="padding: 5px 0;">
                                <button type="button" class="btn btn-success btn-sm" @click="showLoc(2)">ជ្រើសរើស</button>  &nbsp;
                                <button type="button" class="btn btn-danger btn-sm">សំអាត</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LocationSelect id="frmLoc" size="modal-lg"></LocationSelect>
    </div>
</template>
<script>
    import LocationSelect from '../locations/Select';
    import $ from 'jquery';
    export default {
        components:{
            LocationSelect
        },
        data(){
            return {
                model: {
                    KhmerName: '',
                    Sex: 1,
                    IdCard: '',
                    Phone: '',
                    CreatedBy: sessionStorage.getItem('jwt@user')
                },
                date: {
                    dob: '',
                    idCreated: '',
                    join: ''
                },
                nationals: [],
                religions: [],
                loctype: 0
            }
        },
        created(){
            this.init();
            let id = this.$route.params.id;
            if(id != undefined && id != ''){
                let loading = this.$loading.show();
                this.$api().post('api/employee/get', {Id: id}).then(res=>{
                    if(this.$isValid(res)){
                        let data = res.data.Data;
                        this.model = data;
                        this.date.dob = this.$format(data.Dob, 'YYYY-MM-DD');
                        this.date.idCreated = this.$format(data.IdCardCreated, 'YYYY-MM-DD');
                        this.date.join = this.$format(data.JoinDate, 'YYYY-MM-DD');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            }
        },
        mounted: function(){
            $('#frmLoc').modal({
                backdrop: false,
                show: false
            });
        },
        methods: {
            save(){
                let loading = this.$loading.show();
                this.model.Dob = this.date.dob;
                this.model.IdCardCreated = this.date.idCreated;
                this.model.JoinDate = this.date.join;
                this.$api().post('api/employee/save', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/admin/employee');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            init(){
                let loading = this.$loading.show();
                this.$api().post('api/employee/default').then(res=>{
                    if(this.$isValid(res)){
                        let data = res.data.Data;
                        this.nationals = data.Nationalities;
                        this.religions = data.Religions;
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            showLoc(n){
                this.loading = n;
                $('#frmLoc').modal('show');
            }
        }
    }
</script>