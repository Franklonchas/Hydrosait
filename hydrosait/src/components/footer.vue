<template>
  <nav class="navbar navbar-light bg-light justify-content-center">
    {{ nowTime }}
  </nav>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      nowTime: null
    }
  },
  beforeMount () {
    this.nowTimes();
  },
  methods: { 
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      this.nowTime = date + "-" + month + "-" + year + " " + hh + ":" + mm + ":" + ss; 
    },
    nowTimes(){
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
    },
  }
}
</script>