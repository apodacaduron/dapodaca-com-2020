<template>
<nav id="nav">
    <div class="space-between">
        <div class="logo-container w-80 d-left">
            <img class="main-logo-b" src="@/assets/MainLogoB.svg" alt="" draggable="false">
        </div>
        <div class="nav-links-container d-center fill">
            <ul class="nav-links">
                <li><a href="" class="nav-btn uppercase">Work</a></li>
                <li><a href="" class="nav-btn uppercase">Photography</a></li>
                <li><a href="" class="nav-btn uppercase">Videos</a></li>
                <li><a href="" class="nav-btn uppercase">About</a></li>
            </ul>
        </div>
        <div class="contact-container w-140 d-center">
            <a href="" class="slide-btn contact-btn uppercase">Get in Touch</a>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'navDesktop',
  components: {
  }
}
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
.contact-btn {
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px 25px;
  color: black;
}
.contact-btn:hover {
  color: white;
}
.main-logo-b {
	height: 50px;
}

.fill ul li a:hover {
	background: rgba(0, 0, 0, 0.05);
}
</style>
