function calcularIdade() {
  var dia = parseInt(document.getElementById('dia').value);
  var mes = parseInt(document.getElementById('mes').value);
  var ano = parseInt(document.getElementById('ano').value);

  if (!dia || !ano || isNaN(dia) || isNaN(ano)) {
    document.getElementById('resultIdade').textContent = 'Preencha dia e ano.';
    return;
  }

  var hoje = new Date();
  var nascimento = new Date(ano, mes - 1, dia);

  if (nascimento > hoje) {
    document.getElementById('resultIdade').textContent = 'Data inválida.';
    return;
  }

  var idade = hoje.getFullYear() - nascimento.getFullYear();
  var m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < dia)) {
    idade--;
  }

  document.getElementById('resultIdade').textContent = 'Idade: ' + idade + ' anos';
}

function calcular() {
  var n1 = parseFloat(document.getElementById('num1').value);
  var n2 = parseFloat(document.getElementById('num2').value);
  var op = document.getElementById('operador').value;
  var res;

  if (op === '+') res = n1 + n2;
  else if (op === '-') res = n1 - n2;
  else if (op === '*') res = n1 * n2;
  else if (op === '/') {
    if (n2 === 0) {
      document.getElementById('resultCalc').textContent = 'Divisão por zero!';
      return;
    }
    res = n1 / n2;
  }

  document.getElementById('resultCalc').textContent = 'Resultado: ' + res;
}