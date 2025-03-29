-- CreateTable
CREATE TABLE "AttributeType" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttributeType_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Attribute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "typeName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttributeType_name_key" ON "AttributeType"("name");

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_typeName_fkey" FOREIGN KEY ("typeName") REFERENCES "AttributeType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;


-- Insert Attribute Types
INSERT INTO "AttributeType" ("name", "description", "createdAt", "updatedAt") VALUES
('placementType', 'The placement type attribute', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('practiceInterests', 'The practice interests attribute', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('species', 'The species attribute', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('corporateGroup', 'The corporate group attribute', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);