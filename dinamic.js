const loginButton=document.getElementById("enter");
loginButton.addEventListener("click",function () {
    const loginArea=document.getElementById("login-area");
    loginArea.style.display="none";

    const TransactionArea=document.getElementById("trans-area");
    TransactionArea.style.display="block";
   
});

 //Deposit Button 
 const DepositButton=document.getElementById("depositButton");
 DepositButton.addEventListener("click",function ()
  {
    const depositAmount=document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositAmount);

    // const currentAmount=document.getElementById("currentAmount").innerText;
    // const currentAmountNumber=parseFloat(currentAmount);

    // const total=depositNumber+currentAmountNumber;

    // document.getElementById("currentAmount").innerText=total;
    changeFieldValue("currentAmount",depositNumber);
    changeFieldValue("balanceAmount",depositNumber);

    document.getElementById("depositAmount").value="0";

    // const balanceAmount=document.getElementById("balanceAmount").innerText;
    // const balanceNumber=parseFloat(balanceAmount);
    // const totalBalance=balanceNumber+depositNumber;

    // document.getElementById("balanceAmount").innerText=totalBalance;

     
 });

 function changeFieldValue(id,depositNumber){
    const currentAmount=document.getElementById(id).innerText;
    const currentAmountNumber=parseFloat(currentAmount);

    const total=depositNumber+currentAmountNumber;
    document.getElementById(id).innerText=total;

 };




 //Withdraw Button
 const withdrawButton=document.getElementById("withdrawButton");
    withdrawButton.addEventListener("click",function () {
        const withdrawAmount=document.getElementById("withdrawAmount").value;
        const withdrawNumber=parseFloat(withdrawAmount);

        const withdraw=changeWithdraw("currentWithdraw");
        const balance=changeWithdraw("balanceAmount");

        const totalWithdraw=withdraw+withdrawNumber;
        const netBalance=balance-withdrawNumber;

        document.getElementById("currentWithdraw").innerText=totalWithdraw;
        document.getElementById("balanceAmount").innerText=netBalance;

        document.getElementById("withdrawAmount").value="0";


        
    });
    function changeWithdraw(id){
        const current=document.getElementById(id).innerText;
        const currentNumber=parseFloat(current);
        return currentNumber;

    }



