<script>
import Logout from '@/components/Sidebar/Logout.vue'
import {mapGetters} from 'vuex'
import BriefingChart from '@/components/Charts/BriefingChart.vue'
import PreShiftBriefingChart from '@/components/Charts/PreShiftBriefingChart.vue'
import TestsChart from '@/components/Charts/TestsChart.vue'
import {Doughnut} from 'vue-chartjs'
import AttestationChart from '@/components/Charts/AttestationChart.vue'


export default {
  name: 'Sidebar',
  components: {
    AttestationChart,
    Doughnut,
    TestsChart,
    PreShiftBriefingChart,
    BriefingChart,
    Logout,
  },

  computed: {
    ...mapGetters({
          briefingColorState: 'BRIEFING_COLOR_STATE',
          briefingState: 'BRIEFING_STATE',
          preShiftBriefingColorState: 'PRE_SHIFT_BRIEFING_COLOR_STATE',
          preShiftBriefingState: 'PRE_SHIFT_BRIEFING_STATE',
          testsColorState: 'TESTS_COLOR_STATE',
          testsState: 'TESTS_STATE',
          testsData: 'TESTS_DATA_STATE',
          attestationColorState: 'ATTESTATION_COLOR_STATE',
          attestationState: 'ATTESTATION_STATE',
          attestationData: 'ATTESTATION_DATA_STATE',
        },
    ),

    isToggle() {
      return this.$store.getters.TOGGLE_THEME_STATE
    },
    date() {
      return this.$store.getters.DATA_STATE
    },
    time() {
      return this.$store.getters.TIME_STATE
    },
    users() {
      return this.$store.getters.USERS_STATE
    }
  },

  methods: {
    onCheck() {
      this.$store.dispatch('TOGGLE_THEME')
    },
  },

  created() {
    this.intervalId = setInterval(() => {
      this.$store.dispatch('UPDATE_TIME', Date.now())
      this.$store.dispatch('UPDATE_DATE', Date.now())
    }, 1000)
  },

  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },

  mounted() {
    this.briefingState === null
        ? this.$store.dispatch('UPDATE_BRIEFING_COLOR', '#353D54')
        : this.briefingState === true
            ? this.$store.dispatch('UPDATE_BRIEFING_COLOR', '#B2D63C')
            : this.$store.dispatch('UPDATE_BRIEFING_COLOR', '#EF7F1A')
    this.preShiftBriefingState === null
        ? this.$store.dispatch('UPDATE_PRE_SHIFT_BRIEFING_COLOR', '#353D54')
        : this.preShiftBriefingState === true
            ? this.$store.dispatch('UPDATE_PRE_SHIFT_BRIEFING_COLOR', '#B2D63C')
            : this.$store.dispatch('UPDATE_PRE_SHIFT_BRIEFING_COLOR', '#EF7F1A')
    this.$store.dispatch('UPDATE_TESTS_DATA', this.testsState)
    this.$store.dispatch('UPDATE_ATTESTATION_DATA', this.attestationState)
  },
}
</script>

<template>
  <div class="sidebar" :class="isToggle && 'sidebar__theme_white'">
    <div class="sidebar__header">
      <div class="sidebar__date">
        <div>{{ date }}</div>
        <div>{{ time }}</div>
      </div>
      <RouterLink to="/logout">
        <Logout/>
      </RouterLink>
    </div>
    <div class="checkbox">
      <label class="checkbox__label">
        <input @click="onCheck()" class="checkbox__input" type="checkbox">
        <span></span>
      </label>
    </div>
    <div class="sidebar__user-info" v-for="user in users" :key="user.id">
      <div class="sidebar__user-name">{{ user.name }}</div>
      <div class="sidebar__user-date">{{ user.date }}</div>
      <div class="sidebar__user-number">{{ user.number }}</div>
      <div class="sidebar__user-desc">{{ user.description }}</div>
    </div>
    <div class="sidebar__items">
      <ul class="sidebar__list-items">
        <li class="sidebar__list-item">
          <div class="sidebar__item-text sidebar__item-first">Инструктаж</div>
          <div class="sidebar__chart">
            <BriefingChart :briefingColorState="briefingColorState"/>
            <div class="sidebar__item-icon sidebar__item-briefing ">
              <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_1_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="86"
                      height="86">
                  <rect x="0.864319" y="0.490417" width="84.7881" height="84.7881" fill="url(#pattern0_1_139)"/>
                </mask>
                <g mask="url(#mask0_1_139)">
                  <rect x="0.864319" y="1.71899" width="84.7881" height="84.7881" fill="white"/>
                </g>
                <defs>
                  <pattern id="pattern0_1_139" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_1_139" transform="scale(0.00666667)"/>
                  </pattern>
                  <image id="image0_1_139" width="150" height="150"
                         xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
            </div>
          </div>
        </li>
        <li class="sidebar__list-item">
          <div class="sidebar__item-text">Предсменный <br> экзаменатор</div>
          <div class="sidebar__chart">
            <PreShiftBriefingChart :preShiftBriefingColorState="preShiftBriefingColorState"/>
            <div class="sidebar__item-icon sidebar__item-examiner">
              <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_1_129" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="75"
                      height="75">
                  <rect x="0.779541" y="0.406311" width="73.7288" height="73.7288" fill="url(#pattern0_1_129)"/>
                </mask>
                <g mask="url(#mask0_1_129)">
                  <rect x="0.779541" y="0.406311" width="73.7288" height="73.7288" fill="#F2F2F2"/>
                </g>
                <defs>
                  <pattern id="pattern0_1_129" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_1_129" transform="scale(0.00195312)"/>
                  </pattern>
                  <image id="image0_1_129" width="512" height="512"
                         xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
            </div>
          </div>
        </li>
        <li class="sidebar__list-item">
          <div class="sidebar__item-text">Тестов <br> выполнено</div>
          <div class="sidebar__chart">
            <TestsChart v-if="testsData.length" :testsColorState="testsColorState" :testsData="testsData"/>
            <div class="sidebar__item-info">{{ testsState }}</div>
          </div>
        </li>
        <li class="sidebar__list-item">
          <div class="sidebar__item-text">Аттестация <br> через</div>
          <div class="sidebar__chart">
            <AttestationChart v-if="attestationData.length"
                              :attestationColorState="attestationColorState"
                              :attestationData="attestationData"/>
            <div class="sidebar__item-info">{{ attestationState }} <br> <span>дней</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.sidebar {
  background-color: #353D54;
  padding: 30px 40px;
  flex-shrink: 0.5;
  border-radius: 0 20px 20px 0;
  transition: all .3s;
}

.sidebar.sidebar__theme_white .checkbox span::before {
  content: url('data:image/svg+xml,%3Csvg width=\'79\' height=\'79\' viewBox=\'0 0 79 79\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M38.5004 7.8999C39.548 7.8999 40.5527 8.31606 41.2935 9.05683C42.0342 9.7976 42.4504 10.8023 42.4504 11.8499V15.7999C42.4504 16.8475 42.0342 17.8522 41.2935 18.593C40.5527 19.3337 39.548 19.7499 38.5004 19.7499C37.4528 19.7499 36.4481 19.3337 35.7073 18.593C34.9666 17.8522 34.5504 16.8475 34.5504 15.7999V11.8499C34.5504 10.8023 34.9666 9.7976 35.7073 9.05683C36.4481 8.31606 37.4528 7.8999 38.5004 7.8999ZM54.3004 39.4999C54.3004 43.6903 52.6358 47.7091 49.6727 50.6722C46.7096 53.6353 42.6908 55.2999 38.5004 55.2999C34.31 55.2999 30.2912 53.6353 27.3281 50.6722C24.365 47.7091 22.7004 43.6903 22.7004 39.4999C22.7004 35.3095 24.365 31.2907 27.3281 28.3276C30.2912 25.3645 34.31 23.6999 38.5004 23.6999C42.6908 23.6999 46.7096 25.3645 49.6727 28.3276C52.6358 31.2907 54.3004 35.3095 54.3004 39.4999ZM52.4676 59.0524L55.2602 61.8451C56.0052 62.5646 57.003 62.9627 58.0387 62.9537C59.0744 62.9447 60.0651 62.5293 60.7974 61.7969C61.5298 61.0646 61.9452 60.0739 61.9542 59.0382C61.9632 58.0025 61.5651 57.0047 60.8455 56.2598L58.0529 53.4671C57.3079 52.7476 56.3101 52.3494 55.2745 52.3584C54.2388 52.3674 53.2481 52.7829 52.5157 53.5152C51.7833 54.2476 51.3679 55.2383 51.3589 56.274C51.3499 57.3096 51.7481 58.3074 52.4676 59.0524ZM60.8416 17.1548C61.5821 17.8955 61.9981 18.9 61.9981 19.9474C61.9981 20.9948 61.5821 21.9993 60.8416 22.7401L58.0529 25.5327C57.6885 25.91 57.2527 26.2109 56.7707 26.4179C56.2888 26.6249 55.7705 26.7339 55.246 26.7384C54.7215 26.743 54.2014 26.6431 53.716 26.4444C53.2305 26.2458 52.7895 25.9525 52.4186 25.5817C52.0478 25.2108 51.7545 24.7698 51.5558 24.2843C51.3572 23.7989 51.2573 23.2787 51.2618 22.7543C51.2664 22.2298 51.3754 21.7115 51.5824 21.2296C51.7894 20.7476 52.0903 20.3118 52.4676 19.9474L55.2602 17.1548C56.001 16.4142 57.0055 15.9982 58.0529 15.9982C59.1003 15.9982 60.1048 16.4142 60.8455 17.1548H60.8416ZM66.1504 43.4499C67.198 43.4499 68.2027 43.0337 68.9435 42.293C69.6842 41.5522 70.1004 40.5475 70.1004 39.4999C70.1004 38.4523 69.6842 37.4476 68.9435 36.7068C68.2027 35.9661 67.198 35.5499 66.1504 35.5499H62.2004C61.1528 35.5499 60.1481 35.9661 59.4073 36.7068C58.6665 37.4476 58.2504 38.4523 58.2504 39.4999C58.2504 40.5475 58.6665 41.5522 59.4073 42.293C60.1481 43.0337 61.1528 43.4499 62.2004 43.4499H66.1504ZM38.5004 59.2499C39.548 59.2499 40.5527 59.6661 41.2935 60.4068C42.0342 61.1476 42.4504 62.1523 42.4504 63.1999V67.1499C42.4504 68.1975 42.0342 69.2022 41.2935 69.943C40.5527 70.6837 39.548 71.0999 38.5004 71.0999C37.4528 71.0999 36.4481 70.6837 35.7073 69.943C34.9666 69.2022 34.5504 68.1975 34.5504 67.1499V63.1999C34.5504 62.1523 34.9666 61.1476 35.7073 60.4068C36.4481 59.6661 37.4528 59.2499 38.5004 59.2499ZM18.9479 25.5327C19.3146 25.8997 19.7501 26.1909 20.2293 26.3896C20.7086 26.5883 21.2223 26.6907 21.7411 26.6909C22.2599 26.691 22.7737 26.589 23.2531 26.3906C23.7325 26.1923 24.1682 25.9014 24.5352 25.5347C24.9022 25.1679 25.1933 24.7325 25.392 24.2532C25.5908 23.774 25.6931 23.2603 25.6933 22.7415C25.6935 22.2226 25.5915 21.7088 25.3931 21.2294C25.1947 20.75 24.9039 20.3144 24.5371 19.9474L21.7405 17.1548C20.9956 16.4352 19.9978 16.0371 18.9621 16.0461C17.9264 16.0551 16.9357 16.4705 16.2034 17.2029C15.471 17.9352 15.0556 18.9259 15.0466 19.9616C15.0376 20.9973 15.4357 21.9951 16.1552 22.7401L18.9479 25.5327ZM24.5332 59.0524L21.7405 61.8451C20.9956 62.5646 19.9978 62.9627 18.9621 62.9537C17.9264 62.9447 16.9357 62.5293 16.2034 61.7969C15.471 61.0646 15.0556 60.0739 15.0466 59.0382C15.0376 58.0025 15.4357 57.0047 16.1552 56.2598L18.9479 53.4671C19.6929 52.7476 20.6906 52.3494 21.7263 52.3584C22.762 52.3674 23.7527 52.7829 24.4851 53.5152C25.2174 54.2476 25.6329 55.2383 25.6419 56.274C25.6509 57.3096 25.2527 58.3074 24.5332 59.0524ZM14.8004 43.4499C15.848 43.4499 16.8527 43.0337 17.5935 42.293C18.3342 41.5522 18.7504 40.5475 18.7504 39.4999C18.7504 38.4523 18.3342 37.4476 17.5935 36.7068C16.8527 35.9661 15.848 35.5499 14.8004 35.5499H10.8504C9.80279 35.5499 8.79809 35.9661 8.05732 36.7068C7.31655 37.4476 6.90039 38.4523 6.90039 39.4999C6.90039 40.5475 7.31655 41.5522 8.05732 42.293C8.79809 43.0337 9.80279 43.4499 10.8504 43.4499H14.8004Z\' fill=\'%23EF7F1A\'/%3E%3C/svg%3E');
}

.sidebar__theme_white {
  background-color: #F2F2F2;
}

.sidebar__theme_white .sidebar__header svg path,
.sidebar__theme_white .sidebar__header {
  color: #353D54;
  fill: #353D54;
}


.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 88px;
}

.sidebar__date {
  font-size: 20px;
  line-height: 24px;
  font-family: 'Montserrat-Bold', serif;
}

.sidebar__date > div:first-child {
  margin-bottom: 5px;
}

.checkbox {
  text-align: right;
  margin-bottom: 82px;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;
}

.checkbox span {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.checkbox span:after {
  display: block;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 76px;
  height: 20px;
  background-color: #586C92;
  border-radius: 10px;
}

.checkbox span:before {
  display: block;
  content: url('../../assets/img/toggle.svg');
  position: absolute;
  right: 20px;
  top: -30px;
  z-index: 10;
  transition: all .2s;
}

.checkbox__input:checked + span:before {
  right: -25px;
}

.sidebar__user-info {
  padding: 10px 15px;
  background-color: #586C92;
  margin-bottom: 58px;
  border-radius: 4px;
}

.sidebar__user-info > div:not(:last-child) {
  margin-bottom: 10px;
}

.sidebar__user-name {
  font-size: 32px;
  line-height: 39px;
  font-family: 'Montserrat-Bold', serif;
}

.sidebar__user-date {
  font-size: 24px;
  line-height: 29px;
}

.sidebar__user-number,
.sidebar__user-desc {
  font-size: 16px;
  line-height: 19px;
}

.sidebar__list-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.sidebar__list-item {
  text-align: center;
  background-color: #586C92;
  border-radius: 4px;
  box-shadow: 0 5px 3px 0 rgba(34, 60, 80, 0.2);
}

.sidebar__list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar__item-text {
  padding-top: 23px;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 13px;
}

.sidebar__item-first {
  margin-bottom: 30px;
}

.sidebar__chart {
  position: relative;
  max-width: 150px;
  height: 150px;
  margin-bottom: 31px;
}

.sidebar__item-info {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: 45px;
}

.sidebar__item-icon {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(60%, -40%);
  font-size: 45px;
}

.sidebar__item-info span {
  position: absolute;
  font-size: 20px;
  transform: translate(-25px, -5px);
  display: inline-block;
}


@media (max-width: 1550px) {
  .sidebar {
    padding: 20px 26px;
    flex-shrink: 0.5;
  }

  .sidebar__header {
    margin-bottom: 58px;
  }

  .sidebar__date {
    font-size: 13px;
    line-height: 16px;
    font-family: 'Montserrat-Bold', serif;
  }

  .sidebar__date > div:first-child {
    margin-bottom: 3px;
  }

  .checkbox {
    margin-bottom: 54px;
  }

  .checkbox span:after {
    right: 0;
    top: 0;
    width: 50px;
    height: 13px;
    background-color: #586C92;
    border-radius: 10px;
  }

  .checkbox span:before {
    content: url('../../assets/img/toggle2.svg');
    right: 13px;
    top: -20px;
    z-index: 10;
    transition: all .2s;
  }

  .sidebar.sidebar__theme_white .checkbox span::before {
    content: url('data:image/svg+xml,%3Csvg width=\'52\' height=\'52\' viewBox=\'0 0 79 79\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M38.5004 7.8999C39.548 7.8999 40.5527 8.31606 41.2935 9.05683C42.0342 9.7976 42.4504 10.8023 42.4504 11.8499V15.7999C42.4504 16.8475 42.0342 17.8522 41.2935 18.593C40.5527 19.3337 39.548 19.7499 38.5004 19.7499C37.4528 19.7499 36.4481 19.3337 35.7073 18.593C34.9666 17.8522 34.5504 16.8475 34.5504 15.7999V11.8499C34.5504 10.8023 34.9666 9.7976 35.7073 9.05683C36.4481 8.31606 37.4528 7.8999 38.5004 7.8999ZM54.3004 39.4999C54.3004 43.6903 52.6358 47.7091 49.6727 50.6722C46.7096 53.6353 42.6908 55.2999 38.5004 55.2999C34.31 55.2999 30.2912 53.6353 27.3281 50.6722C24.365 47.7091 22.7004 43.6903 22.7004 39.4999C22.7004 35.3095 24.365 31.2907 27.3281 28.3276C30.2912 25.3645 34.31 23.6999 38.5004 23.6999C42.6908 23.6999 46.7096 25.3645 49.6727 28.3276C52.6358 31.2907 54.3004 35.3095 54.3004 39.4999ZM52.4676 59.0524L55.2602 61.8451C56.0052 62.5646 57.003 62.9627 58.0387 62.9537C59.0744 62.9447 60.0651 62.5293 60.7974 61.7969C61.5298 61.0646 61.9452 60.0739 61.9542 59.0382C61.9632 58.0025 61.5651 57.0047 60.8455 56.2598L58.0529 53.4671C57.3079 52.7476 56.3101 52.3494 55.2745 52.3584C54.2388 52.3674 53.2481 52.7829 52.5157 53.5152C51.7833 54.2476 51.3679 55.2383 51.3589 56.274C51.3499 57.3096 51.7481 58.3074 52.4676 59.0524ZM60.8416 17.1548C61.5821 17.8955 61.9981 18.9 61.9981 19.9474C61.9981 20.9948 61.5821 21.9993 60.8416 22.7401L58.0529 25.5327C57.6885 25.91 57.2527 26.2109 56.7707 26.4179C56.2888 26.6249 55.7705 26.7339 55.246 26.7384C54.7215 26.743 54.2014 26.6431 53.716 26.4444C53.2305 26.2458 52.7895 25.9525 52.4186 25.5817C52.0478 25.2108 51.7545 24.7698 51.5558 24.2843C51.3572 23.7989 51.2573 23.2787 51.2618 22.7543C51.2664 22.2298 51.3754 21.7115 51.5824 21.2296C51.7894 20.7476 52.0903 20.3118 52.4676 19.9474L55.2602 17.1548C56.001 16.4142 57.0055 15.9982 58.0529 15.9982C59.1003 15.9982 60.1048 16.4142 60.8455 17.1548H60.8416ZM66.1504 43.4499C67.198 43.4499 68.2027 43.0337 68.9435 42.293C69.6842 41.5522 70.1004 40.5475 70.1004 39.4999C70.1004 38.4523 69.6842 37.4476 68.9435 36.7068C68.2027 35.9661 67.198 35.5499 66.1504 35.5499H62.2004C61.1528 35.5499 60.1481 35.9661 59.4073 36.7068C58.6665 37.4476 58.2504 38.4523 58.2504 39.4999C58.2504 40.5475 58.6665 41.5522 59.4073 42.293C60.1481 43.0337 61.1528 43.4499 62.2004 43.4499H66.1504ZM38.5004 59.2499C39.548 59.2499 40.5527 59.6661 41.2935 60.4068C42.0342 61.1476 42.4504 62.1523 42.4504 63.1999V67.1499C42.4504 68.1975 42.0342 69.2022 41.2935 69.943C40.5527 70.6837 39.548 71.0999 38.5004 71.0999C37.4528 71.0999 36.4481 70.6837 35.7073 69.943C34.9666 69.2022 34.5504 68.1975 34.5504 67.1499V63.1999C34.5504 62.1523 34.9666 61.1476 35.7073 60.4068C36.4481 59.6661 37.4528 59.2499 38.5004 59.2499ZM18.9479 25.5327C19.3146 25.8997 19.7501 26.1909 20.2293 26.3896C20.7086 26.5883 21.2223 26.6907 21.7411 26.6909C22.2599 26.691 22.7737 26.589 23.2531 26.3906C23.7325 26.1923 24.1682 25.9014 24.5352 25.5347C24.9022 25.1679 25.1933 24.7325 25.392 24.2532C25.5908 23.774 25.6931 23.2603 25.6933 22.7415C25.6935 22.2226 25.5915 21.7088 25.3931 21.2294C25.1947 20.75 24.9039 20.3144 24.5371 19.9474L21.7405 17.1548C20.9956 16.4352 19.9978 16.0371 18.9621 16.0461C17.9264 16.0551 16.9357 16.4705 16.2034 17.2029C15.471 17.9352 15.0556 18.9259 15.0466 19.9616C15.0376 20.9973 15.4357 21.9951 16.1552 22.7401L18.9479 25.5327ZM24.5332 59.0524L21.7405 61.8451C20.9956 62.5646 19.9978 62.9627 18.9621 62.9537C17.9264 62.9447 16.9357 62.5293 16.2034 61.7969C15.471 61.0646 15.0556 60.0739 15.0466 59.0382C15.0376 58.0025 15.4357 57.0047 16.1552 56.2598L18.9479 53.4671C19.6929 52.7476 20.6906 52.3494 21.7263 52.3584C22.762 52.3674 23.7527 52.7829 24.4851 53.5152C25.2174 54.2476 25.6329 55.2383 25.6419 56.274C25.6509 57.3096 25.2527 58.3074 24.5332 59.0524ZM14.8004 43.4499C15.848 43.4499 16.8527 43.0337 17.5935 42.293C18.3342 41.5522 18.7504 40.5475 18.7504 39.4999C18.7504 38.4523 18.3342 37.4476 17.5935 36.7068C16.8527 35.9661 15.848 35.5499 14.8004 35.5499H10.8504C9.80279 35.5499 8.79809 35.9661 8.05732 36.7068C7.31655 37.4476 6.90039 38.4523 6.90039 39.4999C6.90039 40.5475 7.31655 41.5522 8.05732 42.293C8.79809 43.0337 9.80279 43.4499 10.8504 43.4499H14.8004Z\' fill=\'%23EF7F1A\'/%3E%3C/svg%3E%0A');
  }

  .checkbox__input:checked + span:before {
    right: -18px;
  }

  .sidebar__user-info {
    padding: 6px 10px;
    margin-bottom: 38px;
  }

  .sidebar__user-info > div:not(:last-child) {
    margin-bottom: 6px;
  }

  .sidebar__user-name {
    font-size: 21px;
    line-height: 25px;
  }

  .sidebar__user-date {
    font-size: 16px;
    line-height: 19px;
  }

  .sidebar__user-number,
  .sidebar__user-desc {
    font-size: 10px;
    line-height: 12px;
  }

  .sidebar__list-items {
    gap: 13px;
  }

  .sidebar__item-text {
    padding-top: 15px;
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 8px;
  }

  .sidebar__item-first {
    margin-bottom: 20px;
  }

  .sidebar__chart {
    max-width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }

  .sidebar__item-info {
    font-size: 29px;
  }

  .sidebar__item-briefing svg {
    width: 57px;
    height: 57px;
  }

  .sidebar__item-examiner svg {
    width: 50px;
    height: 50px;
  }

  .sidebar__item-info span {
    position: absolute;
    font-size: 20px;
    transform: translate(-25px, -5px);
    display: inline-block;
  }

  .sidebar__item-info span {
    font-size: 13px;
    transform: translate(-20px, -3px);
  }

}
</style>