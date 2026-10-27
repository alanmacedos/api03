// Desafio 03
// Estacionamento inteligente


// Um estacionamento cobra R$ 8 pela primeira hora e
// R$ 5 por cada hora adicional iniciada.
// O proprietário deseja um sistema capaz de
// calcular o valor devido por um motorista com base no tempo de permanência.
// Qualquer fração de hora adicional será cobrada como uma hora completa.
// Por exemplo, um veículo estacionado durante 2 horas e 15 minutos deverá pagar por 3 horas.

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'Minha API está funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});

app.post('/parking', (req, res) => {

    let { hours } = req.body ?? {};

    const initialHourValue = 8;

    if (typeof hours !== "number" || !Number.isFinite(hours)) {
        return res.status(400).json({
            erro: "O valor deve ser numérico, com no máximo 2 casas decimais."
        });
    }


})

function hoursToCharge(hours) {

    let remainingHours = hours;
    let hoursToCharge = 0;

    if (remainingHours - 1 <= 0) {

        return 
    }

    while (remainingHours > 0) {

        remainingHours -= 1;
        hoursToCharge += 1;
    }

    return hoursToCharge;
}

function charge(hoursToCharge) {

    return 5 * hoursToCharge;
}