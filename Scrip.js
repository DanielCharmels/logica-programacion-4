function isNumber(value) {
    return !isNaN(value) && Number(value) > 0;  // Verifica si es un número positivo
  }
  
  function generateFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci.slice(0, n);  // Devuelve sólo los primeros n números
  }
  
  function requestFibonacci() {
    let input = prompt("Ingresa un número para generar la serie de Fibonacci:");
    let number = parseInt(input);
  
    while (!isNumber(number)) {
      input = prompt("Error: Ingresa un número válido mayor que 0:");
      number = parseInt(input);
    }
  
    const result = generateFibonacci(number);
    console.log(`Serie de Fibonacci para el número ${number}:`, result);
  }
  
  // Llamada a la función
  requestFibonacci();
  