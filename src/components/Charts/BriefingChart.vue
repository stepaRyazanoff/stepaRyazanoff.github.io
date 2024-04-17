<template>
  <Doughnut :data="dataChart" :briefingColorState="briefingColorState"/>
</template>

<script lang="ts">
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'BriefingChart',
  components: {
    Doughnut
  },

  data() {
    return {
      dataChart: {
        datasets: [
          {
            data: [100],
            weight: 0,
            borderColor: this.briefingColorState,
            borderWidth: 10
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }

  },
  props: {
    briefingColorState: Array
  },
}
</script>
