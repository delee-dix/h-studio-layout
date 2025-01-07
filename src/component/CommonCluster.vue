<script setup lang="ts">
import { ref } from 'vue';

import HdaIcon from './icon/HdaIcon.vue';
import LockIcon from './icon/LockIcon.vue';
import BatteryIcon from './icon/BatteryIcon.vue';
import LeftCarModel from './img/LeftCarModel.vue';
import GearBar from './img/GearBar.vue';

const activeGear = ref('P');
const isOn = ref(false);

const gears = ['P', 'R', 'N', 'D'];

const toggleSwitch = () => {
  isOn.value = !isOn.value;
};

const setActiveGear = (gear: string) => {
  if (!gears.includes(gear)) return;
  activeGear.value = gear;
};

interface IProps {
  imagePath?: string | undefined;
  leftImage?: string | undefined;
  leftChart?: string | undefined;
  rightImage?: string | undefined;
  rightChart?: string | undefined;
  isData?: boolean;
}
defineProps<IProps>();
</script>

<template>
  <div class="left-layout">
    <div v-if="isData" class="data-screen">
      <div class="title">Data Analysis</div>
      <div class="image-container">
        <div class="left-info">
          <img :src="leftImage" class="left-image" alt="1" />
          <img :src="leftChart" class="left-chart" alt="2" />
        </div>
        <div class="right-info">
          <img :src="rightImage" class="right-image" alt="3" />
          <img :src="rightChart" class="right-chart" alt="4" />
        </div>
      </div>
    </div>
    <div v-else class="default-screen">
      <div class="speed-info">
        <div class="gear-info">
          <template v-if="activeGear === 'P'">
            <div class="gear">P</div>
          </template>
          <template v-else>
            <div class="gear">64</div>
            <div class="speed">KM/H</div>
          </template>
        </div>
        <div v-if="activeGear === 'D'" class="hda">
          <HdaIcon />
          <div class="value">60</div>
        </div>
        <div v-if="activeGear === 'D'" class="max-speed">
          <div class="icon">
            <div class="label">80</div>
          </div>
          <div class="value">320m</div>
        </div>
      </div>
      <div class="gear-list">
        <div
          v-for="gear in gears"
          :key="gear"
          class="gear"
          :class="{ inactive: gear !== activeGear }"
        >
          {{ gear }}
        </div>
      </div>
      <div class="content">
        <LeftCarModel />
        <div class="toggle-wrapper">
          <div class="lock-toggle" :class="{ active: isOn }" @click="toggleSwitch">
            <div class="toggle-track">
              <div class="toggle-handle">
                <LockIcon />
              </div>
            </div>
          </div>
          <div class="speed">0km</div>
        </div>
      </div>
      <div class="gear-bar">
        <GearBar />
      </div>
      <div class="battery-info">
        <div class="distance">316km</div>
        <BatteryIcon />
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-layout {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .default-screen {
    display: flex;
    width: 100%;
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      gap: 84px;
      align-items: center;
      justify-content: center;
    }

    .speed-info {
      position: absolute;
      top: 47px;
      left: 29px;
      display: flex;
      flex-direction: column;

      .gear-info {
        display: flex;
        flex-direction: column;

        .gear {
          font-size: 132px;
          font-weight: 700;
          line-height: 112px;
          height: fit-content;
        }

        .speed {
          font-size: 28px;
          color: #a7a7aa;
        }
      }

      .hda {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        margin-top: 16px;

        .value {
          font-size: 28px;
          font-weight: 700;
          color: #6052ee;
        }
      }

      .max-speed {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: center;

        .icon {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 92px;
          height: 92px;
          background-color: white;
          border: 8px solid #f94040;
          border-radius: 100px;

          .label {
            margin-top: 8px;
            font-size: 40px;
            font-weight: 700;
            color: black;
          }
        }

        .value {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 500;
          color: #3c3c3f;
          height: 36px;
        }
      }
    }

    .gear-list {
      position: absolute;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);
      height: 56px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .gear {
        font-size: 28px;
        font-weight: 700;
        color: black;

        &.inactive {
          color: #a7a7aa;
        }
      }
    }

    .toggle-wrapper {
      display: flex;
      flex-direction: column;
      gap: 64px;
      align-items: center;

      .lock-toggle {
        width: 130px;
        height: 68px;
        border-radius: 10000px;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .toggle-track {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #a7a7aa;
          border-radius: 14px;
          transition: background-color 0.3s ease;

          .toggle-handle {
            position: absolute;
            top: 4px;
            left: 4px;
            width: 76px;
            height: 60px;
            background-color: white;
            border-radius: 10000px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            transition:
              left 0.3s ease,
              background-color 0.3s ease;
          }
        }

        &.active {
          .toggle-track {
            .toggle-handle {
              left: calc(100% - 80px);
            }
          }
        }
      }

      .speed {
        font-size: 24px;
        color: #8f8f93;
      }
    }

    .gear-bar {
      position: absolute;
      top: 25%;
      left: 0;
    }

    .battery-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      position: absolute;
      top: 14px;
      right: 22px;

      .distance {
        font-size: 28px;
        font-weight: 500;
        color: #1c1c1d;
      }
    }
  }

  .data-screen {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5vh;
  }

  .title {
    font-size: 50px;
    color: blue;
    padding: 20px;
  }

  .image-container {
    display: flex;
    gap: 20px;
  }

  .left-info,
  .right-info {
    display: flex;
    flex-direction: column;
  }
}
</style>
