<template>
    <div>
        <template v-for="ret in records">
            <ReportForm01 v-if="ret.ListTypeId==1" :key="ret.ListTypeId" :vmodel="ret.ServiceReportViewerDataLists"></ReportForm01>
            <ReportForm02 v-if="ret.ListTypeId==2" :key="ret.ListTypeId" :vmodel="ret.ServiceReportViewerDataLists"></ReportForm02>
            <ReportForm03 v-if="ret.ListTypeId==3" :key="ret.ListTypeId" :vmodel="ret.ServiceReportViewerDataLists"></ReportForm03>
            <ReportForm04 v-if="ret.ListTypeId==4" :key="ret.ListTypeId" :vmodel="ret.ServiceReportViewerDataLists"></ReportForm04>
        </template>
    </div>
</template>
<script>
    import ReportForm01 from '../webreports/01.ReportForm'
    import ReportForm02 from '../webreports/02.ReportForm'
    import ReportForm03 from '../webreports/03.ReportForm'
    import ReportForm04 from '../webreports/04.ReportForm'
    export default {
        components:{
            ReportForm01,
            ReportForm02,
            ReportForm03,
            ReportForm04
        },
        computed: {
            records: function () {
                return this.$store.state.services;
            }
        }
    }
</script>