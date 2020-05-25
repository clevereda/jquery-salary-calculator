$(document).ready(realready);
let totalMonthly = 0;

//function real ready
function realready (){
    
$('.submitButton').on('click', function(){
    totalMonthly += ($('.annual-salary').val()/12);
    if (totalMonthly > 20000) {
        $('.amount').css('background-color', 'red');
    }

    let elAmount = $('.amount');
    elAmount.empty();
    elAmount.append(`Total Monthly: $` + totalMonthly);

    let firstN = $('.first-name').val();
    let lastN = $('.last-name').val();
    let idnum = $('.Employee-ID').val();
    let Emtitle = $('.Employee-title').val();
    let salaryAm = $('.annual-salary').val();

    //Assign input values to table columns & append to DOM as a table row
    $('.tablebod').append(`<tr><td>${firstN}</td><td>${lastN}</td><td>${idnum}</td><td>${Emtitle}</td><td>${salaryAm}</td> <td> <button type='submit' class='deletion'>Delete </button>
    </td> </tr>`);
   
    $('.deletion').on('click', function (){
        this.parent().parent().val('');
    });

    //emptying input fields
    $('.first-name').val('');
    $('.last-name').val('');
    $('.Employee-ID').val('');
    $('.Employee-title').val('');
    $('.annual-salary').val('');
});//end of anonymous function
}//end of realready