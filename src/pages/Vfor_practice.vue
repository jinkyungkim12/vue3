<template>
    <q-page class="q-pa-xl">
        <section>
            <div class="row menu justify-center">
                <a v-for="menu in menus" :key="menu">{{ menu }}</a>
            </div>
            <div class="">
                <h3 class="title text-center">Member List</h3>
            </div>
            <div class="q-pa-md">
                <q-table
                title="Member List"
                :rows="rows"
                :columns="columns" 
                dark
                row-key="name"
                />
            </div>
        </section>
        <section>
            <div>
                <h3 class="text-center">Product List</h3>
            </div>
            <q-card>

            </q-card>
            <div class="row">
                <div class="col text-center" v-for="(product, i) in products" :key="i">
                    <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div class="text-h6">{{ product.name }}</div>
                            <div class="text-subtitle2">by {{ product.made }}</div>
                        </q-card-section>
                        <q-card-section class="q-pt-none">
                            {{ lorem }}
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </section>
    </q-page>
</template>
<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

export default {
    data(){
        return {
            menus: ['Home','Shop', 'About'],
            products: [
                {name: 'Product1', made: 'Anolde1'},
                {name: 'Product2', made: 'Anolde2'},
                {name: 'Product3', made: 'Anolde3'},
                {name: 'Product4', made: 'Anolde4'},
        ],

        }
    },
    setup () {
    return {
      columns,
      rows,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
<style scoped>
    .menu{
        padding: 15px;
        background: darkslategray;
    }
    .menu a{
        color: white;
        padding: 15px;
    }
    .my-card{
        width: 100%;
        max-width: 250px;
    }
</style>