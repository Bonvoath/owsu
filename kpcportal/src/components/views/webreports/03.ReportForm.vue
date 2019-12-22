<template>
    <div>
        <table class="table table-data table-bordered table-condensed" style="margin-bottom: 0;">
            <thead class="font-M1">
                <tr>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width:70px;">ល.រ</td>
                    <td rowspan="2" colspan="2" class="text-center" style="vertical-align: middle;">បរិយាយ</td>
                    <td colspan="3" class="text-center">តម្លៃសេវា(រៀល)</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 120px; width: 120px;">រយះពេលអតិបរមា<br />នៃកាផ្តល់សេវា​<br/>(ថ្ងៃធ្វើការ)</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 90px;">សុពលភាព</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 70px;">ចំនួន</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 50px;">ពាក្យស្នើសុំ</td>
                </tr>
                <tr>
                    <td class="text-center">ខណ្ឌក្នុងរាជធានី<br />និងស្រុក</td>
                    <td class="text-center">ខណ្ឌជាយរាជធានី<br />និងទីរួមស្រុក</td>
                    <td class="text-center">ខណ្ឌជាយរាជធានី<br />និងក្រៅទីរួមស្រុក</td>
                </tr>
            </thead>
            <tbody>
                <template v-for="ret in records">
                    <tr v-if="ret.LevelId == 0" :key="ret.Id">
                        <td></td>
                        <td colspan="9" class="font-M1">{{ret.Name}}</td>
                    </tr>
                    <tr v-if="ret.LevelId == 1" :key="ret.Id">
                        <td></td>
                        <td class="text-right" style="width: 50px;">{{ret.SubNum}}</td>
                        <td colspan="8"><b>{{ret.Name}}</b></td>
                    </tr>
                    <tr v-if="ret.LevelId == 2" :key="ret.Id">
                        <td></td>
                        <td class="text-right">{{ret.SubNum}}</td>
                        <td colspan="8">{{ret.Name}}</td>
                    </tr>
                    <tr v-if="ret.LevelId == 3" :key="ret.Id">
                        <td class="text-center">{{ret.Num}}</td>
                        <td class="text-right">-</td>
                        <td>{{ret.Name}}</td>
                        <td class="text-right">{{ret.Price1}}</td>
                        <td class="text-right">{{ret.Price2}}</td>
                        <td class="text-right">{{ret.Price3}}</td>
                        <td class="text-center">{{ret.Duration}}</td>
                        <td class="text-center">{{ret.Limitation}}</td>
                        <td class="text-center">{{ret.Unit}}</td>
                        <td class="text-center" style="width: 50px; padding: 6px 10px">
                            <button type="button" v-if="ret.LinkPdf!=undefined && ret.LinkPdf!=null" class="btn btn-outline-secondary btn-sm link-select no-margin">ទាញយក</button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props:{
            vmodel: Array
        },
        data: function () {
            return {
                records: this.vmodel
            }
        },
        watch: {
            vmodel: function (amodel) {
                this.records = amodel;
            }
        }
    }
</script>