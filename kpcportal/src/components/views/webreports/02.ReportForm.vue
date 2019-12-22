<template>
    <div>
        <table class="table table-data table-bordered table-condensed" style="margin-bottom: 0;">
            <thead class="font-M1">
                <tr>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width:70px;">ល.រ</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle;">បរិយាយ</td>
                    <td colspan="2" class="text-center">តំលៃសេវា(ជារៀល)</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 120px;">រយះពេលអតិបរិមា<br />នៃកាផ្តល់សេវា​<br/>(ថ្ងៃធ្វើការ)</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 90px;">សុពលភាព</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 70px;">ចំនួន</td>
                </tr>
                <tr>
                    <td class="text-center" style="width: 100px;">តម្លៃអតិបរិមា</td>
                    <td class="text-center" style="width: 100px;">តម្លៃជាក់លាក់</td>
                </tr>
            </thead>
            <tbody>
                <template v-for="(ret) in records">
                    <tr v-if="ret.LevelId == 0" :key="ret.Id">
                        <td colspan="7" class="font-M1">{{ret.Name}}</td>
                    </tr>
                    <tr v-if="ret.LevelId == 1" :key="ret.Id">
                        <td class="text-right" style="width: 50px;">{{ret.SubNum}}</td>
                        <td colspan="6"><b>{{ret.Name}}</b></td>
                    </tr>
                    <tr v-if="ret.LevelId == 2" :key="ret.Id">
                        <td class="text-right">{{ret.SubNum}}</td>
                        <td colspan="6">{{ret.Name}}</td>
                    </tr>
                    <tr v-if="ret.LevelId == 3" :key="ret.Id">
                        <td class="text-center">{{ret.Num}}</td>
                        <td>{{ret.Name}}</td>
                        <td class="text-right">{{ret.Price1}}</td>
                        <td class="text-right">{{ret.Price2}}</td>
                        <td class="text-center">{{ret.Duration}}</td>
                        <td class="text-center">{{ret.Limitation}}</td>
                        <td class="text-center">{{ret.Unit}}</td>
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