<script setup lang="ts">
import BellIcon from './icon/BellIcon.vue';
import BluetoothIcon from './icon/BluetoothIcon.vue';
import LteIcon from './icon/LteIcon.vue';
import SearchIcon from './icon/SearchIcon.vue';
import WhetherIcon from './icon/WhetherIcon.vue';
import WhetherSmallIcon from './icon/WhetherSmallIcon.vue';
import WifiIcon from './icon/WifiIcon.vue';

interface IProps {
  imagePath?: string | undefined;
}
defineProps<IProps>();
</script>

<template>
  <div class="rightLayout">
    <div class="status-bar">
      <div class="content">
        <SearchIcon />
        <BellIcon />
        <BluetoothIcon />
        <WifiIcon />
        <LteIcon />
        <div class="time">오후 2:01</div>
      </div>
    </div>
    <div class="whether-container">
      <div class="header">
        <div class="handle"></div>
      </div>
      <div class="body">
        <div class="content">
          <div class="temp-info">
            <div class="region">서울특별시</div>
            <div class="temp">22°</div>
            <div class="cloud">구름 많음</div>
          </div>
          <WhetherIcon />
          <div class="wether-info-detail">
            <div class="wind col">
              <div class="label">바람</div>
              <div class="value">서풍 2m/s</div>
            </div>
            <div class="vertical"></div>
            <div class="rain col">
              <div class="label">강수</div>
              <div class="value">0mm</div>
            </div>
            <div class="vertical"></div>
            <div class="water col">
              <div class="label">습도</div>
              <div class="value">40%</div>
            </div>
          </div>
        </div>
        <div class="timeline">
          <div class="col">
            <div class="time">지금</div>
            <WhetherSmallIcon :icon-name="'sun'" />
            <div class="temp">22°</div>
          </div>
          <div class="col">
            <div class="time">오후 4시</div>
            <WhetherSmallIcon :icon-name="'sun'" />
            <div class="temp">21°</div>
          </div>
          <div class="col">
            <div class="time">오후 5시</div>
            <WhetherSmallIcon :icon-name="'sun'" />
            <div class="temp">19°</div>
          </div>
          <div class="col">
            <div class="time">오후 5:13</div>
            <WhetherSmallIcon :icon-name="'sunset'" />
            <div class="temp">일몰</div>
          </div>
          <div class="col">
            <div class="time">오후 6시</div>
            <WhetherSmallIcon :icon-name="'moon'" />
            <div class="temp">18°</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rightLayout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .status-bar {
    display: flex;
    width: 100%;
    padding: 12px 24px;
    height: 88px;
    align-items: center;

    .content {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      gap: 22px;
      width: 100%;
      height: 64px;
      background-color: white;

      .time {
        font-size: 28px;
        font-weight: 500;
        color: #1c1c1d;
      }
    }
  }

  .whether-container {
    display: flex;
    flex-direction: column;
    background-color: #f5f8fe;
    width: 100%;
    height: 100%;
    border-radius: 36px;
    box-shadow: 5px 6px 20px 0px rgba(0, 0, 0, 0.1);

    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;

      .handle {
        width: 140px;
        height: 8px;
        background-color: #dedee0;
        border-radius: 1000px;
        margin-top: 16px;
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px;
      padding-top: 80px;
      height: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 49px;

      .temp-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;

        .region {
          font-size: 36px;
          font-weight: 500;
          color: #1c1c1d;
        }

        .temp {
          font-size: 90px;
          font-weight: 500;
          color: #1c1c1d;
        }

        .cloud {
          font-size: 32px;
          font-weight: 500;
          color: #1c1c1d;
        }
      }

      .wether-info-detail {
        display: flex;
        flex-direction: row;
        gap: 39px;
        height: 220px;
        width: 100%;
        align-items: center;

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          .label {
            font-size: 24px;
            font-weight: 500;
            color: #6f6f72;
          }

          .value {
            font-size: 32px;
            font-weight: 500;
            color: #1c1c1d;
          }
        }

        .vertical {
          width: 1px;
          height: 61px;
          background-color: #d0d0d6;
        }
      }
    }

    .timeline {
      width: 100%;
      height: 210px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 30px 24px;
      background-color: white;
      border-radius: 18px;
      gap: 22px;

      .col {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        text-align: center;
        align-items: center;
        height: 128px;

        .time {
          font-size: 22px;
          font-weight: 500;
          color: #1c1c1d;
        }

        .temp {
          text-align: center;
          font-size: 22px;
          font-weight: 500;
          color: #1c1c1d;
        }
      }
    }
  }
}
</style>
