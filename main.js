
             function updateProductNumber(product, price, isIncreasing) {
                const productInput = document.getElementById(product + '-number');
                let productNumber = productInput.value;
                if (isIncreasing == true) {
                    productNumber = parseInt(productNumber) + 1;
                }
                else if (productNumber > 0) {
                    productNumber = parseInt(productNumber) - 1;
                }
                productInput.value = productNumber;
                // update total
                const productTotal = document.getElementById(product + '-total');
                productTotal.innerText = productNumber * price;
                // calculate total
                calculateTotal();
         }
            function getInputValue(product) {
             const productInput = document.getElementById(product + '-number');
             const productNumber = parseInt(productInput.value);
             return productNumber;
         }
            function calculateTotal() {
             const lemonTotal = getInputValue('lemon') * 30;
             const orangeTotal = getInputValue('orange') * 30;
             const mangoTotal = getInputValue('mango') * 30;
             const strawTotal = getInputValue('straw') * 50;
             const cocoTotal = getInputValue('coco') * 60;
             const subTotal = lemonTotal + orangeTotal + mangoTotal + strawTotal + cocoTotal;
             const tax = subTotal / 20;
             
             const totalPrice = subTotal + tax;
             // update on the html
             document.getElementById('sub-total').innerText = subTotal;
             document.getElementById('tax-amount').innerText = tax;
             document.getElementById('total-price').innerText = totalPrice;
         }

         // lemon increase decrease events
         document.getElementById('lemon-plus').addEventListener('click', function () {
             updateProductNumber('lemon', 30, true);
         });
         document.getElementById('lemon-minus').addEventListener('click', function () {
             updateProductNumber('lemon', 30, false);
         })


         //  orange increase decrease events
         document.getElementById('orange-plus').addEventListener('click', function () {
             updateProductNumber('orange', 30, true);
         });
         document.getElementById('orange-minus').addEventListener('click', function () {
             updateProductNumber('orange', 30, false);
         })

         // mango increase decrease events
         document.getElementById('mango-plus').addEventListener('click', function () {
             updateProductNumber('mango', 30, true);
         });
         document.getElementById('mango-minus').addEventListener('click', function () {
             updateProductNumber('mango', 30, false);
         })


         //  straw increase decrease events
         document.getElementById('straw-plus').addEventListener('click', function () {
             updateProductNumber('straw', 50, true);
         });
         document.getElementById('straw-minus').addEventListener('click', function () {
             updateProductNumber('straw', 50, false);
         })

         //  coconutt increase decrease events
         document.getElementById('coco-plus').addEventListener('click', function () {
             updateProductNumber('coco', 60, true);
         });
         document.getElementById('coco-minus').addEventListener('click', function () {
             updateProductNumber('coco', 60, false);
         })