<script setup>
</script>

<template>
  <div class="sidebar__exit">
    <div class="sidebar__exit-text">Выход</div>
    <div class="sidebar__exit-icon">
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.4444 47H42.5556C45.0067 47 47 45.0067 47 42.5556V33.6667H42.5556V42.5556H11.4444V11.4444H42.5556V20.3333H47V11.4444C47 8.99333 45.0067 7 42.5556 7H11.4444C8.99333 7 7 8.99333 7 11.4444V42.5556C7 45.0067 8.99555 47 11.4444 47Z"
            fill="#E6E6E6"/>
        <path d="M29.1538 18L18 27L29.1538 36V29.2477H47V24.7477H29.1538V18Z" fill="#E6E6E6"/>
      </svg>
    </div>
  </div>
</template>

<style>
.sidebar__exit {
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all .3s;
}

.sidebar__exit svg path {
  transition: fill .3s;
}

.sidebar__exit:hover svg path,
.sidebar__exit:hover {
  fill: rgba(230, 230, 230, 0.73);
  color: rgba(230, 230, 230, 0.73);
}

.sidebar__exit:active svg path,
.sidebar__exit:active {
  fill: rgba(230, 230, 230, 0.45);
  color: rgba(230, 230, 230, 0.45);
}

.sidebar__theme_white .sidebar__exit:hover svg path,
.sidebar__theme_white .sidebar__exit:hover {
  fill: #EF7F1A;
  color: #EF7F1A;
}

.sidebar__theme_white .sidebar__exit:active svg path,
.sidebar__theme_white .sidebar__exit:active {
  fill: rgba(239, 127, 26, 0.4);
  color: rgba(239, 127, 26, 0.4);
}

.sidebar__exit-text {
  font-size: 24px;
}

@media (max-width: 1550px) {
  .sidebar__exit {
    gap: 6px;
  }

  .sidebar__exit svg {
    width: 36px;
    height: 36px;
  }
}
</style>