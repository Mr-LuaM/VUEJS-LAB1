<template>
  <!-- Sidebar Start -->
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div>
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <router-link to="/" class="text-nowrap logo-img">
          <!-- Use router-link to navigate to the home page -->
          <img src="/admin/images/logos/dark-logo.svg" width="180" alt="" />
        </router-link>
        <div
          class="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
        >
          <i class="ti ti-x fs-8"></i>
        </div>
      </div>
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Home</span>
          </li>
          <li class="sidebar-item">
            <!-- Use router-link to navigate to the "Manage" page -->
            <router-link
              to="/manage"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-layout-dashboard"></i>
              </span>
              <span class="hide-menu">Manage</span>
            </router-link>
          </li>
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Others</span>
          </li>
          <li class="sidebar-item">
            <router-link
              to="/others"
              class="sidebar-link"
              aria-expanded="false"
            >
              <span>
                <i class="ti ti-article"></i>
              </span>
              <span class="hide-menu">Buttons</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
  <!--  Sidebar End -->
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
