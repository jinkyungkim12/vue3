<template>
    <q-btn @click="increment">
        Count is: {{ state.count }}, Double is {{ double }}
    </q-btn>
</template>
<script>
import { reactive, computed } from 'vue';

export default {
    setup(){
        const state = reactive ({
            count: 0
        });

        const double = computed(() => state.count * 2);
        const increment = () => state.count++;

        return {
            state,
            double,
            increment
        }
    }   
}
</script>
<style scoped>
    
</style>