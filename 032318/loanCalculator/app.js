// Listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide results
    document.getElementById('results').style.display = 'none';

    // Show loader
    document.getElementById('loading').style.display = 'block';
    window.scrollTo(0,document.body.scrollHeight);

    setTimeout(calculateResults, 3000);


    e.preventDefault();

});



// Calculate Results
function calculateResults(){
    console.log('results');
    //UI Vars
    const amountEl = document.getElementById('amount');
    const interestEl = document.getElementById('interest');
    const yearsEl = document.getElementById('years');
    const monthlyPaymentEl = document.getElementById('monthly-payment');
    const totalPaymentEl = document.getElementById('total-payment');
    const totalInterestEl = document.getElementById('total-interest');

    const principalEl = parseFloat(amountEl.value);
    const calculatedInterestEl = parseFloat(interestEl.value) / 100 / 12;
    const calculatedPaymentsEl = parseFloat(yearsEl.value) * 12;

    // Compute Monthly Payment
    const x = Math.pow(1 + calculatedInterestEl, calculatedPaymentsEl);
    const monthlyEl = (principalEl * x * calculatedInterestEl)/(x-1);

    if(isFinite(monthlyEl)) {
        monthlyPaymentEl.value = monthlyEl.toFixed(2);
        totalPaymentEl.value = (monthlyEl* calculatedPaymentsEl).toFixed(2);
        totalInterestEl.value = ((monthlyEl * calculatedPaymentsEl) - principalEl).toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';

    } else {
        showError('please check your numbers');

    }


}

function showError(error){

    // Hide results
    document.getElementById('results').style.display = 'none';

    // Hide loader
    document.getElementById('loading').style.display = 'none';


    // Create a Div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card');
    // const heading = document.querySelector('.heading');


    // Add Class
    errorDiv.className = 'alert alert-danger';

    // Create Text node and Append to Div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert Error above Heading
    card.insertBefore(errorDiv, document.getElementById('loading'));

    // Clear error after 3 sec
    setTimeout(clearError, 1000);


}

function clearError(){
    // let fadeTarget = document.querySelector('.alert');
    // let fadeEffect = setInterval(function () {
    //     if (!fadeTarget.style.opacity) {
    //         fadeTarget.style.opacity = 1;
    //     }
    //     if (fadeTarget.style.opacity < 0.1) {
    //         clearInterval(fadeEffect);
    //     } else {
    //         fadeTarget.style.opacity -= 0.1;
    //     }
    // }, 50);
    document.querySelector('.alert').remove()


}



