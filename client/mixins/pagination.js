export default {
    data(){
        return{
            page : 1,
            pageCount : 8,
        }
    },
    computed:{
        startIndexSlice(){
            return (this.page -1) * this.pageCount
        },
        endIndexSlice(){
            return this.startIndexSlice + this.pageCount
        },
        paginationLength(){
            return Math.floor(this.users.length / this.pageCount)
        },
    },
}