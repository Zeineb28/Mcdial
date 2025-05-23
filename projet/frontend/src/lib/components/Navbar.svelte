<script>
  // @ts-nocheck
  import { createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation';
  import { fetchWithAuth } from '$lib/utils/fetchWithAuth.js';
  import { errorStore } from '$lib/stores/errorStore.js';
  
  let isMenuOpen = false;
  let isLoggingOut = false;
  const dispatch = createEventDispatcher();
  
  function toggleSidebar() {
    dispatch('toggleSidebar');
  }

  async function handleLogout() {
    try {
      isLoggingOut = true;
      
      const response = await fetchWithAuth('http://localhost:8000/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        // Clear all authentication-related data from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('user_level');
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
        
        // Clear cookies manually
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=localhost;';
        document.cookie = 'user_level=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=localhost;';
        
        console.log('All authentication data cleared');
        
        // Redirect to login page
        goto('/login');
      } else {
        const data = await response.json();
        errorStore.set(data.message || 'Échec de la déconnexion');
        setTimeout(() => errorStore.set(''), 3000);
      }
    } catch (err) {
      console.error('Logout error:', err);
      errorStore.set('Erreur lors de la déconnexion');
      setTimeout(() => errorStore.set(''), 3000);
    } finally {
      isLoggingOut = false;
    }
  }
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div class="container-fluid px-4">
    <!-- Sidebar toggle for mobile -->
    <button 
      class="btn btn-outline-primary me-3 d-md-none" 
      type="button" 
      on:click={toggleSidebar}
    >
      <i class="bi bi-list"></i>
    </button>

    <!-- Logo with modern styling -->
    <a class="navbar-brand d-flex align-items-center" href="/">
      <div class="logo-container me-3">
        <img src="/logoMC.jpeg" alt="Mcdial Logo" class="rounded-logo">
      </div>
      <span class="fw-bold mc-text">Mcdial</span>
    </a>

    <!-- Responsive toggle -->
    <button 
      class="navbar-toggler" 
      type="button" 
      on:click={() => isMenuOpen = !isMenuOpen}
      aria-expanded={isMenuOpen}
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navigation items that collapse on mobile -->
    <div class="collapse navbar-collapse" class:show={isMenuOpen}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ms-lg-2">
          <button 
            class="btn btn-outline-danger d-flex align-items-center" 
            on:click={handleLogout}
            disabled={isLoggingOut}
          >
            {#if isLoggingOut}
              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              <span>Déconnexion...</span>
            {:else}
              <i class="bi bi-box-arrow-right me-2"></i>
              <span>Déconnexion</span>
            {/if}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  /* Styles for the navbar */
  .navbar {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  /* Logo styles */
  .logo-container {
    width: 90px;
    height: 70px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  
  .rounded-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .navbar-brand {
    font-size: 1.6rem;
    transition: transform 0.2s ease;
  }
  
  .mc-text {
    color: #F5921D; /* Couleur orange du logo MC Solution */
    letter-spacing: 0.5px;
  }
  
  .navbar-brand:hover {
    transform: translateY(-2px);
  }
  
  /* Button styling */
  .btn-outline-danger {
    border-radius: 6px;
    transition: all 0.3s ease;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }
  
  .btn-outline-danger:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(220, 53, 69, 0.2);
  }
</style>