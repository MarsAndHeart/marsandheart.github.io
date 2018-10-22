window.alert = modal;
function modal(str = 'this is modal str') {

  var mask = document.createElement("div");
  mask.id = 'modalmask';
  mask.style.width = '100vw';
  mask.style.height = '100vh';
  mask.style.position = 'fixed';
  mask.style.left = '0';
  mask.style.right = '0';
  mask.style.top = '0';
  mask.style.bottom = '0';
  mask.style.backgroundColor = 'rgba(0,0,0,0.2)';
  mask.style.display = 'flex';
  mask.style.flex = '1';
  mask.style.alignItems = 'center';
  mask.style.justifyContent = 'center';
  mask.onclick = hideModal;

  function hideModal() {
    var masks = document.querySelectorAll('#modalmask');
    if (masks.length < 1) {
      return;
    }
    const target = masks[masks.length - 1];
    document.body.removeChild(target);
  }

  var modal = document.createElement("div");
  modal.style.width = '60vw';
  modal.style.backgroundColor = 'white';
  modal.style.borderRadius = '2vw';
  modal.style.textAlign = 'center';

  var modalText = document.createElement("div");
  modalText.style.margin = '3vw';

  var modalTextStr = document.createTextNode(str);

  var modalBtn = document.createElement("div");
  modalBtn.style.borderTop = '1px solid #F4F4F4';
  modalBtn.style.marginLeft = '3vw';
  modalBtn.style.marginRight = '3vw';
  modalBtn.style.paddingTop = '3vw';
  modalBtn.style.paddingBottom = '3vw';
  modalBtn.style.color = '#176FDA';

  var modalBtnStr = document.createTextNode('确定');

  modalText.appendChild(modalTextStr);
  modal.appendChild(modalText);

  modalBtn.appendChild(modalBtnStr);
  modal.appendChild(modalBtn);

  mask.appendChild(modal);

  document.body.appendChild(mask);

}
