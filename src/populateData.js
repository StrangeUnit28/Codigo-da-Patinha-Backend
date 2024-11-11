import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const populateData = async () => {
  const pets = [
    { nome: "Rex", especie: "Cachorro", idade: 3, data_nascimento: new Date("2021-03-15"), descricao: "Cachorro ativo e amigável", status: "disponível" },
    { nome: "Bella", especie: "Cachorro", idade: 2, data_nascimento: new Date("2022-06-10"), descricao: "Cachorro dócil e carinhoso", status: "disponível" },
    { nome: "Luna", especie: "Gato", idade: 4, data_nascimento: new Date("2020-12-05"), descricao: "Gato independente e esperto", status: "disponível" },
    { nome: "Max", especie: "Cachorro", idade: 5, data_nascimento: new Date("2019-03-20"), descricao: "Cachorro calmo e leal", status: "disponível" },
    { nome: "Simba", especie: "Gato", idade: 3, data_nascimento: new Date("2021-05-15"), descricao: "Gato brincalhão e afetuoso", status: "disponível" },
    { nome: "Fiona", especie: "Cachorro", idade: 6, data_nascimento: new Date("2018-09-10"), descricao: "Cachorro protetor e inteligente", status: "disponível" },
    { nome: "Mia", especie: "Gato", idade: 2, data_nascimento: new Date("2022-02-25"), descricao: "Gato sociável e carinhoso", status: "disponível" },
    { nome: "Thor", especie: "Cachorro", idade: 1, data_nascimento: new Date("2023-01-05"), descricao: "Cachorro ativo e energético", status: "disponível" },
    { nome: "Toby", especie: "Cachorro", idade: 4, data_nascimento: new Date("2020-08-30"), descricao: "Cachorro leal e brincalhão", status: "disponível" },
  ];

  const adotantes = [
    { nome_completo: "João Silva", email: "joao.silva@email.com", telefone: "123456789", endereco: "Rua das Flores, 123" },
    { nome_completo: "Maria Oliveira", email: "maria.oliveira@email.com", telefone: "987654321", endereco: "Rua das Palmeiras, 456" },
    { nome_completo: "Carlos Pereira", email: "carlos.pereira@email.com", telefone: "543216789", endereco: "Avenida Brasil, 789" },
    { nome_completo: "Ana Souza", email: "ana.souza@email.com", telefone: "112233445", endereco: "Travessa Central, 101" },
    { nome_completo: "Felipe Costa", email: "felipe.costa@email.com", telefone: "667788990", endereco: "Rua das Margaridas, 202" },
    { nome_completo: "Fernanda Lima", email: "fernanda.lima@email.com", telefone: "334455667", endereco: "Rua dos Cravos, 303" },
    { nome_completo: "Bruna Almeida", email: "bruna.almeida@email.com", telefone: "445566778", endereco: "Rua dos Jasmins, 404" },
    { nome_completo: "Rafael Mendes", email: "rafael.mendes@email.com", telefone: "556677889", endereco: "Avenida das Acácias, 505" },
    { nome_completo: "Juliana Costa", email: "juliana.costa@email.com", telefone: "667788990", endereco: "Rua das Orquídeas, 606" },
  ];

  const adocoes = pets.map((pet, index) => {
    return {
      pet_id: pet.id,
      adotante_id: adotantes[index].id,
    };
  });

  await Promise.all(
    pets.map(pet => prisma.pets.create({ data: pet })),
    adotantes.map(adotante => prisma.adotantes.create({ data: adotante })),
    adocoes.map(adocao => prisma.adocoes.create({ data: adocao }))
  );
};

populateData().catch(e => {
  console.error("Erro ao popular os dados:", e);
}).finally(async () => {
  await prisma.$disconnect();
});
