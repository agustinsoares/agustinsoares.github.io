function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    sidebar.addEventListener('animationend', function () {
        if (sidebar.classList.contains('hide')) {
            sidebar.style.display = 'none';
        }
    });
}

