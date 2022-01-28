import { ListCatsByType } from '@/repositoreis/cat'
import { mapGetters } from 'vuex'
import {addParamsToLocation , getParamsFromLocation} from '@/utils/Helpers'
export default {
  computed: {
    ...mapGetters({
      catLoading: 'cats/loading',
      cats: 'cats/articles',
    }),
  },
  data() {
    return {
      dialog: false,
      categoryFilter: 'ادارة',
      form: {
        search: '',
        category: 0,
      },
    }
  },
  watch:{
    form:{
      handler:function(){
        addParamsToLocation(this.form , this.$route.path)
        this.getData()
      },  
      deep:true
    }
  },
  methods: {
    showFilters() {
      this.dialog = true
    },
    selectCat(cat){
      this.form.category = cat.Id
      this.categoryFilter = cat.Name
    },
    filter() {
      this.dialog = false
    },
    clearCat(){
      this.form.category = 0
    },
    getCats(){
        ListCatsByType(this.catsType).then((res) => {
            this.$store.commit('cats/articles', res)
            this.$store.commit('cats/loading', false)
          })
    },
    
  },
  created() {
    this.$store.commit('cats/loading', true)
    this.getCats()
    this.$store.commit('blog/loading', true)
    getParamsFromLocation(this.$route.query , this.form)
    this.getData()
  },
}