-- CreateTable
CREATE TABLE "AttributesOnLocations" (
    "locationId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,

    CONSTRAINT "AttributesOnLocations_pkey" PRIMARY KEY ("locationId","attributeId")
);

-- AddForeignKey
ALTER TABLE "AttributesOnLocations" ADD CONSTRAINT "AttributesOnLocations_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttributesOnLocations" ADD CONSTRAINT "AttributesOnLocations_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
