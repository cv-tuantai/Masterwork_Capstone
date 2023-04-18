// Switch theme
document.getElementById('btnSwitchDark').onclick = function(){
    document.getElementById('body').className = 'switch-theme';
    document.getElementById('btnSwitchDark').style.display = 'none';
    document.getElementById('btnSwitchLight').style.display = 'inline-block';
};

document.getElementById('btnSwitchLight').onclick = function(){
    document.getElementById('body').classList.remove('switch-theme');
    document.getElementById('btnSwitchDark').style.display = 'inline-block';
    document.getElementById('btnSwitchLight').style.display = 'none';
};

// Show/Hide button in header
document.getElementById('btnOpen').onclick = function(){
    document.getElementById('btnOpen').style.display = 'none';
    document.getElementById('btnClose').style.display = 'block';
};

document.getElementById('btnClose').onclick = function(){
    document.getElementById('btnClose').style.display = 'none';
    document.getElementById('btnOpen').style.display = 'block';
};