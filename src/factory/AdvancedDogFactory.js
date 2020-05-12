// Factory: Fábrica de objetos.
// Função: Separar implementação da criação do objeto.
// -> Vantagem: Controlar a criação do objeto sem expor pra quem está consumindo o código.
// -> Alterar código internamente sem quebrar quem consome o código.
// -> Não expor coisas como construtor.
class Dog {
  constructor(breed) {
    this.breed = breed;
  }
}

class ChiwawaDog extends Dog {}

class BulldogDog extends Dog {}

function createDog(breed) {
  const supportedDogBreeds = {
    chiwawa: ChiwawaDog,
    bulldog: BulldogDog,
  };

  return new (supportedDogBreeds[breed] || Dog)();
}

module.exports = {
  createDog,
  Dog,
};
