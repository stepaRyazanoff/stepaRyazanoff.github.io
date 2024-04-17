<template>
  <Doughnut :data="dataChart" :preShiftBriefingColorState="preShiftBriefingColorState"/>
</template>

<script lang="ts">
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PreShiftBriefingChart',

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
            borderColor: this.preShiftBriefingColorState,
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
    preShiftBriefingColorState: Array
  },
}
</script>
