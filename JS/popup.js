//function to show popup
function popup(head, text) {
    var popup=document.getElementById('alert');
    var popuphead=document.getElementById('popup-header');
    var popuptext=document.getElementById('popup-desc');
    popuphead.innerHTML=head;
    popuptext.innerHTML=text;
    popup.classList.toggle('active');
}
//function to close popup
function closepopup() {
    var popup=document.getElementById('alert');
    popup.classList.toggle('active');
}