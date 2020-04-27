const express = require("express");
const { body } = require("express-validator");
const calculator = require("./../controller/calculator.controller");

const router = express.Router();

router.post(
    '/sum', [
        body('paramone')
        .exists()
        .withMessage('El paramatro Uno es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro Uno debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro Uno debe ser entre 1-3 caracteres')
        .trim()
        .escape(),
        body('paramtwo')
        .exists()
        .withMessage('El paramatro Dos es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro Dos debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro Dos debe ser entre 1-3 caractes')
        .trim()
        .escape(),
        body('Operator')
        .exists()
        .withMessage('El paramatro Uno es requerido')
        .matches((/^[*]|^[-]|^[/]|^[+]/))
        .withMessage('El operator debe ser +,-,* ó /')
        .isLength({ min: 1, max: 1 })
        .withMessage('Operator debe ser de tamaño 1')
        .trim()
        .escape()
    ],
    calculator.sum

);



module.exports = router;