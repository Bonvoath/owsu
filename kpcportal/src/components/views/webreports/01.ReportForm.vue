<template>
    <div>
        <table class="table table-data table-bordered table-sm kh" style="margin-bottom: 0;">
            <thead class="font-moul">
                <tr>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width:70px;">ល.រ</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle;">បរិយាយ</td>
                    <td colspan="2" class="text-center">តំលៃសេវា(ជារៀល)</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle;">រយះពេលអតិបរិមា<br />នៃកាផ្តល់សេវា​<br/>(ថ្ងៃធ្វើការ)</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 90px;">សុពលភាព</td>
                    <td rowspan="2" class="text-center" style="vertical-align: middle; width: 60px;">ចំនួន</td>
                </tr>
                <tr>
                    <td class="text-center" style="width: 100px;">តម្លៃអតិបរិមា</td>
                    <td class="text-center" style="width: 100px;">តម្លៃជាក់លាក់</td>
                </tr>
            </thead>
            <tbody>
                <template v-for="ret in records">
                    <tr v-if="ret.LevelId == 0" :key="ret.Id">
                        <td colspan="7" class="font-moul">{{ret.Name}}</td>
                    </tr>
                    <tr v-if="ret.LevelId == 1" :key="ret.Id">
                        <td class="text-right" style="width: 50px;">{{ret.SubNum}}</td>
                        <td colspan="5"><b>{{ret.Name}}</b></td>
                    </tr>
                    <tr v-if="ret.LevelId == 2" :key="ret.Id">
                        <td class="text-right">{{ret.SubNum}}</td>
                        <td colspan="5">{{ret.Name}}</td>
                    </tr>
                    <tr v-if="ret.LevelId == 3" :key="ret.Id">
                        <td class="text-center text-middle">{{ret.Num}}</td>
                        <td>{{ret.Name}}</td>
                        <td class="text-right text-middle">{{$toKhmer(ret.Price1)}}</td>
                        <td class="text-right text-middle">{{$toKhmer(ret.Price2)}}</td>
                        <td class="text-center text-middle">{{ret.Duration}}</td>
                        <td class="text-center text-middle">{{ret.Limitation}}</td>
                        <td class="text-center text-middle">{{ret.Unit}}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
            }
        },
        methods: {
            editClick: function (item) {
                this.$emit('edit', item);
            },
            update: function (id, type) {
                var send = {
                    Id: id,
                    Type: type
                };
                this.$emit('update', send);
            },
            delete: function (id) {
                this.$emit('delete', id);
            }
        },
        computed: {
            records: function () {
                return this.$store.state.services;
            }
        }
    }
</script>