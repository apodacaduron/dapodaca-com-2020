<template>
  <section id="education">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Education</h4>
      <h2>Summary</h2>
    </div>
    <div class="education-content">
      <img src="@/assets/education/education.svg" alt="">
      <div class="text-cont">
        <h3>Instituto Tecnologico Superior de Nuevo Casas Grandes</h3>
        <div>Ingenieria en Sistemas Computacionales {{ getPeriods }}</div>
        <ul>
          <li>Moved to a new city for my professional practices.</li>
          <li>Developed a Laravel based system for a company.</li>
          <li>Imparted a course of design using photoshop.</li>
          <li>Collaborated on the organization of many school events.</li>
          <li>Completed an entrepreneurship course.</li>
          <li>Approved EGEL exam.</li>
        </ul>
      </div>
    </div>
    <div class="divider d-bottom"></div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  name: 'EducationSection',
  computed: {
    getPeriods () {
      return `${moment(2014, 'YYYY').diff(moment(2018, 'YYYY'), 'months')} Months`;
    }
  },
}
</script>

<style lang="scss" scoped>
#education {
  min-height: 450px;
  width: 100%;
  padding: 70px 20px 70px 20px;
  box-sizing: border-box;
  position: relative;
  .education-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }
    .text-cont {
      width: 50%;
      padding: 0 50px;
      ul, div {
        color: #555555;
      }
    }
  }
  .divider {
    width: 100%;
    position: absolute;
    height: 30px;
    left: 0;
    background: url('../../assets/divider.svg');
    background-size: auto 105%;
  }
  .d-top {
    top: 0;
    transform: rotate(180deg);
  }
  .d-bottom {
    bottom: 0;
  }
  .title-container {
    text-align: center;
    margin: 0 0 20px 0;
    h4 {
      font-size: 1.4rem;
      font-weight: lighter;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .education-content {
    img {
      display: none;
    }
    p {
      width: 100% !important;
    }
  }
}
</style>