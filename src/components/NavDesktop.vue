<template>
  <nav id="nav">
    <div class="space-between">
      <div class="logo-container w-80 d-left">
        <img
          class="main-logo-b"
          src="@/assets/MainLogoB.svg"
          alt=""
          draggable="false"
        />
      </div>
      <div class="nav-links-container d-center fill">
        <ul class="nav-links">
          <li>
            <a href="#profile" class="nav-btn" v-smooth-scroll>Profile</a>
          </li>
          <li>
            <a href="#projects" class="nav-btn" v-smooth-scroll>Projects</a>
          </li>
          <li><a href="#skills" class="nav-btn" v-smooth-scroll>Skills</a></li>
          <li>
            <a href="#experience" class="nav-btn" v-smooth-scroll>Experience</a>
          </li>
          <li>
            <a href="#education" class="nav-btn" v-smooth-scroll>Education</a>
          </li>
          <li>
            <a href="#contact" class="nav-btn" v-smooth-scroll>Contact</a>
          </li>
        </ul>
      </div>
      <div class="contact-container w-140 d-center">
        <a href="./CV - Daniel Apodaca.pdf" class="d-button slide-btn"
          >Download CV</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navDesktop',
};
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 120px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: absolute;
  top: 0;
}
.space-between {
  max-width: 1800px;
  width: 100%;
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
}
.nav-links {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-btn {
  padding: 8px 15px;
  color: #071017;
  transition: 0.2s all ease-in-out;
  border-radius: 2px;
}
.w-140 {
  width: 140px;
}
.w-80 {
  width: 80px;
}
.main-logo-b {
  height: 50px;
}

.fill ul li a:hover {
  background: rgba(0, 0, 0, 0.05);
}

@media screen and (max-width: 700px) {
  #nav {
    display: none;
  }
}
.d-button {
  border: 1px solid #071017;
  border-radius: 2px;
  padding: 10px 20px;
  color: #071017;
}
.d-button:hover {
  color: white;
}
.slide-btn {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to right, #071017 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 210% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
.slide-btn-alt {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to right, #ffffff 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
}
.slide-btn:hover,
.slide-btn-alt:hover {
  background-position: left bottom;
}
</style>
