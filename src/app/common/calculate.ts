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

    calculateB1(sumXY: number, sumX: number, sumY: number, sumXX: number, n: number): number {
        var b1 = 0;

        b1 = ((n * sumXY) - (sumX * sumY)) / ((n * sumXX) - (sumX * sumX));

        return b1;
    }

    calculateB0(sumX: number, sumY: number, b1: number, n: number): number {
        var b0 = 0;

        b0 = (sumY - (b1 * sumX)) / n;

        return b0;
    }

    calculateY(b0: number, b1: number, x: number): number {
        var y = 0;

        y = b0 + (b1 * x);

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

        r = ((n * sumXY) - (sumX * sumY)) / Math.sqrt(((n * sumXX) - (sumX * sumX)) * ((n * sumYY) - (sumY * sumY)));

        return r;
    }

    simpson(x0: number, x1: number, num_seg: number, error: number, f: (x: number) => number): number {
        // This is your Simpson's Rule integration function
        let integral = 0;
        let integralPrev = 0;

        do {
            integralPrev = integral;
            let h = (x1 - x0) / num_seg;
            let sum = f(x0) + f(x1);

            for (let i = 1; i < num_seg; i++) {
                const x = x0 + i * h;
                sum += i % 2 === 0 ? 2 * f(x) : 4 * f(x);
            }

            integral = (h / 3) * sum;
        } while (Math.abs(integral - integralPrev) > error);

        console.log(`p=${integral}`);
        return integral;
    }

    // Additional functions you mentioned
    '2x'(x: number): number {
        return 2 * x;
    }

    'x2'(x: number): number {
        return x * x;
    }

    '1_x'(x: number): number {
        return 1 / x;
    }

    t(x: number): number {
        // Define your 't' function here
        // Example: return Math.sin(x) + Math.cos(x);
        return 0; // Replace with your actual function
    }
}