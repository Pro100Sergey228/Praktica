let name=localStorage.getItem('name')?localStorage.getItem('nane'):''
console.log(name);
if(name=='')
{
    alert('Авторизируйтесь для входа в страницу');
    window.location.href="index.html";
}
function Logout()
{
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.href="index.html";
}