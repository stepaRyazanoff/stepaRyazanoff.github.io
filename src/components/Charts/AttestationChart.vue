<template>
  <Doughnut :data="dataChart" :attestationColorState="attestationColorState" :attestationData="attestationData"/>
</template>

<script>
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'AttestationChart',

  components: {
    Doughnut
  },

  data() {
    return {
      dataChart: {
        datasets: [
          {
            data: [...this.attestationData],
            weight: 0,
            borderColor: [...this.attestationColorState],
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
    attestationColorState: Array,
    attestationData: Array
  },
}
</script>
