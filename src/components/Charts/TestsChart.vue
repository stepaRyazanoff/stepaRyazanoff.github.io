<template>
  <Doughnut :data="dataChart" :testsColorState="testsColorState" :testsData="testsData"/>
</template>

<script>
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'TestsChart',

  components: {
    Doughnut
  },

  data() {
    return {
      dataChart: {
        datasets: [
          {
            data: [...this.testsData],
            weight: 0,
            borderColor: [...this.testsColorState],
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
    testsColorState: Array,
    testsData: Array

  },
}
</script>
