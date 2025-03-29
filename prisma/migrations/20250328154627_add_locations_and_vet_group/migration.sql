-- CreateTable
CREATE TABLE "VeterinaryGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VeterinaryGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "veterinaryGroupId" INTEGER NOT NULL,
    "locationId" TEXT NOT NULL,
    "groupHq" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VeterinaryGroup_group_id_key" ON "VeterinaryGroup"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "Location_locationId_key" ON "Location"("locationId");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_veterinaryGroupId_fkey" FOREIGN KEY ("veterinaryGroupId") REFERENCES "VeterinaryGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
