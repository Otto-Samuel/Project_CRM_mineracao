export function LimitadorTitulo(titulo) {
    if (titulo.length > 180) {
        return "Número de caracteres excede o limite";
    } else if (titulo.length <= 0) {
        return "Número de caracteres inválido";
    } else if (!titulo) {
        return "Caracteres inválidos";
    }
    return null; 
}

export function LimitadorDescricao(descricao) {
    if (descricao.length > 300) {
        return "Número de caracteres excede o limite";
    } else if (descricao.length <= 0) {
        return "Número de caracteres inválido";
    } else if (!descricao) {
        return "Caracteres inválidos";
    }
    return null; 
}

export function LimitadorQuantidade(Quantidade) {
    if (isNaN(Quantidade)) {
        return "Quantidade deve ser um número";
    } else if (Quantidade <= 0) {
        return "Número de itens inválido";
    } else if (Quantidade > 180) {
        return "Número de itens excede o limite";
    }
    return null; 
}

export function LimitadorPreco(preco) {
    if (isNaN(preco)) {
        return "Preço deve ser um número";
    } else if (preco <= 0) {
        return "Preço inválido";
    } else if (preco > 10000000) {
        return "Preço excede o limite";
    }
    return null; 
}
