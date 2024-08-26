//your JS code here. If required.
function updateScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.querySelector('#sizeInfo h1').textContent = `Width: ${width}, Height: ${height}`;
}
window.addEventListener('resize', updateScreenSize);
updateScreenSize();