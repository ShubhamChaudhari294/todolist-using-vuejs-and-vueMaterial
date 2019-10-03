<template>
<div>
<md-subheader>
<div class="md-layout md-gutter width100">
      <div class="md-layout-item md-size-50 md-primary"><b>Trip to Napa</b> (#CN190919-210919) <md-chip class="md-card">Draft</md-chip></div>
      <div class="md-layout-item md-size-50 align-right">Package Tour <md-switch></md-switch> <b> Custom Trip </b><md-icon>more_vert</md-icon>
      </div>
</div>
<div class="md-layout md-gutter width100">
      <div class="md-layout-item md-size-50 md-primary"><md-chip class="md-card">Sep 21, 2019</md-chip></div>
      <div class="md-layout-item md-size-50 align-right"><md-button class="md-primary md-dense" ><md-icon>add</md-icon>Add option</md-button>
      </div>
</div>
</md-subheader>
<div class="md-layout md-card md-gutter">
      <md-steppers class="md-layout-item" md-vertical>
      <md-step id="first" md-label="Transportation pickup"  md-description="10:00 AM">
      <md-card md-with-hover >
        <div class="md-layout md-gutter">
           <div class="md-layout-item md-size-80">
            <md-card-header>
                <b>Pickup in San Jose </b>
                <div>Hytt place San Jose/Downtown 282 Almaden Blvd, San Jose, CA, 95113, USA</div>
            </md-card-header>
           </div>
           <div class="md-layout-item md-size-20 md-primary">
              <b>$000</b>
                  <md-icon>more_vert</md-icon>
           </div>
        </div>
      </md-card>
      <br>
      <br>
      <md-card md-with-hover>
        <div class="md-layout md-gutter">
           <div class="md-layout-item md-size-30 md-primary">
              <img src="../assets/van.jpg" alt="Cover">
           </div>
           <div class="md-layout-item md-size-50">
            <md-card-header>
                <b>Passenger Van </b> Lincoln Navigator <md-icon style="color:green">check_box</md-icon>
                <div>Standard 7-seater passenger van .  Moderate Price</div>
            </md-card-header>
           </div>
           <div class="md-layout-item md-size-20 md-primary">
              <b>$600</b>
                  <md-icon>more_vert</md-icon>
           </div>
        </div>
      </md-card>
      </md-step>
      <md-step id="second" md-label="Winery 1" desription="11.30 AM">
      <md-card md-with-hover>
        <div class="md-layout md-gutter">
           <div class="md-layout-item md-size-30 md-primary">
              <img src="../assets/winery.jpg" alt="Cover">
           </div>
           <div class="md-layout-item md-size-50">
            <md-card-header>
                <b>Robert Mondavi </b> St Helena <md-icon style="color: green">add_circle</md-icon>
                <div><b>Reserve Testing </b> <a href="#">Manage</a> </div>
                <p>Famous Winery.Great place to start the day.Moderate price</p>
                <p><b>94</b> points by wine advocate | <span style="color: red"><md-icon style="color: red">star</md-icon><md-icon style="color: red">star</md-icon><md-icon style="color: red">star</md-icon><md-icon style="color: red">star</md-icon><md-icon style="color: red">star</md-icon></span> 5 yelp rating</p> 
            </md-card-header>
           </div>
           <div class="md-layout-item md-size-20 md-primary">
              $20 per person   <b>$140</b>
                  <md-icon>more_vert</md-icon>
           </div>
        </div>
      </md-card>
      </md-step>

      <md-step id="third" md-label="Transportation - pickup">
        <md-card md-with-hover>
        <div class="md-layout md-gutter">
           <div class="md-layout-item md-size-80">
            <md-card-header>
                <b>Drop off in San Jose </b>
                <div>Hytt place San Jose/Downtown 282 Almaden Blvd, San Jose, CA, 95113, USA</div>
            </md-card-header>
           </div>
           <div class="md-layout-item md-size-20 md-primary">
              <b>$000</b>
                  <md-icon>more_vert</md-icon>
           </div>
        </div>
      </md-card>
      </md-step>
    </md-steppers>
</div>
</div>
</template>
<script>
export default {
  props: [],
  name: 'HelloWorld',
  data: function () {
      return {
    }
  }
}
</script>
<style scoped>
.width100 {
  width: 100%;
}
.align-right {
  text-align: right
}
.red {
  color: red;
}
.greenColor {
  color: green;
}
</style>
