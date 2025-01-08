# hstudio-web

H.Studio 프로젝트 개요입니다.

<p>
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Pinia-FFD85A?style=for-the-badge&logo=pinia&logoColor=white">
</p>


<br>


## 1. 파일 구조

```
src
┣ asset                           // 정적 리소스(이미지, 스타일시트 등)
┃ ┣ img                           // 이미지 파일
┃ ┃ ┣ ic_apps_bluetooth.svg
┃ ┃ ┣ ...
┃ ┗ style                         // 전역 스타일 시트
┃ ┃ ┗ global.css
┣ component                       // UI를 구성하는 재사용 가능한 컴포넌트 모음
┃ ┣ icon                          // 아이콘 관련 컴포넌트를 관리하는 폴더
┃ ┃ ┣ AppsIcon.vue
┃ ┃ ┣ ...
┃ ┣ CommonNavigation.vue
┃ ┣ CommonApps.vue
┃ ┣ ConnectMeet.vue
┃ ┣ UxDataVisualization.vue
┃ ┣ ...
┣ layout                          // 레이아웃 컴포넌트
┃ ┣ GNB.vue
┃ ┗ StatusBar.vue
┣ router                          // 라우터
┃ ┗ index.ts
┣ store                           // 전역 상태 관리
┣ view                            // 화면
┃ ┣ ConnectSView.vue
┃ ┣ ConnectWView.vue
┃ ┗ UxView.vue
┣ App.vue
┗ main.ts

```

### 1.1. View 구성 에시

```js
// UxView.vue

<template>
  <div class="container">
    <div class="header">                         // 헤더(Status Bar)
      <StatusBar />
    </div>
    <div class="main-content">
      <div class="left">                         // Left Split
        <CommonCluster />
      </div>
      <div class="middle">
        <CommonNavigation />                     // Middle Split
      </div>
      <div class="right">
        <CommonForecast />                       // Right Split
      </div>
    </div>
    <div class="footer">
      <GNB />                                    // 푸터(Global Naviation Bar)
    </div>
  </div>
</template>
```

<br>

## 2. Vue 구조
- Vue의 권장 구조인 `SFC`(Single-File Component)를 사용합니다.
  - _참고: [Single-File Components | Vue.js](https://vuejs.org/guide/scaling-up/sfc.html)_
- `script setup typescript`를 사용합니다.
  - _참고: [script setup | Vue.js](https://vuejs.org/api/sfc-script-setup.html)_  
- `script - template - style` 순서를 준수합니다.

```js
<script setup lang="ts">
  ...
</script>

<template>
  <div></div>
  ...
</template>

<style scoped>
  ...
</style>
```



<br>


## 3. 네이밍 컨벤션

### 3.1. Vue

`Pascal Case`

```
PascalCase.vue
```

### 3.2. Class(CSS)

`kebab-case`

```css
.kebab-case {
  ...
}
```

### 3.3. Asset

`Snake Case`

``` 
snake_case_1.png
```

