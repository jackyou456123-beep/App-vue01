<template>
  <div>

  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container">

      <a class="navbar-brand" href="/">Navbar</a>

      <button class="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Customer">Customer</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Contact">Contact</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Type">Type</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Employees">Employees</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Product_api">Product_api</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Product">Product</a>
          </li>

          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" 
               href="#" 
               role="button" 
               data-bs-toggle="dropdown">
              Dropdown
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Employees_crud">Employees_curd</a></li>
              <li><a class="dropdown-item" href="/product">Product</a></li>
              <li><a class="dropdown-item" href="/product_api">Product_api</a></li>
              <li><a class="dropdown-item" href="/sh_std">Sh_std</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/sh_product">Show Product</a></li>
              <li><a class="dropdown-item" href="/Type_crud">Type_crud</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>

        </ul>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search"/>
          <button class="btn btn-warning" type="submit">Search</button>
        </form>

      </div>
    </div>
  </nav>

  <router-view/>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
