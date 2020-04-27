const { validationResult } = require("express-validator");

const sumOperator = (param1, param2) => (+param1) + (+param2);
const multOperator = (param1, param2) => (+param1) * (+param2);
const restOperator = (param1, param2) => (+param1) - (+param2);
const divOperator = (param1, param2) => (+param1) / (+param2);


exports.sum = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    if (req.body.Operator == '+') {
        const sum = sumOperator(+req.body.paramone, +req.body.paramtwo);
        const params = {
            paramone: req.body.paramone,
            paramtwo: req.body.paramtwo,
            opertor: "Suma",
            result: sum
        }

        try {
            res.status(201).json({ params });
        } catch (err) {
            const error = new Error('Error');
            error.statusCode = 500;
            error.data = err;
            throw error;
        }
    } else if (req.body.Operator == '-') {


        const rest = restOperator(+req.body.paramone, +req.body.paramtwo);

        const params = {
            paramone: req.body.paramone,
            paramtwo: req.body.paramtwo,
            opertor: "Resta",
            result: rest
        }

        try {
            res.status(201).json({ params });
        } catch (err) {

            const error = new Error('Error');
            error.statusCode = 500;
            error.data = err;
            throw error;
        }

    } else if (req.body.Operator == '*') {


        const mult = multOperator(+req.body.paramone, +req.body.paramtwo);

        const params = {
            paramone: req.body.paramone,
            paramtwo: req.body.paramtwo,
            opertor: "Multiplicacion",
            result: mult
        }

        try {
            res.status(201).json({ params });
        } catch (err) {

            const error = new Error('Error');
            error.statusCode = 500;
            error.data = err;
            throw error;
        }



    }

    if (+req.body.paramtwo == 0) {
        const params = {
            error: 'El parametro 2 en la division no puede ser 0'
        }

        try {
            res.status(400).json({ params });
        } catch (err) {
            const error = new Error('Error');
            error.statusCode = 500;
            error.data = err;
            throw error;
        }

    } else {
        const div = divOperator(+req.body.paramone, +req.body.paramtwo);

        const params = {
            paramone: req.body.paramone,
            paramtwo: req.body.paramtwo,
            opertor: "Division",
            result: div
        }

        try {
            res.status(201).json({ params });
        } catch (err) {

            const error = new Error('Error');
            error.statusCode = 500;
            error.data = err;
            throw error;
        }
    }


}