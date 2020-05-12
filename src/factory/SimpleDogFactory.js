// Factory: Fábrica de objetos.
// Função: Separar implementação da criação do objeto.
// -> Vantagem: Controlar a criação do objeto sem expor pra quem está consumindo o código.
// -> Alterar código internamente sem quebrar quem consome o código.
// -> Não expor coisas como construtor.
class Dog {
  constructor(breed){
    this.breed = breed;
  }
}

function createDog(breed) {
  return new Dog(breed);
}

module.exports = {
  createDog,
  Dog,
};
