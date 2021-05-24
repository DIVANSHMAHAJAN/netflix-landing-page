const tabitems=document.querySelectorAll('.tab-item');
const tabcontentitems=document.querySelectorAll('.tab-content-item');
function selectitem(e)
{
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	const taboncontent=document.querySelector(`#${this.id}-content`);
	taboncontent.classList.add('show');
}
function removeBorder()
{
	tabitems.forEach(item=>item.classList.remove('tab-border'))
}

function removeShow()
{
	tabcontentitems.forEach(item=>item.classList.remove('show'))
}








tabitems.forEach(item => item.addEventListener('click',selectitem));