from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        num1 = float(request.form['num1'])
        num2 = float(request.form['num2'])
        operacion = request.form['operacion']

        if operacion == 'sumar':
            resultado = num1 + num2
        elif operacion == 'restar':
            resultado = num1 - num2
        elif operacion == 'multiplicar':
            resultado = num1 * num2
        elif operacion == 'dividir':
            if num2 == 0:
                return render_template('error.html', error='No es posible dividir por cero')
            resultado = num1 / num2
        else:
            return render_template('error.html', error='Operación no válida')

        context = {
            "numero1" : num1,
            "numero2" : num2,
            "operacion" : operacion,
            "resultado" : resultado,
        }
        return render_template('resultado.html', **context)

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
