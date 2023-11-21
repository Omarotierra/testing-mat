export class Calculate {
  sumX(lista: number[]): number {
    var sum = 0;
    console.log(lista);
    for (let i = 0; i < lista.length; i++) {
      sum += lista[i];
    }

    return sum;
  }

  sumXX(lista: number[]): number {
    var sum = 0;

    for (let i = 0; i < lista.length; i++) {
      sum += lista[i] * lista[i];
    }

    return sum;
  }

  sumXY(listaX: number[], listaY: number[]): number {
    var sum = 0;

    for (let i = 0; i < listaX.length; i++) {
      sum += listaX[i] * listaY[i];
    }

    return sum;
  }

  calculateB1(
    sumXY: number,
    sumX: number,
    sumY: number,
    sumXX: number,
    n: number
  ): number {
    var b1 = 0;

    b1 = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);

    return b1;
  }

  calculateB0(sumX: number, sumY: number, b1: number, n: number): number {
    var b0 = 0;

    b0 = (sumY - b1 * sumX) / n;

    return b0;
  }

  calculateY(b0: number, b1: number, x: number): number {
    var y = 0;

    y = b0 + b1 * x;

    return y;
  }

  calculateMedia(lista: number[]): number {
    var media = 0;
    var sum = this.sumX(lista);

    media = sum / lista.length;

    return media;
  }

  calculateRR(r: number): number {
    var rr = 0;

    rr = r * r;

    return rr;
  }

  calculateR(listaX: number[], listaY: number[]): number {
    var r = 0;
    var sumX = this.sumX(listaX);
    var sumY = this.sumX(listaY);
    var sumXX = this.sumXX(listaX);
    var sumYY = this.sumXX(listaY);
    var sumXY = this.sumXY(listaX, listaY);
    var n = listaX.length;

    r =
      (n * sumXY - sumX * sumY) /
      Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY));

    return r;
  }

  simpson(
    x0: number,
    x1: number,
    num_segmento: number,
    error: number,
    f: (x: number) => number
  ): number {
    let inte = 0;
    let integralAnte = 0;

    do {
      integralAnte = inte;
      let h = (x1 - x0) / num_segmento;
      let sum = f(x0) + f(x1);

      for (let i = 1; i < num_segmento; i++) {
        const x = x0 + i * h;
        sum += i % 2 === 0 ? 2 * f(x) : 4 * f(x);
      }

      inte = (h / 3) * sum;
    } while (Math.abs(inte - integralAnte) > error);

    console.log(`p=${inte}`);
    return inte;
  }


  gamma(x: number): number {
    if (Number.isInteger(x)) {
      let result = 1;
      while (x > 1) {
        result *= x - 1;
        x--;
      }
      return result;
    } else {
      if (x <= 0) {
        throw new Error("La función gamma no está definida para números no positivos.");
      } else if (x === 0.5) {
        return Math.sqrt(Math.PI);
      } else {
        if (x < 0.5) {
          return Math.PI / (Math.sin(Math.PI * x) * this.gamma(1 - x));
        } else {
          x -= 1;
          const g = 7;
          const p = [
            0.99999999999980993, 676.5203681218851, -1259.1392167224028,
            771.32342877765313, -176.61502916214059, 12.507343278686905,
            -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
          ];
          let result = p[0];
          for (let i = 1; i < g + 2; i++) {
            result += p[i] / (x + i);
          }
          const t = x + g + 0.5;
          return (
            Math.sqrt(2 * Math.PI) *
            Math.pow(t, x + 0.5) *
            Math.exp(-t) *
            result
          );
        }
      }
    }
  }


    t(x: number, dof: number): number {
      // Verificar que los grados de libertad sean mayores que cero
      if (dof <= 0) {
        throw new Error("Los grados de libertad deben ser mayores que cero.");
      }
  
      // Calcular la función gamma de (degreesOfFreedom + 1) / 2
      const numerador = this.gamma((dof + 1) / 2);

      // Calcular el denominador de la distribución t
      const denominador = Math.sqrt(dof * Math.PI) * this.gamma((dof / 2));
  
      const multiplicacion = Math.pow(1 + (x * x / dof), -(dof + 1) / 2);

      // Calcular el valor de la distribución t
      const tDistribution = (numerador / denominador) * multiplicacion;
  
      return tDistribution;
    }
  
}
