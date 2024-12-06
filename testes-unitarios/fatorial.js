function fatorial(n) {
    if (n < 0)
        throw new Error("O número precisa ser positivo para funcionar");
    else if (n === 0 || n === 1)
        return 1;
    return n * fatorial(n - 1);
}
export default fatorial;
