-- CreateTable
CREATE TABLE "adotantes" (
    "idadotantes" TEXT NOT NULL,
    "nomeadotante" VARCHAR(100) NOT NULL,
    "emailadotante" VARCHAR(50) NOT NULL,
    "enderecoadotante" VARCHAR(100),
    "telefoneadotante" VARCHAR(14) NOT NULL,

    CONSTRAINT "adotantes_pkey" PRIMARY KEY ("idadotantes")
);

-- CreateTable
CREATE TABLE "pets" (
    "idpets" TEXT NOT NULL,
    "nomepets" VARCHAR(20) NOT NULL,
    "idadepets" VARCHAR(20) NOT NULL,
    "descricaopets" VARCHAR(150),
    "statuspets" VARCHAR(15) NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("idpets")
);
